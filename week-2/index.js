const express = require("express");
const { readdirSync } = require("fs");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
const port = 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
    res.render("contact");
  });

app.get("/about", (req, res) => {
  res.render("about");
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});