import React, { useState } from 'react';
import './TournamentBracket.scss';
import './App.scss';
import Team from './Team';
import AddTeam from './AddTeam';
import useWindowSize from './assets/useWindowSize';
import { SingleEliminationBracket, Round, Match } from '@g-loot/react-tournament-brackets';




const TournamentBracket = () => {
  const [teams, setTeams] = useState([]);

  const handleAddTeam = (teamName) => {
    setTeams([...teams, teamName]);
  };

  const handleDeleteTeam = (index) => {
    const newTeams = [...teams];
    newTeams.splice(index, 1);
    setTeams(newTeams);
  };

  const teamList = teams.map((team, index) => (
    <Team key={index} name={team} onDelete={() => handleDeleteTeam(index)} />
  ));

  return (
    <div>
      <ul className="teamsList">
        {teamList}
        <AddTeam onAddTeam={handleAddTeam} />
      </ul>
      <div className="singleOrDoubleElim">
        <button>Single Elimination Bracket</button>
        <button>Double Elimination Bracket</button>
      </div>
    </div>
  );
};

export default TournamentBracket;
