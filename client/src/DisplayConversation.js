import React from "react";

function DisplayConversation({ messages }) {
  return (
    <div>
      {messages &&
        messages.map(({ username, message }) => (
          <div>
            {username}: {message}
          </div>
        ))}
    </div>
  );
}

export default DisplayConversation;
