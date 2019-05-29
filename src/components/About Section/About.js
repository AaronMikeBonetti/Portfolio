import React, { Component } from 'react'
import "./about.scss"
import "./about-queries.scss"

 class About extends Component {
  render() {
    return (
      <div className="about__container">
        <div className="about__header__container"><h1>Hi, I'm Aaron. Lets make something together!</h1></div>
        <div className="about__top__triangle"></div>
        <div className="about__bottom__triangle"></div>
        
        <div className="about__content__container">
          <p>
            <span>Self-taught. self-driven. </span>
         I'm a web designer/developer from Denver, Colorado. I strive to deliver responsive, engaging, and fast sites written in clean, sustainable code. When I'm not developing, you can find me honing my skills at the skatepark or pushing my limits at the parkour gym.  </p>
        </div>
        
        <div className="about__skills__container">
          <h1>Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Git</li>
            <li>Gimp</li>
          </ul>
        </div>
        
      </div>
    )
  }
}

export default About

