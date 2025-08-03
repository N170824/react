import React, { useState } from 'react';
import { UserProfile } from './userProfile';
import { v4 as uuidv4 } from 'uuid';
const UserProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [status, setStatus] = useState('');

  const userId = uuidv4(); 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!profilePicFile) {
      alert('Please upload a profile picture');
      return;
    }
    setStatus('Saving...');
    try {
      const userData = { name, email, phone };
      await UserProfile(userId, userData, profilePicFile);
      setStatus('User data saved successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setProfilePicFile(null);
    } catch (err) {
      console.error('Error saving user profile:', err);
      setStatus('Failed to save user data.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>User Profile</h2>
      <div style={{ marginBottom: 10 }}>
        <label>Name:</label><br />
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{ width: '100%', height: 30 }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: '100%', height: 30 }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Phone Number:</label><br />
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          style={{ width: '100%', height: 30 }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Profile Picture:</label><br />
        <input
          type="file"
          accept="image/*"
          onChange={e => setProfilePicFile(e.target.files[0])}
          required
        />
      </div>
      <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Save Profile
      </button>
      <div style={{ marginTop: 15, minHeight: 20 }}>{status}</div>
    </form>
  );
};

export default UserProfileForm;
