const express = require("express");
const cors = require("cors");
const app = express();
const getVideos = require("./controllers/getVideos");
const getVideo = require("./controllers/getVideo");
const saveVideo = require("./controllers/saveVideo");

app.use(cors());
app.use(express.json());

// api info endpoint
app.get("/", (req, res) => {
  res.json({
    name: "Quotes API",
    description: "Read and Write quotes using uri endpoints",
  });
});

// get all quotes
app.get("/videos", (req, res) => {
  res.json(getVideos());
});

// // create a new quote
// app.post("/quotes", (req, res) => {
//   res.json(saveQuote(req.body));
// });

// get quote by id
app.get("/videos/:id", (req, res) => {
  res.json(getVideo(req.params.id));
});

app.post("/videos", (req, res) => {
  res.json(saveVideo(req.body)); // since saveTweet is returning a value we can use this with res.json to return our some info
});
// // delete existing quote
// app.delete("/quotes/:id", (req, res) => {
//   res.json(deleteQuote(req.params.id));
// });

// // update existing quote
// app.put("/quotes/:id", (req, res) => {
//   res.json(updateQuote(req.params.id, req.body));
// });

app.listen(5000, console.log("app is listening at: http://localhost:5000"));
