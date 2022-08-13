import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const message = useRef();
    const [send, setSend] = useState(false);
    const [unSend, setUnSend] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        if (
            name.current.value === "" ||
            email.current.value === "" ||
            message.current.value === ""
        ) {
            setUnSend(true);
            setTimeout(() => {
                setUnSend(false);
            }, 5000);
        } else {
            emailjs
                .sendForm(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
                    form.current,
                    process.env.REACT_APP_PUBLIC_KEY
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
            name.current.value = "";
            email.current.value = "";
            message.current.value = "";
            setSend(true);
            setTimeout(() => {
                setSend(false);
            }, 5000);
        }
    };
    return (
        <section className="app__contact" id="contact">
            {send && <div className="send">Thenk you for your message ❤️</div>}
            {unSend && (
                <div className="unsend">
                    Please add information before sending
                </div>
            )}
            <div className="container">
                <h2 className="alt-title">I’m ready to talk...</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        ref={name}
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    <input
                        ref={email}
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <textarea
                        ref={message}
                        name="message"
                        placeholder="Message"
                    ></textarea>
                    <button className="btn" type="submit">
                        <IoMdSend />
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
