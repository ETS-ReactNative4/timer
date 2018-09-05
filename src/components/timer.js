import React from 'react';
import "./index.css";

const mapStateToProps = state => {
  return {
    times: state.times
  }
}

const Timer = (index) => {
  btn = () => {
    
  }
  return(
    <div class="cont">
      <h2 class="bold">{props.obj.name} </h2>
      <p class="data">{props.obj.hours}:{props.obj.minutes}:{props.obj.seconds}</p>
      {btn()}
  </div>
}

export default Timer