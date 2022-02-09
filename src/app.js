const express = require("express");
const path = require("path");

const app = express();
const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Abhishek Prajapat",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Abhishek Prajapat",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    location: "Kolkata",
    forecast: "Snowing",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "From a help file",
  });
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
