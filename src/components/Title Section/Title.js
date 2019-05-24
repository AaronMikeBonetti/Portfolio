import React, { Component } from 'react'
import "./title.scss"
import "./title-queries.scss"

export default class Title extends Component {
  constructor(){
    super()
    this.state= {
      navDisplayed:true
      
    }
    this.handleNavDisplay = this.handleNavDisplay.bind(this)
  }

  handleNavDisplay(){
    this.setState(prevState=>({
      navDisplayed: !prevState.navDisplayed
    })
    )
    
  }

  render() {
    console.log(this.state)
    return (
      <div className="title">
        <div className="title__logo__container">
        <div className="title__logo"></div>
        </div>
        <div onClick={this.handleNavDisplay} className={this.state.navDisplayed?"title__nav__button__closed":"title__nav__button__opened"}></div>
        
        
        <div className="title__jumbotron"><h1>Front-end Web Creator</h1>
        <p>My passion is invention, my tool is <span>React</span>. Responsive, engaging, and elegant are the words I devise by.</p>
        </div>
        <div className="title__info__container">
        <div className="title__img"></div>
        <h1>Aaron Bonetti</h1>
        
        <div className="title__social__container">
        <a href="mailto:aaronmikebonetti@gmail.com"><i className="fas fa-envelope-square"></i></a>
        <a href="https://www.linkedin.com/in/aaron-mike-bonetti/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/AaronMikeBonetti"><i className="fab fa-github-square"></i></a>
        
        
        </div>
        </div>
        

        <div className={`title__nav ${this.state.navDisplayed?"closed":"opened"}`}> 
        <div className="title__nav__about">About</div>
        <div className="title__nav__projects">Projects</div>
        <div className="title__nav__contact">Contact</div>
        </div>
        <div className="title__triangle"></div>

      </div>
    )
  }
}
