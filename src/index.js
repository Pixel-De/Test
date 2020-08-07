import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux"
import counterReducer from "./components/Redux/reducer"

/*const counterReducer = (state = {value: 0, bg:true}, action) => {
  switch(action.type){
    case 'counter/increment' :
    return{  ...state,
      value: state.value + 1,
      }
     break;
     case 'counter/decrement' :
    return{  ...state,
        value: state.value - 1,
     }
     break;
     case 'counter/bgchange':
     return{
       ...state,
       bg: action.payload.bg,
     } ;   
  }
 
  return state
} */

ReactDOM.render(
  <Provider store={createStore(combineReducers({counter: counterReducer, another: "test"}))}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
