import {createStore} from "redux";
const uuidv1 = require('uuid/v1');

const initialState = {
    times: [{
        name:"EGG BOILING",
        hours:0,
        minutes:0,
        seconds:0,
        running:true,
        id:uuidv1().toString(),
    },{
        name: "Cake baking",
        hours: 0,
        minutes: 0,
        seconds: 0,
        running: false,
        id:uuidv1().toString(),
    }]
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TIME":
            return {...state, times:[...state.times, action.payload]};
        case "TOGGLE_RUNNING":
            return {...state, times:[...state.times.map(i => {
                if(i.name === action.payload){
                    if (i.running === true){i.running=false;}
                    else{i.running=true}
                }
                return i;
            })]};
        case "DELETE_TIMER":
            return {...state,times:[...state.times.filter(i => {
                if (i.id !== action.payload){return true}
                else {return false};
            })]};
        case "CHANGE_NAME":
            return { ...state,times: [...state.times.map(i => {
                if (action.payload[0] === i.id){
                    i.name=action.payload[1];
                }
                return i;
            })]};
        default:
            return state
    }
}

const store = createStore(rootReducer);
export default store;