import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Upload from "./components/Upload";
import axios from "axios";
import "./App.css";
const refUrl = "http://localhost:5000/videos";
class App extends React.Component {
  uploadFunc = (event, title, description, props) => {
    event.preventDefault();
    console.log(
      "upload video title",
      title,
      "upload video descrp",
      description
    );
    axios({
      method: "post",
      url: `${refUrl}`,
      data: { title: title, description: description },
    })
      .then((responseUploadVideo) => {
        console.log(this.props);
        this.props.history.push("/videos");
        console.log("new video was uploaded", responseUploadVideo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <>
        {/* Routes */}
        <Header />
        <Redirect from="/" to="/videos" />
        <Switch>
          <Route path="/videos" exact render={(props) => <Home {...props} />} />
          <Route path="/videos/:id" render={(props) => <Home {...props} />} />
          <Route
            path="/Upload"
            render={(props) => (
              <Upload {...props} uploadFunc={this.uploadFunc} />
            )}
          />
        </Switch>
      </>
    );
  }
}
export default withRouter(App);
