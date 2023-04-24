// What is JSX
// JSX is a convention to write HTML in javascript but its not HTML its html alike syntax. Although JSX is not mandatory we can make html with React.createElement() it returns an object us then render html on page but it was not readable and so much messy that its make our code ugly and hard to read. so enginners came up with JSX which is easy in structuring HTML inside javascript and more efficient.

// Behind the scene
// Babel transpile our JSX code into AST which is computer readable format and then converts it into React.createElement() that returns us object and that get rendered as html element

// React.createElement vs JSX
// React.createElement takes three parameter returns object then that object gets convert into html element on the other side jsx code converts into AST then into React.createElement then it follows the same steps

// Babel and parcel role in JSX
// babel converts jsx into plain javascript then parcel takes that and do minification and so on

// components just nothing more than a function which takes some piece of code and render some component of our page in browser like header, footer etc
// components are simple fundamental blocks of react app that is reusable piece of code that represents a part of the user interface
// in react components can be either functional components or class based components