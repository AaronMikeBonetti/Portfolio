import React, { Component } from 'react'
import './title.css'
import './title-queries.css'


export default class Title extends Component {
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
      case 'title__logo__container'  : window.scrollTo(0,0)
        break
      case 'title__logo' : window.scrollTo(0,0)
        break
      case 'title__nav__about' : window.scrollTo(0, window.innerHeight)
        break
      case 'title__nav__projects' || 'title__jumbotron__button' :
        document.querySelector('.project-container__container').scrollIntoView()
        break
      case 'title__jumbotron__button' :
        document.querySelector('.project-container__container').scrollIntoView()
        break
      default :
      alert('no scroll case')

    }
    
  }

  handlePopUp(e){
      this.setState(prevState=>({
        popUpDisplayed: !prevState.popUpDisplayed
      }))
      if(e.target.className==='title__nav__contact'){
        this.handleNavDisplay()
      }
      
  }
  

  render() {
  
    return (
      <div className='title'>
        <div className='title__nav__background'></div>
        {/* <div onClick={this.handleScroll}className='title__logo__container'> */}
          {/* <div className='title__logo'></div> */}
        {/* </div> */}
        <div className={`title__contact__pop-up ${this.state.popUpDisplayed?'pop-up-displayed':'pop-up-hidden'}`} onClick={this.handlePopUp}>
          <div className='title__contact__container'>
          <div className='title__contact__header'><h1>Contact</h1>
          <h3>X</h3></div>
          
          <ul>
            <li><a href='mailto:aaronmikebonetti@gmail.com'>Email</a></li>
            <li> <a href='https://www.linkedin.com/in/aaron-mike-bonetti/'>Linkedin</a></li>
            <li><a href='https://github.com/AaronMikeBonetti'>Github </a></li>
            <li><a href='../../../public/Aaron Bonetti Resume 2020.pdf' download>Resume</a></li>
            <li><a href='./Aaron Bonetti Resume 2020.pdf' download>Resume</a></li>
            <li><a href='./Aaron Bonetti Resume 2020.pdf' download>Resume</a></li>
            <li><a href='./Aaron Bonetti Resume 2020.pdf' download>Resume</a></li>
          </ul>
          </div>
        </div>
        <div onClick={this.handleNavDisplay} className={this.state.navDisplayed?'title__nav__button__closed':'title__nav__button__opened'}></div>
        
        
        <div className='title__jumbotron'><h1>Front-end Web Creator</h1>
        <div className='title__jumbotron__background'></div>
        <p>My passion is invention, my tool is <span>React.</span> Responsive, engaging, and elegant are the words I devise by.</p>
        <button className='title__jumbotron__button' onClick={this.handleScroll}>My Work</button>
        </div>
        <div className='title__top__triangle'></div>
        <div className='title__info__container'>
          
        <div className='title__img'></div>
        <h1>Aaron Bonetti</h1>
        
        <div className='title__social__container'>
        <a href='mailto:aaronmikebonetti@gmail.com'><i className='fas fa-envelope-square'></i></a>
        <a href='https://www.linkedin.com/in/aaron-mike-bonetti/'><i className='fab fa-linkedin'></i></a>
        <a href='https://github.com/AaronMikeBonetti'><i className='fab fa-github-square'></i></a>
        <a href='../../../public/Aaron Bonetti Resume 2020.pdf' download><i className='far fa-file-pdf'></i></a>
        </div>
        </div>
        <div onClick={this.handleNavDisplay} className={`title__nav__fake__background ${this.state.navDisplayed?'closed':'opened'}`}></div>
        <div className={`title__nav ${this.state.navDisplayed?'closed':'opened'}`}> 
        {/* <div onClick={this.handleScroll}className='title__nav__about'>About</div> */}
        <div onClick={this.handleScroll}className='title__nav__projects'>Projects</div>
        <div onClick={this.handlePopUp} className='title__nav__contact'>Contact</div>
        
        </div>
        <div className='title__bottom__triangle'></div>
        <div className='title__middle__square'></div>

      </div>
    )
  }
}
