import React from "react";
import styles from "./About.module.css"
import abtImg from "../../assets/about/aboutImg.png"
import calc from "../../assets/about/student.png"
import exp from "../../assets/about/experience.png"
import int from "../../assets/about/interests.png"


export const About = () => {
    return(
    <section className={styles.container} id = "about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={abtImg} alt="About Image" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={calc} alt="Student Image" className={styles.aboutItemImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Student</h3>
                        <p>I am currently a sophomore studying computer science at Miami University. I am interested in internship opportunites for the summer of 2025.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={exp} alt="Experiance Image" className={styles.aboutItemImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Experience</h3>
                        <p>Most of my experience is in Java development, but I have some experience with many other languages such as Python and C++.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={int} alt="Interests Image" className={styles.aboutItemImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Interests</h3>
                        <p>I am not sure what exactly I want to do and I love to explore all different parts of computer science. I am currently working on further improving my neural network to be over 90% accurate, as well as a Flask application for my Premier League data.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
};