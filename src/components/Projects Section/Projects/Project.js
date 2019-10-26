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
        <hr/>
        <a href={props.siteLink} aria-label={props.siteName} rel='noopener noreferrer' target='_blank'>{props.siteName}</a>
        
        </div>
        
        
            <div onClick={props.handleLink} className={`project__img ${props.imgClass}`}></div>
        <div className='project__description'>{props.description}</div>
        <ul className='project__technologies'>
            {technologies}
        </ul>
        <div className='project__links__container'>
            <a href={props.gitLink} aria-label='Github' rel='noopener noreferrer' target='_blank' >GITHUB</a>
            <a href={props.siteLink} aria-label='Github' rel='noopener noreferrer' target='_blank' >WEBSITE</a>
        </div>
        </div>
    )
}
