import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState  } from 'react';

import SideBar from 'components/SideBar/SideBar';
import ChatList from 'components/ChatList/ChatList'

import { Container, Wrapper } from './LayoutStyled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
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
    <Container>
      <SideBar isOpen={sidebarOpen} onCloseClick={handleSidebarOpen} />
      <ChatList/>
      <Wrapper>
        <Suspense fallback={< Loader/>}>
          <Outlet />
        </Suspense>
       
       
      </Wrapper>
    </Container>
  );
};

export default Layout;