import React,{useState} from "react";
import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
import m3 from "../../assets/m3.png";
import m4 from "../../assets/m4.png";
import "./Body.css";

const Body = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3; // Example total pages
  
    const handlePageClick = (page) => {
      setCurrentPage(page);
      console.log(`Page ${page} clicked`);
    };
  
    const handleNextClick = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        console.log(`Page ${currentPage + 1} clicked`);
      }
    };
    return (
<div>
        <div className="container">
            <div className="card1">
                <div className="inner-card">
                    <img src={m1} alt="img" className="img-fluid"></img>
                </div>
                <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Slytherine</span>
                <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 2.500.000</span>
                <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 3.500.000</strike></span>
            </div>

                <div className="card1">
                    <div className="inner-card">
                        <img src={m2} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Leviosa</span>
                    <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 7.000.000</span>               
            </div>
           
                <div className="card1">
                    <div className="inner-card">
                        <img src={m3} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Lolito</span>
                    <h6 style={{ fontSize: '14px' }}>Luxury big sofa</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 7.000.000</span>
                    <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 14.000.000</strike></span>
                </div>
           
           
                <div className="card1">
                    <div className="inner-card">
                        <img src={m4} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Respira</span>
                    <h6 style={{ fontSize: '14px' }}>Outdoor bar table and stool</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 500.000</span>
                </div>

                <div className="card1">
                <div className="inner-card">
                    <img src={m1} alt="img" className="img-fluid"></img>
                </div>
                <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Slytherine</span>
                <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 2.500.000</span>
                <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 3.500.000</strike></span>
            </div>

                <div className="card1">
                    <div className="inner-card">
                        <img src={m2} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Leviosa</span>
                    <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 2.500.000</span>
               
            </div>
           
                <div className="card1">
                    <div className="inner-card">
                        <img src={m3} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Lolito</span>
                    <h6 style={{ fontSize: '14px' }}>Luxury big sofa</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 7.000.000</span>
                    <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 14.000.000</strike></span>
                </div>
           
           
                <div className="card1">
                    <div className="inner-card">
                        <img src={m4} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Respira</span>
                    <h6 style={{ fontSize: '14px' }}>Outdoor bar table and stool</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 500.000</span>
                </div>
                <div className="card1">
                <div className="inner-card">
                    <img src={m1} alt="img" className="img-fluid"></img>
                </div>
                <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Slytherine</span>
                <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 2.500.000</span>
                <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 3.500.000</strike></span>
            </div>

                <div className="card1">
                    <div className="inner-card">
                        <img src={m2} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Leviosa</span>
                    <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 2.500.000</span>
               
            </div>
           
                <div className="card1">
                    <div className="inner-card">
                        <img src={m3} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Lolito</span>
                    <h6 style={{ fontSize: '14px' }}>Luxury big sofa</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 7.000.000</span>
                    <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 14.000.000</strike></span>
                </div>
           
           
                <div className="card1">
                    <div className="inner-card">
                        <img src={m4} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Respira</span>
                    <h6 style={{ fontSize: '14px' }}>Outdoor bar table and stool</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 500.000</span>
                </div>
                <div className="card1">
                <div className="inner-card">
                    <img src={m1} alt="img" className="img-fluid"></img>
                </div>
                <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Slytherine</span>
                <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 2.500.000</span>
                <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 3.500.000</strike></span>
            </div>

                <div className="card1">
                    <div className="inner-card">
                        <img src={m2} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Leviosa</span>
                    <h6 style={{ fontSize: '14px' }}>Stylish cafe chair</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 2.500.000</span>
               
            </div>
           
                <div className="card1">
                    <div className="inner-card">
                        <img src={m3} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Lolito</span>
                    <h6 style={{ fontSize: '14px' }}>Luxury big sofa</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 7.000.000</span>
                    <span className="float-right" style={{ backgroundColor: '#C5EBAA', color: '#41B06E', borderRadius: '50%', padding: '3px 8px 3px 7px', cursor: 'pointer' }}><strike>Rp 14.000.000</strike></span>
                </div>
           
           
                <div className="card1">
                    <div className="inner-card">
                        <img src={m4} alt="img" className="img-fluid"></img>
                    </div>
                    <span style={{ opacity: 0.6, display: 'block', marginTop: '5px', fontWeight: '500' }}>Respira</span>
                    <h6 style={{ fontSize: '14px' }}>Outdoor bar table and stool</h6>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#41B06E' }}>Rp 500.000</span>
                </div>
        </div>
        <footer className="footer1">
        <div className="pagination">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`page-button ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="page-button next-button"
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </footer>
        </div>
    );
};


export default Body;