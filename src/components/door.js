import React,{ useState } from "react"

import "./style.scss"

const Door = props =>{
    
     const [ move, setMove ] = useState(0);
    
     const up =()=>{
         setMove(1);
     }

    return(
       <div className={move===0 ? "index" :"index up"}>
         <a onClick={up} className="button-up">
           <span></span>
           <span></span>
           <span></span>
           <span></span>
            Start now!
         </a>
       </div>    
    
           

    )
}
export default Door