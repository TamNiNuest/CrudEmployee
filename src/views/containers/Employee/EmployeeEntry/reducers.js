import {
    CREATE_EMPLOYEE_START,
    CREATE_EMPLOYEE_SUCCESS,
    CREATE_EMPLOYEE_ERROR,
    RESET_STATE_EMPLOYEE_ENTRY
} from './constants';

const initialState = {
    inputData: null
}

const createEmployeeReducers = (state = initialState, action) =>{
    const {type, error} = action;
    switch (type) {
        case CREATE_EMPLOYEE_START:
            return {
                ...state,
                inputData: action.inputData
            }
        case CREATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                inputData: null
            }
        case CREATE_EMPLOYEE_ERROR:
            return {
                ...state,
                error
            }
        case RESET_STATE_EMPLOYEE_ENTRY:
            return {
                ...state,
                inputData: null
            }
        default:
            return state;
    }
}

export default createEmployeeReducers;