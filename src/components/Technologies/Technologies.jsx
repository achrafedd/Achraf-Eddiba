import React from "react";
import "./Technologies.css";

const Technologies = () => {
    return (
        <section className="app__tech">
            <div className="container">
                <h2 className="small-title">
                    My experience includes but not limited
                </h2>
                <div className="techs">
                    <ul>
                        <li className="main-text">HTML</li>
                        <li className="main-text">css</li>
                        <li className="main-text">JavaScript</li>
                        <li className="main-text">Reactjs</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
