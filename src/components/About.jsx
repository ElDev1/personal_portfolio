import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiExpress, SiTypescript } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { BiGitBranch } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'

import styles from '../styles/about.module.css'

const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.about__info}>
        <h1 className={styles.about__title}>About Me</h1>
        <p className={styles.about__presentation}>
          {"Hi! I'm a passionate and versatile Web Developer with a knack for turning great ideas into elegant, user-centric digital solutions. I am currently focused on application development using mostly React and Nextjs. If you're looking for a dedicated and skilled Full-Stack Web Developer to join your team or collaborate on exciting projects, let's connect! I'm excited to engage with like-minded professionals, share insights, and explore opportunities that push the boundaries of web development 🚀"}
        </p>
        <div>
          <h4 className={styles.techStack__title}>My Tech Stack</h4>
          <div className={styles.techStack__container}>
            <div className={styles.tech__item}>
              <AiFillHtml5 color='white' fontSize='20px'/>
              <p>HTML</p>
            </div>
            <div className={styles.tech__item}>
              <DiCss3 color='white' fontSize='20px'/>
              <p>CSS</p>
            </div>
            <div className={styles.tech__item}>
              <SiJavascript color='white' fontSize='20px'/>
              <p>Javascript</p>
            </div>
            <div className={styles.tech__item}>
              <SiTypescript color='white' fontSize='20px'/>
              <p>Typescript</p>
            </div>
            <div className={styles.tech__item}>
              <FaReact color='white' fontSize='20px'/>
              <p>React</p>
            </div>
            <div className={styles.tech__item}>
              <TbBrandNextjs color='white' fontSize='20px'/>
              <p>NextJS</p>
            </div>
            <div className={styles.tech__item}>
              <FaNodeJs color='white' fontSize='20px'/>
              <p>Node</p>
            </div>
            <div className={styles.tech__item}>
              <SiExpress color='white' fontSize='20px'/>
              <p>Express</p>
            </div>
            <div className={styles.tech__item}>
              <DiMongodb color='white' fontSize='20px'/>
              <p>MongoDB</p>
            </div>
            <div className={styles.tech__item}>
              <BiGitBranch color='white' fontSize='20px'/>
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fake__image}>
      </div>
    </section>
  )
}

export default About
