import utils from '../utils'

export default function callSignUpApi(formdata, callback){
    console.log("callPatientRegistrationApi request data  ---- ", formdata);
	utils.httpRequest('/signUp', 'post', formdata, (response) => {
		console.log("callPatientRegistrationApi response data  ---- ", response);
		callback(response);
	});


}