import React from "react";
import './Container.css'


let Container = props => (
    <div className="containter" >
        {props.children}
    </div>
)

export default Container

