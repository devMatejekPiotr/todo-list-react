import { useState, useRef } from "react";
import { createId } from "../../../utilis/createId";
import { ButtonForm, InputForm, StyledForm } from "./styled";

export const Form = ({ tasks, addTask }) => {
  const [formValue, setFormValue] = useState({});
  const inputRef = useRef(null);

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
    inputRef.current.focus();
    setFormValue({});
  };

  return (
    <StyledForm onClick={handleSubmitNewTask}>
      <InputForm
        name="content"
        value={formValue.content || ""}
        onChange={handleInputChange}
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
      />
      <ButtonForm>Dodaj zadanie</ButtonForm>
    </StyledForm>
  );
};
