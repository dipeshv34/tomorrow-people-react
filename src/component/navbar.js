import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
    return (
            <nav className="nav">
                <div className={"nav__menu"} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/subscription" className="nav__link">
                                Subscription
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/unsubscribe"
                                className="nav__link"
                            >
                                unsubscribe
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/subscription-confirmation"
                                className="nav__link"
                            >
                                subscription-confirmation
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/password"
                                className="nav__link"
                            >
                                password
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/thank-you"
                                className="nav__link"
                            >
                                thank-you
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
    );
};

export default Navbar;