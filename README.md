# Energy Explorer

A front end for interacting with the [Open Energy Engine](https://github.com/StornWhite/open-energy-engine).

## Setup

Installing the application requires Node.js version 14. We strongly recommend using a Node version
manager like [nvm](https://github.com/nvm-sh/nvm) or [n](https://github.com/tj/n) to install Node.js
and npm. Instructions for doing so can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm).

Clone the repository and install dependencies:

```bash
git clone https://github.com/StornWhite/energy-explorer
cd energy-explorer
npm install
```

You can confirm if the installation worked successfully by running `npm start`. This will launch the
WebPack server and serve the NavigaDER front end (by default on port 3000). If you encounter an
error, please confirm that your Node version is correct and that there were no warnings/errors in
the install process.

## Deployment Script

There is a deploy.sh script in the /scripts directory will automatically build the application and
deploy it to Amazon Web Services.  Because the application is in pre-production, there is only one
environment available on AWS.

You will need the AWS CLI, which entails [installing](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
the CLI, and configuring the CLI with `aws configure` command, after obtaining appropriate AWS user credentials.

Once set up with the CLI, you can deploy by calling the script:

```bash
./scripts/deploy.sh
```

The deployed application is available online at [http://energy-explorer.open-energy-engine.org](https://energy-explorer.open-energy-engine.org)

## Other Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
Create React App provides the following scripts from the project directory: In the project directory:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
