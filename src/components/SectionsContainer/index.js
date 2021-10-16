import './styles.css';

function SectionsContainer({ title, children }) {
  return (
    <section className="section-tables">
      <div className="title-container">
        <h4>{title}</h4>
      </div>
      {children}
    </section>
  );
}

export default SectionsContainer;
