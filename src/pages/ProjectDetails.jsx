import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import projects from '../services/projects.json'

import DetailsCard from '../components/DetailsCard'
import Nav from '../components/Nav'

import styles from '../styles/projectDetails.module.css'

const ProjectDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    const info = projects.filter(elem => elem.id === id)
    setData(info[0])
  }, [id])

  return (
    <>
      <Nav />title
      <section className={styles.projectDetails}>
        <DetailsCard title={data.title} description={data.description} img={data.image} techStack={data.techStack} github={data.github} demo={data.demo} />
      </section>
    </>
  )
}

export default ProjectDetails
