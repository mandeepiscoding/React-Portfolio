import resume from '../assets/pdf/resume.pdf'

export default function ResumePage() {
    return (
        <section className="about-me">
          <h2 id="Resume" >Resume</h2>
          <p><a href={resume} download>Download Resume</a></p>
          <div>
            <h3>Front-end Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul><br></br>
            <h3>Back-end Proficiencies</h3>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </section>
    );
  }
  