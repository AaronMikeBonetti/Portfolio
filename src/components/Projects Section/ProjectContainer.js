import React, { Component } from 'react'
import Project from './Projects/Project'
import './project-container.css'
import './project-container-queries.css'


export default class ProjectsContainer extends Component {
    constructor(){
        super()
        this.state={
            projects:[
            {gridClass:'project__bobs-burgers__grid',siteName:"Bob's Burgers",
            description:'A fan fiction website for the hit Fox show Bob"s Burgers. Order your favorite burgers from the show!',
            imgClass:'project__bobs-burgers__img',
            technologies:['html5','css3','js','react'],gitLink:'https://github.com/AaronMikeBonetti/Bob-s-Burgers',
            siteLink:'https://bobs-burgers-restaurant.netlify.com/'},
            
            {gridClass:'project__shuttle-app__grid',siteName:'Marriott Tool',
            description:'A tool to maximize efficiency and transparency between hotels, flight crews and shuttle drivers.',
            imgClass:'project__shuttle-app__img',
            technologies:['html5','css3','js','react','node'],gitLink:'https://github.com/AaronMikeBonetti/ShuttleApp',
            siteLink:'https://shuttleappfrontend.herokuapp.com/'},
            
            {gridClass:'project__launch-sight__grid',siteName:'Launch-Sight',
            description:'Catch a launch from your own campsite. This site will help you find the closest campsites to upcoming rocket launches.',
            imgClass:'project__launch-sight__img',
            className:'project-container__launch-sight',
            technologies:['html5','css3','js','react'],gitLink:'https://github.com/AaronMikeBonetti/RocketLaunchCamping',
            siteLink:'https://launch-sight.netlify.com/'},

            {gridClass:'project__may-you__grid',siteName:'MYHE',
            description:'May You Have Enough (MYHE) is A non profit organization that feeds the homeless. This site helps to spread the message and fund the mission through donations.',
            imgClass:'project__may-you__img',
            technologies:['html5','css3','js'],gitLink:'https://github.com/AaronMikeBonetti/MayYouHaveEnough',
            siteLink:'https://may-you-have-enough.netlify.com/'},
            
            {gridClass:'project__bad-drink__grid',siteName:'Bad Drink Quiz',
            description:'This is a quiz site that suggests a terrible drink for you. *NOTE* I do NOT suggest making these drinks!',
            imgClass:'project__bad-drink__img',
            technologies:['html5','css3','js'],gitLink:'https://github.com/AaronMikeBonetti/BadDrink',
            siteLink:'https://bad-drink-quiz.netlify.com/'}
            ],
            // project1Active:false,
            
        
        }
    }
   
    handleLink = (projectLink) => {
        window.location.href= projectLink
    }
    
    render(){
        
        let projects = 
            this.state.projects.map((project)=>{
                return  <Project 
                key={project.siteName}
                gridClass={project.gridClass}
                siteName={project.siteName} 
                description={project.description}
                imgClass={project.imgClass}
                technologies={project.technologies}
                siteLink={project.siteLink}
                gitLink={project.gitLink}
                handleLink={()=>this.handleLink(project.siteLink)}
            />
        
            })
        return (
            <div className='project-container__container'>
                <div className='project-container__top__triangle'></div>
                
                <h1 className='projects-container__header'>Projects</h1>
                
                
                {/* <div className='project-container__bottom__square'></div> */}
                {projects}   
            </div>
            )
        }
    }


