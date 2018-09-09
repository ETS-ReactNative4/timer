import React from 'react';
import { connect } from 'react-redux';
import "./index.css"
import Timer from "./timer"
import Rename from "./rename";
const uuidv1 = require('uuid/v1');

const mapStateToProps = state => {
  return {
    names:state.names,
  }
}

export class ConnectedList extends React.Component{
  render = () => {
    return(
      <div>
        {
          this.props.names.map(e=>{
            if (e.name !== "COMPLETE COMPONENT")return (<Timer key={uuidv1()} iden={e.id}> </Timer>);
            else return(<Rename key={uuidv1()} iden={e.id}></Rename>);
          })
        }
      </div>
    )
      }
};

const List = connect(mapStateToProps)(ConnectedList);

export default List