---
title: Working with Variables
sidebar_position: 3
---

# Working with Variables

Variables are a powerful feature in the HyperStudy platform that allow you to store, manipulate, and use data throughout your experiment. This guide explains how to effectively use variables to create dynamic and responsive experiments.

![Variables tab with predefined variables](/img/experimenters/experiment-variables.png)

## What are Variables?

Variables are named containers that store values which can change during an experiment. They allow you to:

- Track participant responses
- Control experiment flow
- Customize content based on previous interactions
- Store configuration settings
- Record timing and performance metrics
- Share information between states

![Variables Panel](/img/experimenters/experiment-design/variables-panel.png)
_The variables panel showing defined variables and their configuration_

## Defining Variables

Define your experiment's variables in the designer's **Variables** tab. What the tab shows depends on the experiment's runner. New experiments use the V2 runner; experiments created before November 2026 keep the runner they had, shown under **Runtime (advanced)** in the experiment's settings.

### On the V2 runner

The V2 Variables tab lists every variable the experiment defines, in four sections:

| Section | What it holds |
|---------|---------------|
| **Constants** | A fixed value every room starts with, such as an endowment or a condition label. |
| **Random variables** | Values drawn when a room starts, for example a jittered fixation duration. See [Randomizing Order and Durations](./randomization.md). |
| **Computed variables** | Values worked out from other variables while the room runs. |
| **Output variables** | Values set by components when a participant answers them. |

![The V2 Variables tab with two constants, a random variable used as a fixation duration, and the output variables section](/img/experimenters/experiment-design/v2-variables-tab.png)

Every variable shows where it is used, for example `Used: duration of "Fixation" · shown in "Intro" · read by total`, or **Not used yet**. Deleting a variable that something uses asks first.

Variables are part of the experiment itself, so duplicating, exporting and importing an experiment keeps them.

#### Constants

Click **Add constant**, then set its **Name**, **Type** and **Value**:

| Type | Example value | Notes |
|------|---------------|-------|
| **Number** | `10`, `-2.5` | |
| **Text** | `Player A`, `007` | Kept exactly as typed, even when it looks like a number. |
| **True / false** | `true` | Picked from a menu. |
| **List or object** | `[1, 2, 3]`, `{"low": 1, "high": 5}` | Written as JSON. |

Changing a constant's type keeps its value when it reads as the new type (the text `5` becomes the number `5`), and otherwise starts from that type's empty value.

#### Random variables

