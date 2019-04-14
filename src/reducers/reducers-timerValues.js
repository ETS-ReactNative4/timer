const initialState = [{
  hours:0,
  minutes:0,
  seconds:0,
  running:false,
  id:"2ce7f38a-b43d-11e8-96f8-529269fb1459"
},{
  hours: 0,
  minutes: 0,
  seconds: 0,
  running: false,
  id:"2ce7f75e-b43d-11e8-96f8-529269fb1459",
}];

export default (state=initialState,action)=>{
  switch(action.type){
    case "ADD_TIME":
      return [...state,action.payload[0]]
    case "TOGGLE_RUNNING":
      return state.map(e => {
        if(e.id === action.payload){
          if(e.running){e.running = false}
          else {e.running=true}
        }
        return e
      })
    case "DELETE_TIMER":
      return state.filter(i => {
        return(i.id !== action.payload)
      });
    case "INCREMENT_TIME":
      return state.map(i => {
        if(action.payload === i.id){
            i.seconds+=1
            if(i.seconds===60){i.seconds=0;i.minutes+=1;}
            if(i.minutes===60){i.minutes=0;i.hours+=1;}
        }
        return i;
      });
    case "RESET_TIMER":
    return state.map(i=>{
      if(action.payload === i.id){
        i.hours = 0;
        i.minutes = 0;
        i.seconds = 0;
      }
      return i;
    })
    default:
      return state
  }
}