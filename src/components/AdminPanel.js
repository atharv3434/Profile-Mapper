import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminPanel.module.css';

const AdminPanel = ({ profiles, onAddProfile, onEditProfile, onDeleteProfile }) => {
  const [newProfile, setNewProfile] = useState({
    name: '',
    photo: '',
    description: '',
    address: '',
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewProfile({
      ...newProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProfile = () => {
    const newProfileWithId = { ...newProfile, id: Date.now() };
    onAddProfile(newProfileWithId);
    setNewProfile({
      name: '',
      photo: '',
      description: '',
      address: '',
    });
    setShowAddForm(false);
  };

  const handleProfileClick = (profileId) => {
    navigate(`/profile/${profileId}`);
  };

  return (
    <div className={styles.adminPanel}>
      <h2>Admin Panel</h2>
      <button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Cancel' : 'Add New Profile'}
      </button>
      {showAddForm && (
        <div className={styles.addForm}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newProfile.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={newProfile.photo}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newProfile.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={newProfile.address}
            onChange={handleInputChange}
          />
          <button onClick={handleAddProfile}>Add Profile</button>
        </div>
      )}
      <div className={styles.profileList}>
        {profiles.map((profile) => (
          <div key={profile.id} className={styles.profileItem}>
            <p onClick={() => handleProfileClick(profile.id)}>{profile.name}</p>
            <img src={profile.photo} alt={profile.name} />
            <button onClick={() => onEditProfile(profile)}>Edit</button>
            <button onClick={() => onDeleteProfile(profile.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
