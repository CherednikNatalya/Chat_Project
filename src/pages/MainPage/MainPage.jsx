import React from 'react';
import { useState } from "react";
import RegisterPage from '../RegisterPage/RegisterPage';

export default function MainPage() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>MainPage</h2>
      <button onClick={() => setShow(!show)}>
        Sign up
      </button>
      {show ? <RegisterPage /> : null}
    </div>
  );
}

