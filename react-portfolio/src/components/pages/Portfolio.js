import React from 'react';
import '../pages/styles/Portfolio.css';
import '../pages/styles/Footer.css';
import linkedIn from '../pages/images/linkedIn.JPG';
import gitHub from '../pages/images/github.JPG'
import rentalFinders from '../pages/images/rental-finder.JPG';
import techBlog from '../pages/images/tech-blog.JPG';
import noteTaker from '../pages/images/note-taker.JPG';
import weatherDashboard from '../pages/images/weather-dashboard.JPG';
import passwordGenerator from '../pages/images/password-generator.JPG';
import codeQuiz from '../pages/images/code-quiz.JPG';

export default function Portfolio() {
  return (
    <div className="portfolio bg-desert">
        <div className="portfolio-card">
            <div className="portfolio-projects-card">
                <div>
                    <h1>Rental Finders</h1>
                    <a href="https://github.com/asharif123/rental-finder"><img className="portfolio-card-image" src={rentalFinders} alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://rental-finders.herokuapp.com/">Deployed Link</a>
                </div>
                <div>
                    <h1>Tech Blog</h1>
                    <a href="https://github.com/asharif123/tech-blog"><img className="portfolio-card-image" src={techBlog} alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://still-garden-56258.herokuapp.com/">Deployed Link</a>
                </div>
                <div>
                    <h1>Note Taker</h1>
                    <a href="https://github.com/asharif123/note-taker"><img className="portfolio-card-image" src={noteTaker} alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://damp-temple-36265.herokuapp.com/">Deployed Link</a>
                </div>
                <div>
                    <h1>Weather Dashboard</h1>
                    <a href="https://github.com/asharif123/weather-dashboard"><img className="portfolio-card-image" src={weatherDashboard} alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://asharif123.github.io/weather-dashboard/">Deployed Link</a>
                </div>
                <div>
                    <h1>Password Generator</h1>
                    <a href="https://github.com/asharif123/password-generator"><img className="portfolio-card-image" src={passwordGenerator} alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://asharif123.github.io/password-generator/">Deployed Link</a>
                </div>
                <div>
                    <h1>Code Quiz</h1>
                    <a href="https://github.com/asharif123/code-questionnaire"><img className="portfolio-card-image" src={codeQuiz}alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://asharif123.github.io/code-questionnaire/">Deployed Link</a>
                </div>






            </div>
        </div>
      <footer className="footer-icons">
          <a href="https://www.linkedin.com/in/awad-sharif/"><img src={linkedIn} alt="LinkedIn"></img></a>
          <a href="https://github.com/asharif123/"><img src={gitHub} alt="Github"></img></a>
      </footer>

    </div>
  );
}
