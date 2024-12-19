import { ContainerBtn, Button } from "./styled";

export const Buttons = ({
  tasks,
  isTaskDone,
  handleIsTaskDone,
  completeAllTasks,
}) => {
  const isAllTasksDone = tasks.every((task) => task.done === true);

  return (
    tasks.length > 0 && (
      <ContainerBtn>
        <Button onClick={handleIsTaskDone}>
          {!isTaskDone ? "ukryj ukończone" : "pokaż ukończone"}
        </Button>
        <Button onClick={completeAllTasks} disabled={isAllTasksDone}>
          ukończ wszystkie
        </Button>
      </ContainerBtn>
    )
  );
};
