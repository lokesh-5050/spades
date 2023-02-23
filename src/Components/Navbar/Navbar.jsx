import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="navtop">
          <div className="lft "></div>
          <div className="center upper">
            {/* <img
              src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/default/user7.jpg"
              alt=""
            /> */}
            <h2>Spades</h2>
          </div>
          <div className="rgt upper_btn"></div>
        </div>
        <div className="navtop down">
          <div className="lft"></div>
          <div className="center">
            <h4>Home</h4>
            <h4>Products</h4>
            <h4>About Us</h4>
            <h4>Pricing</h4>
            <h4>Blog</h4>
            <h4>Contact</h4>
          </div>
          <div className="rgt down_side">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
