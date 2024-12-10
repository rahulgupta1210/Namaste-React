import React from "react";
import ReactDOM from "react-dom/client";

//react.createElemt ->object - after rendering it is html
const heading = React.createElement(
    "h1",
    {id:'heading'},
    "Render hi"
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
console.log(heading)

//jsx-javascript syntax to create react element

const jsxheading =<h1>This is a valid JSX</h1>

console.log(jsxheading)