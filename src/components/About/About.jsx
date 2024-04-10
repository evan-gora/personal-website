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
                    <img src={calc} alt="Student Image" />
                    <div className={styles.aboutItemText}>
                        <h3>Student</h3>
                        <p>I am currently a sophomore studying computer science at Miami University. I am interested in internship opportunites for the summer of 2025.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={exp} alt="Experiance Image" />
                    <div className={styles.aboutItemText}>
                        <h3>Experience</h3>
                        <p>Most of my experience is in Java development, but I have some experience with many other languages such as Python and C++.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={int} alt="Interests Image" />
                    <div className={styles.aboutItemText}>
                        <h3>Interests</h3>
                        <p>I have interests in areas such as backend development and artifical intelligence. I am currently enrolled in a machine learning class and am working on expanding my knowledge on the subject, with plans to create a project leveraging AI.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
};