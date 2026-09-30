import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      {!isAuthenticated ? <LoginForm /> : <Dashboard />}
    </div>
  );
}