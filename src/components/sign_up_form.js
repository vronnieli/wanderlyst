import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SignUpForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      credentials: {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    }
  }
  onChangeHandler(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }
  render(){
    return(
      <div className="col-lg-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="form-inline">
              <form onSubmit={this.onSave}>
                <label>First Name:</label>
                <input type="text" name="first-name" onChange={this.onChangeHandler} value={this.state.credentials.firstName} />
                <label>Last Name:</label>
                <input type="text" name="last-name" onChange={this.onChangeHandler} value={this.state.credentials.lastName} />
                <label>Email:</label>
                <input type="text" name="email" onChange={this.onChangeHandler} value={this.state.credentials.email} />
                <label>Username:</label>
                <input type="text" name="username" onChange={this.onChangeHandler} value={this.state.credentials.username} />
                <label>Password:</label>
                <input type="password" name="password" onChange={this.onChangeHandler} value={this.state.credentials.password} />
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
