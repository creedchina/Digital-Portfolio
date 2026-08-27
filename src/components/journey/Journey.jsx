import { Container } from "react-bootstrap";
import {
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaLaptopCode,
    FaArrowUpRightFromSquare,
    FaGithub
} from "react-icons/fa6";
import "./Journey.css";

export const Journey = () => {
    const academicJourney = [
        {
            year: "2020",
            type: "Education",
            icon: <FaGraduationCap />,
            title: "Higher Certificate in ICT",
            organization:
                "Cape Peninsula University of Technology (CPUT)",
            description:
                "Started my journey in Information and Communication Technology, building a foundation in computing and software development."
        },
        {
            year: "2021 — 2023",
            type: "Personal Growth",
            icon: <FaLaptopCode />,
            title: "Personal & Professional Development",
            organization: "Independent Development",
            description:
                "A period away from formal studies focused on personal growth, self-development and continuing to build my interest in technology."
        },
        {
            year: "2024",
            type: "Education",
            icon: <FaGraduationCap />,
            title: "First Year — ICT Application Development",
            organization:
                "Cape Peninsula University of Technology (CPUT)",
            description:
                "Returned to formal studies and continued developing my foundation in application development, programming and software engineering."
        },
        {
            year: "2025",
            type: "Education",
            icon: <FaGraduationCap />,
            title: "Second Year — ICT Application Development",
            organization:
                "Cape Peninsula University of Technology (CPUT)",
            description:
                "Expanded my technical knowledge through practical application development, databases, programming and software engineering."
        }
    ];

    const professionalProjects = [
        {
            title: "Medical Landing Page",
            description:
                "A responsive web experience developed as part of my professional software development work.",
            technologies: "React · Web Development",
            liveUrl: "https://landing-home-page-zeta.vercel.app/",
            githubUrl: "https://github.com/creedchina/Landing_Home-Page"
        },
        {
            title: "WC-Connect",
            description:
                "A full-stack connectivity platform integrating React, Supabase and Google Maps to provide availability and hotspot functionality.",
            technologies: "React · Supabase · Google Maps",
            liveUrl: "https://www.wcconnect.co.za",
            githubUrl: "https://github.com/Appmaniazar-Projects/WC-Connect-"
        }
    ];

    const renderProjectLinks = (project) => (
        <div className="project-links">
            {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    Live Project
                    <FaArrowUpRightFromSquare />
                </a>
            )}

            {project.githubUrl && (
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    GitHub
                    <FaGithub />
                </a>
            )}
        </div>
    );

    return (
        <section className="journey" id="journey">
            <Container>

                {/* Heading */}
                <div className="journey-heading">
                    <span className="journey-label">
                        MY JOURNEY
                    </span>

                    <h2>
                        Learning, Building & <span>Growing</span>
                    </h2>

                    <p>
                        My journey combines academic development with
                        practical software engineering experience,
                        allowing me to learn, build and grow through
                        real-world projects.
                    </p>
                </div>

                {/* Academic Timeline */}
                <div className="journey-timeline">

                    <div className="journey-line"></div>

                    {academicJourney.map((item, index) => (
                        <div
                            className={`journey-item ${
                                index % 2 === 0
                                    ? "journey-left"
                                    : "journey-right"
                            }`}
                            key={item.year}
                        >
                            <div className="journey-dot">
                                {item.icon}
                            </div>

                            <div className="journey-content">

                                <span className="journey-year">
                                    {item.year}
                                </span>

                                <span className="journey-type">
                                    {item.type}
                                </span>

                                <h3>{item.title}</h3>

                                <h4>{item.organization}</h4>

                                <p>{item.description}</p>

                            </div>
                        </div>
                    ))}

                    {/* 2026 — Key Transition */}
                    <div className="journey-item journey-left journey-current">

                        <div className="journey-dot">
                            <FaGraduationCap />
                        </div>

                        <div className="journey-content">

                            <span className="journey-year">
                                2026
                            </span>

                            <span className="journey-type">
                                Current · Education & WIL
                            </span>

                            <h3>
                                Third Year — ICT Application Development
                            </h3>

                            <h4>
                                Cape Peninsula University of Technology (CPUT)
                            </h4>

                            <p>
                                Currently completing my third year in ICT
                                Application Development. As part of my
                                academic programme, I am completing a
                                six-month Work-Integrated Learning (WIL)
                                period while continuing with academic
                                requirements and assessments.
                            </p>

                            <div className="journey-highlight">
                                <FaBriefcase />
                                <span>
                                    6-Month Work-Integrated Learning (WIL)
                                </span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Professional Journey */}
                <div className="journey-section-divider"></div>

                <div className="professional-journey">

                    <div className="professional-icon">
                        <FaBriefcase />
                    </div>

                    <div className="professional-content">

                        <span className="journey-section-label">
                            2026 · PROFESSIONAL JOURNEY
                        </span>

                        <div className="professional-title-row">

                            <h3>
                                Software Developer — AppManiazar
                            </h3>

                            <span className="employment-badge">
                                FULL-TIME
                            </span>

                        </div>

                        <p>
                            Working full-time as a Software Developer at
                            AppManiazar, gaining hands-on experience
                            designing, developing and integrating
                            real-world software solutions while completing
                            my academic journey.
                        </p>

                        {/* Professional Projects */}
                        <div className="professional-projects">

                            {professionalProjects.map((project) => (
                                <div
                                    className="journey-project"
                                    key={project.title}
                                >

                                    <div className="project-icon">
                                        <FaCode />
                                    </div>

                                    <div className="project-info">

                                        <h4>{project.title}</h4>

                                        <span className="project-tech">
                                            {project.technologies}
                                        </span>

                                        <p>
                                            {project.description}
                                        </p>

                                        {renderProjectLinks(project)}

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>
                </div>

                {/* Academic Project */}
                <div className="journey-project-feature">

                    <div className="feature-icon">
                        <FaCode />
                    </div>

                    <div className="feature-content">

                        <span className="journey-section-label">
                            2026 · CAPSTONE PROJECT
                        </span>

                        <h3>eduConnect</h3>

                        <span className="project-tech">
                            Booking Platform · Academic Project
                        </span>

                        <p>
                            A booking platform developed as my capstone
                            project, inspired by platforms such as
                            Booking.com.
                        </p>

                        <div className="project-links">

                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="project-link"
                            >
                                Live Project
                                <FaArrowUpRightFromSquare />
                            </a>

                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="project-link"
                            >
                                GitHub
                                <FaGithub />
                            </a>

                        </div>

                    </div>
                </div>

                {/* Current Personal Project */}
                <div className="journey-project-feature current-project">

                    <div className="feature-icon">
                        <FaLaptopCode />
                    </div>

                    <div className="feature-content">

                        <span className="journey-section-label">
                            CURRENT · PERSONAL PROJECT
                        </span>

                        <h3>Digital Portfolio</h3>

                        <span className="project-tech">
                            React · Personal Branding
                        </span>

                        <p>
                            A personal developer portfolio designed to
                            showcase my skills, projects, experience and
                            professional growth.
                        </p>

                    </div>
                </div>

            </Container>
        </section>
    );
};