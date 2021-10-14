const express = require('express');
const favicon = require('express-favicon');
// const unirest = require("unirest");
const path = require("path");
const port = 8000;
const htmlFilePrefix = "/../frontend2/public/";

const app = express();
app.set('views', __dirname + htmlFilePrefix);
app.use(favicon(__dirname + "/../frontend2/public/img/favicon_deathStar.png"));
app.use("/static", express.static(path.join(__dirname + "/../frontend2/static")));


app.get(
    "/",
    (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, htmlFilePrefix)
    });
});

app.listen(port, () => {
    console.log(`May the force be with you... Always! (On port ${port}.)`);
});