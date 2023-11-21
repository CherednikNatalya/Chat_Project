import React from 'react';
import {
  Wrapper,
  ProfileBox,
  LogOutBox,
  Frame,
  FrameBox,
  ProfileBoxAvatar,
  Text,
  LogOutButton,
} from './SideBarStyled';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux-store/AuthOperations/AuthOperations';

export default function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProfileOpen = () => {
    navigate('/account');
    console.log('clicked');
  };

  const handleLogOut = (event) => {
    dispatch(logOut);
    navigate('/login');
    console.log('clicked logout', event);
  };

  return (
    <Wrapper>
      <ProfileBox>
        <ProfileBoxAvatar
          onClick={handleProfileOpen}
          src=""
          alt="Profile Avatar"
        />
        <Text>Anton</Text>
      </ProfileBox>
      <Frame>
        <FrameBox>
          <ProfileBoxAvatar
            onClick={() => {
              console.log('DMs');
            }}
            src=""
            alt="Profile Avatar"
          />
          <Text>DMs</Text>
        </FrameBox>
        <FrameBox>
          <ProfileBoxAvatar
            onClick={() => {
              console.log('Rooms');
            }}
            src=""
            alt="Profile Avatar"
          />
          <Text>Rooms</Text>
        </FrameBox>
        <FrameBox>
          <ProfileBoxAvatar
            onClick={() => {
              console.log('More');
            }}
            src=""
            alt="Profile Avatar"
          />
          <Text>More</Text>
        </FrameBox>
      </Frame>
      <LogOutBox>
        <LogOutButton onClick={handleLogOut}></LogOutButton>
        <Text>LogOut</Text>
      </LogOutBox>
    </Wrapper>
  );
}
