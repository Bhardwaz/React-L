// what is parcel 
// parcel is a bundler that bundled or compressed our code and help you to pack the assest of our web application(code, images, packages etc) into bundles so that the application can be served easily 
// it requires zero configuration
// DEV Server 
// Hot reloading 
// Lazy Mode
// Caching
// HTTPS
// API Proxy
// File Watcher
// Auto Install
// Code Splitting(Zero Configuration code)
// Diagnostics (Beautiful Error Message)
// Tree Shaking (Scope Hoisting)
// Shared Bundles
// Minification

// 1 Diagnostics : Parcel has a amazing feature that shows error so beautifully on window. it exact tells which line has error and why the error has occurred.

// 2. Caching -- Parcel uses cahching for faster build. when we first build our project parcel makes cache files folder of all code and then we again build our code with changes it only takes changes not entire code with this it builds faster before then

// 3 Tree Shaking -- This algorithms neglect all unnecessary code that is not in use.

// Auto Install --> if we have any dependencies in package.json file and that is not downloaded or got removed then parcel itself download those dependencies on build

// Historically, javascript bundlers have worked by wrapping each module in a function which ensure that each module has seprate isolated scope and side effects run at same time but it was very expensive in terms of download size and runtime performance  

// .cache folder is for internal parcel caching mechanism
// and much more interesting is dist folder that contains output file

// NPM
//NPM is huge repo that keeps and manages packages of javascript run time enviroment node js

// NPX --> NPX is just a node package executor that execute packages

// Differences b/w dependencies and DEV dependencies
// "dependencies" : Packages required by your application in production. Dependencies that your project needs to run, like a library that provides functions that you call from your code.

//"devDependencies" : Packages that are only needed for local development and testing. devDependencies
// Dependencies you only need during development or releasing, like compilers that take your code and compile it into javascript, test frameworks or documentation generators.


// HOT MODULE REPLACEMENT(HMR) :--