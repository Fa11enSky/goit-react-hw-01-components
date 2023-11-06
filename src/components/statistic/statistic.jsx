import css from './statistic.module.css';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(el => {
          return (
            <li
              className={css.item}
              key={el.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}>{el.percentage + '%'}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;
