import React from "react"
import ReactDOM from 'react-dom/client'

// Creating a div element with inside three header
const header = React.createElement('div', {className:"title"}, 
[React.createElement('h1', {key:"1"}, 'I am H1'),
 React.createElement('h2', {key:"2"}, 'I am h2'),
 React.createElement('h3', {key:"3"}, "I am h3")
]
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(header)

// React element returning jsx code -- it will transpile by babel into React.createElement that return an object then get parse as Html element on web page
// const jsxElem = (
//     <div>
//         <h1> I am Same element with jsx</h1>
//         <h2> I am also same h2 with jsx </h2>
//         <h2> I am also same h3 with jsx </h2>
//     </div>
// )
// root.render(jsxElem)

// React functional component
// const FuncComponent = () => (
//          <div>
//          {jsxElem}
//          <h1> I am Same element with Functional Component</h1>
//          <h2> I am also same h2 with Functional Component </h2>
//          <h2> I am also same h3 with Functional Component </h2>
//          </div> )

// root.render(<FuncComponent />)