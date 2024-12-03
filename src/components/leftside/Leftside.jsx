import React from "react";
import "../leftside/Left.css";
import assets from "../../assets/assets";
const Leftside = () => {
  return (
    <div className="left-side">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className="logo" alt="" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="ls-list">
        {Array(12)
          .fill("")
          .map(() => (
            <div className="friends">
              <img src={assets.profile_img} alt="" />
              <div>
                <p>Peter Parker</p>
                <span>Hi , whatsup man....? </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Leftside;
