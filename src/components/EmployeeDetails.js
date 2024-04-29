import React from 'react';
import { useParams } from 'react-router-dom';
import { getEmployees } from '../services/EmployeeService';
import './EmployeeDetails.css'; // Import CSS for styling

const EmployeeDetails = () => {
  const { id } = useParams();
  const employee = getEmployees().find((e) => e.id === parseInt(id, 10));

  if (!employee) {
    return <div className="employee-not-found">Employee not found</div>;
  }

  return (
    <div className="employee-details-container">
      <h2 className="employee-details-title">Employee Details</h2>
      <p className="employee-detail">
        <strong>Id:</strong> {employee.id}
      </p>
      <p className="employee-detail">
        <strong>First Name:</strong> {employee.firstName}
      </p>
      <p className="employee-detail">
        <strong>Last Name:</strong> {employee.lastName}
      </p>
      <p className="employee-detail">
        <strong>Gender:</strong> {employee.gender}
      </p>
      <p className="employee-detail">
        <strong>Age:</strong> {employee.age}
      </p>
      <p className="employee-detail">
        <strong>Department:</strong> {employee.department}
      </p>
      <p className="employee-detail">
        <strong>Salary:</strong> ${employee.salary}
      </p>
    </div>
  );
};

export default EmployeeDetails;
