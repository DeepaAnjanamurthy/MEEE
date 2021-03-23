import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';

function Navbar(props) {
    console.log(props);
    return (
        <div className="navbar">
            <div>
                <Link className="logolink" to={"/"}>
                    <h1 className="navbar__logo">Meee</h1>
                </Link>
            </div>
            <div className="navbar__links">
                <form>
                <input className="navbar__searchbar" type="text" placeholder="Search"/>
                </form>
                <h3>||  About  |</h3>
                <h3>|  Contact  ||</h3>
                {props.userLoggedIn 
                ? 
                    <button className="signout_btn">Sign Out</button>
                : 
                <h3> Register ||</h3>
                }
                
            </div>
        </div>
    )
}

export default Navbar
