import React ,{Component} from 'react';
import {Button} from 'material-ui';
export default class loginform extends Component{
    constructor(props){
        super(props);
       this.state={
         email:"",
         password:""
       }
       this.handleChangeEmail=this.handleChangeEmail.bind(this);
       this.handleChangePassword=this.handleChangePassword.bind(this);
       this.submitLoginForm = this.submitLoginForm.bind(this);
    }
    handleChangeEmail(e) {
        console.log('e', e.target.value);
        this.setState({ name: e.target.value });
    }
    handleChangePassword(e) {
        console.log('e', e.target.value);
        this.setState({ name: e.target.value });
    }
    submitLoginForm(e){
         e.preventDefault();
         console.log("submitloginform",this.state);
         this.props.submitLoginForm(this.state);
    }
   render(){
       return(
           <div>
               <form method="post" onSubmit={this.submitLoginForm}>
                 Email:<br />
                    <input type="text" name="email" onChange={this.handleChangeEmail} />
                    <br />
                    Password:<br />
                    <input type="Password" name="Password" onChange={this.handleChangePassword} />
                    <br />
               </form>
               <br/>
               <Button id="signinBtn" type="submit">SIGN IN</Button>
           </div>
       )
   }
};