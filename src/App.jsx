import Bus from "./components/Bus";
import Contact from "./components/Contact";
import Discover from "./components/Discover";
import GridComponent from "./components/Gridcomponent";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import "./index.css";
import React from "react";

const App = () => {
  return (
    <div>
      <Navbar />
      <Mainpage />
      <Discover />
      <Bus />
      <GridComponent />
      <Contact />
    </div>
  );
};

export default App;
