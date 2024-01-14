import styles from '../styles/infoProject.module.css'

import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'

import { useParams } from 'react-router-dom'

import { useProjectsData } from '../services/useProjectData'

const InfoProject = () => {
  const { projectType } = useParams()
  const data = useProjectsData(projectType)

  console.log(data)
  return (
    <>
      <Nav />
      <section className={styles.infoProject}>
        <h1 className={styles.infoProject__title}>{projectType === 'web' ? 'Web Projects' : 'Data Projects'}</h1>
        <div className={styles.infoProject__container}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </>
  )
}

export default InfoProject
