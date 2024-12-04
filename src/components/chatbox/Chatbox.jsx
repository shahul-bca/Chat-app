import React from "react";
import "./Chatbox.css";
import assets from "../../assets/assets";
const Chatbox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <div className="avatar_container"><img src={assets.profile_img} alt="" className="image" />
        <div className="dot"></div></div>
        <p>
          Richard 
        </p>
        <img src={assets.help_icon} className="help" alt="" />
      </div>
      <div className="chat-input">
        <input type="text" cla placeholder="send a message" />
       <label>
        <img src={assets.send_button} alt="" />
       </label>
      </div>
    </div>
  );
};

export default Chatbox;
