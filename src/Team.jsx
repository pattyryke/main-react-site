import React, { useState } from 'react';

const Team = ({ name, onRemove, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
      onUpdate(editedName);
    }
  };

  return (
    <li className='teamListItem'>
      {editing ? (
        <input
          className='editingName'
          type='text'
          value={editedName}
          onChange={handleNameChange}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            setEditing(false);
            onUpdate(editedName);
          }}
        />
      ) : (
        <div className='teamListItemName' onClick={() => setEditing(true)}>
          {name}
        </div>
      )}
      <div className='buttons'>
        <button className='delete' onClick={onRemove}>X</button>
      </div>
    </li>
  );
};

export default Team;
