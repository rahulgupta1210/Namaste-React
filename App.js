import React from "react";
//import ReactDOM  from "react-dom";
import ReactDOM from "react-dom/client"

/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
</div> */

// const parent = React.createElement(
//     'div',
//     {id:'parent'},
//     React.createElement(
//         'div',
//         {id:'child'},
//         React.createElement('h1',{},'i am a child h1')
//     )
// )

const parent = React.createElement(
    'div',
    {id:'parent'},
    React.createElement(
        'div',
        {id:'child'},
        [React.createElement('h1',{},'i am a child h1'),React.createElement('h2',{},'i am a child h2')]
    )
)

console.log(parent);

//Recat element create an object


 const root = ReactDOM.createRoot(document.getElementById('root'));
 console.log('root',root)

 root.render(parent);

 //root.render will replace everything inside root element









// const heading =  React.createElement("h1",
//     {id:'heading'},
//     "hellow world from react"
// );
//     //{} here we can give attribute to the element
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

//render = converting object into an elemnet and updating in DOM