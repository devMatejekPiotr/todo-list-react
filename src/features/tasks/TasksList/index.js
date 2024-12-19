import { useSelector, useDispatch } from "react-redux";
import { removeTask, selectTask, toggleTaskDone } from "../tasksSlice";
import { Button, RemoveButton, Task, TaskList, Text } from "./styled";

export const TasksList = () => {
  const { tasks, hideDone } = useSelector(selectTask);
  const dispatch = useDispatch();
  return (
    <TaskList>
      {tasks.map((task) => (
        <Task key={task.id} $done={hideDone && task.done}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Text $done={task.done}>{task.content}</Text>
          <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </RemoveButton>
        </Task>
      ))}
    </TaskList>
  );
};
