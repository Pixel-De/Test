
const CounterReducer = (state = {value: 0, bg:true }, action) => {
    switch(action.type){
      case 'counter/increment' :
      return{  ...state,
        value: state.value + +action.payload,
        }
       break;
       case 'counter/decrement' :
      return{  ...state,
          value: state.value - action.payload,
       }
       break;
       case 'counter/bgchange':
       return{
         ...state,
         bg: action.payload.bg,
       } ;   
       return state
    }
   
    return state;
  }

  export default CounterReducer