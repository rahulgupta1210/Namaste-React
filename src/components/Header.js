import { LOGO_URL } from "../../utils/constant";
import { useState,useEffect } from "react";
import { Link } from "react-router";


function HeaderComponent() {

    let btnName = "Login";
    console.log('header render on page load and on click of login button also')

//useeffect-after evry render of the componet,everytime header component render useEffect will be called if no dependency array [];
//dependency array(optional)-
    useEffect(()=>{
        console.log('useeffect called');
    },[])

    //local variable react will not able to track
    //whenever state variable change react will re-render the header component
    const [btnNameReact, setBtnNameReact] = useState("Login"); //special local variable
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="navitems">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact US</Link>
                    </li>
                    <li>
                        <Link>Cart</Link>
                    </li>
                    <button className="login"
                        onClick={() => {
                            btnName = "Logout";
                            btnNameReact === 'Login' ? setBtnNameReact("Logout"):setBtnNameReact("Login");//update the value to logout and render header component once again initial ==login 
                            //console.log('btnName', btnNameReact);
                        } }
                    >
                        {btnNameReact}</button>

                </ul>

            </div>
        </div>
    );
}

export default HeaderComponent;



