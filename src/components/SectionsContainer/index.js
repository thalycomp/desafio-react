import './styles.css';

function SectionsContainer({ children }) {
  return (
    <section className="section-tables">
      <div className="title-container">
        <h4>{children}</h4>
      </div>
    </section>
  );
}

export default SectionsContainer;
