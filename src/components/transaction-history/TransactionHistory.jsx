import { TransactionHistoryItem } from "./TransactionHistoryItem/TransactionHistoryItem"

export const TransactionHistory = ({ items }) => {
  return<table class="transaction-history">
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
          id={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.amount} />
    })}
  </tbody>
</table>
}