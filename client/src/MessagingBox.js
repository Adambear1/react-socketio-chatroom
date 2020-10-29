import React from "react";

function MessagingBox({ getMessage }) {
  const messageHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      getMessage(e.target.value);
      e.target.value = "";
    }
  };
  return (
    <div>
      <textarea onKeyDown={messageHandler}></textarea>
    </div>
  );
}

export default MessagingBox;
