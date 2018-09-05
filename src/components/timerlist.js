import React from 'react';
import { connect } from 'react-redux';
import "./index.css"
import Timer from "./timer"
const uuidv1 = require('uuid/v1');

const mapStateToProps = state => {
  return {times:state.times}
}

const ConnectedList = (times) => {
  let cnt = 0
  return(
    <div>
      {
        times.times.map(e=>{
          {cnt=cnt+1}
          return(
            <Timer key={uuidv1()} data={e}></Timer>
          )
        })
      }
    </div>
  );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List