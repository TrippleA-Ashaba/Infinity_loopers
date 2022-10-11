const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
	res.render("index.pug");
});

app.listen(4000, console.log("Listening on app 4000!"));
