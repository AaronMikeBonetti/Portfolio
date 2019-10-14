import React from 'react'
import './project.css'
import './project-queries.css'

export default function Project(props) {
    let technologies = props.technologies.map((item)=>{
      return  <li key={item}><i  className={`fab fa-${item}`}/></li>

    })
    return (
        <div className={`project__container ${props.gridClass}`}>

        <div className='project__header'>
        <a href={props.siteLink}>{props.siteName}</a>
        <hr/>
        </div>
        
        
            <div onClick={props.handleLink} className={`project__img ${props.imgClass}`}></div>
        <div className='project__description'>{props.description}</div>
        <ul className='project__technologies'>
            {technologies}
        </ul>
        <div className='project__links__container'>
            <a href={props.gitLink}>GITHUB</a>
            <a href={props.siteLink}>WEBSITE</a>
        </div>
        </div>
    )
}
