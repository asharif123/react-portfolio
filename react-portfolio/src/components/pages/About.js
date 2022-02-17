import React from 'react';
import '../styles/About.css';
export default function About() {
  return (
    <div className="aboutMe bg-desert">
      <img src="./images/profile.JPG" alt="Profile"></img>
      <p className="aboutMe-summary">
        I am an aspiring web developer with over 7 years of telecommunications
        experience and possess over 4 years of quality assurance.
      </p>
      <p className="aboutMe-summary">I possess a Bachelor's of Science in Electrical Engineering from the 
        University of California, Irvine.</p>
      <footer className="aboutMe-icons flex">
          <a href="https://www.linkedin.com/in/awad-sharif/"><img src="../images/linkedIn.JPG" alt="LinkedIn"></img></a>
          <a href="https://github.com/asharif123/"><img src="../images/github.JPG" alt="Github"></img></a>

      </footer>
    </div>
  );
}
