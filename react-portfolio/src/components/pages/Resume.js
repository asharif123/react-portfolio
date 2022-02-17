import React from 'react';
import '../styles/Resume.css';
export default function Resume() {
  return (
    <div className="resume bg-desert flex flex-col justify-center ">
      <p className="resume-download"><a href="/images/myw3schoolsimage.jpg" download="w3logo">Click to Download Resume</a></p>
      
      <p>
        Front-end Proficiencies
      </p>
      <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>React</li>
      </ul>
    </div>
  );
}
