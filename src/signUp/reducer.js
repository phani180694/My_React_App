import { SIGNUP_PENDING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';


const initialize = {
    isLoading: false,
    onSuccess: null,
    onError: null

}
export default function signUpReducer(state = initialize, action) { 
    switch(action.type){
        case SIGNUP_PENDING:
        return Object.assign({},state,
            {isLoading:action.isLoading
        })
        case SIGNUP_SUCCESS:
        console.log("reducer",action.successData);
        return Object.assign({},state,
            {onSuccess:action.successData
        })
        case SIGNUP_ERROR:
        return Object.assign({},state,
            {onError:action.onError
        })
        default :
        return state;
    }
}