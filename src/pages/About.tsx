import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './About.css'

export default function About() {
    return (
        <section className="about">
            <div className="about__grid">
                {/* Left column — content */}
                <div className="about__text">
                    <h1>About</h1>

                    {/* 1. Brief description */}
                    <p>
                        Hey there! I'm a data professional with a passion for turning
                        complex datasets into actionable insights. With experience spanning
                        data engineering, analytics, and machine learning, I enjoy building
                        end-to-end data solutions that drive real impact.
                    </p>
                    <p>
                        I created this website to share what I've learned throughout my
                        career and to document my ongoing journey in the data world.
                    </p>

                    {/* 2. Professional Experience */}
                    <h2 className="about__section-title">Experience</h2>
                    <div className="about__timeline">
                        <div className="about__timeline-item">
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <div className="about__timeline-header">
                                    <span className="about__timeline-role">Senior Data Engineer</span>
                                    <span className="about__timeline-date">2024 — Present</span>
                                </div>
                                <span className="about__timeline-company">TechCorp Inc.</span>
                                <p className="about__timeline-desc">
                                    Leading data platform initiatives, building scalable pipelines
                                    processing 10M+ records daily using Python, Spark, and Airflow.
                                </p>
                            </div>
                        </div>
                        <div className="about__timeline-item">
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <div className="about__timeline-header">
                                    <span className="about__timeline-role">Data Engineer</span>
                                    <span className="about__timeline-date">2022 — 2024</span>
                                </div>
                                <span className="about__timeline-company">FinData Solutions</span>
                                <p className="about__timeline-desc">
                                    Built real-time analytics pipelines for fintech products,
                                    reducing data latency by 80% and improving dashboard reliability.
                                </p>
                            </div>
                        </div>
                        <div className="about__timeline-item">
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <div className="about__timeline-header">
                                    <span className="about__timeline-role">Data Analyst</span>
                                    <span className="about__timeline-date">2020 — 2022</span>
                                </div>
                                <span className="about__timeline-company">StartupXYZ</span>
                                <p className="about__timeline-desc">
                                    Created automated reporting systems and dashboards serving
                                    cross-functional teams across the organization.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Education */}
                    <h2 className="about__section-title">Education</h2>
                    <div className="about__timeline">
                        <div className="about__timeline-item">
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <div className="about__timeline-header">
                                    <span className="about__timeline-role">B.S. Computer Science</span>
                                    <span className="about__timeline-date">2016 — 2020</span>
                                </div>
                                <span className="about__timeline-company">University of Technology</span>
                            </div>
                        </div>
                    </div>

                    {/* 4. Skills */}
                    <h2 className="about__section-title">Skills</h2>
                    <div className="about__skills">
                        <div className="about__skill-group">
                            <h3 className="about__skill-label">Languages</h3>
                            <div className="about__skill-tags">
                                <span className="about__skill-tag">Python</span>
                                <span className="about__skill-tag">SQL</span>
                                <span className="about__skill-tag">JavaScript</span>
                                <span className="about__skill-tag">TypeScript</span>
                            </div>
                        </div>
                        <div className="about__skill-group">
                            <h3 className="about__skill-label">Data & ML</h3>
                            <div className="about__skill-tags">
                                <span className="about__skill-tag">Apache Spark</span>
                                <span className="about__skill-tag">Apache Airflow</span>
                                <span className="about__skill-tag">dbt</span>
                                <span className="about__skill-tag">Pandas</span>
                                <span className="about__skill-tag">scikit-learn</span>
                            </div>
                        </div>
                        <div className="about__skill-group">
                            <h3 className="about__skill-label">Cloud & Infra</h3>
                            <div className="about__skill-tags">
                                <span className="about__skill-tag">AWS</span>
                                <span className="about__skill-tag">GCP</span>
                                <span className="about__skill-tag">Docker</span>
                                <span className="about__skill-tag">PostgreSQL</span>
                                <span className="about__skill-tag">Redis</span>
                            </div>
                        </div>
                        <div className="about__skill-group">
                            <h3 className="about__skill-label">Tools</h3>
                            <div className="about__skill-tags">
                                <span className="about__skill-tag">Git</span>
                                <span className="about__skill-tag">Tableau</span>
                                <span className="about__skill-tag">Jupyter</span>
                                <span className="about__skill-tag">MLflow</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right column — photo & social links */}
                <div className="about__sidebar">
                    <div className="about__photo">
                        <img src="/avatar.jpg" alt="Portrait" />
                    </div>

                    <div className="about__links">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about__link-item"
                        >
                            <FiGithub className="about__link-icon" />
                            <span>Follow on GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about__link-item"
                        >
                            <FiLinkedin className="about__link-icon" />
                            <span>Follow on LinkedIn</span>
                        </a>
                        <a href="mailto:hello@example.com" className="about__link-item">
                            <FiMail className="about__link-icon" />
                            <span>hello@example.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
