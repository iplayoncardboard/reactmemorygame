import React from "react";
import './Container.css'

import Background from './beerBG.jpg'

const bgImg = {
    backgroundImage:`url(${Background}`,
    backgroundRepeat: 'round'
}

let Container = props => (
    <div className="containter" style={bgImg}>
        {props.children}
    </div>
)

export default Container

