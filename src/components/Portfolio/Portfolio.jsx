import React from "react";
import Card from "./Card/Card";
import { projects } from "../../constants";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <section className="app__portfolio" id="protfolio">
            <div className="container">
                <h2 className="main-title">Lastest Projects</h2>
                <div className="box">
                    {projects.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
