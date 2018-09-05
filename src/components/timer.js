import React from 'react';
import "./index.css";
import {connect} from 'react-redux';
import {toggleRun} from '../actions/toggleRunning';

const mapStateToProps = state => {
  return {
    times: state.times
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleRun: obj => dispatch(toggleRun(obj))
  };
};

export class Timercomp extends React.Component{
  constructor(){super();}

  state = {e:"HELLO"};

  componentDidMount = () => {
    let i = this.props.data;
    this.setState({e:i});
  }

  toggle = () => {
    let x = this.state.e.name;
    this.props.toggleRun(x);
  }

  btn = (i) => {
    if (i === true) {
      return <button class = "red btn" onClick={this.toggle}> Stop </button>
    }else{
      return <button class = "green btn" onClick = {this.toggle}> Stop </button>
    }
  }

  render = () => {
    return(
      <div class = "cont ctr">
        <h2 class="bold" > {this.state.e.name}</h2> 
        <p class="ctr" > {this.state.e.hours}:{this.state.e.minutes}:{this.state.e.seconds} </p> 
        {this.btn(this.state.e.running)}
        <p> </p> 
      </div>
    )
  }
}

const Timer = connect(mapStateToProps,mapDispatchToProps)(Timercomp);

export default Timer;