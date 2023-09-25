import React from 'react';

function Footer() {
  return (
    <footer className="text-blue text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>&copy; {new Date().getFullYear()} Keith Mikel</p>
            <p>
              <a href="https://github.com/keith-mikel" className="text-blue" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {' | '}
              <a href="https://www.linkedin.com/in/keith-mikel-101984106" className="text-blue" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              {' | '}
              <a href="https://www.seerbusinesssystems.com/" className="text-blue" target="_blank" rel="noopener noreferrer">
                Company Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
