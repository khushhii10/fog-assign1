import React from "react";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-item">
                <img src={f1} alt="trophy" />
                <label style={{fontWeight:'bold'}}>High Quality <br/>crafted from top materials</label>
            </div>
            <div className="footer-item">
                <img src={f2} alt="warranty" />
                <label style={{fontWeight:"bold"}}>Warranty Protection <br /> Over 2 years</label>
            </div>
            <div className="footer-item">
                <img src={f3} alt="shipping" />
                <label style={{fontWeight:"bold"}}>Free Shipping <br /> Order over 150 $</label>
            </div>
            <div className="footer-item">
                <img src={f4} alt="support" />
                <label style={{fontWeight:"bold"}}>24/7 Support <br /> Dedicated support</label>
            </div>
        </div>
    );
};

export default Footer;
