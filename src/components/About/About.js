import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <section id="about" className="section about">
      <div className="about center">
        <img
          className="profpic"
          src="/profpic.png"
          width="200"
          height="200"
          alt=""
        />

        {name && (
          <h1>
            Hi, I am <span className="about__name">{name}.</span>
          </h1>
        )}

        {role && <h2 className="about__role">A {role}.</h2>}

        <div className="about__contact center">
          {resume && (
            <a href={resume} download>
              <span type="button" className="btn btn--outline">
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label="github"
                  className="link link--icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label="linkedin"
                  className="link link--icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
        <h2 className="section__title" id="title">
          About Me
        </h2>
        <p className="about__desc">{description && description}</p>
      </div>
    </section>
  );
}

export default About
