import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithMockJwt, clearError } from '../redux/authSlice';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const handleLogin = (role) => {
    dispatch(loginWithMockJwt({ username, role }));
  };

  return (
    <div className="app-card">
      <h2 className="form-title">Portal Login</h2>

      <div className="form-group">
        <label className="form-label">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            if (error) dispatch(clearError());
          }}
          placeholder="Enter username"
          className="form-input"
        />
        {error && <div className="error-msg">{error}</div>}
      </div>

      <div className="btn-group">
        <button
          onClick={() => handleLogin('Admin')}
          className="btn btn-primary"
        >
          Login as Admin
        </button>
        <button
          onClick={() => handleLogin('Viewer')}
          className="btn btn-secondary"
        >
          Login as Viewer
        </button>
      </div>
    </div>
  );
}