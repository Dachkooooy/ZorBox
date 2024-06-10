import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link
                className="navbar-brand"
                to="/"
                style={{
                    fontSize: "1.5em",
                    fontWeight: "bold",
                    color: "white"
                }}
            >
                Zorbox
            </Link>
            
            <ul className="navbar-links">
                <li>
                    <Link to="/">Начало</Link>
                </li>
                
                <li>
                    <Link to="/signin">Вход</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
