import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // The Navbar component
import Home from './components/Home'; // The Home component
import EmployeeList from './components/EmployeeList'; // Component to list employees
import AddEmployee from './components/AddEmployee'; // Component to add a new employee
import EditEmployee from './components/EditEmployee'; // Component to edit an existing employee
import EmployeeDetails from './components/EmployeeDetails'; // Component to view employee details

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar for navigation */}
        <div className="content"> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/employees" element={<EmployeeList />} /> {/* Employee list */}
            <Route path="/employees/add" element={<AddEmployee />} /> {/* Add new employee */}
            <Route path="/employees/edit/:id" element={<EditEmployee />} /> {/* Edit an employee */}
            <Route path="/employees/:id" element={<EmployeeDetails />} /> {/* Employee details */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
