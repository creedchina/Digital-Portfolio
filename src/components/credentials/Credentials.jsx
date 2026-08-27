import { Container } from "react-bootstrap";
import {
    FaGraduationCap,
    FaCertificate,
    FaArrowUpRightFromSquare
} from "react-icons/fa6";
import "./Credentials.css";

export const Credentials = () => {

    const academicCredentials = [
        {
            title: "Higher Certificate in Information and Communication Technology",
            institution: "Cape Peninsula University of Technology (CPUT)",
            status: "Completed · 2020",
            description:
                "Completed my Higher Certificate in ICT, establishing my foundation in information technology and application development."
        },
        {
            title: "Diploma in ICT: Application Development",
            institution: "Cape Peninsula University of Technology (CPUT)",
            status: "In Progress · Expected Completion: End of 2026",
            description:
                "Currently completing my Diploma in ICT: Application Development, with a focus on software development, practical projects and professional experience."
        }
    ];

    const professionalLearning = [
        {
            title: "Learning Git and GitHub",
            shortTitle: "Git & GitHub",
            description:
                "Developed practical knowledge of Git version control and GitHub-based software development workflows.",
            issuer: "LinkedIn Learning",
            credentialUrl: ""
        },
        {
            title: "UX Design 1, 2 & 3",
            shortTitle: "UX Design",
            description:
                "Completed a UX design learning series covering core principles and practices for designing user-focused digital experiences.",
            issuer: "LinkedIn Learning",
            credentialUrl: ""
        },
        {
            title: "Introduction to IT Architecture",
            shortTitle: "IT Architecture",
            description:
                "Explored the fundamentals of IT architecture and how technology components work together within broader systems.",
            issuer: "LinkedIn Learning",
            credentialUrl: ""
        },
        {
            title: "Database Foundations: Database Management",
            shortTitle: "Database Management",
            description:
                "Built foundational knowledge of database management concepts, structures and database technologies.",
            issuer: "LinkedIn Learning",
            credentialUrl: ""
        }
    ];

    return (
        <section className="credentials" id="credentials">
            <Container>

                {/* Heading */}
                <div className="credentials-heading">

                    <span className="credentials-label">
                        CREDENTIALS
                    </span>

                    <h2>
                        Education & <span>Continuous Learning</span>
                    </h2>

                    <p>
                        My academic qualifications and continued professional
                        learning reflect my commitment to developing both
                        technical knowledge and practical software development
                        skills.
                    </p>

                </div>

                {/* Academic Qualifications */}
                <div className="credentials-subheading">

                    <FaGraduationCap />

                    <h3>
                        Academic Qualifications
                    </h3>

                </div>

                <div className="academic-credentials">

                    {academicCredentials.map((credential) => (
                        <div
                            className="academic-credential"
                            key={credential.title}
                        >

                            <div className="academic-icon">
                                <FaGraduationCap />
                            </div>

                            <div className="academic-content">

                                <span className="credential-status">
                                    {credential.status}
                                </span>

                                <h4>
                                    {credential.title}
                                </h4>

                                <h5>
                                    {credential.institution}
                                </h5>

                                <p>
                                    {credential.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Professional Learning */}
                <div className="credentials-subheading professional-heading">

                    <FaCertificate />

                    <h3>
                        Professional Learning
                    </h3>

                </div>

                <div className="professional-credentials">

                    {professionalLearning.map((credential) => (
                        <div
                            className="credential-flip"
                            key={credential.title}
                        >

                            <div className="credential-flip-inner">

                                {/* Front */}
                                <div className="credential-face credential-front">

                                    <div className="credential-icon">
                                        <FaCertificate />
                                    </div>

                                    <span>
                                        LINKEDIN LEARNING
                                    </span>

                                    <h4>
                                        {credential.shortTitle}
                                    </h4>

                                    <p>
                                        Certificate of Completion
                                    </p>

                                    <small>
                                        Hover to explore
                                    </small>

                                </div>

                                {/* Back */}
                                <div className="credential-face credential-back">

                                    <FaCertificate />

                                    <h4>
                                        {credential.title}
                                    </h4>

                                    <span>
                                        {credential.issuer}
                                    </span>

                                    <p>
                                        {credential.description}
                                    </p>

                                    {credential.credentialUrl && (
                                        <a
                                            href={credential.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Credential
                                            <FaArrowUpRightFromSquare />
                                        </a>
                                    )}

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </Container>
        </section>
    );
};