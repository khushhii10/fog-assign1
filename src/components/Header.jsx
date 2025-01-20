import React from "react";
import logo from "../assets/1ST.png";
import alert from "../assets/2ND.png";
import search from "../assets/3RD.png";
import heart from "../assets/4TH.png";
import cart from "../assets/5TH.png";

//import { NavLink } from 'react-router-dom'
const header = () => {

    return (
        <div>
            <img src={logo} alt="logo"></img>
            <label>FURINO</label>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <img src={alert} alt="alert"></img>
            <img src={search} alt="search"></img>
            <img src={heart} alt="heart"></img>
            <img src={cart} alt="cart"></img>
        </div>
    )

}
export default header;