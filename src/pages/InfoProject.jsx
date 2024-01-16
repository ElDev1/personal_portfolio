import styles from '../styles/infoProject.module.css'

import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'

import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { useProjectsData } from '../services/useProjectData'

const InfoProject = () => {
  const { projectType } = useParams()
  const data = useProjectsData(projectType)

  useEffect(() => {
    document.title = 'Devi | Projects'
  }, [])

  console.log(data)
  return (
    <>
      <head>
        <title>{'Projects'}</title>
      </head>
      <Nav />
      <section className={styles.infoProject}>
        <h1 className={styles.infoProject__title}>{projectType === 'web' ? 'Web Projects' : 'Data Projects'}</h1>
        <div className={styles.infoProject__container}>
          <ProjectCard projectType={projectType} id={1} />
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
