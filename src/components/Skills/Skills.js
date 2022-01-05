import uniqid from 'uniqid'
import { frontskills, backskills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">
        Skills
        <div className="line"></div>
      </h2>

      <div className="skillstech">
        <div className="techbox">
          <h3 className="section__title">FRONT-END</h3>
          <ul className="skills__list">
            {frontskills.map((skill) => (
              <div className="skills__list-item btn btn--plain">
                <img className="imagetech" alt="not" src={skill.image} />
                <li className="techtitle" key={uniqid()}>
                  <p>{skill.skillname}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>

        <div className="techbox">
          <h3 className="section__title">BACK-END</h3>
          <ul className="skills__list">
            {backskills.map((skill) => (
              <div className="skills__list-item btn btn--plain">
                <img className="imagetech" alt="not" src={skill.image} />
                <li className="techtitle" key={uniqid()}>
                  <p>{skill.skillname}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills
