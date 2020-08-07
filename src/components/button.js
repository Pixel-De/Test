import React from "react"

import './style.scss'

const Button = (props) =>{

    return(
        <div 
             className="button"
             onClick={props.clickHandler}
             style={props.isDark===false ? {border:"1px solid white"} : {border:"1px solid black"}}>
            <div className={props.isDark===true ? "flow-dark" : "flow-white"}>
            {props.value ?? "button"}
            </div>
        </div>
    )
}

export default Button