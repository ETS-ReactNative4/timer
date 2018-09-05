import {createStore} from "redux";

const initialState = {
    times: [{
        name:"EGG BOILING",
        hours:0,
        minutes:0,
        seconds:0,
        running:true,
    },{
        name: "Cake baking",
        hours: 0,
        minutes: 0,
        seconds: 0,
        running: false,
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
        default:
            return state
    }
}

const store = createStore(rootReducer);
export default store;