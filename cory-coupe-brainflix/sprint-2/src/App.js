import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Upload from "./components/Upload";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        {/* Routes */}
        <Header />
        <Redirect from="/" to="/videos" />
        <Switch>
          <Route path="/videos" exact render={(props) => <Home {...props} />} />
          <Route path="/videos/:id" render={(props) => <Home {...props} />} />
          <Route path="/Upload" component={Upload} />
        </Switch>
      </>
    );
  }
}
export default App;
