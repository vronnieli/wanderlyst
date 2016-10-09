import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SignUpForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.newUserHandler = this.newUserHandler.bind(this);
  }
  onChangeHandler(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }
  newUserHandler(event) {
    event.preventDefault();
    debugger
    this.props.actions.createUser(this.state)
  }
  render(){
    return(
      <div className="col-lg-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="form-inline">
              <form onSubmit={this.newUserHandler}>
                <label>First Name:</label>
                <input type="text" name="firstName" onChange={this.onChangeHandler} value={this.state.user.firstName} />
                <label>Last Name:</label>
                <input type="text" name="lastName" onChange={this.onChangeHandler} value={this.state.user.lastName} />
                <label>Email:</label>
                <input type="text" name="email" onChange={this.onChangeHandler} value={this.state.user.email} />
                <label>Username:</label>
                <input type="text" name="username" onChange={this.onChangeHandler} value={this.state.user.username} />
                <label>Password:</label>
                <input type="password" name="password" onChange={this.onChangeHandler} value={this.state.user.password} />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(SignUpForm);
