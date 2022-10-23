export const Statistics = ({title, stats}) => {
  return <section class="statistics">
    <h2 class="title">{title}</h2>

    <ul class="stat-list">
      {stats.map((element, index) => {
        return <li class="item">
      <span class="label" key={element.id}>{element.label}</span>
      <span class="percentage">{element.percentage}%</span>
    </li>
      })}
  </ul>
</section>
}
