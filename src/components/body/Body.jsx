import React from "react";
import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
import m3 from "../../assets/m3.png";
import m4 from "../../assets/m4.png";
import discount1 from "../../assets/discount1.png";
import discount2 from "../../assets/discount2.png";
import new1 from "../../assets/new.png";
import share from "../../assets/gridicons.png";
import heart from "../../assets/heart.png";
import compare from "../../assets/compare.png";
import "./Body.css";

const Body = () => {
    return (
        <div>
            <div className="container">
                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m1} alt="img" className="img-fluid"></img>
                        <img src={discount1} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Slytherine</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Stylish cafe chair</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 2.500.000</span>
                    <span style={{ color: 'black', padding: '2px 4px 3px', cursor: 'pointer', float: 'right', opacity: 0.6 }}><strike>Rp 3.500.000</strike></span>
                </div>

                <div className="card1">
                    <div className="inner-card">
                        <img src={m2} alt="img" className="img-fluid"></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Leviosa</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Stylish cafe chair</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 7.000.000</span>
                </div>

                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m3} alt="img" className="img-fluid"></img>
                        <img src={discount2} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Lolito</span>
                    <p style={{ fontSize: '14px,opacity: 0.6' }}>Luxury big sofa</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 7.000.000</span>
                    <span style={{ color: 'black', padding: '2px 4px 3px', cursor: 'pointer', float: 'right', opacity: 0.6 }}><strike>Rp 14.000.000</strike></span>
                </div>


                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m4} alt="img" className="img-fluid"></img>
                        <img src={new1} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Respira</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Outdoor bar table and stool</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 500.000</span>
                </div>

                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m1} alt="img" className="img-fluid"></img>
                        <img src={discount1} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Slytherine</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Stylish cafe chair</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 2.500.000</span>
                    <span style={{ color: 'black', padding: '2px 4px 3px', cursor: 'pointer', float: 'right', opacity: 0.6 }}><strike>Rp 3.500.000</strike></span>
                </div>

                <div className="card1">
                    <div className="inner-card">
                        <img src={m2} alt="img" className="img-fluid"></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Leviosa</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Stylish cafe chair</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 2.500.000</span>

                </div>

                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m3} alt="img" className="img-fluid"></img>
                        <img src={discount2} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Lolito</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Luxury big sofa</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 7.000.000</span>
                    <span style={{ color: 'black', padding: '2px 4px 3px', cursor: 'pointer', float: 'right', opacity: 0.6 }}><strike>Rp 14.000.000</strike></span>
                </div>


                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m4} alt="img" className="img-fluid"></img>
                        <img src={new1} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Respira</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Outdoor bar table and stool</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 500.000</span>
                </div>
                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m1} alt="img" className="img-fluid"></img>
                        <img src={discount1} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Slytherine</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Stylish cafe chair</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 2.500.000</span>
                    <span style={{ color: 'black', padding: '2px 4px 3px', cursor: 'pointer', float: 'right', opacity: 0.6 }}><strike>Rp 3.500.000</strike></span>
                </div>

                <div className="card1">
                    <div className="inner-card">
                        <img src={m2} alt="img" className="img-fluid"></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Leviosa</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Stylish cafe chair</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 2.500.000</span>

                </div>

                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m3} alt="img" className="img-fluid"></img>
                        <img src={discount2} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Lolito</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Luxury big sofa</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 7.000.000</span>
                    <span style={{ color: 'black', padding: '2px 4px 3px', cursor: 'pointer', float: 'right', opacity: 0.6 }}><strike>Rp 14.000.000</strike></span>
                </div>


                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m4} alt="img" className="img-fluid"></img>
                        <img src={new1} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Respira</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Outdoor bar table and stool</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 500.000</span>
                </div>
                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m1} alt="img" className="img-fluid"></img>
                        <img src={discount1} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Slytherine</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Stylish cafe chair</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 2.500.000</span>
                    <span style={{ color: 'black', padding: '2px 4px 3px', cursor: 'pointer', float: 'right', opacity: 0.6 }}><strike>Rp 3.500.000</strike></span>
                </div>

                <div className="card1">
                    <div className="inner-card">
                        <img src={m2} alt="img" className="img-fluid"></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Leviosa</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Stylish cafe chair</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 2.500.000</span>

                </div>

                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m3} alt="img" className="img-fluid"></img>
                        <img src={discount2} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Lolito</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Luxury big sofa</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 7.000.000</span>
                    <span style={{ color: 'black', padding: '2px 4px 3px', cursor: 'pointer', float: 'right', opacity: 0.6 }}><strike>Rp 14.000.000</strike></span>
                </div>


                <div className="card1">
                    <div className="inner-card" style={{ position: "relative" }}>
                        <img src={m4} alt="img" className="img-fluid"></img>
                        <img src={new1} alt="discount" style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "50px",
                            height: "50px",
                        }}></img>
                    </div>
                    <div className="overlay">
                        <div className="buttons">
                            <button>Add to Cart</button>
                        </div>
                        <div className="actions">
                            <span> <img src={share} alt="share" /> Share</span>
                            <span><img src={compare} alt="share" /> Compare</span>
                            <span><img src={heart} alt="share" /> Like</span>
                        </div>
                    </div>
                    <span style={{ display: 'block', marginTop: '5px', fontWeight: 'bold' }}>Respira</span>
                    <p style={{ fontSize: '14px', opacity: 0.6 }}>Outdoor bar table and stool</p>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Rp 500.000</span>
                </div>
            </div>
            <footer className="footer1">
                <div className="pagination">
                <button className="page-button next-button">
                    1
                    </button>
                    <button className="page-button next-button">
                    2
                    </button>
                    <button className="page-button next-button">
                    3
                    </button>
                    <button
                        className="page-button next-button"
                        
                    >
                        Next
                    </button>
                </div>
            </footer>
        </div>
    );
};


export default Body;