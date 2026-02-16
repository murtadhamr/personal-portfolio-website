import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Home.css'

export default function Home() {
    return (
        <section className="home">
            <div className="home__content">
                <div className="home__avatar">
                    <img src="/avatar.jpg" alt="Avatar" />
                </div>

                <h1 className="home__heading">
                    Data Professional.
                    <br />
                    Writer.
                    <br />
                    Lifelong Learner.
                </h1>

                <div className="home__body">
                    <p>
                        Hi, I'm a data professional who's passionate about transforming raw
                        data into meaningful insights. I work with Python, SQL, and modern
                        data tools to build pipelines, dashboards, and analytical solutions.
                    </p>
                    <p>
                        I've worked with various companies from startups to enterprises,
                        helping them leverage data-driven decision making. I also enjoy
                        writing about data science, engineering, and the things I learn
                        along the way.
                    </p>
                </div>

                <div className="home__socials">
                    <a
                        href="https://github.com/murtadhamr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home__social-icon"
                        aria-label="GitHub"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/murtadhamr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home__social-icon"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin />
                    </a>
                    <a
                        href="mailto:muhmurtadha29@gmail.com"
                        className="home__social-icon"
                        aria-label="Email"
                    >
                        <FiMail />
                    </a>
                </div>
            </div>
        </section>
    )
}
