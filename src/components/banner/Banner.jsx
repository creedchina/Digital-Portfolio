import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Banner.css';
import headerImg from "../../assets/images/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300); // Start with a steady initial typing speed

    const toRotate = useMemo(() => ["Fullstack Developer", "Frontend Developer", "Backend Developer"], []);
    const period = 2000;

    useEffect(() => {
        const tick = () => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];
            
            // Calculate next chunk of text
            const updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            // Handle typing speed logic
            if (isDeleting) {
                // Keep standard deletion speed stable
                setDelta(100); 
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period); // Pause at the end of the full word
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500); // Short pause before typing the next word
            } else if (!isDeleting && updatedText !== fullText) {
                // Add a little realistic human variance when typing out a new letter
                setDelta(300 - Math.random() * 100);
            }
        };

        // Use setTimeout instead of setInterval for dynamic delays
        const ticker = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text, delta, isDeleting, loopNum, toRotate, period]); // Now runs smoothly on consecutive steps

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="animate__animated animate__fadeIn">
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>
                                {`Hi! I'm a `}{" "}
                                <span className="txt-rotate">
                                    <span className="wrap">{text}</span>
                                </span>
                            </h1>
                            <p>I'm a passionate Fullstack Developer with expertise in both frontend and backend development. I enjoy creating dynamic and responsive web applications that provide seamless user experiences.</p>
                            <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>      
                    <Col xs={12} md={6} xl={5}>
                        <div className="animate__animated animate__zoomIn">
                            <img src={headerImg} alt="Header Img"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};