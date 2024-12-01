import { useLocalStorage } from "./useLocalStorage";

export const useTask = () => {
  const { tasks, setItemToLocalStorage } = useLocalStorage("todoList", []);

  const handleCheckedTask = (id) => {
    const newTasksList = tasks.map((taskItem) =>
      taskItem.id === id ? { ...taskItem, done: !taskItem.done } : taskItem
    );
    setItemToLocalStorage(newTasksList);
  };

  const completeAllTasks = () => {
    const newTasksList = tasks.map((task) => ({ ...task, done: true }));
    setItemToLocalStorage(newTasksList);
  };

  const handleRemoveTask = (id) => {
    const newTasksList = tasks.filter((task) => task.id !== id);
    setItemToLocalStorage(newTasksList);
  };

  const addNewTask = (task) => {
    const newTasksList = [...tasks, task];
    setItemToLocalStorage(newTasksList);
  };

  return {
    tasks,
    handleCheckedTask,
    completeAllTasks,
    handleRemoveTask,
    addNewTask,
  };
};
