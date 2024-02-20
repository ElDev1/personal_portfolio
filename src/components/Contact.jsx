import contact from '../assets/contact.svg'

import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
      <img className={styles.contact__image} src={contact} alt="contact image" />
      <h1 className={styles.contact__title}>{"Let's Connect"}</h1>
      <p className={styles.contact__email}>deviamaolo@gmail.com</p>
      <button className={styles.contact__button}>Send a message!</button>
      <div className={styles.contact__links}>
        <Link to='https://github.com/ElDev1' target='_blank' rel='noopener noreferrer'>
          <FaGithub className={styles.link__icon} />
        </Link>
        <Link to='https://www.linkedin.com/in/deviamaolo/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className={styles.link__icon}/>
        </Link>
        <Link to='https://dev.to/deviamaolo' target='_blank' rel='noopener noreferrer'>
          <FaDev className={styles.link__icon}/>
        </Link>
      </div>
    </section>
  )
}

export default Contact
