import contact from '../assets/contact.svg'

import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa'

import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
      <img className={styles.contact__image} src={contact} alt="contact image" />
      <h1 className={styles.contact__title}>{"Let's Connect"}</h1>
      <p className={styles.contact__email}>deviamaolo@gmail.com</p>
      <button className={styles.contact__button}>Send a message!</button>
      <div className={styles.contact__links}>
        <FaGithub className={styles.link__icon} />
        <FaLinkedin className={styles.link__icon}/>
        <FaDev className={styles.link__icon}/>
      </div>
    </section>
  )
}

export default Contact
