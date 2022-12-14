import PropTypes from 'prop-types'
import styles from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
  return <section className={styles.statistics}>

    {title && (<h2 className={styles.title}>{title}</h2>)}

    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => {
        return <li className={styles.item} style={{ backgroundColor: `${getRandomHexColor()}` }} key={id}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
      })}
  </ul>
</section>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired
}