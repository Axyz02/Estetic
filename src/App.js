import React from 'react';
import Index from './Components';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOption from './data/particlesOption';


function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOption}
      />
      <Index />
    </>
  );
}

export default App;
