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
                                    <span className="about__timeline-role">Strategy & Analytics Manager</span>
                                    <span className="about__timeline-date">Jan 2026 — Present</span>
                                </div>
                                <div className="about__timeline-subheader">
                                    <span className="about__timeline-company"><a href="https://www.gotocompany.com/">GoTo Group</a></span>
                                    <span className="about__timeline-location">Jakarta, Indonesia</span>
                                </div>
                            </div>
                        </div>
                        <div className="about__timeline-item">
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <div className="about__timeline-header">
                                    <span className="about__timeline-role">Region User Growth Analytics Manager</span>
                                    <span className="about__timeline-date">Mar 2025 - Jan 2026</span>
                                </div>
                                <div className="about__timeline-subheader">
                                    <span className="about__timeline-company"><a href="https://www.gotocompany.com/">GoTo Group</a></span>
                                    <span className="about__timeline-location">Jakarta, Indonesia</span>
                                </div>
                            </div>
                        </div>
                        <div className="about__timeline-item">
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <div className="about__timeline-header">
                                    <span className="about__timeline-role">Business Intelligence Engineer Intern</span>
                                    <span className="about__timeline-date">May 2024 — Aug 2024</span>
                                </div>
                                <div className="about__timeline-subheader">
                                    <span className="about__timeline-company"><a href="https://www.amazon.com/">Amazon</a></span>
                                    <span className="about__timeline-location">Seattle, WA</span>
                                </div>
                            </div>
                        </div>
                        <div className="about__timeline-item">
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <div className="about__timeline-header">
                                    <span className="about__timeline-role">Data Analyst</span>
                                    <span className="about__timeline-date">Sep 2021 — Jul 2023</span>
                                </div>
                                <div className="about__timeline-subheader">
                                    <span className="about__timeline-company"><a href="https://www.tokopedia.com/">Tokopedia</a></span>
                                    <span className="about__timeline-location">Jakarta, Indonesia</span>
                                </div>
                            </div>
                        </div>
                        <div className="about__timeline-item">
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <div className="about__timeline-header">
                                    <span className="about__timeline-role">Data Analyst</span>
                                    <span className="about__timeline-date">Apr 2020 — Sep 2021</span>
                                </div>
                                <div className="about__timeline-subheader">
                                    <span className="about__timeline-company"><a href="https://www.grab.com/">Grab</a></span>
                                    <span className="about__timeline-location">Jakarta, Indonesia</span>
                                </div>
                            </div>
                        </div>
                        <div className="about__timeline-item">
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <div className="about__timeline-header">
                                    <span className="about__timeline-role">City Lead and Special Projects</span>
                                    <span className="about__timeline-date">Sep 2019 — Apr 2020</span>
                                </div>
                                <div className="about__timeline-subheader">
                                    <span className="about__timeline-company"><a href="https://www.grab.com/">Grab</a></span>
                                    <span className="about__timeline-location">North Sumatra, Indonesia</span>
                                </div>
                            </div>
                        </div>
                        <div className="about__timeline-item">
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <div className="about__timeline-header">
                                    <span className="about__timeline-role">Operations Management Trainee</span>
                                    <span className="about__timeline-date">Nov 2018 — Sep 2019</span>
                                </div>
                                <div className="about__timeline-subheader">
                                    <span className="about__timeline-company"><a href="https://www.grab.com/">Grab</a></span>
                                    <span className="about__timeline-location">Various Cities, Indonesia</span>
                                </div>
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
                                    <span className="about__timeline-role">M.S. Business Analytics</span>
                                    <span className="about__timeline-date">2023 — 2024</span>
                                </div>
                                <div className="about__timeline-subheader">
                                    <span className="about__timeline-company"><a href="https://www.marshall.usc.edu/programs/graduate-programs/specialized-masters/ms-business-analytics">University of Southern California</a></span>
                                    <span className="about__timeline-location">Los Angeles, CA</span>
                                </div>
                            </div>
                        </div>
                        <div className="about__timeline-item">
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <div className="about__timeline-header">
                                    <span className="about__timeline-role">B.S. Computer Science</span>
                                    <span className="about__timeline-date">2014 — 2018</span>
                                </div>
                                <div className="about__timeline-subheader">
                                    <span className="about__timeline-company"><a href="https://www.ipb.ac.id/">IPB University</a></span>
                                    <span className="about__timeline-location">Bogor, Indonesia</span>
                                </div>
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
                            href="https://github.com/murtadhamr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about__link-item"
                        >
                            <FiGithub className="about__link-icon" />
                            <span>Follow on GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/murtadhamr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about__link-item"
                        >
                            <FiLinkedin className="about__link-icon" />
                            <span>Follow on LinkedIn</span>
                        </a>
                        <a href="mailto:muhmurtadha29@gmail.com" className="about__link-item">
                            <FiMail className="about__link-icon" />
                            <span>muhmurtadha29@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
