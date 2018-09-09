import {createStore} from "redux";
const uuidv1 = require('uuid/v1');
let a = uuidv1().toString()
let b = uuidv1().toString()
const initialState = {
    times: [{
        hours:0,
        minutes:0,
        seconds:0,
        running:false,
        id:a
    },{
        hours: 0,
        minutes: 0,
        seconds: 0,
        running: false,
        id:b,
    }],
    names:[{
        id:a,
        name: "EGG BOILING",
    },{
        id:b,
        name: "Cake baking",
    }],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TIME":
            return {...state, 
                times:[...state.times, action.payload[0]], 
                names:[...state.names,action.payload[1]],
            };
        case "TOGGLE_RUNNING":
            return {...state, times:[...state.times.map(i => {
                if(i.id === action.payload){
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
            return { ...state,names: [...state.names.map(i => {
                if (action.payload[0] === i.id){
                    i.name = action.payload[1];
                }
                return i;
            })]};
        case "INCREMENT_TIME":
            return {...state,times:[ ...state.times.map(i => {
                if(action.payload === i.id){
                    i.seconds+=1
                    if(i.seconds==60){i.seconds=0;i.minutes+=1;}
                    if(i.minutes==60){i.minutes=0;i.hours+=1;}
                }
                return i;
            })]};
        default:
            return state
    }
}

const store = createStore(rootReducer);
export default store;