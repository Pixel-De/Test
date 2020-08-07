import React from "react"
import { useSelector, useDispatch, useStore } from "react-redux"
import { bindActionCreators } from "redux"

import './style.scss'
import '../App.scss'
import Slider from "./slider"

const actions = {
    increment: () => {
        return { type: "counter/increment"}},
    decrement: () => ({ type: "counter/decrement"})
}
const Body = props =>{
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.bg);
    //const store = useStore();
    console.log(counter);
    const inc = bindActionCreators(actions.increment, dispatch);

    //console.log(inc);

    //console.log(store.getState());

    //console.log(counter);

    const decrement = () => {
        dispatch(actions.decrement());
    }

    return(
        <div className="body" onScroll={()=>{ 
            console.log("scrolling")}}> 
            
            <div 
                className="slider" 
                style={props.move===1 ? {transform : "translateX(-100vw)"} : props.move===2 ? {transform : "translateX(-200vw)"} :  {transform : "translateX(0vw)"}}>
            <Slider/>
            <Slider/>
            <Slider/>
            </div>
            <div className="back" ></div>
            
        </div>
    )
}

export default Body