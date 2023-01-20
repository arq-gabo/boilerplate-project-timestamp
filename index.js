// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();
require("dotenv").config();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Api endpoint for get current time
app.get("/api", (req, res, next) => {
  let currentTime = new Date();
  res.json({ unix: currentTime.getTime(), utc: currentTime.toUTCString() });
  next();
});

// Api endpoint for get time format
app.get("/api/:time", (req, res, next) => {
  let paramsTime = req.params.time;
  let timeData;

  if (/^\d{13}$|^\d{4}-\d{2}-\d{2}$/g.test(paramsTime)) {
    if (/^\d{13}$/.test(paramsTime)) {
      timeData = new Date(Number(paramsTime));
    } else {
      timeData = new Date(paramsTime);
    }
    res.json({ unix: timeData.getTime(), utc: timeData.toUTCString() });
  } else {
    res.json({ error: "Invalid Date" });
  }

  next();
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
