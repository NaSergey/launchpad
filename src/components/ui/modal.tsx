'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { register, login, clearError, logout } from '@/store/slices/authSlice';

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);

  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.auth.error);
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const handleSubmit = () => {
    if (isRegistering) {
      dispatch(register({ email, password }));
    } else {
      dispatch(login({ email, password }));
    }
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).dataset.modalOverlay) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 p-2 flex justify-center items-center z-50 
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
        transition-opacity duration-300`}
      data-modal-overlay="true"
      onClick={handleOutsideClick}
    >
      <div
        className={`bg-[#1b1d28] p-6 text-center border-2 border-slate-500 rounded shadow-lg transform  
          ${isOpen ? 'scale-100' : 'scale-90'} transition-transform duration-300`}
      >
        <h2 className="text-white text-xl font-bold mb-4">
          {isRegistering ? 'Registration' : 'Login'}
        </h2>
        <div className="mb-4">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 mb-2 rounded bg-gray-700 text-white border border-gray-600"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          />
        </div>
        {error ? (
          <p className="text-red-500 mb-4">{error}</p>
        ) : currentUser ? (
          <p className="text-green-400 mb-4">Welcome, {currentUser.email}!</p>
        ) : null}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mb-2 w-full"
          onClick={handleSubmit}
        >
          {isRegistering ? 'Register' : 'Login'}
        </button>
        <button
          className="text-sm text-gray-400 underline"
          onClick={() => {
            setIsRegistering(!isRegistering);
            setEmail('');
            setPassword('');
            dispatch(clearError());
            dispatch(logout());
          }}
        >
          {isRegistering ? 'Have an account? Login' : 'No account? Register'}
        </button>
      </div>
    </div>
  );
};

export default Modal;
