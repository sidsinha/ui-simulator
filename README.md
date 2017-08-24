------------------------------------------------
Name: UI Simulator - Distributed Systems
Version: 1.0
Author: Siddharth Sinha [sid.sinhaa@gmail.com]
------------------------------------------------

## About

This application is a simulation demo of Distributed Systems UI, to give a near-time experience of how to manage data center applications. The UI aims to demonstrate:
 * Ability to create new servers and destroy existing servers.
 * Start and stop applications on the servers, with maximum of 2 applications running on a single server.

## How do I use it?

Open the file index.html in your favourite browser and simulate!!!

## Dev Setup Instructions

If you are interested in adding new features:

#### Pre-requisite
The application needs node to be installed.

* [Node 5.4.1](https://nodejs.org/en/blog/release/v5.4.1/) including
  [NPM](https://npmjs.org/)

##### 1. Install all dependencies (optional for production but mandatory if you add new modules/features)

  ```
  npm install
  ```

##### 2. Make changes to html and js files and view it by opening index.html.
  
##### 3. If you add a new module / library, run the following command from root directory.

  ```
  webpack -w ./entry.js ./bundle.js
  ```

## External libraries used

##### 1. Angular JS (version=1.6.2) (A Frontend Framework - provides environment which is extraordinarily expressive, readable, and quick to develop)
##### 2. Angular Moment (version=^1.0.1) (A AngularJS Dependency Module - for showing "timeago" functionality)
##### 3. Webpack (version=^1.9.0) (A Build Tool for combining all imported scripts to one "bundle.js" file)

## What can you expect next?

If interested, feel free to checkout the next version of the simulation UI and expect following additions:
* Ability to attach properties with servers and apps.
* Overlay options apps [delete, start, stop].
* Edit names for servers and apps.
* Animations around creating / destroying servers and starting / stopping an app.


![ScreenShot](https://raw.githubusercontent.com/sidsinha/ui-simulator/master/screenshot.png)