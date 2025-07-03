import React, { useEffect, useState } from 'react';
import API from '../api';

interface UserProfileData {
  id: string;
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [error, setError] = useState<string>('');

 const fetchProfile = async () => {
    debugger
      try {
        const res = await API.get<UserProfileData>('/profile'); 
        setProfile(res.data);
      } catch (err: any) {
        console.error('Profile fetch error:', err.response?.data?.message);
        setError(err.response?.data?.message || 'Unauthorized ❌');
      }
    };

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button onClick={fetchProfile}>Get User</button>
      <h2>User Profile</h2>
      {profile ? (
        <div>
          <p><strong>ID:</strong> {profile.id}</p>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
