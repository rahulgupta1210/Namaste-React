import React from "react";
import ReactDOM from "react-dom/client";

//react.createElemt ->object - after rendering it is html
const heading = React.createElement(
    "h1",
    {id:'heading'},
    "Render hi"
);

const elem = <span> React Element</span>

const title = (
    <h1>this is the title 
        {elem}
    </h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
console.log(heading)

//jsx-javascript syntax to create react element

const jsxheading =<h1>This is a valid JSX</h1>

console.log(jsxheading)


const TitleComponent =()=>(
    <h1 className="head">
        This is a valid JSX from heading 1
    </h1>
)

//React functional Compnent-a function which return a jsx(return react elemnt )
//if malicias attack cross site scripting-jsx will sanitize it automatically

const data = 122//api.getData();
const number = 1000;
const HeadingComponent =()=>(
    <div id="container">
        <h2>{number+50}</h2>
        {data}
        {console.log('this is hjhjhjh')}
        <TitleComponent/>
       

        <h1>This is a valid JSX from heading 1</h1>;
    </div>
)

const HeadingComponent1 =()=> <h1>valid rect function one liner</h1>

const HeadingComponent2 =()=> (
<h1>valid rect function one liner</h1>
);


const fn =()=>true;

root.render(<HeadingComponent />)
