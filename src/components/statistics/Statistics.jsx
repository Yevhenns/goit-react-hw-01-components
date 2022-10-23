export const Statistics = ({title, stats}) => {
  return <section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map(element => {
        return <li className="item" key={element.id}>
      <span className="label">{element.label}</span>
      <span className="percentage">{element.percentage}%</span>
    </li>
      })}
  </ul>
</section>
}
