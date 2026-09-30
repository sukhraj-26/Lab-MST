import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import AdminPanel from './AdminPanel';
import ViewerPanel from './ViewerPanel';

export default function Dashboard() {
  const { user, role, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="app-card">
      <div className="header-container">
        <h2 className="user-name">Welcome, {user}</h2>
        <span className="role-badge">{role}</span>
      </div>

      <div className="token-card">
        <div className="token-label">Generated Mock JWT Token</div>
        <div className="token-value">{token}</div>
      </div>

      {role === 'Admin' ? <AdminPanel /> : <ViewerPanel />}

      <button
        onClick={() => dispatch(logout())}
        className="btn btn-danger"
        style={{ width: '100%', marginTop: '20px' }}
      >
        Logout
      </button>
    </div>
  );
}