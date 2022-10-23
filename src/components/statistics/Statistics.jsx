export const Statistics = ({title, stats}) => {
  return <section class="statistics">
    <h2 class="title">{title}</h2>
    <ul class="stat-list">
      {stats.map(element => {
        return <li class="item" key={element.id}>
      <span class="label">{element.label}</span>
      <span class="percentage">{element.percentage}%</span>
    </li>
      })}
  </ul>
</section>
}
