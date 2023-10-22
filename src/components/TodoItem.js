import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <img
          src={props.completed ? '/images/check-completada.svg' : '/images/check-incompleta.svg'}
          alt={props.completed ? 'Tarea completada' : 'Tarea incompleta'}
          className="Icon-img"
        />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <img
          src="/images/borrar.png"
          alt="Eliminar tarea"
          className="Icon-img"
        />
      </span>
    </li>
  );
}

export { TodoItem };
