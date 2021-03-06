import React from 'react';
import defaultImage from '../default.jpg';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => (
    <>
        <span className={styles.status}
            style={
                isOnline
                    ? { backgroundColor: 'green' }
                    : { backgroundColor: 'red' }
            }>
        </span>
        <img
            className={styles.avatar}
            src={avatar}
            alt={name}
            width="48" />
        <p className={styles.name}>{name}</p>
    </>
);

FriendListItem.defaultProps = {
    avatar: defaultImage,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;