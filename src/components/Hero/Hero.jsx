import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.Container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Evan</h1>
        <p className={styles.description}>
          I'm a sophomore computer science student at Miami University with
          experience using many different languages such as Java, C++, and
          Python. Reach out if you would like to learn more!
        </p>
        <a href="mailto:evan.gora1@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("images/profile.png")} alt="Profile Image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.botomBlur} /> 
    </section>
  );
};

export default Hero;
