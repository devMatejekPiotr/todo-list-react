import { Buttons } from "./Buttons";
import { Form } from "./Form";
import { Header } from "./Header";
import { Tasks } from "./Tasks";
import { Section } from "./Section";
import { useState } from "react";

const tasks = [
  { content: "kupic bulki", done: false },
  { content: "kupic piwko", done: true },
];

// let isTaskDone = false;

function App() {
  const [isTaskDone, setIsTaskDone] = useState(false);

  const handleIsTaskDone = () => {
    setIsTaskDone((prevState) => !prevState);
  };

  return (
    <>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={
          <Buttons
            tasks={tasks}
            isTaskDone={isTaskDone}
            handleIsTaskDone={handleIsTaskDone}
          />
        }
      />
      <Tasks tasks={tasks} isTaskDone={isTaskDone} />
    </>
  );
}

export default App;
