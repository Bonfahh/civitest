# Instructions

# Backend:

The backend of this exercise is made in NodeJS, it uses a simple array containing initial data to be shown to the user. It has 3 endpoints:
('messages' GET, to get all messages), ('messages' PUT to read a message), ('messages' POST to add a new message (Not used in the APP)).

To run it just follow the steps:

Open cmd in civitest/backend and type: yarn install/npm install and yarn dev (It will run the server in port :3333)

# Mobile:

The mobile part of this exercise is made by two screens, the first is where all messages returned from backend will appear and the second is where the details of the choosen message will be shown.
When you click on a message it will be marked as read in the api, but for the purpose to test the refresh button it will only show as read in the first screen when the refresh icon is pressed.

To run the project follow the steps:

Your development environment should be ready to run the app in your computer, see: https://reactnative.dev/docs/0.60/getting-started

Open cmd in civitest/mobile and type: yarn install/npm install.
If you are on android you can run it with react-native run-android.
If you are on iOS you go to civitest/mobile/ios type: pod install and then return to civitest/mobile and type react-native run-ios
