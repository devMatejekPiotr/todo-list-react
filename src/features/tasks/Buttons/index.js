import { useSelector, useDispatch } from "react-redux";
import { completeAllTasks, selectTask, toggleHideDone } from "../tasksSlice";
import { ContainerBtn, Button } from "./styled";

export const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTask);
  const dispatch = useDispatch();

  const isAllTasksDone = tasks.every((task) => task.done === true);

  return (
    tasks.length > 0 && (
      <ContainerBtn>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {!hideDone ? "ukryj ukończone" : "pokaż ukończone"}
        </Button>
        <Button
          onClick={() => dispatch(completeAllTasks())}
          disabled={isAllTasksDone}
        >
          ukończ wszystkie
        </Button>
      </ContainerBtn>
    )
  );
};
