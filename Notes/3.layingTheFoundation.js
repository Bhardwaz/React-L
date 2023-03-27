import React from "react"
import ReactDOM  from "react-dom/client"
// we can change scripts into package.json file. we were writting npx parcel build index.html instead of this we can write npm start by just simply put value into start key inside scripts of package.json -- "start":"parcel build index.html"
// Laying the Foundation
const heading = React.createElement('h1', {id: "heading"}, 'Namsate React 🚀') // This will create an object when we render this onto the dom it becomes html
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'))

// this will replace everything that present in root. it is good to keep written not rendered into root element

// Initially this was the core react we needed to create element like this in react but it was not developer friendlly and engineers needed to come with some easy and realiable way so to overcome this they come up with JSX

// Most of the developers think that JSX and React is same thing but no JSX is different thing and react is different. JSX is html alike syntax but not html. There are fundamental changes between these.
// i can make all the big applications without JSX also but JSX makes our life easy
// JSX is just a convention to merge html and javascript both things up
const jsxHeading = <h1 id="headingjsx">Namsate React Using JSX 🚀</h1> 
console.log(jsxHeading); // this is also an object -- heading and jsxHeading are the same object -- in the core of react we create element using createElement -- but this is not readable and with jsx we write jsx but jsx is differenct from react 
root.render(jsxHeading)
// most of the developers think we have written html inside javascript but no thats not accurate this is proper valid JSX not html 
// this is not html inside javascript
// jsx is html alike syntax its not html not javascript
// jsx - HTML like or XML alike syntax

// heading === jsxHeading -- but JSX is more simpler, easy and clean

// js engine only understands javascript or ecmascript but js engine does not understand jsx (syntax error it will give) its not the pure the javascript. js engine cant able to read this code. Parcel is doing the things behind the scenes.  
// it is transpiled before it goes to js engine 

// JSX (Transpiled before it reaches the js engine) // transpiled means that it converted into that code that engine can understand

// Transpiling is done by parcel - Parcel is like manager it gives this responsiblity to Babel
// Babel is a javascript package. parcel installs babel
// Babel is not developed by facebook engineers
// Babel converts jsx into React.createElement() (object) behind the scenes then it renders into Html element

// React.createElement() => React.createElement() (object) => converted to html element

// JSX => React.createElemet() => React.Element-JS Object => converted to Html element(render)

// Babel is doing this all behind the scenes

// when some old browsers do not understand the ES6 code babel converts that code into that old code that they old browsers can understand

// Read the docs of babel. parcel is manager of babel

// we follow camelcases in attributes

// in multiple lines jsx code we need to wrap jsx into () brackets so that babel can know from where jsx is started and where it is ending

// React Element
const jsx = (
    <>
    <h1>This is Heading</h1>
    </>
)
// These brackets tell babel about jsx from where it start and ends

// React Component -- Class based and functional components

// Name function component with upperCase letter. with this convention react understands that its a Component

// React Components
const Functionalcomponent = () => (
   <h1>This is Functionalcomponent in React</h1>
)
// a function which is returning some piece of jsx is a functional components

// we need to wrap react component while rendering and no ned to render react element

root.render(<Functionalcomponent/>)

// babel understand with this angular bracket that there must be an functional component

// functional components inside functional componet make Component Composition

const Jsxx = () =>  (
    <>
    <h1>This is Heading</h1>
    </>
)
const number = 1000
const Functionalcomponents = () => (
    <div>
    <Jsxx/>
    <h1>{number}</h1> 
    {console.log("inside jsx")}
    <h1>This is Functionalcomponent in React</h1>
    </div>
)
root.render(<Functionalcomponents/>)

// This is Functional Composition

// inside any functional component we can write javascript code using curly braces

// using braces we can write js inside JSX

// we can use react element inside react component using curly braces

// this all is done by Babel

// If suppose i am using an API and that API is sending some miliicious data so that attacker API can execute any kind of javascript on user laptop i.e can read cookies, passwords etc. but JSX takes care of that bcz before using that API it sanitizes that data coming from API only then it uses so it takes care of that as well

// we can write like this <Title /> and <Title> </Title>

// {Title()}
// <Title />
// <Title></Title> // These all three are same

// JSX can only have single parent

// we can use React Fragment to parse multiple element using JSX

// {/* <React.Fragment>

// </React.Fragment> */} it behaves like an empty tag

// but this was making code looks uglier then we came up with empty tag shorthand of React.Fragment 
/* <>
   </> */

// JSX is making code readable
