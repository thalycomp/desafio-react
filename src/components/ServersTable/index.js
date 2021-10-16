import './styles.css';

function ServersTable() {
  return (
    <section className="section-tables">
      <div className="title-container">
        <h4>Tabela de servidores</h4>
      </div>
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
          <tr className="servers-table-tr">
            <td>
              <label class="container">
                <input type="checkbox" checked="checked" />
              </label>
            </td>
            <td>354 GB</td>
            <td>75 vCPUs</td>
            <td>3096 GB</td>
            <td>200 GB</td>
            <td>10.0.01.1</td>
          </tr>
          <tr className="servers-table-tr">
            <td>
              <label class="container">
                <input type="checkbox" checked="checked" />
              </label>
            </td>
            <td>354 GB</td>
            <td>75 vCPUs</td>
            <td>3096 GB</td>
            <td>200 GB</td>
            <td>10.0.01.1</td>
          </tr>
          <tr className="servers-table-tr">
            <td>
              <label class="container">
                <input type="checkbox" checked="checked" />
              </label>
            </td>
            <td>354 GB</td>
            <td>75 vCPUs</td>
            <td>3096 GB</td>
            <td>200 GB</td>
            <td>10.0.01.1</td>
          </tr>
          <tr className="servers-table-tr">
            <td>
              <label class="container">
                <input type="checkbox" checked="checked" />
              </label>
            </td>
            <td>354 GB</td>
            <td>75 vCPUs</td>
            <td>3096 GB</td>
            <td>200 GB</td>
            <td>10.0.01.1</td>
          </tr>
          <tr className="servers-table-tr">
            <td>
              <label class="container">
                <input type="checkbox" checked="checked" />
              </label>
            </td>
            <td>354 GB</td>
            <td>75 vCPUs</td>
            <td>3096 GB</td>
            <td>200 GB</td>
            <td>10.0.01.1</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ServersTable;
