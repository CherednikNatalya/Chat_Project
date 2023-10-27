import { Outlet } from 'react-router-dom';

import SideBar from 'components/SideBar/SideBar';
import ChatList from 'components/ChatList/ChatList'
import { Suspense } from 'react';
import { Container, Wrapper } from './LayoutStyled';
import { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';

export default function Layout ()  {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1440);

  const handleSidebarOpen = () => {
    if (window.innerWidth >= 1440) {
      return;
    }
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <Container>
      <SideBar isOpen={sidebarOpen} onCloseClick={handleSidebarOpen} />
      <ChatList/>
      <Wrapper>
        <Suspense fallback={< Loader/>}>
          <Outlet />
        </Suspense>
       
       
      </Wrapper>
    </Container>
    </>
  );
};

