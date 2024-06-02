# Mini-Framework

[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/license/mit)

## Project Description

Mini-framework is a custom built framework that helps you create, nest elements, add attributes to them or create evens instead.

### Tech Stack:

- **Frontend**: Custom JS Framework

## Table of Contents

- [Audit](#audit)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Examples

### StoreItem

function stores saved state data in localStorage

Input: key(string), value(string)

Example:

```bash
StoreItem("Todo", "data") // storage data with key "Todo" and value of "data"
```

### GetItems

function retrieves saved state data from localStorage

Input: key(string)

Example:

```bash
GetItems("Todo")
```

### DeleteItem

function deletes saved state data from localStorage

Input: key(string), value(string)

Example:

```bash
StoreItem("Todo")
```

### ToggleItemBoolean

function deletes saved state data from localStorage

Input: key(string), value(string)

Example:

```bash
ToggleItemBoolean("Todo")
```

### StorageBooleanCount

function deletes saved state data from localStorage

Input: key(string), value(string)

Example:

```bash
StorageBooleanCount("Todo")
```

### Point

function returns a node that is selected by ID

Input: key(string),

Example:

```bash
Point("Todo") // point to a node with ID of "Todo"
```

### Render

function creates and appends a new node to selected parent node

Input: object

Example:

```bash
Render({
element: string, // node tag
styleClass: string, // node class
content: string, // node content
onClick: funcion, // on click function to activate
onKeyDown, function, // activate function on keyboard enter press
attri: array[string, string] // apply attribute to node
parent: string, parent node, // append node to this parent
attributes: object, // append multiple attributes to node
})
```

### Route

function creates and appends a new node to selected parent node

Input: object

Example:

```bash
Render({
element: "string",
styleClass: "string",
content: "string",
onClick: funcion,
onKeyDown, function,
attri: array[string, string]
parent: string, parent node,
attributes: object,
})
```

#### Prerequisites

- Node.js and npm installed

## Audit

To audit the program, follow the steps [here](https://github.com/01-edu/public/tree/master/subjects/mini-framework/audit).

## Contributing

We welcome contributions! Please contact one of the authors in discord if you would like to contribute to future projects.

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for details.

## Contact

For any questions or suggestions, feel free to contact us directly at `Kood / Jõhvi Discord`.

_Authors: [Jaanus Saar](https://01.kood.tech/git/jsaar), [Ivar Mihhailov](https://01.kood.tech/git/imihhail), [Oliver Vilu](https://01.kood.tech/git/ovilu)_
