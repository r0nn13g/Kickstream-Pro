import React from "react";
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PasswordProtected = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'Pursuit') {
      navigate('/live');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="password-protected-page-wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {/* <button type="submit">Submit</button> */}
        </form>
    </div>
  );
};

export default PasswordProtected;