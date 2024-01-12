import styles from '../styles/infoProject.module.css'

import ProjectCard from '../components/ProjectCard'

const InfoProject = () => {
  return (
    <section className={styles.infoProject}>
      <h1 className={styles.title}>Title</h1>
      <div className={styles.infoProject__container}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

export default InfoProject
