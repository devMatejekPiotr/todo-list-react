import "./style.css";

export const Form = () => {
  return (
    <>
      <form className="form">
        <input
          className="form__input js-newTask"
          placeholder="Co jest do zrobienia?"
        />
        <button className="form__button">Dodaj zadanie</button>
      </form>
    </>
  );
};
