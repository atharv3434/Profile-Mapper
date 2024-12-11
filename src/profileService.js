import profileData from './data/profiles.json';
import fs from 'fs';

const saveProfiles = (profiles) => {
  const data = JSON.stringify(profiles, null, 2);
  fs.writeFileSync('./src/data/profiles.json', data);
};

const getProfiles = () => {
  return profileData;
};

const addProfile = (newProfile) => {
  const profiles = getProfiles();
  const updatedProfiles = [...profiles, newProfile];
  saveProfiles(updatedProfiles);
  return updatedProfiles;
};

const editProfile = (updatedProfile) => {
  const profiles = getProfiles();
  const updatedProfiles = profiles.map((p) =>
    p.id === updatedProfile.id ? updatedProfile : p
  );
  saveProfiles(updatedProfiles);
  return updatedProfiles;
};

const deleteProfile = (id) => {
  const profiles = getProfiles();
  const updatedProfiles = profiles.filter((p) => p.id !== id);
  saveProfiles(updatedProfiles);
  return updatedProfiles;
};

export { getProfiles, addProfile, editProfile, deleteProfile };