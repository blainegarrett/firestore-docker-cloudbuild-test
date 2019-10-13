const express = require("express");

const dev = process.env.NODE_ENV !== "production";

// GAE passes the port the app will run on via process.env.PORT
const port = process.env.PORT ? process.env.PORT : 3000;

const server = express();

server.get("/", (req, res) => res.send("Hello World"));

server.listen(port, err => {
  if (err) throw err;
  console.log(
    `> Ready on http://localhost:${port} NODE_ENV: ${process.env.NODE_ENV}`
  );
});
