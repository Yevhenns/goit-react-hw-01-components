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
    {items.map}
  </tbody>
</table>
}