// What is difference between Git and Github

// Git developers themselves perform a command-line tool where code changes like commit and merge within the Git tool on their own local devices. By contrast, GitHub provides its cloud-based graphical interface where these tasks are performed. The interface also offers developers access control, collaboration features, and various task-management tools.

// When it comes to commands, Git focuses exclusively on SCM tasks like push and pull, commit, reset, fetch, and merge. GitHub, meanwhile, serves as a host for Git repository teams to store their code in a centralized location. While Git is a tool that’s used to manage multiple versions of source code edits that are then transferred to files in a Git repository, GitHub serves as a location for uploading copies of a Git repository.

// In a sense, then, there’s no comparison when it comes to Git vs. GitHub as far as their function. They complement rather than compete with each other in this space.

// we need to bundeled or compress up the code and optimize our app 

// a lot of engineering go up behind the scene to take app on large scale basis

// react can do eveything itself. A lot of developers think that react is making our app fase but thats not the case react solely does not do that with react there a lot of packages which comes in play

// NPM -- Node Package manager this is not its full form 
// it is a standard repo for all the packages

// package.json is a configuration for NPM

// package.json takes care of all the version and dependecies of that   

// most important package in our project is a bundler i.e parcel, webpack etc. it packages our app so that we can ship our app to production

// npm install -D parcel // there are two types of dependecies that we can install i.e DEV dependencies and normal dependencies 

// Dev dependencies generally requires in our development phase 

// Read more about it Dev dependencies vs normal dependencies


// -D is a flag that tells it is dev dependencies 

// ^ this is caret sign -- it will automatically install any minor upgrade of package and ~ install major upgrade of that app

// when we put ~ a whole of things can break down in our app bcz that is major upgrade of that package. so it is sensible to put only caret and install minor upgrade only . Putting nothing will never install any upgrade

// read more about ^ and ~ 


// what is package-lock.json and package.json. difference about these 

// our project has dependencies parcel and parcel can have its dependencies and those dependencies can have their dependencies. these dependencies are called transitive dependencies

// parcel is beast but babel is noneless

// in our project each and every dependencies have its own package.json and package-lock.json
// these dependencies becomes like a Tree

// we should never upload node modules or anything we can create again on github bcz of package.json and package-lock.json

// .gitignore file ignore all files that we mention in it uploading on github

// we always need to put package.json and package-lock.json on github

