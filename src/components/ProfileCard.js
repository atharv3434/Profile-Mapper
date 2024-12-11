// src/components/ProfileCard.js
import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div>
      <h3>{profile.name}</h3>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      {/* Add more profile details here */}
    </div>
  );
};

export default ProfileCard;