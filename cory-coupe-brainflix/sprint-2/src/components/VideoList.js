import React from "react";
import { Link } from "react-router-dom";
function VideoList({ videoListArray, mainId }) {
  return (
    <div className="video-list">
      <h2 className="video-list__title">NEXT VIDEO</h2>
      {/* filter through videos, then place them in HTML */}
      {videoListArray
        .filter((video) => video.id !== mainId)
        .map((video) => (
          <div className="video-list__block">
            <div className="video-list__image">
              <Link to={`/videos/${video.id}`}>
                <img
                  className="video-list__image--src"
                  src={video.image}
                  alt=""
                />
              </Link>
            </div>
            <div className="video-list__text-area">
              <h3 className="video-list__text-area--head">{video.title}</h3>
              <p className="video-list__text-area--foot">{video.channel}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default VideoList;
