import "./Portfolio.css";
import "./NavBar.css";
function Main() {
  return (
    <div>
      <header>
        <h1>Prakash</h1>
        <p>Fresher Job Seeker</p>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#about" aria-label="About Section">
              About
            </a>
          </li>
          <li>
            <a href="#education" aria-label="Education Section">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" aria-label="Skills Section">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" aria-label="Projects Section">
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" aria-label="Certifications Section">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" aria-label="Contact Section">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Main;
