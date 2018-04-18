import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {Button} from 'material-ui';
import utils from '../utils';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: "",
            email: "",
            password:""
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.submitRegistration = this.submitRegistration.bind(this);
    }
   
    handleChangeName(e) {
        console.log('e', e.target.value);
        this.setState({ name: e.target.value });
    }

    handleChangeLastName(e) {
        this.setState({ lastname: e.target.value });
    }

    handleChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    handleChangePassword(e)
    {
        this.setState({password:e.target.value});
    }

    submitRegistration(e) {
        e.preventDefault();
        console.log("SignupDetails", this.state);
        this.props.submitRegistration(this.state);
        // utils.httpRequest('/signup', 'post', this.state, (response) => {
        //     console.log("callPatientRegistrationApi response data  ---- ", response);
            // callback(response);
        // });
    }

    render() {

        
        return (
            <div className="sideone">
                <div className="Input">
                  <form method="post" onSubmit={this.submitRegistration}>
                    First name:<br />
                    <input type="text" name="firstname" onChange={this.handleChangeName} />
                    <br />
                    Last name:<br />
                    <input type="text" name="lastname" onChange={this.handleChangeLastName} />
                    <br />
                    email:<br />
                    <input type="text" name="email" onChange={this.handleChangeEmail} />
                    <br />
                    password:<br />
                    <input type="Password" name="password" onChange={this.handleChangePassword} />
                    <br /><br/>
                    <div>
                    <Button id="signupBtn" type="submit">sign Up</Button>
                    {/* <p>Already Registered: <Link to={'/'}>Sign In</Link> </p> */}
                    </div>
                  </form>
                </div>
            </div>
        )
    }
}
export default SignUpForm;