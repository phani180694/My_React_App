import { SIGNUP_PENDING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';
import callSignUpApi from './services';

function signUpPending(isLoading) {
    return {
        type: SIGNUP_PENDING,
        isLoading
    }
}

function signUpSuccess(successData) {
    return {
        type: SIGNUP_SUCCESS,
        successData
    }
}

function signUpError(errorData) {
    return {
        type: SIGNUP_ERROR,
        errorData
    }
}

export function signUpAction(formdata) {
    return dispatch => {
        // dispatch(signUpPending(true));
        // dispatch(signUpSuccess(null));
        // dispatch(signUpError(null));
        callSignUpApi(formdata, response => {
            console.log('---response',response);
            if(response.status){
                console.log("----",response.result);
                dispatch(signUpSuccess(response.result));
            }
        })
    }
}