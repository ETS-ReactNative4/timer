const initialState = [
  {
    name:"Egg Boiling",
    id:"2ce7f38a-b43d-11e8-96f8-529269fb1459",
  },{
    name:"Cake baking",
    id:"2ce7f75e-b43d-11e8-96f8-529269fb1459",
  }
]

export default (state=initialState,action)=>{
  switch(action.type){
    case "ADD_TIME":
      return [...state,action.payload[1]];
    case "DELETE_TIMER":
      return state.filter(i=>{
        return(i.id !== action.payload)
      });
    case "CHANGE_NAME":
      return state.map(i=>{
        if(action.payload[0] === i.id){
          i.name = action.payload[1];
        }
        return i;
      });
    default:
      return state
  }
}