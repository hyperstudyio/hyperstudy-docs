import {useEffect, useRef} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Ported from the hero visual on hyperstudy.io (frontend/src/routes/landing.svelte).
// Nodes float via CSS keyframes; connection lines are re-measured each frame
// so they stay attached to the moving node centers.

// [source, target] node indices, matching the HyperStudy logo structure
const CONNECTIONS: Array<{pair: [number, number]; thick: boolean}> = [
  {pair: [3, 2], thick: true}, // top right to center
  {pair: [2, 4], thick: true}, // center to right middle
  {pair: [4, 5], thick: true}, // right middle to bottom right
  {pair: [2, 1], thick: true}, // center to bottom left
  {pair: [0, 2], thick: false}, // leftmost to center
  {pair: [0, 1], thick: false}, // leftmost to bottom left
];

const NODE_CLASSES = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6'];

export default function LogoGraph(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const lineRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const updateConnections = () => {
      const containerRect = container.getBoundingClientRect();
      CONNECTIONS.forEach(({pair: [s, t]}, i) => {
        const line = lineRefs.current[i];
        const source = nodeRefs.current[s];
        const target = nodeRefs.current[t];
        if (!line || !source || !target) return;

        const a = source.getBoundingClientRect();
        const b = target.getBoundingClientRect();
        const sx = a.left + a.width / 2;
        const sy = a.top + a.height / 2;
        const dx = b.left + b.width / 2 - sx;
        const dy = b.top + b.height / 2 - sy;

        line.style.width = `${Math.hypot(dx, dy)}px`;
        line.style.left = `${sx - containerRect.left}px`;
        line.style.top = `${sy - containerRect.top}px`;
        line.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
      });
    };

    // With reduced motion the nodes are static: draw the lines once.
    updateConnections();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let frame = requestAnimationFrame(function tick() {
      updateConnections();
      frame = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.graph} ref={containerRef}>
        {NODE_CLASSES.map((cls, i) => (
          <div
            key={cls}
            className={clsx(styles.node, styles[cls])}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
          />
        ))}
        {CONNECTIONS.map(({thick}, i) => (
          <div
            key={i}
            className={clsx(styles.connection, thick ? styles.thick : styles.thin)}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
}
