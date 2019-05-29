import React, { Component } from 'react'
import Project from "./Projects/Project"
import "./project-container.scss"
import "./project-container-queries.scss"


export default class ProjectsContainer extends Component {
    constructor(){
        super()
        this.state={
            projects:[
            {gridClass:"project__bobs-burgers__grid",siteName:"Bob's Burgers",
            description:"A fake website for the Fox show Bob's Burgers.",
            imgClass:"project__bobs-burgers__img",
            technologies:["html5","css3","js","react"],gitLink:"https://github.com/AaronMikeBonetti/Bob-s-Burgers",
            siteLink:""},
            
            {gridClass:"project__launch-sight__grid",siteName:"Launch-Sight",
            description:"A campsite finding website for seeing rocket launches.",
            imgClass:"project__launch-sight__img",
            className:"project-container__launch-sight",
            technologies:["html5","css3","js","react"],gitLink:"https://github.com/AaronMikeBonetti/RocketLaunchCamping",
            siteLink:""},

            {gridClass:"project__may-you__grid",siteName:"May You Have Enough",
            description:"A Non-Profit website for a homeless charity.",
            imgClass:"project__may-you__img",
            technologies:["html5","css3","js"],gitLink:"https://github.com/AaronMikeBonetti/MayYouHaveEnough",
            siteLink:""},
            
            {gridClass:"project__bad-drink__grid",siteName:"Bad Drink Quiz",
            description:"A Quiz that suggests a terrible drink for you.",
            imgClass:"project__bad-drink__img",
            technologies:["html5","css3","js"],gitLink:"https://github.com/AaronMikeBonetti/MayYouHaveEnough",
            siteLink:""}
            ],
            // project1Active:false,
            
        
        }
    }
        
    //     setInterval(()=>{
    //         function between(project,max,min){
    //             return project <= max && project >= min
    //         }
    //         let a = document.getElementsByClassName("project__bobs-burgers__grid")[0].getBoundingClientRect().top

            
            
            
    //         if(between(a,200,-200)){
    //             this.setState({
    //                 project1Active:"project__bobs-burgers__img"
    //             })
    //         }
    //         else{
    //             return false
    //         }
        
    //       },300)
    // }
    
    
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
            />
        
            })
        return (
            <div className="project-container__container">
                <h1 className="projects-container__header">Projects</h1>
                {projects}   
            </div>
            )
        }
    }


