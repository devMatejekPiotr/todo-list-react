import { Buttons } from "./Buttons";
import { Form } from "./Form";
import { Header } from "./Header";
import { Tasks } from "./Tasks";
import { Section } from "./Section";
import { useState } from "react";

const taskss = [
  { id: 1, content: "kupic bulki", done: false },
  { id: 2, content: "kupic piwko", done: true },
];

function App() {
  const [isTaskDone, setIsTaskDone] = useState(false);
  const [tasks, setTasks] = useState(taskss);

  const toggleHideCompletedTasks = () => {
    setIsTaskDone((prevState) => !prevState);
  };

  const handleCheckedTask = (id) => {
    setTasks((prevTask) =>
      prevTask.map((taskItem) =>
        taskItem.id === id ? { ...taskItem, done: !taskItem.done } : taskItem
      )
    );
  };

  const completeAllTasks = () => {
    setTasks((prevTasks) => prevTasks.map((task) => ({ ...task, done: true })));
  };

  const handleRemoveTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const addNewTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addTask={addNewTask} tasks={tasks} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Buttons
            tasks={tasks}
            isTaskDone={isTaskDone}
            handleIsTaskDone={toggleHideCompletedTasks}
            completeAllTasks={completeAllTasks}
          />
        }
      />
      <Tasks
        tasks={tasks}
        isTaskDone={isTaskDone}
        handleCheckedTask={handleCheckedTask}
        handleRemoveTask={handleRemoveTask}
      />
    </>
  );
}

export default App;
