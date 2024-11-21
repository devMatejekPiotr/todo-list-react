// import React from "react";
import "./style.css";

export const Buttons = ({ tasks, isTaskDone, handleIsTaskDone }) => {
  console.log(handleIsTaskDone);
  const isAllTasksDone = tasks.every((task) => task.done === true);
  const disabledClass = isAllTasksDone ? ".button__item--disabled" : "";

  return (
    tasks.length > 0 && (
      <div className="buttons">
        <button onClick={handleIsTaskDone} className="button__item">
          {!isTaskDone ? "ukryj ukończone" : "pokaż ukończone"}
        </button>
        <button
          className={`button__item ${disabledClass}`}
          disabled={isAllTasksDone}
        >
          ukończ wszystkie
        </button>
      </div>
    )
  );
};
