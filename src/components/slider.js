import React,{useState} from "react"

import '../App.scss'
import { useDispatch } from "react-redux"


const Slider = () =>{
    const[val,setVal] = useState(1)
    const dispatch = useDispatch();
    const clickHandler = (type) =>{
        dispatch({type: `${type}`})
    }
    return(
        <div id="1" className="body-item">
            <input type="number" onChange={e=>setVal(e.target.value)}/>
          <button onClick={()=>{dispatch({type:"counter/increment" ,payload: val})}}>+</button>
          <button onClick={()=>{dispatch({type:"counter/decrement" , payload: val})}}>-</button>
        </div>
    )
}

export default Slider