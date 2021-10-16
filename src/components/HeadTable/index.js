import './styles.css';

function HeadTable({ type, valuesHead }) {
  return (
    <thead
      className={type === 'horizontal' ? 'horizontal-thead' : 'vertical-thead'}
    >
      <tr
        className={
          type === 'horizontal'
            ? 'horizontal-table-tr general-table'
            : 'vertical-table-tr general-table'
        }
      >
        {valuesHead && valuesHead.map((h) => <th key={h.key}>{h.title}</th>)}
      </tr>
    </thead>
  );
}

export default HeadTable;
