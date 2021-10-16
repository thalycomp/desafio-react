import './styles.css';
import SectionsContainer from '../SectionsContainer';
import { useServers } from '../../hooks/useServers';

function ServersTable() {
  const { servers } = useServers();

  return (
    <SectionsContainer title="Tabela de servidores">
      <table className="servers-table">
        <thead className="servers-table-thead">
          <tr className="servers-table-tr">
            <th>Select</th>
            <th>Hostname</th>
            <th>Memória</th>
            <th>vCPUs</th>
            <th>Disco</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((server) => (
            <tr key={server.id_vm} className="servers-table-tr">
              <td>
                <label className="container">
                  <input type="checkbox" value={server.id_vm} />
                </label>
              </td>
              <td>{server.hostname}</td>
              <td>{server.configuracao.cpuProvisioned} vCPUs</td>
              <td>{server.configuracao.memoryProvisioned} GB</td>
              <td>{server.configuracao.totalDiskGB} GB</td>
              <td>{server.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionsContainer>
  );
}

export default ServersTable;
