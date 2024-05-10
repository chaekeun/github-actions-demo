const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.set("port", port);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../blog/build/index.html"));
// });

app.listen(port, () => console.log("Listening on", port));

module.exports = app;
