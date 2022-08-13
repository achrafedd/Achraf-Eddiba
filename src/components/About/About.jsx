import React from "react";
import image from "../../images/Profile.jpg";
import "./About.css";

const About = () => {
    return (
        <section className="app__about" id="about">
            <div className="container">
                <div className="image">
                    <img src={image} alt="Achraf Eddiba" />
                </div>
                <div className="content">
                    <h2 className="small-title">Nice to meet you,</h2>
                    <h3 className="alt-title">I am Achraf Eddiba</h3>
                    <p className="main-text">
                        I'm a Moroccan Frontend Developer
                    </p>
                    <p className="content-text">Code And Learn.</p>
                    <p className="main-text">
                        Frontend is my true passion and I really enjoy the whole
                        process of creating UIs, from the first brainstorming,
                        wireframes, mockups, design, all the way until the final
                        product.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
