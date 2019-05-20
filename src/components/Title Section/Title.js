import React, { Component } from 'react'
import "./title.scss"

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="title__logo">Aaron Bonetti</div>
        <div className="title__jumbotron"><h1>Front-end Web Creator</h1>
        <p>My passion is invention, my tool is <span>React</span>. Responsive, engaging, and elegant are the words I devise by.</p>
        </div>
        <div className="title__nav"
        >
        <div className="title__nav__about">About</div>
        <div className="title__nav__projects">Projects</div>
        <div className="title__nav__contact">Contact</div>
        <div className="title__sidebar"></div>
        <div className="title__bottombar"></div>

        </div>

      </div>
    )
  }
}
