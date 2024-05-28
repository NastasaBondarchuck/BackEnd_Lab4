const express = require("express")
const hbs = require("hbs")

let app = express()

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
    res.render("index.hbs");
});

app.get("/weather/:city", (req, res) => {
    const city = req.params.city;
    res.render("weather", { city });
});

app.listen(80, () => {
    console.log("listening on port 80");
});