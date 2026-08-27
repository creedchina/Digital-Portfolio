import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import headerImg from "../../assets/images/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = ({ onConnect }) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300);

    const toRotate = useMemo(
        () => [
            "Fullstack Developer",
            "Frontend Developer",
            "Backend Developer"
        ],
        []
    );

    const period = 2000;

    useEffect(() => {
        const tick = () => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];

            const updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (isDeleting) {
                setDelta(100);
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500);
            } else if (!isDeleting && updatedText !== fullText) {
                setDelta(300 - Math.random() * 100);
            }
        };

        const ticker = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text, delta, isDeleting, loopNum, toRotate, period]);

    return (
        <section className="banner" id="home">
            <Container>

                {/* Hero Content */}
                <Row className="align-items-center">

                    <Col xs={12} md={6} xl={7}>
                        <div className="animate__animated animate__fadeIn">

                            <span className="tagline">
                                Welcome to my Portfolio
                            </span>

                            <h1>
                                {`Hi! I'm a `}
                                <span className="txt-rotate">
                                    <span className="wrap">{text}</span>
                                </span>
                            </h1>

                            <p>
                                I'm a Software Engineer focused on building practical, 
                                responsive and user-focused applications across frontend and backend technologies. 
                                I enjoy turning ideas into reliable software while continuously expanding my technical skills.
                            </p>

                                <button
                                    onClick={onConnect}
                                    className="banner-connect-btn"
                                >
                                    Let’s Connect
                                    <ArrowRightCircle size={25} />
                                </button>

                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <div className="animate__animated animate__zoomIn">
                            <img
                                src={headerImg}
                                alt="Developer illustration"
                            />
                        </div>
                    </Col>

                </Row>

                {/* Portfolio Stats */}
                <div className="banner-stats">

                    <div className="banner-stat">
                        <h3>+6</h3>
                        <p>Projects Built</p>
                    </div>

                    <div className="banner-stat">
                        <h3>+2</h3>
                        <p>Years in Development</p>
                    </div>

                    <div className="banner-stat">
                        <h3>+1</h3>
                        <p>Full-Time Role</p>
                    </div>

                    <div className="banner-stat">
                        <h3>+1</h3>
                        <p>Capstone Project</p>
                    </div>

                </div>

            </Container>
        </section>
    );
};