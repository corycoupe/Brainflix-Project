const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
// load data
const videos = JSON.parse(fs.readFileSync("./models/videos.json"));

// function to save tweets, read/write tweets.json
saveVideo = (videoData) => {
  const video = {
    title: videoData.title,
    description: videoData.description,
    id: uuidv4(),
    channel: "Brainstation person",
    image: "./images/Upload-video-preview.jpg",
    views: "15",
    likes: "45,000",
    duration: "4:02",
    timestamp: 1545162149000,
    video: "",
    comments: [
      {
        name: "Mike Ly",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000,
      },
      {
        name: "Gary Joseph",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046,
      },
      {
        name: "Theodore Dunco",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046,
      },
    ],
  };

  videos.push(video);

  fs.writeFileSync("./models/videos.json", JSON.stringify(videos));
  return videos;
};

module.exports = saveVideo;
