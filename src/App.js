import React, { useState } from "react";
import Hero from "./components/Hero";
import TabContent from "./components/TabContent";
import TheaterMode from "./components/TheaterMode";
import 'bootstrap/dist/css/bootstrap.min.css';
import ganeshaLogo from "./assets/ganesha-logo.png"; // Import Ganesha logo
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [theaterModeImage, setTheaterModeImage] = useState(null);

  const openTheaterMode = (src) => setTheaterModeImage(src);
  const closeTheaterMode = () => setTheaterModeImage(null);
  const showTab = (tab) => setActiveTab(tab);
  const goToHome = () => setActiveTab(null);

  return (
    <div className="App">
      <div className="ganesha-logo-container text-center">
        <img
          src={ganeshaLogo}
          alt="Lord Ganesha"
          className="ganesha-logo"
          style={{
            width: "150px",
            height: "150px",
            margin: "60px",
            
          }}
        />
          {/* Mantra and Name */}
       <p className="mantra" style={{ color: "white", fontWeight: "bold", marginTop:"1px" }}>
           || శ్రీ గణేశాయ నమః ||
       </p>
      </div>
      {theaterModeImage && (
        <TheaterMode
          image={theaterModeImage}
          closeTheaterMode={closeTheaterMode}
        />
      )}
      {!activeTab ? (
        <Hero showTab={showTab} />
      ) : (
        <TabContent
          activeTab={activeTab}
          goToHome={goToHome}
          openTheaterMode={openTheaterMode}
        />
      )}
    </div>
  );
};

export default App;
