import { useState } from "react";

export const useLocalStorage = (key, defaultState) => {
  const getItemFromLocalStorage = () => {
    const taskList = localStorage.getItem(key);
    return taskList ? JSON.parse(taskList) : defaultState;
  };

  const [tasks, setTasks] = useState(getItemFromLocalStorage);

  const setItemToLocalStorage = (newTask) => {
    setTasks(newTask);
    localStorage.setItem(key, JSON.stringify(newTask));
  };

  return {
    tasks,
    setItemToLocalStorage,
  };
};
