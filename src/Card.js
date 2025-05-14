
import React from 'react';

const Card = ({ title, description, link, icon }) => {
  return (
    <div className="card">
      <a href={link} target="_self" style={{ textDecoration: 'none', color: 'inherit' }}>
        {icon && <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>}
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
};

export default Card;
