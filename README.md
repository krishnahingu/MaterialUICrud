
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

- [Node.js and NPM](https://nodejs.org/en/download/)
  - Minimum Node.js version required for this project: `^10.13.0 || >=12.0.0`
  - It is recommended to install NVM to handle multiple versions of Node.js on your device:

  ```bash
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  ```

  ```bash
  nvm install 12
  ```

## Getting Started

First, install the project dependencies:

```bash
npm install
```

Next, retrieve the needed ENV files for running the project from a team member:

```bash
1. .env
2. .env.development
3. .env.staging
4. .env.production
```

## Running The Project

To run the project locally while connected to the local backend server, run:

```bash
npm start
```

To run the project locally while connected to the DIT environment backend server, run:

```bash
npm run start
```
