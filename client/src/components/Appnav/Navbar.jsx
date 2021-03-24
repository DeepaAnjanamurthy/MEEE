import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';
import logo from '../../assets/images/logo.png';

function Navbar(props) {
    // console.log(props);
    return (
        <div className="navbar">
            <div>
                <Link className="logolink" to={"/"}>
                    <img className="imglogo" src={logo} alt="site logo"/>
                    {/* <h1 className="navbar__logo">Meee</h1> */}
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
                <Link className="logolink" to={"/"}>
                    <button className="signout_btn btn" onClick={ () => props.handleSignOut()}>Sign Out</button>
                </Link>
                : 
                <h3 className="register"> Register ||</h3>
                }
                
            </div>
        </div>
    )
}

export default Navbar
