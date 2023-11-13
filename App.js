import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement = React ELement - JS Object => when we render this element to DOM then its become HTMLElement

// const heading = React.createElement("h1", {id:"heading"}, "Namaste React");
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)


// JSX makes our life easy , JSX is separate, React is separate
// JSX is the convention merge the JS and HTML

//JSX - is not HTML in JS
// JSX - its look like HTML or XML
// <h1>Namaste React using JSX</h1> <- this piece of code equivalent to line 6 -> React.createElement("h1", {id:"heading"}, "Namaste React");
// JSX (babel transpiled before below code to reacges the JS) - parcel - babel is traspiling the code, its JS compiler
// JSX is transpiled by babel to react.CreateElement -> now its coverted to - JS Object => when we render this element to DOM then its become HTMLElement
// for JSX if we need to add attribute we need to use CamelCase

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>
console.log(jsxHeading)

// React Functional component
// Functional component its a normal JS component which return JSX

// const HeadingComponent = () => {
//     return <h1 id="heading">Namaste React using Functional component</h1>
// }

const HeadingComponent = () => (
    <div>
        <h1>{jsxHeading}</h1>
        <h1 id="heading">Namaste React using Functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading)
root.render(<HeadingComponent/>)