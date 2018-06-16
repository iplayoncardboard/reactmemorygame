import React from "react";
import './Nav.css'

//Nav will receive about state

const Nav = props =>(
    <nav>
        <ul>
            <li id='name' className='navItem'>Micro Brew Memory</li>
            <li id='message' className='navItem'>{props.message}</li>
            <li id='score' className='navItem'>Score: {props.score} | High Score: {props.highScore}</li>
        </ul>
    </nav>
)

export default Nav