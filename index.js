const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World Base !");
});

// start the server listening for requests
app.listen(process.env.PORT || port, () => console.log("Server is running..."));
