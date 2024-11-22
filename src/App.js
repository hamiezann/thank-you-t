import React, { useState } from "react";
import Welcome from "./components/Welcome";
import QualitiesList from "./components/QualityList";
import ThankYouNote from "./components/ThankYou";
import Footer from "./components/Footer";
import "./styles/App.css";
import SongPlayer from "./components/Song";

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => setCurrentSection((prev) => prev + 1);

  return (
    <div className="App">
      {currentSection === 0 && <Welcome onNext={nextSection} />}
      {currentSection === 1 && <QualitiesList />}
      {currentSection === 2 && <ThankYouNote />}
      {/* < SongPlayer /> */}
      <Footer />
    </div>
  );
}

export default App;
