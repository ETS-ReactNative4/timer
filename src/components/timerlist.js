import React from 'react';
import { connect } from 'react-redux';
import "./index.css"
import Timer from "./timer"
import Rename from "./rename";
const uuidv1 = require('uuid/v1');


const mapStateToProps = state => {
  return {times:state.times}
}

const ConnectedList = (times) => (
  <div>
    {
      times.times.map(e=>{
        if (e.name !== "COMPLETE COMPONENT")return (<Timer key={uuidv1()} data={e}> </Timer>);
        else return(<Rename key={uuidv1()} data={e}></Rename>);
      })
    }
  </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List