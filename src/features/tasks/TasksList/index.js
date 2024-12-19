import { TaskBtn, TaskBtnRemove, TaskItem, TaskList, TaskText } from "./styled";

export const TasksList = ({
  tasks,
  isTaskDone,
  handleCheckedTask,
  handleRemoveTask,
}) => {
  return (
    <TaskList>
      {tasks.map((task) => (
        <TaskItem key={task.id} done={isTaskDone && task.done}>
          <TaskBtn onClick={() => handleCheckedTask(task.id)}>
            {task.done ? "✔" : ""}
          </TaskBtn>
          <TaskText done={task.done}>{task.content}</TaskText>
          <TaskBtnRemove onClick={() => handleRemoveTask(task.id)}>
            🗑
          </TaskBtnRemove>
        </TaskItem>
      ))}
    </TaskList>
  );
};
