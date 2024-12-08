import React from "react";
import "./PorfolioBody.css";

function PortfolioBody() {
  return (
    <div>
      <section id="about">
        <h2>About Me</h2>
        <p>
          To join a reputed organization where I can apply my knowledge and
          skills to solve real-world challenges, contribute to impactful
          projects, and grow as a professional while aligning with the company’s
          vision and goals.
        </p>
      </section>

      <section id="education">
        <h2>Education</h2>
        <ul>
          <li>
            Brindavan Institute of Technology and Sciences (CGPA: 7.6/10)
          </li>
          <li>
            Sri Chaitanya Junior College (CGPA: 8.6/10)
          </li>
        </ul>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <h3>Technical Skills</h3>
        <ul>
          <li>Python</li>
          <li>HTML, CSS, JavaScript,MySQL</li>
          <li>BootStrap,React.js</li>
        </ul>
        <h3>Soft Skills</h3>
        <ul>
          <li>Teamwork</li>
          <li>Problem-Solving</li>
          <li>Time Management</li>
          <li>Adaptable</li>
        </ul>
        <h3>Version Control</h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>
          <strong>Yoga Tracking System</strong>
        </p>
        <ul>
          <li>
            To build a Pose Recognition System utilized with MediaPipe and
            OpenCV in Python to create a system that detects and recognizes
            human poses in real-time.
          </li>
          <li>
            Used tools like NumPy and Pandas to process data and applied machine
            learning models to make the pose recognition more accurate.
          </li>
          <li>
            Collaborated with the team using Jupyter Notebooks to integrate and
            test different parts of the system, making sure everything worked
            smoothly.
          </li>
        </ul>
      </section>
      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>
            Certified in Python, Professional Certificate by Beasant
            Technologies
          </li>
          <li>Certified in Git, Professional Certificate by Make Skilled</li>
          <li>
            Certified in AI & ML, Professional Certificate by Make Skilled
          </li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email:
          <a href="mailto:prakash45297@gmail.com">
            prakash45297@gmail.com
          </a>
        </p>
        <p>
          Phone:<a href="tel: +91 6302466902">+91 6302466902</a>
        </p>
        {
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/k-prakash453/"
              target="_blank"
            >
              View Profile
            </a>
          </p>
        }
        {
          <p>
            GitHub:
            <a href="https://github.com/Prakash-453" target="_blank">
              View Repositories
            </a>
          </p>
        }
      </section>

      <footer>
        <p>&copy; 2024 Prakash. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default PortfolioBody;
