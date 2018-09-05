import React from 'react';
import {connect} from 'react-redux';
import List from "./timerlist";
import "./index.css";
import {addTime} from "../actions/addTime";

const mapDispatchToProps = dispatch => {
    return {
        addTime: obj => dispatch(addTime(obj))
    };
};

export class DashboardArray extends React.Component{
  constructor(){super();}
  handlesubmit = () => {
    this.props.addTime({
      name: "COMPLETE COMPONENT",
      hours: 0,
      minutes: 0,
      seconds: 0,
      running: false,
    });
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

const Dashboard = connect(null,mapDispatchToProps)(DashboardArray);

export default Dashboard;