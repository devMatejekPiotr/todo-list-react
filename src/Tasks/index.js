import "./style.css";

export const Tasks = ({ tasks, isTaskDone, handleCheckedTask }) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list__item ${
            isTaskDone && task.done ? "list__item--hidden" : ""
          }`}
        >
          <button
            onClick={() => handleCheckedTask(task.id)}
            className="list__button list__button--checked"
          >
            {task.done ? "✔" : ""}
          </button>
          <span
            className={`list__paragrapf ${
              task.done && "list__paragraph--done"
            }`}
          >
            {task.content}
          </span>
          <button className="list__button list__button--remove">🗑</button>
        </li>
      ))}
    </ul>
  );
};
