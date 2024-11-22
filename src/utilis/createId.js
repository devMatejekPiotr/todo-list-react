export const createId = (tasks) => {
  const idItemsOfTasks = tasks.length > 0 ? tasks.map((task) => task.id) : [0];
  const id = Math.max(...idItemsOfTasks) + 1;

  return id;
};
