
import { useEffect, useState } from "react";
const User =({name})=>{

    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{
        console.log("useEffect called");
    },[count,count2]);
    //if count or count2 changes then only useEffect will be called

    async function fetchData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    }

    return(
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h2>Count:{count}</h2>
            <h2>Count2:{count2}</h2>
            <h3>Location:Bengaluru</h3>
            <h4>Name:Rahul</h4>

        </div>
    )
}

export default User;