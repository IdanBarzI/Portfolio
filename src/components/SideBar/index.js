import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faDiagramProject,
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/IdanLogo.png'

import './index.scss'

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/Portfolio">
        <img src={LogoS} alt="logo" width="52px" height="52px" />
      </Link>
      <nav>
        <NavLink exact="false" activeclassname="active" to="/Portfolio/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/Portfolio/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="experience-link"
          to="/Portfolio/experience"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/Portfolio/projects"
        >
          <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/Portfolio/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/idanbarz/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/IdanBarzI"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar