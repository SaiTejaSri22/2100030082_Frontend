import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../services/EmployeeService';
import './AddEmployee.css'; // Import the CSS for styling

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    gender: 'Male',
    age: '',
    department: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    navigate('/employees'); // Redirect after adding
  };

  return (
    <div className="add-employee-container">
      <h2>Add New Employee</h2>
      <form className="add-employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={employee.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={employee.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={employee.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            value={employee.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            name="department"
            id="department"
            value={employee.department}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            name="salary"
            id="salary"
            value={employee.salary}
            onChange={handleChange}
          />
        </div>
        <center>
        <button type="submit" className="submit-button">Add Employee</button>
        </center>
      </form>
    </div>
  );
};

export default AddEmployee;
