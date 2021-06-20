import React from 'react';
import StatisticItem from '../StatisticItem/StatisticItem';
import colorGenerator from './colorGenerator';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.stat__list}>
            {stats.map(({ id, label, percentage }) => (
                <li className={styles.item}
                    style={
                        { backgroundColor: colorGenerator() }
                    }
                    key={id}>
                    <StatisticItem
                        label={label}
                        percentage={percentage}
                    />
                </li>
            ))}
        </ul>
    </section>
);

Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Statistics;