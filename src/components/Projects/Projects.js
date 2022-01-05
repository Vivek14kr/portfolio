import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id="projects" className="section projects">
      <div>
        <h2 className="section__titlee">
          Projects
          <div className="line"></div>
        </h2>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects
