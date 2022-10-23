import { TransactionHistoryItem } from "./TransactionHistoryItem/TransactionHistoryItem"
import styles from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
  return<table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(item => {
        return <TransactionHistoryItem
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.amount} />
    })}
  </tbody>
</table>
}