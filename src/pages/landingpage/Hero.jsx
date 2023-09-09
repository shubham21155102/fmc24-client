import React from 'react'
import Classes from './styles/Hero.module.css'
import Design from "./hoverDesign/design"
import Header from './Header';
const VideoWithText = () => {
  return (
    <div className={Classes.videoContainer}>
      <video autoPlay loop muted className={Classes.video}>
        <source src="/Final.mp4" type="video/mp4" />
      </video>
      <div 
      className={Classes.textOverlay}
      >
        <h1 
        >Euphoria Of Expression</h1>
      </div>
    </div>
  );
};
const Hero = () => {
  return (
    <>
    <div className={Classes.hero_text}>
    {/* <Header/> */}
      <VideoWithText/>
    </div>
     
    </>
  )
}

export default Hero


