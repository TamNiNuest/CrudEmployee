import {takeEvery, put, select} from 'redux-saga/effects';

import {
    createEmployeeSuccess,
    createEmployeeError
} from './EmployeeEntry/actions';
import {CREATE_EMPLOYEE_START} from './EmployeeEntry/constants';

import {
    fetchEmployeeListSuccess,
    fetchEmployeeListError
} from './EmployeeList/actions';
  
import {
   FETCH_EMPLOYEE_LIST_START
} from './EmployeeList/constants';
  
const getDataState = state => state.employeeListReducer.employeeData;

function* fetchEmployeeWorker() {
    try {
        const data = yield select(getDataState);
        yield console.log('fecth');
        yield put(fetchEmployeeListSuccess(data));
    } catch (error) {
        yield put(fetchEmployeeListError(error));
        yield console.log('fetch error');

    }
}

//const getInputState = state => state.employeeEntryReducer.inputData;

function* createEmployeeWorker (action) {
    try {
        const newData = yield select(getDataState);
        console.log(newData.push(action))
        yield put(createEmployeeSuccess())
        yield put(fetchEmployeeListSuccess(newData.push(action)))
    } catch(error) {
        yield put(createEmployeeError(error));
        yield console.log('create error');
    }
};

const employeeWatchers = [
    takeEvery(FETCH_EMPLOYEE_LIST_START, fetchEmployeeWorker),
    takeEvery(CREATE_EMPLOYEE_START, createEmployeeWorker)
];

export default employeeWatchers;
