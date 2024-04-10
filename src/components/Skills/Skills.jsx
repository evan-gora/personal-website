import React from "react";
import styles from "./Skills.module.css"
import cppLogo from "../../assets/skills/c++logo.png"
import javaLogo from "../../assets/skills/javalogo.png"
import pythonLogo from "../../assets/skills/pythonlogo.png"
import mySQLlogo from "../../assets/skills/mysql.png"
import htmlLogo from "../../assets/skills/htmllogo.png"
import cssLogo from "../../assets/skills/csslogo.png"
import Resume from "../../assets/skills/resume.pdf"

export const Skills = () => (
    <section className={styles.container} id="skills">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <ul className={styles.skillsItems}>
                <li className={styles.skillsItem}>
                    <img src={cppLogo} alt="C++ Logo" className={styles.skillsImage} />
                </li>
                <li className={styles.skillsItem}>
                    <img src={javaLogo} alt="Java Logo" className={styles.skillsImage} />
                </li>
                <li className={styles.skillsItem}>
                    <img src={pythonLogo} alt="Python Logo" className={styles.skillsImage} />
                </li>
                <li className={styles.skillsItem}>
                    <img src={mySQLlogo} alt="mySQL Logo" className={styles.skillsImage} />
                </li>
            </ul>
            <ul className={styles.skillsItems}>
                <li className={styles.skillsItem}>
                    <img src={htmlLogo} alt="HTML Logo" className={styles.skillsImage} />
                </li>
                <li className={styles.skillsItem}>
                    <img src={cssLogo} alt="CSS Logo" className={styles.skillsImage} />
                </li>
            </ul>
            <iframe src={Resume} className={styles.resume}/>
        </div>
    </section>
)