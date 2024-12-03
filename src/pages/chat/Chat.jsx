import React from "react";
import "../chat/Chat.css";
import Rightside from "../../components/rightside/Rightside";
import Leftside from "../../components/leftside/Leftside";
import Chatbox from "../../components/chatbox/Chatbox";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
        <Leftside />
        <Chatbox />
        <Rightside />
      </div>
    </div>
  );
};

export default Chat;
