import React, { Component } from 'react'
import "./about.scss"
import "./about-queries.scss"

 class About extends Component {
  render() {
    return (
      <div className="about__container">
        
        <div className="about__header">About</div>
        <div className="about__top__triangle"></div>
        <div className="about__bottom__triangle"></div>
        
        <div className="about__content__container">
        <i className="fas fa-user-circle"></i>
          <div className="about__content__header">
            <h3>Passion</h3> 
            <h2>&</h2>
            <h3>Precision</h3></div>
            <hr/>
            <p className="about__content">
         I'm a web designer/developer from Denver, Colorado.My reality is delivering dreams. I strive to develop responsive, engaging, fast sites written in clean, sustainable code. When I'm not developing, you can find me honing my skills at the skatepark or pushing my limits at the parkour gym.  </p>
        </div>
        
        <div className="about__skills__container">
        <i className="fas fa-tools"></i>
        <h3 className="about__skills__header">
            Skills
            </h3>
            <hr/>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Git</li>
            <li>Gimp</li>
            <li>Node</li>
          </ul>
        </div>
        
      </div>
    )
  }
}

export default About

