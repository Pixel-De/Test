import React from "react"
import { FaMoon , FaSun} from 'react-icons/fa'

import './style.scss'


const bgChanger = props =>{
   
  

    return(
        <div  
              onClick={props.clickHandler}
              className="bg-button">
             {props.click ? <FaSun/> : <FaMoon/>} 
        </div>
    )
}
export default bgChanger