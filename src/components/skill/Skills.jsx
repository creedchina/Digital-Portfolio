import { Container, Row, Col } from "react-bootstrap";
import {
    FaCode,
    FaServer,
    FaDatabase,
    FaProjectDiagram,
    FaTools
} from "react-icons/fa";
import "./Skills.css";

export const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <FaCode />,
            skills: [
                "React",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "Responsive Web Design"
            ]
        },
        {
            title: "Backend Development",
            icon: <FaServer />,
            skills: [
                "Java",
                "Spring Boot",
                "Python",
                "REST APIs",
                "API Integration"
            ]
        },
        {
            title: "Databases & Backend Services",
            icon: <FaDatabase />,
            skills: [
                "SQL",
                "MySQL",
                "Apache Derby",
                "Supabase",
                "Database Design",
                "CRUD Operations"
            ]
        },
        {
            title: "Software Architecture & Engineering",
            icon: <FaProjectDiagram />,
            skills: [
                "System Architecture",
                "Application Architecture",
                "API Architecture",
                "Database Architecture",
                "Component-Based Design",
                "Object-Oriented Design",
                "Requirements Analysis",
                "System Integration"
            ]
        },
        {
            title: "Development Tools & Engineering",
            icon: <FaTools />,
            skills: [
                "Git",
                "GitHub",
                "IntelliJ IDEA",
                "VS Code",
                "PyCharm",
                "NetBeans",
                "Version Control",
                "Deployment"
            ]
        }
    ];

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-heading">
                            <h2>Skills</h2>
                            <p>
                                Technologies, engineering practices, and tools I use
                                to design, build, integrate, and deliver software
                                solutions.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="skills-row">
                    {skillCategories.map((category, index) => (
                        <Col
                            xs={12}
                            md={6}
                            lg={4}
                            key={index}
                            className="skill-column"
                        >
                            <div className="skill-card">
                                <div className="skill-icon">
                                    {category.icon}
                                </div>

                                <h3>{category.title}</h3>

                                <div className="skill-list">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};