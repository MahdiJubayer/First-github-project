import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Headder";
import InformationPage from "./InformationPage";

function App() {
  function getPage() {
    let route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    if (route === "/information") return <InformationPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
