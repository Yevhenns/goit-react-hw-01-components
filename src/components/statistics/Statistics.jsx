import PropTypes from 'prop-types'
import styles from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
  return <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statList}>
      {stats.map(element => {
        return <li className={styles.item} style={{ backgroundColor: `${getRandomHexColor()}` }} key={element.id}>
      <span className={styles.label}>{element.label}</span>
      <span className={styles.percentage}>{element.percentage}%</span>
    </li>
      })}
  </ul>
</section>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object)
}