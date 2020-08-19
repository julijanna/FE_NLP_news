var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const fetch = require("node-fetch");
const https = require("follow-redirects").https;

console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();
app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

console.log(__dirname);

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/sentiment", getSentimentResponse);

function getSentimentResponse(req, res) {
  text = req.query.formText;
  fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&txt=${text}&model=general&lang=auto`,
    {
      method: "POST",
      mode: "cors",
      headers: {},
    }
  )
    .then((response) => response.json())
    .then((body) => res.send(body));
}
