import React from "react";
import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
import m3 from "../../assets/m3.png";
import m4 from "../../assets/m4.png";
import "./Body.css";

const Body = () => {

    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card1">
                        <div className="inner-card">
                            <img src={m1} alt="img" className="img-fluid"></img>
                        </div>
                        <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Slytherine</span>
                        <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 2.500.000</span>
                        <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 3.500.000</strike></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card1">
                        <div className="inner-card">
                            <img src={m2} alt="img" className="img-fluid"></img>
                        </div>
                        <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Slytherine</span>
                        <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 2.500.000</span>
                        <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 3.500.000</strike></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card1">
                        <div className="inner-card">
                            <img src={m3} alt="img" className="img-fluid"></img>
                        </div>
                        <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Slytherine</span>
                        <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 2.500.000</span>
                        <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 3.500.000</strike></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card1">
                        <div className="inner-card">
                            <img src={m4} alt="img" className="img-fluid"></img>
                        </div>
                        <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Slytherine</span>
                        <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 2.500.000</span>
                        <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 3.500.000</strike></span>
                    </div>
                </div>
                <div>
                    <label>1 2 3 Next</label>
                </div>
            </div>
        </div>
    );
};
export default Body;