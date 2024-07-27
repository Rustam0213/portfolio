import React, { useState } from "react";
import AboutMe from "./components/aboutMe";
import Header from "./components/header";
import Footer from "./components/footer";
import MyWorks from "./components/myWorks";

function App() {
  const [activeButton, setActiveButton] = useState("About Me");

  return (
    <div className="App">
      <Header activeButton={activeButton} setActiveButton={setActiveButton} />
      {activeButton === "About Me" ? <AboutMe/> : <MyWorks/>}
      <Footer />
    </div>
  );
}

export default App;
