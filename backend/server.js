const express = require('express');
const favicon = require('express-favicon');
// const unirest = require("unirest");
const path = require("path");
const port = 8000;
const htmlFilePrefix = "/../frontend/templates/";

const app = express();
app.set('views', __dirname + htmlFilePrefix);
app.use(favicon(__dirname + "/../frontend/static/img/favicon_deathStar.png"));
app.use("/static", express.static(path.join(__dirname + "/../frontend/static")));


app.get("/", (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, htmlFilePrefix)
    });
});

app.listen(port, () => {
    console.log(`App is listening at localhost on port ${port}!`);
    console.log(__dirname + "/../frontend/static");
});