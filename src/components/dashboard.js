import React from 'react';
import {connect} from 'react-redux';
import List from "./timerlist";
import "./index.css";
import { bindActionCreators } from 'redux';
import addTime from '../actions/actions-addTime';
const uuidv1 = require('uuid/v1');

export class DashboardArray extends React.Component{
  constructor(){super();}
  
  handlesubmit = () => {
    const a = uuidv1().toString();
    this.props.addTime([{
      hours: 0,
      minutes: 0,
      seconds: 0,
      running: false,
      id:a,
    },{
      id:a,
      name: "COMPLETE COMPONENT",
    }]);
  }

  render = () => {
    return(
      <div class="ctr">
        <List />
        <p></p>
        <button class="plus ctr btn" onClick={this.handlesubmit}>+</button>        
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTime},dispatch);
};

const Dashboard = connect(null,mapDispatchToProps)(DashboardArray);

export default Dashboard;