import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="app__header">
            <div className="container">
                <nav className="app__header-navigation">
                    <ul>
                        <li>
                            <a href="#home" className="main-text">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#protfolio" className="main-text">
                                Protfolio
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="main-text">
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="main-text">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
