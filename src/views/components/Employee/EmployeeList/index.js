import React from 'react';
import './styles.scss';

class EmployeeList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {employeeList} = this.props;
        return(
            <div className='col col-xs-12 col-sm-8'>
                <div>Employees List</div>
                <div className='row employee-table'>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeList.map((item, index) =>(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.department}</td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                </div>
            </div>   
        )
    }
}

export default EmployeeList;