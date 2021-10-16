import './styles.css';

function Summary() {
  return (
    <section className="section-tables">
      <div className="title-container">
        <h4>Sumário dos recursos dos servidores</h4>
      </div>
      <table className="summary-table">
        <thead className="summary-table-thead">
          <tr className="summary-table-tr">
            <th>Servidores Selecionados</th>
            <th>Total de Memória</th>
            <th>Total de CPUs</th>
            <th>Total de Discos</th>
          </tr>
        </thead>
        <tbody>
          <tr className="summary-table-tr">
            <td>4 servidores selecionados</td>
            <td>354 GB</td>
            <td>75 vCPUs</td>
            <td>3096 GB</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Summary;
