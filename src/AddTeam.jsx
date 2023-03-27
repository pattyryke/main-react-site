import React, { useState } from 'react';

const AddTeam = ({ onAddTeam }) => {
  const [teamName, setTeamName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTeam(teamName);
    setTeamName("");
  };

  const handleInputChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id='addTextBox'
        type="text"
        placeholder="Enter team name..."
        value={teamName}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" id='submitButton'>Submit</button>
    </form>
  );
};

export default AddTeam;
