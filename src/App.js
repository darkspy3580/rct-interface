// src/components/App.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import BackgroundVideo from './BackgroundVideo';
import Card from './Card';
import './App.css';

const getAppLink = (appName) => {
  const deploymentLinks = {
    IF: { local: 'https://bioinformatics-if-prediction.streamlit.app' },
    Args: { local: 'https://args-classifier.streamlit.app' },
    PPIN: { local: 'https://ppina-bioinformatics.streamlit.app' },
    Similarity: { local: 'https://similarity-bioinformatics.streamlit.app' },
  };

  const env = process.env.REACT_APP_ENV || 'local';
  return deploymentLinks[appName]?.[env] || '#';
};

const App = () => {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const videoPath = '/background.mp4';
    fetch(videoPath)
      .then((response) => response.blob())
      .then((videoBlob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setVideoSrc(reader.result);
        };
        reader.readAsDataURL(videoBlob);
      })
      .catch((error) => console.error('Error loading video:', error));
  }, []);

  const cards = [
    {
      title: '(IF)',
      description: '🧬 Imprinting Factor (IF) Prediction',
      link: getAppLink('IF'),
      icon: '🔬',
    },
    {
      title: 'Args',
      description: 'Antibiotic Resistance Gene Classifier & Mobility Analyzer',
      link: getAppLink('Args'),
      icon: '🧪',
    },
    {
      title: 'PPIN',
      description: 'Protein-Protein Interaction Network Analysis',
      link: getAppLink('PPIN'),
      icon: '🌐',
    },
    {
      title: 'Protein-Protein Similarity Analyzer',
      description: 'Protein similarity  using ML',
      link: getAppLink('Similarity'),
      icon: '🔗',
    },
  ];

  return (
    <div className="App">
      {/* Set title and meta tags */}
      <Helmet>
        <title>Bioinformatics Dashboard</title>
        <meta name="description" content="Interactive bioinformatics tools for IF prediction, ARG analysis, PPIN, and similarity metrics." />
      </Helmet>

      {/* Video background */}
      {videoSrc && <BackgroundVideo videoSrc={videoSrc} />}

      {/* Cards layout */}
      <div className="cards-container">
        <div className="card-column">
          {cards.slice(0, 2).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className="card-column">
          {cards.slice(2).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
