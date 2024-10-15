import React, { useState } from "react";
import "./index.css";
import EmployeeList from "./EmployeeList";
import Team from "./Team";
import employees from "../Data";

function App() {
  const [team, setTeam] = useState([]);
  const [disabledEmployees, setDisabledEmployees] = useState([]);

  // Add employee to the team
  const addEmployee = (employee) => {
    setTeam([...team, employee]);
    setDisabledEmployees([...disabledEmployees, employee.id]);
  };

  // Remove employee from the team
  const removeEmployee = (employee) => {
    setTeam(team.filter((member) => member.id !== employee.id));
    setDisabledEmployees(disabledEmployees.filter((id) => id !== employee.id));
  };

  // Sort team by age
  const sortTeamByAge = () => {
    const sortedTeam = [...team].sort((a, b) => a.age - b.age);
    setTeam(sortedTeam);
  };

  return (
    <div className="app">
      <div className="employee-list">
        <EmployeeList
          employees={employees}
          addEmployee={addEmployee}
          disabledEmployees={disabledEmployees}
        />
      </div>
      <div className="team-list">
        <Team
          team={team}
          removeEmployee={removeEmployee}
          sortTeamByAge={sortTeamByAge}
        />
      </div>
    </div>
  );
}

export default App;
