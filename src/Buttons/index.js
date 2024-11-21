// import React from "react";
import "./style.css";

export const Buttons = ({
  tasks,
  isTaskDone,
  handleIsTaskDone,
  completeAllTasks,
}) => {
  const isAllTasksDone = tasks.every((task) => task.done === true);

  return (
    tasks.length > 0 && (
      <div className="buttons">
        <button onClick={handleIsTaskDone} className="button__item">
          {!isTaskDone ? "ukryj ukończone" : "pokaż ukończone"}
        </button>
        <button
          onClick={completeAllTasks}
          className={`button__item ${
            isAllTasksDone ? "button__item--disabled" : ""
          }`}
          disabled={isAllTasksDone}
        >
          ukończ wszystkie
        </button>
      </div>
    )
  );
};
