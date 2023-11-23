import { LOGO_URL  } from "../utils/constants";
import {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [isLoggedin, setIsLoggedin] = useState(true);

    const onlineStatus = useOnlineStatus();

    const loggedInUser = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                      Online status : {onlineStatus ? "online" : "offline"}
                    </li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
          <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>

    )
}

export default Header;
