import React from 'react';
import SignUpForm from './form';
import {signUpAction} from './actions';
import { connect } from 'react-redux';

class SignUpContainer extends React.Component {
    constructor(props) {
        super(props);
        this.submitRegistration = this.submitRegistration.bind(this);
    }


    componentWillReceiveProps(nextprops){
        if(nextprops.onSuccess && nextprops.onSuccess != null){
            this.props.history.push('/login')
        }
        if(nextprops.onError){
            this.props.history.push('/')
        }
    }

    submitRegistration(formdata) {
        console.log("SignupDetails------", formdata);
        this.props.signUpAction(formdata);
    }

    render() {
        return (
            <div>
            <SignUpForm submitRegistration={this.submitRegistration} />
            </div>
        )
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = function (state) {
    console.log("store data",state);
    return {
      isLoading: state.registrationData.isLoading,
      onSuccess: state.registrationData.onSuccess,
      onError: state.registrationData.onError
    }
  }
  
  
  /**
   * Map the actions to props.
   */   
  const mapDispatchToProps = (dispatch) => {
    return {
        signUpAction: (registrationFormData) => dispatch(signUpAction(registrationFormData))
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);