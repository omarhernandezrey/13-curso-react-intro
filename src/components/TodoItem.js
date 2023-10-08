import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
        <img
          src={props.completed ? '/images/check-completada.svg' : '/images/check-incompleta.svg'}
          alt={props.completed ? 'Tarea completada' : 'Tarea incompleta'}
          className="Icon-img"
        />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <img
        src="/images/Icon-delete.png"
        alt="Eliminar tarea"
        className="Icon Icon-delete"
      />
    </li>
  );
}

export { TodoItem };
