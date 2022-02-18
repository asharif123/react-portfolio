import React from 'react';
import '../styles/Resume.css';
import '../styles/Footer.css';

export default function Resume() {
  return (
    <div className="resume bg-desert flex flex-col justify-center">
      <p className="resume-download"><a href="/images/Career-Resume-Web-Developer.pdf" download="resume">Click to Download Resume</a></p>
      
      <p className="proficiencies"> 
        Front-end Proficiencies:
      </p>
      <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
      </ul>

      <p className="proficiencies"> 
        Back-end Proficiencies:
      </p>
      <ul>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>APIs</li>
          <li>MySQL</li>
          <li>NoSQL</li>
      </ul>
      <footer className="footer-icons">
          <a href="https://www.linkedin.com/in/awad-sharif/"><img src="/images/linkedIn.JPG" alt="LinkedIn"></img></a>
          <a href="https://github.com/asharif123/"><img src="/images/github.JPG" alt="Github"></img></a>
      </footer>




    </div>
  );
}
