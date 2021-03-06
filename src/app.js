const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

//Paths for Express Configuration
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setting handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Set up static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Rozgaar",
    name: "The B Team",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Error 404",
    name: "Vishal Sehgal",
    errorMessage: "Page Not Found",
  });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
