import React from 'react';

const EmployeeList = ({ employees, addEmployee, disabledEmployees }) => {
  return (
    <div>
      <h2>All Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li
            key={employee.id}
            className={`employee-item ${disabledEmployees.includes(employee.id) ? 'disabled' : ''}`}
          >
            {employee.first_name} {employee.last_name}, Age: {employee.age}
            {!disabledEmployees.includes(employee.id) && (
              <button onClick={() => addEmployee(employee)}>ADD</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
