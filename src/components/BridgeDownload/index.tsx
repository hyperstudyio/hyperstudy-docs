import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const GITHUB_API_URL =
  'https://api.github.com/repos/hyperstudyio/hyperstudy-bridge/releases/latest';
const RELEASES_PAGE =
  'https://github.com/hyperstudyio/hyperstudy-bridge/releases/latest';
const CACHE_KEY = 'bridge-release-cache';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

interface PlatformInfo {
  key: string;
  label: string;
  suffix: string;
  extension: string;
}

const PLATFORMS: PlatformInfo[] = [
  {
    key: 'mac-arm',
    label: 'macOS (Apple Silicon)',
    suffix: 'aarch64-apple-darwin',
    extension: '.dmg',
  },
  {
    key: 'mac-intel',
    label: 'macOS (Intel)',
    suffix: 'x86_64-apple-darwin',
    extension: '.dmg',
  },
  {
    key: 'windows',
    label: 'Windows',
    suffix: 'x86_64-windows',
    extension: '.msi',
  },
  {
    key: 'linux',
    label: 'Linux',
    suffix: 'x86_64-linux',
    extension: '.AppImage',
  },
];

interface AssetInfo {
  platform: PlatformInfo;
  url: string;
  size: number;
  name: string;
}

interface ReleaseData {
  version: string;
  assets: AssetInfo[];
}

function detectPlatform(): string {
  if (typeof navigator === 'undefined') return 'unknown';
  const ua = navigator.userAgent;
  if (ua.includes('Mac')) return 'mac-arm'; // Default to Apple Silicon
  if (ua.includes('Win')) return 'windows';
  if (ua.includes('Linux') && !ua.includes('Android')) return 'linux';
  return 'unknown';
}

function formatSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

function getCachedRelease(): ReleaseData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL_MS) {
      // Don't remove — the 304 branch needs to re-read and refresh the TTL
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function setCachedRelease(data: ReleaseData): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, timestamp: Date.now() }),
    );
  } catch {
    // sessionStorage may be full or unavailable
  }
}

function parseRelease(json: any): ReleaseData | null {
  if (!json?.tag_name || !Array.isArray(json.assets)) return null;

  const assets: AssetInfo[] = [];
  for (const platform of PLATFORMS) {
    const match = json.assets.find(
      (a: any) =>
        a.name?.includes(platform.suffix) &&
        a.name?.endsWith(platform.extension),
    );
    if (match) {
      assets.push({
        platform,
        url: match.browser_download_url,
        size: match.size,
        name: match.name,
      });
    }
  }

  return { version: json.tag_name, assets };
}

export default function BridgeDownload(): JSX.Element {
  const [release, setRelease] = useState<ReleaseData | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [detectedPlatform, setDetectedPlatform] = useState('unknown');

  useEffect(() => {
    setDetectedPlatform(detectPlatform());

    const cached = getCachedRelease();
    if (cached) {
      setRelease(cached);
      setLoading(false);
      return;
    }

    async function fetchRelease() {
      const headers: Record<string, string> = {
        Accept: 'application/vnd.github.v3+json',
      };
      if (typeof window !== 'undefined') {
        const etag = sessionStorage.getItem(CACHE_KEY + '-etag');
        if (etag) headers['If-None-Match'] = etag;
      }

      const res = await fetch(GITHUB_API_URL, { headers });

      if (res.status === 304) {
        // Not modified — re-read expired cache and refresh its TTL
        const raw = sessionStorage.getItem(CACHE_KEY);
        if (raw) {
          const { data } = JSON.parse(raw);
          setCachedRelease(data);
          return data as ReleaseData;
        }
        // ETag existed but cache was cleared — fall through to error
        throw new Error('Cache missing after 304');
      }

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const etag = res.headers.get('ETag');
      if (etag && typeof window !== 'undefined') {
        sessionStorage.setItem(CACHE_KEY + '-etag', etag);
      }

      const json = await res.json();
      const data = parseRelease(json);
      if (!data) throw new Error('Invalid release data');
      setCachedRelease(data);
      return data;
    }

    fetchRelease()
      .then((data) => {
        setRelease(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>Loading latest release info...</div>
    );
  }

  if (error || !release) {
    return (
      <div className={styles.fallback}>
        <p>
          Download the latest release for your platform from GitHub:
        </p>
        <a
          href={RELEASES_PAGE}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fallbackLink}
        >
          View Releases on GitHub
        </a>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span className={styles.versionBadge}>Latest: {release.version}</span>
      <div className={styles.grid}>
        {release.assets.map((asset) => {
          const isRecommended = asset.platform.key === detectedPlatform;
          return (
            <a
              key={asset.platform.key}
              href={asset.url}
              className={`${styles.card} ${isRecommended ? styles.recommended : ''}`}
              aria-label={`Download HyperStudy Bridge for ${asset.platform.label}`}
            >
              {isRecommended && (
                <span className={styles.recommendedLabel}>
                  Recommended for you
                </span>
              )}
              <span className={styles.platformName}>
                {asset.platform.label}
              </span>
              <span className={styles.fileInfo}>
                {asset.platform.extension.replace('.', '').toUpperCase()}
                {' · '}
                {formatSize(asset.size)}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
