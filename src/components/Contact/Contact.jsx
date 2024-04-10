import React from 'react'
import styles from './Contact.module.css'
import email from '../../assets/contact/Message.png'
import linkedin from '../../assets/contact/linkedin.png'
import github from '../../assets/contact/github.png'

export const Contact = () => {
  return (
    <footer id = "contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={email} alt="Email Logo" className={styles.contactImg}/>
                <a href="mailto:evan.gora1@gmail.com">evan.gora1@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={linkedin} alt="Linkedin Logo" className={styles.contactImg}/>
                <a href="https://www.linkedin.com/in/evangora/">linkedin.com/in/evangora</a>
            </li>
            <li className={styles.link}>
                <img src={github} alt="Github Logo" className={styles.contactImg}/>
                <a href="https://github.com/evan-gora">github.com/evan-gora</a>
            </li>
        </ul>
    </footer>
  )
}
