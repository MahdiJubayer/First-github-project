import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Headder";
import InformationPage from "./InformationPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import ManageInformationPage from "./ManageInformationPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/information" component={InformationPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageInformationPage} />
        <Route path="/course" component={ManageInformationPage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
