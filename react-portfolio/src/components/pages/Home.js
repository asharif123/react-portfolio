import React from 'react';
import '../styles/Home.css';
import '../styles/Footer.css';

export default function Home() {
  return (
    <div className="homePage bg-desert">
      <p className="home-summary">My name is Awad Sharif!</p>
      <p className="home-summary-information">I am an aspiring web developer with over 4 years of quality control/quality assurance experience.</p>      
      <footer className="footer-icons">
          <a href="https://www.linkedin.com/in/awad-sharif/"><img src="/images/linkedIn.JPG" alt="LinkedIn"></img></a>
          <a href="https://github.com/asharif123/"><img src="/images/github.JPG" alt="Github"></img></a>
      </footer>

    </div>

  );
}

