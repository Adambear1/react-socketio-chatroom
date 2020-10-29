import React, { useState } from "react";
import Login from "./Login";
import MessagingPannel from "./MessagingPannel";

function App() {
  const [username, setUsername] = useState(null);
  console.log(username);
  return (
    <div className="App">
      {!username ? (
        <Login setUsername={setUsername} />
      ) : (
        <MessagingPannel username={username} />
      )}
    </div>
  );
}

export default App;
