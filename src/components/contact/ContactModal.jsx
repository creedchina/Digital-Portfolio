import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaXmark, FaPaperPlane } from "react-icons/fa6";
import "./ContactModal.css";

export const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSending(true);
        setStatus("");

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            };

            await emailjs.send(
                "service_la8nlvo",
                "template_g6q83c9",
                templateParams,
                "UFDAefszT8u1qLjxI"
            );

            setStatus("success");

            setFormData({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        } finally {
            setSending(false);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="contact-modal-overlay" onClick={onClose}>

            <div
                className="contact-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="contact-modal-close"
                    onClick={onClose}
                    aria-label="Close contact form"
                >
                    <FaXmark />
                </button>

                <div className="contact-modal-header">

                    <span className="contact-modal-label">
                        GET IN TOUCH
                    </span>

                    <h2>
                        Let's <span>Connect</span>
                    </h2>

                    <p>
                        Have a project, opportunity or idea?
                        I'd love to hear from you.
                    </p>

                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="contact-form-group">

                        <label htmlFor="name">
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="contact-form-group">

                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="contact-form-group">

                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell me a little about your message..."
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    {status === "success" && (
                        <div className="contact-status success">
                            Message sent successfully. Thank you!
                        </div>
                    )}

                    {status === "error" && (
                        <div className="contact-status error">
                            Something went wrong. Please try again.
                        </div>
                    )}

                    <button
                        type="submit"
                        className="contact-submit"
                        disabled={sending}
                    >

                        {sending ? (
                            "Sending..."
                        ) : (
                            <>
                                Send Message
                                <FaPaperPlane />
                            </>
                        )}

                    </button>

                </form>

            </div>

        </div>
    );
};