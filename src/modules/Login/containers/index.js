import { connect } from 'react-redux';
import Login from '../components/';
import { changeName } from 'Redux/actions';

export function mapStateToProps(state) {
  return {
    name: state.login.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChange: (e) => dispatch(changeName(e.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
