import './Contact.css'
import mailIcon from "../../assets/images/mailIcon.png"
import LocationIcon from "../../assets/images/LocationIcon.png"

const Contact = () => {

    return (

        <section id = "connect" className="contact-container">
        <div className="container">

            <section className="contact-header">
            <h2> Let's Connect</h2>

            <p className='tagline'>
                Full Stack Software Developer | React • Java • Spring Boot • SQL
            </p>

            <p className="subtitle">
                Thank you for visiting my portfolio. I'm a Software Developer with a Diploma in Information and Communication Technology (Application Development),
                currently gaining professional experience at AppManiazar by developing modern React applications.
                Beyond frontend development, I have a strong passion for backend engineering and 
                enjoy building robust applications using Java, Spring Boot, SQL, RESTful APIs, and object-oriented design.
                As I continue growing my skills and pursue my Bachelor's degree, I'm always open to connecting with professionals and 
                exploring opportunities to create impactful software.
            </p>
            </section>

            <section className="contact-info">
            <h3>Get in Touch</h3>

            <address className="contact-details" >
                <div className="contact-item">

                    <img src={mailIcon} alt="Email Icon" />
                    <h4>Email</h4>
                    
                    <p><a href="mailto:djiakengfrank@gmail.com">
                        djiakengfrank@gmail.com
                    </a></p>
                </div>
            

            <div className="contact-item">

                <img src={LocationIcon} alt="Location Icon" />
                <h4>Location</h4>
                <p>Cape Town, South Africa</p>
            </div>
            </address>
            </section>

            <section className="resume-section">

                <h3>Resume</h3>
                <p className="subtitle">
                Download my resume to learn more about my <br/>
                experience, education, and technical skills.
                </p>

            <a
            href='#file path of the Resume'
            download
            className='download-btn'>
            Download Resume
            </a>

            </section>

        </div>
        </section>

); 
}; 
export default Contact; 