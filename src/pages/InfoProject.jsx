import styles from '../styles/infoProject.module.css'

import projects from '../services/projects.json'

import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const InfoProject = () => {
  const { projectType } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    document.title = 'Devi | Projects'
    setData(projects.filter(elem => elem.type === projectType))
  }, [projectType])

  return (
    <>
      <head>
        <title>{'Projects'}</title>
      </head>
      <Nav />
      <section className={styles.infoProject}>
        <h1 className={styles.infoProject__title}>{projectType === 'web' ? 'Web Projects' : 'Data Projects'}</h1>
        <div className={styles.infoProject__container}>
          {data.map(elem => <ProjectCard key={elem.id} id={elem.id} projectType={elem.type} title={elem.title} image={elem.image} shortDescription={elem.shortDescription} />)}
        </div>
      </section>
    </>
  )
}

export default InfoProject
