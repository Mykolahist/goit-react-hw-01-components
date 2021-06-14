import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';


const FriendList = ({ friends }) => (
    <ul>
        {friends.map((friend) => 
            <li key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>
        )}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FriendList;