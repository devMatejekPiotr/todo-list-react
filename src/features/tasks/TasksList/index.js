import { useSelector, useDispatch } from "react-redux";
import { removeTask, selectTask, toggleTaskDone } from "../tasksSlice";
import { TaskBtn, TaskBtnRemove, TaskItem, TaskList, TaskText } from "./styled";

export const TasksList = () => {
  const { tasks, hideDone } = useSelector(selectTask);
  const dispatch = useDispatch();
  return (
    <TaskList>
      {tasks.map((task) => (
        <TaskItem key={task.id} done={hideDone && task.done}>
          <TaskBtn onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </TaskBtn>
          <TaskText done={task.done}>{task.content}</TaskText>
          <TaskBtnRemove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </TaskBtnRemove>
        </TaskItem>
      ))}
    </TaskList>
  );
};
