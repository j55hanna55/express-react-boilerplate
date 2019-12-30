# Jakoo App - React Native app

Jakoo is a React Native iOS app where the user will access four social medias in one location. The four social media in this app are:
```1. Facebook```
```2. Instagram```
```3. LinkedIn```
```4. Twitter```

## Table of Content
* [Getting Started](#getting-started)
* [Publishing to Expo's React Native Community](#publishing-to-expo's-react-native-community)
* [Backend Configuration](#backend-configuration)
* [Troubleshooting](#troubleshooting)


## Getting Started

First run ```yarn install or npm install``` to install all of the dependencies listed within yarn.lock or package.json in the local node_modules folder. 

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

Open the terminal and go to ```client-rn```. Then run script:```npm start or yarn start```

This will run your app in development mode.

Open it in the Expo app on your phone to view it by downloading the Expo app and use the QR Code or click on ```Run on iOS simulator```. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the --reset-cache flag to the start script:


## Backend Configuration

All of the backend apis are hosted at this url: ```https://jakoobackend.herokuapp.com/```

If you want to deploy your own backend, you will have to run ```https://localhost: 3001``` on your browser. 


## Troubleshooting

### iOS Simulator won't open
If you're on a Mac, there are a few errors that users sometimes see when attempting to npm run ios:

"non-zero exit code: 107"
"You may need to install Xcode" but it is already installed
and others
There are a few steps you may want to take to troubleshoot these kinds of errors:

Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
Open Xcode's Preferences, the Locations tab, and make sure that the Command Line Tools menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run npm/yarn run ios after doing so.
If that doesn't work, open the Simulator, and under the app menu select Reset Contents and Settings.... After that has finished, quit the Simulator, and re-run npm/yarn run ios.

### QR Code does not scan
If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may not have enough contrast for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.





