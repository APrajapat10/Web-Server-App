const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello Express");
});

app.get("/help", (req, res) => {
  res.send("Help Needed");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/weather", (req, res) => {
  res.send("Weather is good");
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
