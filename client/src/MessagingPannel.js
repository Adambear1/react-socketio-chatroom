import React, { useState, useEffect } from "react";
import DisplayConversation from "./DisplayConversation";
import MessagingBox from "./MessagingBox";

const connection = new WebSocket("ws://localhost:8000");

function MessagingPannel({ username }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    connection.onmessage = (message) => {
      const data = JSON.parse(message.data);
      setMessages({ messages: [...messages, data] });
    };
  }, []);
  const getMessage = (message) => {
    connection.send(JSON.stringify({ message, username }));
  };

  return (
    <div>
      <DisplayConversation message={messages} />
      <MessagingBox getMessage={getMessage} />
    </div>
  );
}

export default MessagingPannel;
