// Although we can create a hello world in html and from javascript as well but in this case we want to create a hello world in React. So in react first i will make a Heading from createElement method of core react which eventually takes three parameter i.e tag, an object in which we can define all attributes and style etc and third is children. children can be anything in between text and some tag as well

const heading = React.createElement('h1', {}, "React is very easy")

// now i want to create a root where i want to render all my react elements.
// ok so we create root from React-DOM's createRoot function. i will grab that element using javascript dom code and pass that in createRoot()
// so using this method returns us a simple javascript object which have a lot of properties in itself and react render method will simply render this into simple html with attributes and styles as well
const root = ReactDOM.createRoot(document.getElementById('root'))
// and i will simply render this root into react's render method
root.render(heading)

// ok now it is printing react is very easy but what we can do further more that we can do nesting of these as well 
// in third parameter that is children we can again create an element using that parameter and that parameter is also accept array by using that we can make siblings children 

const parent = React.createElement('div', {}, React.createElement('h1', {}, "I am heading inside paret div"))

root.render(parent)

// ok one more thing we can do understand is if i am alreay using some elements or content already inside root element so that will be get replaced by react elements 

const parent2 = React.createElement('div', {}, [
    React.createElement('h1', {}, "we are siblings"),
    React.createElement('h1', {}, "we are siblings"),
])
root.render(parent2)

// we can dig down more as well, we can do nesting on many level we want in this structure or by simply making elements seperately and then injecting them as third parameter that is children

// but thats not the developer friendlly way. in dev friendlly way we must use JSX i.e javascript expressions that some people say that is html

// we can write this code in this way as well

const heading1 = React.createElement('h1', {className:"red"}, "we are siblings in parent3")

const heading2 = React.createElement('h1', null, "we are siblings in parent3")

const parent3 = React.createElement('div', null, [heading1, heading2])

root.render(parent3)

// in the second parameter object we can leave that as null or empty. or we can use this as setting attributes or style on elements as well 

// until now we are rendring in root element multiple times. we should not do that we always render that only once in our react web 

// react is so flexible that we can use react anywhere we want in our application suppose i want to use react in footer so i need to grab footer as root and then i can render in footer react elements and rest of my app can be build up from other tech stack like jquery or vanilla javascript

// and the order of files in html should be keep in my mind bcz that can mess up with the app and can throws errors as well
