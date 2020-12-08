const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/static', express.static('public'));

// Template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use(routes);

app.listen(8080, () => {
    console.log("servidor em pé");
});