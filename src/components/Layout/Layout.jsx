import React from 'react';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from '../Loader/Loader';

// import ChatMap from '../ChatMap/ChatMap';

export default function Layout() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
   Loyout

      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      
      </div>
  );
}
