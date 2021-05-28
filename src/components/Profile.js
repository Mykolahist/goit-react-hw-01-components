import React from 'react';


const Profile = ({avatar, name, tag, location, stats}) => (
    <div class="profile">
        <div class="description">
            <img
                src={avatar}
                alt={name}
            />
            <p>{name}</p>
            <p>{tag}</p>
            <p>{location}</p>
        </div>

        <ul class={stats}>
            {/* <li>
                <span class={stats.label}>Followers</span>
                <span class={stats.quantity}>{stats.quantity}</span>
            </li>
            <li>
                <span class={stats.label}>Views</span>
                <span class={stats.quantity}>{stats.quantity}</span>
            </li>
            <li>
                <span class={stats.label}>Likes</span>
                <span class={stats.quantity}>{stats.quantity}</span>
            </li> */}
        </ul>
    </div>
);

export default Profile;