import React from "react";
import { Link } from "react-router-dom";
function Upload(props) {
  const onClick = (event) => {
    event.preventDefault();
    const title = document.getElementsByClassName(
      "upload__input-text-input"
    )[0];
    const desc = document.getElementsByClassName(
      "text-field upload__input-text-field"
    )[0];
    const titleValue = title.value;
    const descriptionValue = desc.value;
    props.uploadFunc(event, titleValue, descriptionValue);
  };
  return (
    <>
      <h2 className="upload__title">Upload Video</h2>
      <section className="upload">
        <div className="upload__card">
          <div className="upload__thumbnail">
            <h3 className="upload__thumbnail-text">VIDEO THUMBNAIL</h3>
            <img
              src="./images/Upload-video-preview.jpg"
              className="upload__thumbnail-img"
            ></img>
          </div>
          <div className="upload__input">
            <h3 className="upload__input-title">TITLE YOUR VIDEO</h3>
            <input
              type="text"
              className="text-field upload__input-text-input"
              placeholder="Add a title to your video"
            ></input>
            <h3 className="upload__input-title">ADD A VIDEO DESCRIPTION</h3>
            <textarea
              className="text-field upload__input-text-field"
              type="string"
              placeholder="Add a description of your video"
            ></textarea>
          </div>
        </div>
        <div className="upload__buttons">
          <button
            type="submit"
            onClick={onClick}
            className="upload__buttons-btn"
          >
            PUBLISH
          </button>
          <button className="upload__buttons-btn upload__buttons-btn--cancel">
            CANCEL
          </button>
        </div>
      </section>
    </>
  );
}

export default Upload;
