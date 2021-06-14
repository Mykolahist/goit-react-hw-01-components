import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ statistics, title, statList, item, label, percentage }) => (
    <section a={statistics}>
        <h2 a={title}>Upload stats</h2>

        <ul a={statList}>
            <li a={item}>
                <span a={label}>.docx</span>
                <span a={percentage}>4%</span>
            </li>
            <li a={item}>
                <span a={label}>.mp3</span>
                <span a={percentage}>14%</span>
            </li>
            <li a={item}>
                <span a={label}>.pdf</span>
                <span a={percentage}>41%</span>
            </li>
            <li a={item}>
                <span a={label}>.mp4</span>
                <span a={percentage}>12%</span>
            </li>
        </ul>
    </section>
);

Statistics.propTypes = {
    statistics: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    statList: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
};

export default Statistics;