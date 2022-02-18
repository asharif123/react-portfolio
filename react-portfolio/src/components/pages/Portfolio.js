import React from 'react';
import '../styles/Portfolio.css';
import '../styles/Footer.css';

export default function Portfolio() {
  return (
    <div className="portfolio bg-desert">
        <div className="portfolio-card">
            <div className="portfolio-projects-card">
                <div>
                    <h1>Rental Finders</h1>
                    <a href="https://github.com/asharif123/rental-finder"><img className="portfolio-card-image" src="/images/rental-finder.JPG" alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://rental-finders.herokuapp.com/">Deployed Link</a>
                </div>
                <div>
                    <h1>Tech Blog</h1>
                    <a href="https://github.com/asharif123/tech-blog"><img className="portfolio-card-image" src="/images/tech-blog.JPG" alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://still-garden-56258.herokuapp.com/">Deployed Link</a>
                </div>
                <div>
                    <h1>Note Taker</h1>
                    <a href="https://github.com/asharif123/note-taker"><img className="portfolio-card-image" src="/images/note-taker.JPG" alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://damp-temple-36265.herokuapp.com/">Deployed Link</a>
                </div>
                <div>
                    <h1>Weather Dashboard</h1>
                    <a href="https://github.com/asharif123/weather-dashboard"><img className="portfolio-card-image" src="/images/weather-dashboard.JPG" alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://asharif123.github.io/weather-dashboard/">Deployed Link</a>
                </div>
                <div>
                    <h1>Password Generator</h1>
                    <a href="https://github.com/asharif123/password-generator"><img className="portfolio-card-image" src="/images/password-generator.JPG" alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://asharif123.github.io/password-generator/">Deployed Link</a>
                </div>
                <div>
                    <h1>Code Quiz</h1>
                    <a href="https://github.com/asharif123/code-questionnaire"><img className="portfolio-card-image" src="/images/code-quiz.JPG" alt="Rental Finder"></img></a>
                    <a className="deployed-link" href="https://asharif123.github.io/code-questionnaire/">Deployed Link</a>
                </div>






            </div>
        </div>
      <footer className="footer-icons">
          <a href="https://www.linkedin.com/in/awad-sharif/"><img src="/images/linkedIn.JPG" alt="LinkedIn"></img></a>
          <a href="https://github.com/asharif123/"><img src="/images/github.JPG" alt="Github"></img></a>
      </footer>

    </div>
  );
}
