import { FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/projects'
import './Projects.css'

export default function Projects() {
    return (
        <section className="projects">
            <div className="projects__header">
                <h1>Projects.</h1>
                <p className="page-subtitle">
                    Here are some of the projects I've worked on. Each one is a unique
                    adventure in problem-solving and creativity.
                </p>
            </div>

            <div className="projects__grid">
                {projects.map((project) => (
                    <div key={project.name} className="project-card">
                        <div className="project-card__header">
                            <span className="project-card__emoji">{project.emoji}</span>
                            <div>
                                <div className="project-card__name">{project.name}</div>
                                <div className="project-card__year">{project.year}</div>
                            </div>
                        </div>

                        <p className="project-card__desc">{project.description}</p>

                        <p className="project-card__tech">
                            <strong>Tech: </strong>
                            {project.tech.join(', ')}
                        </p>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__link"
                        >
                            <FiExternalLink className="project-card__link-icon" />
                            {project.linkLabel}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
