import React from 'react'
import "./project.scss"
import "./project-queries.scss"

export default function Project(props) {
    let technologies = props.technologies.map((item)=>{
      return  <li key={item}><i  className={`fab fa-${item}`}/></li>

    })
    return (
        <div className={`project__container ${props.gridClass}`}>
        <h1>{props.siteName}</h1>
        <hr/>
        
            <div className={`project__img ${props.imgClass}`}></div>
        <div className="project__description">{props.description}</div>
        <ul className="project__technologies">
            {technologies}
        </ul>
        <div className="project__links__container">
            <a href={props.gitLink}>Github <i className="fas fa-arrow-right"></i></a>
            <a href={props.siteLink}>Website <i className="fas fa-arrow-right"></i></a>
        </div>
        </div>
    )
}
