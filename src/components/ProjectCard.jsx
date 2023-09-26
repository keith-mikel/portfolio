import React from 'react';

function ProjectCard({ title, screenshotSrc, githubLink, techUsed, appLink }) {
  const cardStyle = {
    height: '400px',
  };

  const imgStyle = {
    height: '200px',
    objectFit: 'cover', 
    objectPosition: 'top'
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={screenshotSrc} className="card-img-top" style={imgStyle} alt={`Screenshot of ${title}`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <strong>Technologies Used:</strong> {techUsed.join(', ')}
        </p>
        <a href={githubLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
        <b>  </b>
        <a href={appLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Link To App
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
