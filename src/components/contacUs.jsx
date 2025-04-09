import React from 'react';
import Background from "../assets/portfoilo/background4.png"
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const styles = {
    container: {
        background: `URL(${Background})`,
        backgroundRepeat: "no-repeat",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        width: "100vw",
        padding: "2rem 1rem",
        minHeight: "100vh",
        boxSizing: "border-box",
        backgroundSize: "cover",
    },
    heading: {
        fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
        textAlign: "center",
        marginBottom: "0.5rem"
    },
    paragraph: {
        fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto 1rem"
    },
    form: {
        width: "70%",
        maxWidth: "500px",
        padding: "0 1rem",
    },
    inputWrapper: {
        marginBottom: "1.5rem"
    },
    input: {
        color: "black",
        border: "none",
        padding: "12px 20px",
        width: "70%",
        borderRadius: "20px",
        fontSize: "1rem"
    },
    textarea: {
        color: "black",
        border: "none",
        padding: "12px 20px",
        width: "70%",
        height: "30%",
        borderRadius: "10px",
        fontSize: "1rem",
        resize: "vertical",
        minHeight: "50px"
    },
    button: {
        color: "black",
        background: "rgba(0, 237, 231, 1)",
        outline: "none",
        border: "none",
        padding: "12px 24px",
        borderRadius: "20px",
        width: "70%",
        fontWeight: "bold",
        fontSize: "1rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        ':hover': {
            transform: "scale(1.02)",
            boxShadow: "0 0 10px rgba(0, 237, 231, 0.7)"
        }
    }
};

function ContactUs() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Contact Us</h1>
            <p style={styles.paragraph}>We'd love to hear from you! Please fill out the form below.</p>

            <form style={styles.form}>
                <div style={styles.inputWrapper}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name...'
                        style={styles.input}
                    />
                </div>

                <div style={styles.inputWrapper}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='YourEmail@gmail.com'
                        style={styles.input}
                    />
                </div>

                <div style={styles.inputWrapper}>
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Type Your Message Here.....'
                        style={styles.textarea}
                    ></textarea>
                </div>

                <button type="submit" style={styles.button}>Send Message</button>
            </form>

        </div>
    );
}

export default ContactUs;
