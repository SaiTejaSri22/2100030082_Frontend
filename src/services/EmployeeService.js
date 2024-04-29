// EmployeeService.js
let employees = [
  {
    id: 1,
    firstName: 'Sam',
    lastName: 'Adam',
    gender: 'Male',
    age: 45,
    department: 'IT',
    salary: 100000,
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Jacob',
    gender: 'Male',
    age: 30,
    department: 'Sales',
    salary: 90000,
  },
];

// Function to get all employees
const getEmployees = () => {
  return employees;
};

// Function to add a new employee
const addEmployee = (employee) => {
  const newId = employees.length + 1;
  employees.push({
    id: newId,
    ...employee,
  });
};

// Function to update an existing employee
const updateEmployee = (id, updatedEmployee) => {
  const index = employees.findIndex((e) => e.id === id);
  if (index !== -1) {
    employees[index] = { id, ...updatedEmployee };
  }
};

// Function to delete an employee by ID
const deleteEmployee = (id) => {
  employees = employees.filter((e) => e.id !== id);
};

export { getEmployees, addEmployee, updateEmployee, deleteEmployee };
