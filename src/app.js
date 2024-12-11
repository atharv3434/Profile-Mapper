import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import SearchBar from './components/SearchBar';
import ProfileDetails from './components/ProfileDetails';
import profileData from './data/profiles.json';


function App() {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setProfiles(profileData);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  const handleEditProfile = (updatedProfile) => {
    setProfiles(
      profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p))
    );
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  return (
    <Router>
      <div>
        <h1>Profile Directory</h1>
        <SearchBar onSearch={handleSearch} />
        <AdminPanel
          profiles={filteredProfiles}
          onAddProfile={handleAddProfile}
          onEditProfile={handleEditProfile}
          onDeleteProfile={handleDeleteProfile}
        />
        {profiles.length > 0 && (
          <Routes>
            <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;