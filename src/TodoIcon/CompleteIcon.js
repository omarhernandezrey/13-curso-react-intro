// src/TodoIcon/CompleteIcon.js
import React from 'react';
import { TodoIcon } from './'; 
function CompleteIcon({ onComplete }) {
  return (
    <TodoIcon
      type="check"
      color="green" 
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
