import React from "react";
import styles from "./Projects.module.css"
import premLogo from "../../assets/projects/premlogo.png"
import cnnImg from "../../assets/projects/cnnImage.png"

export const Projects = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            <div className={styles.project}>
                <img src={premLogo} alt="Premier League Logo" className={styles.image}/>
                <h3 className={styles.projectTitle}>Premier League Web Scraper</h3>
                <p className={styles.description}>A web scraper that gathers data for Premier League seasons since 1888/1889.</p>
                <ul className={styles.skills}>
                    <li className={styles.skill}>Python</li>
                    <li className={styles.skill}>Beautiful Soup</li>
                    <li className={styles.skill}>Pandas</li>
                    <li className={styles.skill}>Numpy</li>
                </ul>
                <div className={styles.links}>
                    <a href="https://github.com/evan-gora/PremScraper" className={styles.link}>Source</a>
                    <a href="https://www.kaggle.com/datasets/evangora/premier-league-data" className={styles.link}>Dataset</a>
                </div>
            </div>
            <div className={styles.project}>
                <img src={cnnImg} alt="Convolutional Image" className={styles.image}/>
                <h3 className={styles.projectTitle}>CIFAR10 Convolutional Neural Network</h3>
                <p className={styles.description}>An 86% accurate convolutional neural network trained on the CIFAR10 dataset.</p>
                <ul className={styles.skills}>
                    <li className={styles.skill}>Python</li>
                    <li className={styles.skill}>Pytorch</li>
                </ul>
                <div className={styles.links}>
                    <a href="https://github.com/evan-gora/CIFAR10CNN" className={styles.link}>Source</a>
                </div>
            </div>
        </div>
    </section>

  );
}
