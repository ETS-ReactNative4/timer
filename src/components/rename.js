import React from 'react';
import {changeName} from '../actions/changeName';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    changeName: obj => dispatch(changeName(obj))
  };
};

export class RenameWindow extends React.Component{
  state = {
    name:"",
  };

  handleChange = (event) => {
    this.setState({name:event.target.value});
  }

  handleSubmit = (event) => {
    console.log(this.state.name);
    this.props.changeName([this.props.iden,this.state.name]);
  }
  
  render = () => {
    return(
      <div class="cont">
        <p></p>
        <h2>Input New Name</h2>
        <input value = {this.state.name} onChange = {this.handleChange} placeholer="Enter Name"/>
        <p></p>
        <button className = "btn blue" onClick={this.handleSubmit}> SAVE </button> 
        <p></p>
      </div>
    )
  }
}

const Rename = connect(null,mapDispatchToProps)(RenameWindow)
export default Rename;