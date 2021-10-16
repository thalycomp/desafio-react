import './styles.css';

function Summary() {
  return (
    <section>
      <h4>Sumário dos recursos dos servidores</h4>
      <table>
        <thead>
          <tr>
            <td>Servidores Selecionados</td>
            <td>Total de Memória</td>
            <td>Total de CPUs</td>
            <td>Total de Discos</td>
          </tr>
        </thead>
        <tbody>
          <tr>
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
