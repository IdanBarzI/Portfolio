import React, { useEffect, useState } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faVest, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })
  return (
    <>
      <div className="container experience-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Experience'.split('')}
            idx={15}
          />
        </h1>
        <VerticalTimeline lineColor="#ffd700">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2017"
            dateClassName="date"
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">
              Bagrout - Tichon Ehad Haam
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Petach Tikva, Israel
            </h4>

            <section>
              <p style={{ color: '#444444' }}>• Including physics education.</p>
              <p style={{ color: '#444444' }}>
                • During my learning- I instructed in a project for helping
                junior high students who are Struggling with scientific
                schoolwork.
              </p>
              <p style={{ color: '#444444' }}>
                • Authorization for adolescent instruction from Tel-Aviv
                University.
              </p>
            </section>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2020"
            dateClassName="date"
            iconStyle={{ background: '#4b5320', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faVest} />}
          >
            <h3 className="vertical-timeline-element-title">
              Sniper - Israel Defense Forces
            </h3>
            <h4> Golani Brigade</h4>
            <section>
              <p style={{ color: '#444444' }}>
                • Full Army service: release in the rank of staff sergeant.
              </p>

              <p style={{ color: '#444444' }}>
                • Leading a professional field in the brigade.
              </p>

              <p style={{ color: '#444444' }}>
                • Responsibility for a large number of tasks - Requiring an
                ability for concentration, level-headedness, and prioritization.
              </p>

              <p style={{ color: '#444444' }}>
                • A role that demands assertiveness determination and handling a
                dense and aggressive schedule.
              </p>
            </section>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            dateClassName="date"
            iconStyle={{ background: '#ffab00', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faSuitcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Test Engineer - Align
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Or Yehuda, Israel
            </h4>
            <section>
              <p style={{ color: '#444444' }}>
                • Operating, monitoring, and testing of optic-electronic
                systems.
              </p>

              <p style={{ color: '#444444' }}>
                • Running both Automatic and manual tests.
              </p>

              <p style={{ color: '#444444' }}>
                • Integration in a team of 20 workers.
              </p>
            </section>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            dateClassName="date"
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">
              "Lohami La Hightech" Program
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Sela Collage</h4>

            <section>
              <p style={{ color: '#444444' }}>
                • programing languages: Python, C# , JavaScript, TypeScript.
              </p>

              <p style={{ color: '#444444' }}>
                • Technologies and additional subjects: OOD/OOP, ASP.NET Core /
                MVC, React.js, Angular, WPF/UWP, .NET Framework, HTML, CSS, XML,
                Linq, JSON,.
              </p>
            </section>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - present"
            dateClassName="date"
            iconStyle={{ background: '#ffab00', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faSuitcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Front End Developer - Sela Group
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Petach Tikva, Israel
            </h4>
            <section>
              <p style={{ color: '#444444' }}>
                • Collaborate with web designers and back-end engineers to
                complete projects.
              </p>

              <p style={{ color: '#444444' }}>
                • Create wireframes and mockups of site designs.
              </p>

              <p style={{ color: '#444444' }}>
                • Turn feedback into custom solutions for client needs.
              </p>

              <p style={{ color: '#444444' }}>
                • Optimize sites to improve performance and efficiency.
              </p>
            </section>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience
