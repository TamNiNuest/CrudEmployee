import React from 'react';
import EmployeeEntry from '../../../components/Employee/EmployeeEntry';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {
    createEmployeeStart,
    resetStateEmployeeEntry
} from './actions';

class EmployeeEntryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onSaveClickHandler = this.onSaveClickHandler.bind(this);
    }

    componentWillUnmount() {
        const { resetStateEmployeeEntry } = this.props;
        resetStateEmployeeEntry();
    }

    onSaveClickHandler(values) {
        const {createEmployee} = this.props;
        
        const get = name => values.hasOwnProperty(name) ? values[name]: null;
        //console.log(get);
        const data = {
            name: get('name'),
            email: get('email'),
            phone: get('phone'),
            department: get('department')
        };

        console.log(data);
        createEmployee(data);
    }

    
    render(){
        const { handleSubmit } = this.props;
        return (
        <EmployeeEntry
            onSaveClickHandler={handleSubmit(this.onSaveClickHandler)}
        />
        );
    }
}

const employeeEntry = reduxForm({
    form: 'employeeEntry'
})(EmployeeEntryContainer);

const mapDispatchToProps = dispatch => ({
    createEmployee: (inputData) => dispatch(createEmployeeStart(inputData))
    //resetStateEmployeeEntry: () => dispatch(resetStateEmployeeEntry())
});

export default connect(
    null, 
    mapDispatchToProps
)(employeeEntry);