import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import "./style.scss"
import "../App.scss"
import Button from "./button"
import BgChanger from "./switch"

const Header = props =>{
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  
  
  const clicked= ()=>{
    dispatch({type: "counter/bgchange", payload: {bg: !counter.bg}});
    console.log(counter.bg)

}
   
    return(

        <header className="App-header" style={counter.bg===true ?
                           {background:"white",color:"black"} : 
                           {background: "#1b1b1c", color:"white"}}>
        My header{useSelector(val=>val?.counter.value)}
        <div className="header-item-container">
        <Button clickHandler={()=>props.setMove(0)} isDark={counter.bg}  />
        <Button clickHandler={()=>props.setMove(1)} isDark={counter.bg}  />
        <Button clickHandler={()=>props.setMove(2)} isDark={counter.bg} />
        <BgChanger clickHandler={clicked} click={counter.bg}/>
        
        
        </div>
        
        
      </header>

    )
}
export default Header