import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MapComponent from './MapComponent';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [address, setAddress] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const foundProfile = profiles.find((p) => p.id === parseInt(id));
    if (foundProfile) {
      setProfile(foundProfile);
      setAddress(foundProfile.address);
    }
  }, [id, profiles]);

  useEffect(() => {
    if (address) {
      // Geocoding logic to convert address to coordinates
      // You can use a geocoding service like Google Maps Geocoding API or Mapbox
      // For demonstration purposes, we'll use hardcoded coordinates
      const hardcodedCoordinates = [37.7749, -122.4194]; // San Francisco
      setCoordinates(hardcodedCoordinates);
    }
  }, [address]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      {coordinates && (
        <MapComponent
          coordinates={coordinates}
          address={address}
          name={profile.name}
        />
      )}
    </div>
  );
};

export default ProfileDetails;