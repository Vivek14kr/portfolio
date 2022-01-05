import { contact } from '../../portfolio'
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

import './Contact.css'
import { about } from "../../portfolio";

const Contact = () => {
  if (!contact.email) return null
const {social } = about;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__titleee">Contact</h2>
      <div id="line1"></div>
      <div>
        <a
          href={`mailto: ${contact.email}`}
          aria-label="github"
          className="link link--icon "
        >
          <EmailIcon id="email" />
        </a>
      </div>

      <div className="about__contact center">
        {social && (
          <>
            <div>
              {social.github && (
                <a
                  href={social.github}
                  aria-label="github"
                  className="link link--icon "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon id="github" />
                </a>
              )}
            </div>
            <div>
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label="linkedin"
                  className="link link--icon "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon id="linkedin" />
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Contact
