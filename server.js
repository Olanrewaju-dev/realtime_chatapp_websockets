// requiring external modules
const express = require("express");
require("dotenv").config();
const { Server } = require("socket.io");

// requiring internal modules
const http = require("http");
const path = require("path");

// Server Side Operations
const app = express(); // node app using express frame work
const server = http.createServer(app);
// initializing express server with
// http in order to socket.io to work fine

// websocket operations
const io = new Server(server, {
  cors: {
    origin: "https//localhost:9001",
    method: ["GET", "POST"],
  },
});

// designating express middleware to read static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/html", "index.html"));
});

const port = 9001 || process.env.PORT;

// server listening on designated port
server.listen(port, () => console.log("server is listening on", port));
