import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <Link to={"/"}>
                <div><h1>Logo</h1></div>
            </Link>
            <div className="navbar__links">
                <form>
                <input className="navbar__searchbar" type="text" placeholder="Search"/>
                </form>
                <h3>||  About  |</h3>
                <h3>|  Contact  |</h3>
                <h3>| Register ||</h3>
            </div>
        </div>
    )
}

export default Navbar
