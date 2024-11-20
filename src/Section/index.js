import "./style.css";

export const Section = ({ title, body }) => {
  return (
    <>
      <section className="section">
        <h2 className="section__title">{title}</h2>
        {body}
      </section>
    </>
  );
};
