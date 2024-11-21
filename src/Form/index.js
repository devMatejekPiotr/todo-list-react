import { useState } from "react";
import "./style.css";
import { createId } from "../utilis/createId";

export const Form = ({ tasks, addTask }) => {
  const [formValue, setFormValue] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setFormValue((prevValues) => ({
      ...prevValues,
      [name]: value.trim(),
    }));
  };

  const handleSubmitNewTask = (event) => {
    event.preventDefault();

    if (!formValue.content) return;

    const newTask = {
      id: createId(tasks),
      content: formValue.content,
      done: false,
    };

    addTask(newTask);
    setFormValue({});
  };

  return (
    <>
      <form onClick={handleSubmitNewTask} className="form">
        <input
          name="content"
          value={formValue.content || ""}
          onChange={handleInputChange}
          className="form__input js-newTask"
          placeholder="Co jest do zrobienia?"
        />
        <button className="form__button">Dodaj zadanie</button>
      </form>
    </>
  );
};
