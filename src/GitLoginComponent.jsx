import React, { useState } from 'react';

const GitLoginComponent = () => {
  // State to manage user inputs
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mock authentication logic - in a real application, you would
    // send the token to your backend to handle authentication
    if (username && token) {
      // Assuming authentication is successful
      setIsAuthenticated(true);
      setError(null);
    } else {
      setIsAuthenticated(false);
      setError('Invalid username or token');
    }
  };

  // Render the form if not authenticated, otherwise show success message
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
      <h2>Git Login</h2>
      {isAuthenticated ? (
        <p>Successfully authenticated as {username}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Personal Access Token:</label>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default GitLoginComponent;
