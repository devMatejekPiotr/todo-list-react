export const createId = (tasks) => {
  const idItemsOfTasks = tasks.map((task) => task.id);
  const id = Math.max(...idItemsOfTasks) + 1;
  return id;
};
