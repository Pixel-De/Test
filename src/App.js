import React,{ useState } from 'react';

import './App.scss';
import Door from "./components/door"
import Header from "./components/header"
import Body from "./components/body"
import { useSelector } from 'react-redux';


//reducer(state , action)
//store ( state,reducer)
//context api
//connect, provider

function App() {
  const [move,setMove] = useState(0)
  const dark = useSelector(data=> data.counter.bg);
  return (
    <div className="App" style={dark===true ? {background:"white" } : {background:"#2f3030"}}>
       <Door/>
       <Header setMove={setMove}/>
       <Body move={move} />
    </div>
  );
}

export default App;
