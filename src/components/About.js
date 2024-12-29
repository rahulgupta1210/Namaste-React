import User from "./User";
import UserClass from "./UserClass";
import React from 'react';


class About extends React.Component {
constructor(props) {
        super(props);
        console.log('parent constructor');
}

componentDidMount() {
   
    console.log("parent componentDidMount");
}

    render() {
        console.log('parent render');
        return (
            <div>
                <h1>About</h1>
                <h2>This is about Page</h2>
                <User name={"rahul gupta111-function component"} />
                <UserClass name={"first from class component"} location={"Bengaluru"} />
                {/* <UserClass name={"second from class component"} location={"US"} /> */}


            </div>
        )
    }
}




// const About =()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is about Page</h2>
//             {/* <User name ={"rahul gupta-function component"}/> */}
//             <UserClass name={"rahul gupta coming from class component"} location={"Bengaluru"}/>

//         </div>
//     )
// }

export default About;