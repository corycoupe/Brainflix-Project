const fs = require("fs");

const getVideo = (id) => {
  const videoData = fs.readFileSync("./models/videos.json");
  const videoArr = JSON.parse(videoData).filter((video) => video.id === id);
  return videoArr;
};

module.exports = getVideo;
