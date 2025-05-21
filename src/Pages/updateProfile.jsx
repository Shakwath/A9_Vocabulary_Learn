import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Provider/AuthProvider';

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Populate fields with current values
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await updateUser({ displayName, photoURL });
      navigate('/myprofile');
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="text-center mt-20 text-red-500">
        You must be logged in to update your profile.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-6 mt-10 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Your display name"
            required
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Photo URL</label>
          <input
            type="url"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="https://example.com/your-photo.jpg"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Updating…' : 'Update Information'}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
