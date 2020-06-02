import React from "react";
import Video from "./Video";
import Description from "./Description";
import Comments from "./Comments";
import NewComments from "./NewComments";
import VideoList from "./VideoList";
import axios from "axios";

// variables
const refUrl = "http://localhost:5000/videos";

class Home extends React.Component {
  // state
  state = {
    videoListArray: [],
    mainVideo: {},
  };
  // grab all videos
  getVideos = () => {
    console.log("test");
    axios
      .get(`${refUrl}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ videoListArray: response.data }, () =>
          console.log(this.state.videoListArray)
        );
      })
      .catch((err) => console.log(err));
  };
  // grab videos by ID
  getVideo = (videoId) => {
    axios.get(`${refUrl}/${videoId}`).then((response) => {
      console.log("Video data is retrieved");
      this.setState({ mainVideo: response.data[0] });
      console.log(this.state.mainVideo);
    });
  };
  saveVideo = (video) => {
    axios.post(`${refUrl}`).then((response) => {
      console.log("Upload is posted");
    });
  };
  // init
  componentDidMount() {
    console.log("comp mounted");
    this.getVideos(); // call getPosts() method, many posts
    this.getVideo("1ae5jruuoc4q"); // call getPost() method, single post
  }
  // check if video needs to be changed
  componentDidUpdate(prevProps) {
    console.log(prevProps.match.params.id);
    console.log(this.props.match.params.id);
    if (prevProps.match.params.id !== this.props.match.params.id)
      this.getVideo(this.props.match.params.id);
  }

  render() {
    console.log(this.props.match);
    return (
      <>
        <main className="main-container">
          <Video mainVideo={this.state.mainVideo} />
          <section className="section-comments">
            <Description mainVideo={this.state.mainVideo} />
            <Comments />
            <NewComments comments={this.state.mainVideo.comments} />
          </section>
          <section className="section-videos">
            <VideoList
              videoListArray={this.state.videoListArray}
              mainId={this.state.mainVideo.id}
            />
          </section>
        </main>
      </>
    );
  }
}
export default Home;
