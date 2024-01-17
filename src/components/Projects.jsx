import { Link } from 'react-router-dom'

import data from '../assets/data.svg'
import web from '../assets/web.svg'

import styles from '../styles/projects.module.css'

const Projects = () => {
  return (
    <>
      <section id="projects" className={styles.projects}>
        <h1 className={styles.projects__title}>Projects</h1>
        <div className={styles.projects__container}>
          <div className={styles.projects__type}>
            <img src={web} alt="web development image" />
            <Link to="/projects/web">Web Projects</Link>
          </div>
          <div className={styles.projects__type}>
            <img src={data} alt="data applications image" />
            <Link to="/projects/data">Data Projects</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
