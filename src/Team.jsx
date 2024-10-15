import React from "react";

const Team = ({ team, removeEmployee, sortTeamByAge }) => {
  const calculateAverageAge = () => {
    if (team.length === 0) return 0;
    const totalAge = team.reduce((total, member) => total + member.age, 0);
    return (totalAge / team.length).toFixed(2);
  };

  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {team.map((member) => (
          <li key={member.id} className="team-member">
            {member.first_name} {member.last_name}, Age: {member.age}
            <button onClick={() => removeEmployee(member)}>REMOVE</button>
          </li>
        ))}
      </ul>
      <button onClick={sortTeamByAge}>SORT BY AGE</button>
      <p>Average Age: {calculateAverageAge()}</p>
    </div>
  );
};

export default Team;
