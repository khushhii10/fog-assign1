import React from "react";
import "./Header.css"; // Import the CSS file
import logo from "../../assets/1ST.png";
import alert from "../../assets/2ND.png";
import search from "../../assets/3RD.png";
import heart from "../../assets/4TH.png";
import cart from "../../assets/5TH.png";
import img1 from "../../assets/himg.png";
import himg1 from "../../assets/himg1.png";
import himg2 from "../../assets/himg2.png";
import himg3 from "../../assets/himg3.png";

const Header = () => {
    return (
        <div>
            <div className="first">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={logo} alt="logo" />
                    <label>FURINO</label>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <img src={alert} alt="alert" />
                    <img src={search} alt="search" />
                    <img src={heart} alt="heart" />
                    <img src={cart} alt="cart" />
                </div>
            </div>
            <div className="banner-section">
                <img src={img1} alt="cover-image" className="banner-image" />
                <div className="banner-text">
                    <h1>Shop</h1>
                    <p>Home &gt; Shop</p>
                </div>
            </div>
            <div className="shop-filters">
                <div className="filter-section">
                    <img src={himg1} alt="himg1"></img>
                    <h4>Filter</h4>
                    <img src={himg2} alt="himg2"></img>
                    <img src={himg3} alt="himg3"></img>
                    <lable>|</lable>
                </div>
                <div className="results-section">
                    <p>Showing 1–16 of 32 results</p>
                </div>
                <div className="sort-section">
                    <label>
                        Show
                    </label>  <div className="show-box">16</div>
                    <label>
                        Sort by
                    </label>    <div className="sort-box">Default</div>

                </div>
            </div>
        </div>
    );
};

export default Header;
