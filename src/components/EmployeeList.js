import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getEmployees, deleteEmployee } from '../services/EmployeeService';
import './EmployeeList.css'; // CSS styles for the EmployeeList

const EmployeeList = () => {
  const navigate = useNavigate();
  const employees = getEmployees();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      deleteEmployee(id);
      navigate('/employees'); // Refresh after deletion
    }
  };

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      <div className="employee-list-actions">
        <button
          onClick={() => navigate('/employees/add')}
          className="add-button"
        >
          Add Employee
        </button>
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={employee.id}
              className={`employee-row ${index % 2 === 0 ? 'even' : 'odd'}`}
            >
              <td>
                <Link to={`/employees/${employee.id}`}>{employee.id}</Link>
              </td>
              <td>{employee.firstName.charAt(0).toUpperCase() + employee.firstName.slice(1)}</td>
              <td>{employee.lastName.charAt(0).toUpperCase() + employee.lastName.slice(1)}</td>
              <td>{employee.department}</td>
              <td>{employee.age > 40 ? 'Sr. Employee' : 'Jr. Employee'}</td>
              <td>${employee.salary}</td>
              <td>
                <button onClick={() => navigate(`/employees/edit/${employee.id}`)}>Edit</button>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
