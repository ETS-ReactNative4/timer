import React from 'react';
import { connect } from 'react-redux';
import "./index.css"

const mapStateToProps = state => {
    return {times:state.times}
}

const btn = (i) => {
    if (i === true) {
        return <button class = "red btn" > Stop </button>
    } else {
        return <button class = "green btn" > Stop </button>
    }
}

const ConnectedList = (times) => {
    let cnt = 0
    return(
        <div>
            {
                times.times.map(e=>{
                    {cnt=cnt+1}
                    return(
                        <div class="cont ctr">
                            <h2 class="bold">{e.name}</h2> 
                            <p class="ctr">{e.hours}:{e.minutes}:{e.seconds}</p>
                            {btn(e.running)} 
                            <p></p>
                        </div>
                    )
                })
            }
        </div>
    );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List