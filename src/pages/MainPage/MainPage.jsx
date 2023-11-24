import React from 'react';
import { useState } from "react";
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';

export default function MainPage() {
  const [openRegister, setOpenRegister] = useState(true);
  const [openLogin, setOpenLogin] = useState(true);

  return (
    <div>
      <h2>MainPage</h2>
      <button onClick={() => setOpenRegister(!openRegister)}>
        Sign up
      </button>
      <button onClick={() => setOpenLogin(!openLogin)}>
        Login
      </button>
      {openRegister ? <RegisterPage /> : null}
      {openLogin ? <LoginPage /> : null}
    </div>
  );
}

