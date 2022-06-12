import React, { useState, useEffect } from 'react'
import { ProjectList } from '../../../Constants/Projects'

import './index.scss'

const ImageSlider = () => {
  const [current, setCurrent] = useState(0)
  const length = ProjectList.length

  const nextSlide = () => {
    setCurrent((current) => {
      if (current === length - 1) {
        return 0
      }
      return current + 1
    })
  }

  useEffect(() => {
    nextSlide()
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="slider">
      {ProjectList.map((image, index) => {
        return (
          <div key={image.src} className="container">
            <div className={index === current ? `slide active` : 'slide'}>
              <img
                src={image.src}
                alt="Dashboard Image"
                width="50%"
                height="40%"
                // className={classes.src}
              />
              <p>{image.name}</p>
              {image.skills.map}
              <p>{}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider
