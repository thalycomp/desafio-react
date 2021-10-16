import './styles.css';
import SectionsContainer from '../SectionsContainer';
import { useServers } from '../../hooks/useServers';
import HeadTable from '../HeadTable';

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

  const valuesHeadSummary = [
    { title: 'Servidores selecionados', key: 0 },
    { title: 'Total de Memória', key: 1 },
    { title: 'Total de CPUs', key: 2 },
    { title: 'Total de discos', key: 3 },
  ];

  return (
    <SectionsContainer title="Sumário dos recursos dos servidores">
      <table className="summary-table">
        <HeadTable type="vertical" valuesHead={valuesHeadSummary} />
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
