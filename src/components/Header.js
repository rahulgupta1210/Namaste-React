import { LOGO_URL } from "../../utils/constant";

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="navitems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact US</li>
                    <li>Cart</li>

                </ul>

            </div>
        </div>
    )
}

export default HeaderComponent;