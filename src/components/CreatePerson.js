import React from "react"
import './components-css/CreatePerson.scss'

class CreatePerson{
    constructor(_name,_age){
        this.name = _name
        this.age= _age
    }
    CreateJSX(){
        return(
            <div className="container">
            <h1 className="content">Hi I'm {this.name}</h1>
            <h1 className="content">I'm {this.age} Years Old</h1>
            </div>
        )
    }
    
}
// let CreatePerson = person.map(person.CreateJSX)

export default CreatePerson
