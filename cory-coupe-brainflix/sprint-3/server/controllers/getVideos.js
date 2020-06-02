const fs = require("fs");

const getVideos = () => {
  const videosData = fs.readFileSync("./models/videos.json");
  const videosArr = JSON.parse(videosData).map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });
  return videosArr;
};

module.exports = getVideos;
