import React from 'react';
import './App.css'; // Ensure this path is correct


const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video id="background-video" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
