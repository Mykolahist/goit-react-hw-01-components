import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';


const FriendListItem = ({avatar, name, isOnline}) => (
    <li>
        <span>{isOnline}</span>
        <img
            src={avatar}
            alt={name}
            width="48" />
        <p>{name}</p>
    </li>
);

FriendListItem.defaultProps = {
    avatar: defaultImage,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
};

export default FriendListItem;