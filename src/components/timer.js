import React from 'react';
import "./index.css";
import {connect} from 'react-redux';
import {toggleRun} from '../actions/toggleRunning';
import {deleteTimer} from '../actions/deleteTimer';
import {changeName} from '../actions/changeName';
import {incrementTime} from '../actions/incrementTime';
const uuidv1 = require('uuid/v1');

const mapStateToProps = state => {
  return {
    times: state.times
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleRun: obj => dispatch(toggleRun(obj)),
    deleteTimer: obj => dispatch(deleteTimer(obj)),
    rename: obj => dispatch(changeName(obj)),
    increase: obj => dispatch(incrementTime(obj)),
  };
};

const cnv = (e) => {
  if(null==e)return "00";
  let s = e.toString();
  if (e<10)s = "0" + s;
  return s;
}

export class Timercomp extends React.Component{
  constructor(){super();}

  state = {
    e:"HELLO",
  };

  componentDidMount = () => {
    let i = this.props.data;
    this.setState({
      e: i,
    });
  }

  update = () => {
    if(this.state.e.running === false){
      return;
    }
    setTimeout(() => {
      this.props.increase(this.state.e.id);
      this.update();
    },1000);
  }

  toggle = () => {
    let x = this.state.e.id;
    this.props.toggleRun(x);
    if(this.state.e.running){
      this.update();
    }
  }

  delete = () =>{
    let x = this.state.e.id;
    this.props.deleteTimer(x);
  }

  rename = () => {
    let x = this.state.e.id;
    this.props.rename([x, "COMPLETE COMPONENT"])
  }

  btn = (i) => {
    if (i === true) {
      return <button class = "red btn" onClick={this.toggle}> Stop </button>
    }else{
      return <button class = "green btn" onClick = {this.toggle}> Start </button>
    }
  }

  render = () => {
    return(
      <div class = "cont ctr">
        <h2 class="bold" > {this.state.e.name}</h2> 
        <p class="ctr" > {cnv(this.state.e.hours)}:{cnv(this.state.e.minutes)}:{cnv(this.state.e.seconds)} </p> 
        {this.btn(this.state.e.running)}
        <p> </p> 
        <button class="cbtn" onClick={this.delete} key={uuidv1()}>Delete</button>
        <button class="cbtn" onClick={this.rename} key = {uuidv1()} > Rename </button>
        <p></p>
      </div>
    )
  }
}

const Timer = connect(mapStateToProps,mapDispatchToProps)(Timercomp);

export default Timer;