import React, { Component } from 'react';
import EmployeeEntryContainer from './EmployeeEntry';
import EmployeeListContainer from './EmployeeList';

class EmployeePage extends Component {
  render() {
    return (
      <div className="row employee-page-wrapper">
        <EmployeeEntryContainer />
        <EmployeeListContainer />
      </div>
    )
  };
}

export default EmployeePage;