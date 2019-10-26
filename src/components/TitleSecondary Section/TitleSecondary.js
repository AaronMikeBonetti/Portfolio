import React, { Component } from 'react'
import './title-secondary.css'
import './title-secondary-queries.css'

export default class TitleSecondary extends Component {
    constructor(){
        super()
        this.state= {
          navDisplayed:true,
          popUpDisplayed:false
        }
        this.handleNavDisplay = this.handleNavDisplay.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.handlePopUp = this.handlePopUp.bind(this)
      }
    
    
      handleNavDisplay(){
        this.setState(prevState=>({
          navDisplayed: !prevState.navDisplayed
        })
        )
      }
    
      handleScroll(e){
        
        switch(e.target.className){
          case 'title-secondary__nav__about' : window.scrollTo(0, window.innerHeight)
            break
          case 'title-secondary__nav__projects' || 'title-secondary__jumbotron__button' :
            document.querySelector('.project-container__container').scrollIntoView()
            break
          case 'title-secondary__call-to-action' :
            document.querySelector('.project-container__container').scrollIntoView()
            break
          default :
          console.log('no scroll triggered')
    
        }
        
      }
    
      handlePopUp(e){
          this.setState(prevState=>({
            popUpDisplayed: !prevState.popUpDisplayed
          }))
          if(e.target.className==='title-secondary__nav__contact'){
            this.handleNavDisplay()
          }
          
      }
    render() {
        return (
            <section className='title-secondary__container'>
                <div className='title-secondary__logo'>Aaron</div>
                <nav className='title-secondary__nav__container'>
                    <button onClick={this.handleScroll} className='title-secondary__nav__projects'>Projects</button>
                    <button onClick={this.handlePopUp} className='title-secondary__nav__contact'>Contact</button>
                </nav>
                <div className={`title-secondary__contact__pop-up ${this.state.popUpDisplayed?'pop-up-displayed':'pop-up-hidden'}`} onClick={this.handlePopUp}>
                    <div className='title-secondary__contact__container'>
                        <div className='title-secondary__contact__header'><h1>Contact</h1>
                            <h3>X</h3></div>
                        <ul>
                            <li><a href='mailto:aaronmikebonetti@gmail.com' aria-label='Mail' rel='noopener noreferrer' target='_blank'>Email</a></li>
                            <li> <a href='https://www.linkedin.com/in/aaron-mike-bonetti/' aria-label='LinkedIn' rel='noopener noreferrer' target='_blank'>LinkedIn</a></li>
                            <li><a href='https://github.com/AaronMikeBonetti' aria-label='Github' rel='noopener noreferrer' target='_blank'>Github </a></li>
                            <li><a href='./AaronBonettiResume2019.pdf' aria-label='Download Resume' rel='noopener noreferrer' target='_blank' download>Resume</a></li>
                        </ul>
                    </div>
                </div>
                <div onClick={this.handleScroll} className='title-secondary__jumbotron'>
                    <h1>Front-End Web Creator</h1>
                    <p>My passion is invention, my tool is <span>React.</span> Responsive, engaging, and elegant are the words I devise by.</p>
                </div>
                <button onClick={this.handleScroll} className='title-secondary__call-to-action'>See My Work</button>
                <div className='title-secondary__triangle'></div>
                <div className='title-secondary__background-right'></div>
                <div className='title-secondary__border-right'></div>
                <div className='title-secondary__computer-img'></div>
                
            </section>
        )
    }
}
