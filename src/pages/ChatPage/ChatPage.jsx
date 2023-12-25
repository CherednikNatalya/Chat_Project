import React from 'react';
// import { useEffect, useState } from 'react';
import { Container } from './ChatPageStyled.js';

import SideBar from 'components/SideBar/SideBar';
import SearchBar from 'components/SearchBar/SearchBar';
import Chat from 'components/Chat/Chat';

export default function ChatPage() {
  // const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1920);
  
  // const handleSidebarOpen = () => {
  //   if (window.innerWidth >= 1920) {
  //     return;
  //   }
  //   setSidebarOpen(!sidebarOpen);
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setSidebarOpen(window.innerWidth >= 1920);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <Container>
      <SideBar />
      {/* <SideBar isOpen={sidebarOpen} onCloseClick={handleSidebarOpen}/> */}
      <SearchBar />
      <Chat />
    </Container>
  );
}
