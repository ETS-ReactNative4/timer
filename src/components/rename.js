import React from 'react';
import changeName from '../actions/actions-changeName';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class RenameWindow extends React.Component{
  state = {
    name:"",
  };

  handleChange = (event) => {
    this.setState({name:event.target.value});
  }

  handleSubmit = (event) => {
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


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changeName},dispatch);
};

const Rename = connect(null,mapDispatchToProps)(RenameWindow)

export default Rename;