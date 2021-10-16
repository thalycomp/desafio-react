import './styles.css';
import SectionsContainer from '../SectionsContainer';
import { useServers } from '../../hooks/useServers';

function Summary() {
  const { selectedServers } = useServers();

  const {
    totalMemoryProvisioned,
    totalCpuProvisioned,
    totalDiskGB,
  } = selectedServers.reduce(
    (acc, server) => {
      acc.totalCpuProvisioned += server.configuracao.cpuProvisioned;
      acc.totalMemoryProvisioned += server.configuracao.memoryProvisioned;
      acc.totalDiskGB += server.configuracao.totalDiskGB;

      return acc;
    },
    {
      totalMemoryProvisioned: 0,
      totalCpuProvisioned: 0,
      totalDiskGB: 0,
    }
  );

  return (
    <SectionsContainer title="Sumário dos recursos dos servidores">
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
            <td>{selectedServers.length} servidores selecionados</td>
            <td>{totalMemoryProvisioned} GB</td>
            <td>{totalCpuProvisioned} vCPUs</td>
            <td>{totalDiskGB} GB</td>
          </tr>
        </tbody>
      </table>
    </SectionsContainer>
  );
}

export default Summary;
