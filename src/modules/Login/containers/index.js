import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:5000');
socket.emit('connection', 'Hello World');
socket.emit('event', 'Hello World');
socket.on('eventResponse', msg => console.log(msg, 'on msg'))

import { login } from 'Redux/login/actions/'

export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Abhi',
      pass: '123',
    };
  }
  onSubmit(){
    this.props.onSubmit(this.state);
  }
  render () {
    console.log(this.props);
    return (
      <div>
        <LoginForm
          state={this.state}
          onNameChange={(e) => this.setState({name: e.target.value})}
          onPassChange={(e) => this.setState({pass: e.target.value})}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    )
  }
}

Login.propTypes = {};

export function mapStateToProps(state) {
  return {
    name: state.login.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (credentials) => dispatch(login(credentials)),
    onNameChange: (e) => dispatch(changeName(e.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
