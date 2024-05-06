import React, { useState } from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import './TodoItem.css';

function TodoItem(props) {
  const [editingText, setEditingText] = useState(props.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (editingText.trim() !== '') {
      if (props.onEdit && typeof props.onEdit === 'function') {
        props.onEdit(editingText);
      }
    }
  };

  const handleInputChange = (e) => {
    setEditingText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingText(props.text);
  };

  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      {isEditing ? (
        <div className="TodoItem-editContainer">
          <input
            type="text"
            value={editingText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus
            className="TodoItem-editInput"
          />
          <button onClick={handleSave} className="TodoItem-saveButton">Save</button>
          <button onClick={handleCancelEdit} className="TodoItem-cancelButton">Cancel</button>
        </div>
      ) : (
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
          onClick={handleEdit}
        >
          {props.text}
        </p>
      )}

      <EditIcon onEdit={handleEdit} />
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
