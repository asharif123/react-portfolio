import React from 'react';
import '../pages/styles/About.css';
import '../pages/styles/Footer.css';
import profileImg from '../pages/images/profile.JPG';
import linkedIn from '../pages/images/linkedIn.JPG';
import gitHub from '../pages/images/github.JPG'
export default function About() {
  return (
    <div className="aboutMe bg-desert">
      <img className="about-me-image" src={ profileImg } alt="Profile"></img>
      <p className="aboutMe-summary">
        I am an aspiring web developer with over 7 years of telecommunications
        experience and possess over 4 years of quality assurance.
      </p>
      <p className="aboutMe-summary">I possess a Bachelor's of Science in Electrical Engineering from the 
        University of California, Irvine.</p>
      <footer className="footer-icons flex">
          <a href="https://www.linkedin.com/in/awad-sharif/"><img src={linkedIn} alt="LinkedIn"></img></a>
          <a href="https://github.com/asharif123/"><img src={gitHub} alt="Github"></img></a>

      </footer>
    </div>
  );
}
