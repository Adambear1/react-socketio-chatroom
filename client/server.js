const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: 8000 });

let clients = [];

const broadcast = (message) => {
  const data = JSON.stringify(message);
  clients.forEach((client) => {
    client.send(data);
  });
};

const cleanUp = () => {
  const clientsLeaving = clients.filter(
    (client) => client.readyState === client.CLOSED
  );
  clients = clients.filter((client) => client.readyState !== client.CLOSED);
  clientsLeaving.forEach((client) =>
    broadcast({ username: "Admin", message: "A User Has Left The Room" })
  );
};

setInterval(cleanUp, 200);

wss.on("connection", (connection) => {
  clients.push(connection);
  broadcast({ username: "admin", message: "A User Has Entered The Room" });
  connection.on("message", (message) => {
    const data = JSON.parse(message);
    broadcast(data);
  });
});
