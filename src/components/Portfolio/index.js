import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { portfolio } from "../../data/portfolio";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="images-container">
                    {portfolio.map(project => (
                        <div className="image-box" key={project.id}>
                            <img src={project.image} className="portfolio-image" alt="portfolio" />
                            <div className="content">
                                <p className="title">{project.title}</p>
                                <h4 className="description">{project.description}</h4>
                                <button className="btn" onClick={() => window.open(project.url)}>
                                    View
                                </button>
                                {project.liveUrl !== null ? <button className="btn" onClick={() => window.open(project.liveUrl)}>
                                    View Live
                                </button> : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Loader type="ball-grid-pulse" />
        </>
    );
}

export default Portfolio;