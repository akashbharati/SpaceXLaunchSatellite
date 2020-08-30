const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(__dirname + "/dist/space-x"));
app.get("/favicon.ico", (req, res) => {
  res.sendStatus(200);
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/space-x/index.html"));
});

app.listen(port, () => {
  console.log("Server is runnning on ", port);
});
