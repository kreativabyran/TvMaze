#README

This app is made by Magnus Havbrandt at Kreativa Byrån AB. 
2021-11-01

## HOW TO BUILD
For a build to succeed you need to have Android Studio installed to run on Android and Xcode to run on iOS.
To build and run you need to follow these steps:
1. Run "yarn" in project folder
2. Step into ios-folder and run "pod install"
3. Run yarn ios in project folder
4. Run yarn android in project folder

## Changes
Here are some changes one could make:

1. See why the API only gives back 10 of each (maybe only for premium access).
2. Add endless scrolling to search results.
3. Add Webview - to show the show summary that comes in html in it's original format.
4. Add Authentication in clients/index (if you want to use TvMaze premium for example or connect to antoher API with Auth.)
5. Theme Context - to support dark and light mode, and to add own colors throughout the app.
6. Language support - i18n library to support different languages in the app.
7. Add a Favourites list.
8. Add more queries when showing the Show details. Cast and such could be added and shown.
9. Add Redux and Redux-Offline or react-native-offline to better keep track of offline/online connectivity.

