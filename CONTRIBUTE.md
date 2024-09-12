# Contributing to Zesky CLI

Thank you for considering contributing to Zesky CLI! We appreciate your efforts to improve the project. Below are the guidelines for contributing.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Feature Requests](#feature-requests)
  - [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Commit Guidelines](#commit-guidelines)
- [License](#license)

## Code of Conduct

Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) to ensure a positive experience for everyone involved.

## How to Contribute

### Reporting Bugs
If you find a bug, please report it by following these steps:
1. **Search for existing issues** to avoid duplication.
2. If the issue doesn't exist, [open a new issue](https://github.com/rijvi-mahmud/zesky-cli/issues/new).
3. Provide detailed information, including:
   - Steps to reproduce the bug
   - Expected behavior
   - Actual behavior
   - Environment details (Node.js version, operating system, etc.)

### Feature Requests
We welcome new feature ideas! To suggest one:
1. Check if the feature already exists or is in progress by reviewing the [open issues](https://github.com/rijvi-mahmud/zesky-cli/issues).
2. Open a [new feature request](https://github.com/rijvi-mahmud/zesky-cli/issues/new?labels=feature-request) and clearly describe:
   - The problem or use case the feature would solve
   - How the feature should work
   - Any alternatives you’ve considered

### Pull Requests
We encourage contributions via pull requests (PRs). To submit a PR:
1. Fork the repository.
2. Create a new branch based on the `main` branch (`git checkout -b feature-name`).
3. Make your changes, ensuring that the code follows our [style guide](#commit-guidelines).
4. Test your changes thoroughly.
5. Push your changes to your fork and [open a pull request](https://github.com/rijvi-mahmud/zesky-cli/compare).

Please include a detailed description of your changes and the problem you are solving in the PR.


## Run Locally

Clone the project

```bash
  https://github.com/rijvi-mahmud/zesky-cli
```

Go to the project directory

```bash
  cd zesky-cli
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
Linking globally 
```bash
  npm run link-cli
```

if you run the linking script then you will be able to run ```zesky-cli``` command direct on your terminal

```bash
  zesky-cli
```

Feel free to reach out if you face any issues during setup.

## Commit Guidelines

- Use descriptive commit messages. Follow the format:
  - `feat`: for new features
  - `fix`: for bug fixes
  - `docs`: for documentation changes
  - `refactor`: for code refactoring
  - `test`: for adding or modifying tests
  - `chore`: for miscellaneous tasks like tooling updates