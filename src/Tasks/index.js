import "./style.css";
export const Tasks = ({ tasks, isTaskDone }) => {
  return (
    <ul className="list">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`list__item ${
            isTaskDone && task.done ? "list__item--hidden" : ""
          }`}
        >
          <button className="list__button list__button--checked">
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
