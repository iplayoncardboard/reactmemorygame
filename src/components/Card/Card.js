import React from "react"
import './Card.css'


const Card = props =>(
    <div id={props.id} className='card' onClick={()=> props.processGuess(props.id)}>
        <img src={props.image} alt={props.name}></img>
    </div>
)

export default Card