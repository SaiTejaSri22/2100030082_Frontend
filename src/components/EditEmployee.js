import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployees, updateEmployee } from '../services/EmployeeService';
import './EditEmployee.css'; // Import CSS for styling

const EditEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const employee = getEmployees().find((e) => e.id === parseInt(id, 10));

  const [form, setForm] = useState({
    firstName: employee.firstName,
    lastName: employee.lastName,
    gender: employee.gender,
    age: employee.age,
    department: employee.department,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(parseInt(id, 10), form);
    navigate('/employees'); // Redirect after editing
  };

  return (
    <div className="edit-employee-container">
      <h2>Edit Employee</h2>
      <form className="edit-employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={form.gender}
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
            value={form.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            name="department"
            id="department"
            value={form.department}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            name="salary"
            id="salary"
            value={form.salary}
            onChange={handleChange}
          />
        </div>
        <center>
        <button type="submit" className="submit-button">Save Changes</button>
        </center>
      </form>
    </div>
  );
};

export default EditEmployee;
