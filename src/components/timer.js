import React from 'react';
import "./index.css";
import {connect} from 'react-redux';
import toggleRun from '../actions/actions-toggleRunning';
import deleteTimer from '../actions/actions-deleteTimer';
import changeName from '../actions/actions-changeName';
import incrementTime from '../actions/actions-incrementTime';
import resetTimer from '../actions/actions-resetTimer';
import { bindActionCreators } from 'redux';
const uuidv1 = require('uuid/v1');

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
    console.log(this.props.times)
    let i = this.props.times.filter((e)=>{
      return e.id === this.props.iden;
    });
    let N = this.props.names.filter((e) => {
      return e.id === this.props.iden;
    })
    this.setState({
      e: i[0],
      name:N[0].name,
    });
  }

  update = () => {
    setTimeout(() => {
      if (this.state.e.running === false) {
        return;
      }
      this.props.incrementTime(this.state.e.id);
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
    this.props.changeName([x, "COMPLETE COMPONENT"])
  }

  reset = () => {
    let x = this.state.e.id;
    this.props.resetTimer(x);
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
        <h2 class="bold" > {this.state.name}</h2> 
        <p class="ctr" > {cnv(this.state.e.hours)}:{cnv(this.state.e.minutes)}:{cnv(this.state.e.seconds)} </p> 
        {this.btn(this.state.e.running)}
        <p> </p> 
        <button class="cbtn" onClick={this.delete} key={uuidv1()}>Delete</button>
        <button class="cbtn" onClick={this.rename} key = {uuidv1()} > Rename </button>
        <button class="cbtn" onClick={this.reset} key = {uuidv1()} > Reset </button>
        <p></p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleRun,deleteTimer,changeName,incrementTime,resetTimer},dispatch);
};

const mapStateToProps = state => {
  return {
    times: state.timerValues,
    names: state.timerNames
  }
}

const Timer = connect(mapStateToProps,mapDispatchToProps)(Timercomp);

export default Timer; 