// src/TodoIcon/index.js
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import { ReactComponent as EditSVG } from './icons8-editar.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": color => <CheckSVG className="Icon-svg" fill={color} />,
  "delete": color => <DeleteSVG className="Icon-svg" fill={color} />,
  "edit": color => <EditSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color = 'currentColor', onClick }) {
  const Icon = iconTypes[type];
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {Icon(color)}
    </span>
  );
}

export { TodoIcon };
