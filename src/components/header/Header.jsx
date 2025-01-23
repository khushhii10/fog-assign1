import React, { useState, useEffect } from "react";
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
import { fetchProducts } from "../../api/productApi.js";
const Header = () => {
    const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    sort: "default",
    brand: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    limit: 16,
    page: 1,
  });
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(filters);
      setProducts(data.products);
    };
    getProducts();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

    return (
        <div>
            <div className="first">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={logo} alt="logo" />
                    <label style={{ fontFamily: "Montserrat", fontWeight: 2000 }}>FURINO</label>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="header-image">
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
                    <img src={himg1} alt="himg1" />
                    <h4>Filter</h4>
                    <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          onChange={handleFilterChange}
        />
                    <img src={himg2} alt="himg2" />
                    <img src={himg3} alt="himg3" />
                    <label>|</label>
                </div>
                <div className="results-section">
        {products.map((product) => (
          <div key={product._id}>{product.name} - ${product.price}</div>
        ))}
      </div>
                <div className="sort-section">
                    <label>Show</label> <div className="show-box">16</div>
                    <label>Sort by</label>
                    <select name="sort" onChange={handleFilterChange}>
          <option value="default">Default</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="nameAsc">Name: A-Z</option>
          <option value="nameDesc">Name: Z-A</option>
        </select>
                </div>
            </div>

        </div>
    );
};

export default Header;