A random variable draws its values when the room starts, and everyone in the room shares them. Pick a distribution (**Uniform**, **Normal**, **Exponential** or **List of values**) and how often it is drawn (**New value for each state** or **One value per room**). The summary under it shows its average. [Randomizing Order and Durations](./randomization.md#random-durations-jittering-a-fixation) covers using one as a state's duration.

#### Computed variables

A computed variable is an expression over other variables, such as `received = investment * multiplier`, recomputed whenever the variables it reads change. The Variables tab lists them but can't edit them yet; they come from imported experiment files or the API. If an expression reads a name that no variable or component output defines, the tab warns about it.

#### Output variables

You don't define output variables here. A component sets one when you give it an **Output variable** in its settings, and the tab lists each one with the components that set it. A constant or random variable with the same name as an output variable is replaced by the component's value once the component is answered, and the tab warns about it.

#### Names

A name starts with a letter or underscore and continues with letters, digits and underscores, up to 64 characters. Two variables can't share a name, whatever their kinds. Names ending in `_version`, `_normalized` or `_percent` are reserved.

#### Edits that can't be saved

When an edit would make a variable invalid (text in a Number constant, invalid JSON, a name another variable has, or a minimum above the maximum), the designer doesn't save it. The edit stays in its field with the problem underneath, so you can correct it, or click **Discard change** to go back to the saved value. If a collaborator's change makes the edit valid (they rename the variable that had the name you wanted, say), the problem goes away and **Save change** saves it.

### On the legacy runner

The legacy Variables tab lists **Predefined Variables** in a table with their value and where they came from: **Manual Variables** you define, and **Component Variables** registered from the components that store data. Under the table, **Create Predefined Variable** takes a name and a value (`50`, `'Hello'`, `true`, or a JSON object).

Legacy variables are kept outside the experiment, so duplicating copies them but exporting does not. When you switch a legacy experiment to the V2 runner, its predefined variables are copied into the V2 Variables tab as constants, and the designer tells you if any couldn't be copied. An experiment with V2 variables can't be switched back to the legacy runner.

### Variable Naming Conventions

Use clear, descriptive names for your variables:

- Use camelCase (e.g., `responseTime`, `participantAge`)
- Be specific (e.g., `videoWatchDuration` rather than just `time`)
- Use prefixes for related variables (e.g., `surveyQ1`, `surveyQ2`)

## Using Variables

### In Text Content

You can insert variable values into text using curly braces with the variable name:

```
Hello, {participantName}! Your score is {score}.
```

This will replace the variable placeholders with their current values.

:::tip HTML Formatting
Text fields also support HTML formatting tags (`<b>`, `<i>`, `<u>`, etc.) which can be combined with variables:
```html
<b>{participantName}</b>, your score is <u>{score}</u> points!
```
See [Text Component - HTML Formatting](./components/text.md#using-html-formatting) for the full list of supported tags.
:::

#### Variable Validation

The platform automatically validates variable references as you type:

- **✓ Green checkmark**: All referenced variables exist
- **⚠ Orange warning**: One or more variables are missing

This real-time validation helps catch typos and missing variables before you run your experiment.

![Variable Validation](/img/experimenters/experiment-design/variable-validation.png)
_Validation feedback showing which variables exist and which are missing_

### In Component Properties

Variables can be used in many text fields throughout the platform. The system automatically validates variable references in:

**Component Configuration Fields:**
- **Text Display**: Text content field
- **VAS Rating**: Question/prompt text, min/max/initial values (supports formulas)
- **Multiple Choice**: Question/prompt text
- **Ranking**: Question/prompt text
- **Text Input**: Prompt text
- **Waiting Screen**: Message and ready message fields
- **Audio Recording**: Prompt text
- **Rapid Rate**: Prompt text

**Role-Specific Configuration:**
- **Waiting Messages**: When configuring role-specific waiting screens, the waiting message field supports variable syntax
- Any role-specific text content

For example, you can use variables to:
- Display participant names: `Welcome, {participantName}!`
- Show calculated values: `Your score is {score1 + score2}`
- Create dynamic prompts: `Rate the video you just watched (duration: {videoDuration})`
- Show role-specific information: `Player A invested {playerA_investment}`
- Set min/max values dynamically: `{baseValue * multiplier}`



## Modifying Variables

### Setting Variable Values

Variables can be updated in several ways:

1. **Component Outputs**: Many components automatically update variables with user input
2. **Direct Assignment**: Set variables directly in state actions
3. **Expressions**: Calculate new values based on formulas
4. **Event Handlers**: Update variables in response to events

### Using Expressions

You can use expressions to calculate variable values:

```
// Math operations
totalScore = questionScore + bonusPoints;

// String manipulation
fullName = firstName + " " + lastName;

// Working with arrays
selectedItems.push(newItem);

// Conditional assignment
status = age >= 18 ? "adult" : "minor";
```

The expression editor provides autocomplete and validation.

### Variable Initialization

Variables are initialized:
- When the experiment starts (for experiment-level variables)
- When a state is entered (for state-level variables)
- When a participant joins (for participant-level variables)

You can set initial values in the variable definition.

## Collecting Data with Variables

### Response Capture

Components can store user input in variables:

- **Rating Scales**: Store numeric ratings
- **Multiple Choice**: Store selected options
- **Text Input**: Store entered text
- **Media Components**: Store interaction metrics (e.g., time spent watching)

Configure the "Output Variable" property of components to capture responses.

### Timing Metrics

Track timing data with variables:

```
// When a state begins
stateStartTime = getCurrentTime();

// When a response is made
responseTime = getCurrentTime() - stateStartTime;
```

Use the timing functions provided by the platform.

### Aggregate Data

You can use variables to collect aggregate data:

```
// Increment a counter
correctAnswers = correctAnswers + 1;

// Add to a running total
totalScore = totalScore + questionScore;

// Track history in an array
responseHistory.push({
  question: currentQuestion,
  response: selectedAnswer,
  time: responseTime
});
```

This is useful for calculating overall performance.

## Advanced Variable Techniques

### Variable Transformations

Transform data between types when needed:

```
// Convert string to number
numericValue = parseInt(stringValue);

// Convert number to string
stringValue = numericValue.toString();

// Convert string to boolean
boolValue = (stringValue === "true");
```

These conversions can be done in expressions.

### Array Operations

Arrays are useful for collections of values:

```
// Access item by index
currentQuestion = questions[questionIndex];

// Add item to end
responseHistory.push(newResponse);

// Remove last item
lastItem = responseHistory.pop();

// Get array length
totalQuestions = questions.length;
```

Arrays are zero-indexed, so the first item is at position 0.

### Object Operations

Objects store structured data:

```
// Create an object
participantData = {
  id: participantId,
  age: participantAge,
  gender: participantGender
};

// Access properties
currentAge = participantData.age;

// Update properties
participantData.completionTime = getCurrentTime();
```

Objects are useful for grouping related data.

### Random Values

For values that everyone in a room must share, such as a jittered duration or a condition drawn for the room, use a [random variable](./randomization.md). The template functions `random()` and `sample()`, and stimulus mappings drawn per participant, draw separately in each participant's browser, so participants in the same room can get different values.

## Debugging Variables

### Variable Inspector

Use the Variable Inspector to debug your experiment:

1. Preview your experiment
2. Open the developer panel
3. Go to the "Variables" tab
4. See the current value of all variables in real-time


### Logging Values

Add logging to debug complex experiments:

```
console.log("Current question index:", questionIndex);
console.log("Participant response:", userResponse);
```

View the logs in the browser console during testing.

## Variable Reference Validation

The Experiment Designer automatically validates variable references in component text fields. When you type `{variableName}` in a text field:

- **Valid references** (variable exists) appear highlighted in green
- **Invalid references** (variable not defined) appear highlighted in red with a warning

This helps catch typos and missing variable definitions before running your experiment. Validation is debounced so it doesn't interfere with typing.

## Best Practices

1. **Plan Variables Ahead**: Design your variable structure before building
2. **Use Descriptive Names**: Choose names that clearly indicate the variable's purpose
3. **Document Variables**: Add descriptions explaining how each variable is used
4. **Initialize Properly**: Set appropriate initial values for all variables
5. **Check Types**: Ensure variables contain the expected data types
6. **Avoid Overuse**: Only create variables you actually need
7. **Group Related Variables**: Use prefixes or objects to group related data
8. **Test Edge Cases**: Verify behavior with extreme or unexpected values

## Next Steps

Now that you understand variables, explore these related topics:

- [Randomizing Order and Durations](./randomization.md)
- [Managing Participant Roles](./roles.md)
- [Conditional Flow Control](./experiment-states.md)
- [Data Collection](../../developers/data-api/data-collection-v2.md)