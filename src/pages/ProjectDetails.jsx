import DetailsCard from '../components/DetailsCard'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import styles from '../styles/projectDetails.module.css'

const ProjectDetails = () => {
  return (
    <>
      <Nav />
      <section className={styles.projectDetails}>
        <DetailsCard />
      </section>
      <Footer />
    </>
  )
}

export default ProjectDetails
