import React from 'react';
import {Field} from 'redux-form';
import './styles.scss';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class EmployeeEntry extends React.Component {
    constructor (props) {
        super(props)
    }

    renderField = ({ input, type, placeholder, meta: { touched, error, warning } }) => {
        return (
            <div className='input-form'>
                <input
                    {...input}
                    title={input.value}
                    type={type}
                    placeholder={placeholder}
                />
            </div>
        )
    }

    render(){
        const {onSaveClickHandler} = this.props;
        return(
            <div className='col col-xs-12 col-sm-4'>
                <form onSubmit={onSaveClickHandler} className='employee-page-leftpane'>
                    <div className="employee-new">
                        <div>Create New Employee</div>
                        <div className='container'>
                            <div className='form-group'>
                                <Field 
                                    name='name'
                                    type='text'
                                    component={this.renderField}
                                    placeholder="Employee's Name"
                                />
                            </div>
                            <div className='form-group'>
                                <Field 
                                    name='email'
                                    type='email'
                                    component={this.renderField}
                                    placeholder="Employee's Email"
                                />
                            </div>
                            <div className='form-group'>
                                <Field 
                                    name='phone'
                                    type='text'
                                    component={this.renderField}
                                    placeholder="Employee's Phone"
                                />
                            </div>
                            <div className='form-group'>
                                <Field 
                                    name='department'
                                    type='text'
                                    component={this.renderField}
                                    placeholder="Employee's Department"
                                />
                            </div>
                            <div className='button-save'>
                                <button className='btn btn-primary'>Save Employee</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EmployeeEntry;