import css from './index.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_table}>
      <thead className={css.table_head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.table_body}>
        {items.map(el => {
          return (
            <tr className={css.transaction_row} key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
