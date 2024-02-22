import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import projects from '../services/projects.json'

import DetailsCard from '../components/DetailsCard'
import Nav from '../components/Nav'

import styles from '../styles/projectDetails.module.css'

const ProjectDetails = () => {
  const { id, projectType } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    const info = projects.filter(elem => elem.id === id)
    console.log(info)
    setData(info[0])
  }, [id])

  return (
    <>
      <Nav />title
      <section className={styles.projectDetails}>
        {
          projectType === 'web' ? (
            <DetailsCard title={data.title} description={data.description} img={data.image} techStack={data.techStack} github={data.github} demo={data.demo} />
          ) : (
            <DetailsCard title={data.title} description={data.description} img={data.image} techStack={data.techStack} repository={data.repository} />
          )
        }
      </section>
    </>
  )
}

export default ProjectDetails
