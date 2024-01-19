import DetailsCard from '../components/DetailsCard'
import Nav from '../components/Nav'

import styles from '../styles/projectDetails.module.css'

const ProjectDetails = () => {
  return (
    <>
      <Nav />
      <section className={styles.projectDetails}>
        <DetailsCard />
      </section>
    </>
  )
}

export default ProjectDetails
