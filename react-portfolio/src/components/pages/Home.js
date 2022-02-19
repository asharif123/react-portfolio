import React from 'react';
import '../pages/styles/Home.css';
import '../pages/styles/Footer.css';
import linkedIn from '../pages/images/linkedIn.JPG';
import gitHub from '../pages/images/github.JPG'

export default function Home() {
  return (
    <div className="homePage bg-desert">
      <p className="home-summary">My name is Awad Sharif!</p>
      <p className="home-summary-information">I am an aspiring web developer with over 4 years of quality control/quality assurance experience.</p>      
      <footer className="footer-icons">
          <a href="https://www.linkedin.com/in/awad-sharif/"><img src={linkedIn}alt="LinkedIn"></img></a>
          <a href="https://github.com/asharif123/"><img src={gitHub} alt="Github"></img></a>
      </footer>

    </div>

  );
}

