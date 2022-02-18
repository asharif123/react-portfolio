import React from 'react';
import '../styles/Portfolio.css';
import '../styles/Footer.css';

export default function Portfolio() {
  return (
    <div className="portfolio bg-desert">
        <div className="portfolio-card">
            <a href="https://github.com/asharif123/rental-finder"><img src="/images/rental-finder.JPG"></img>https://rental-finders.herokuapp.com/</a>
        </div>
      <footer className="footer-icons">
          <a href="https://www.linkedin.com/in/awad-sharif/"><img src="/images/linkedIn.JPG" alt="LinkedIn"></img></a>
          <a href="https://github.com/asharif123/"><img src="/images/github.JPG" alt="Github"></img></a>
      </footer>

    </div>
  );
}
