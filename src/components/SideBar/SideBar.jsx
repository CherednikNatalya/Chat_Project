import {
  Wrapper,
  ProfileBox,
  LogOutBox,
  Frame,
  // ProfileBoxAvatar,
  // LogOutButton,
} from './SideBarStyled';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux-store/AuthOperations/AuthOperations';
// import Icons from '../Icons/Icons';
import SideBarItem from '../SideBarItem/SideBarItem';

export default function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProfileOpen = () => {
    navigate('/account');
    console.log('clicked profile');
  };

  const handleLogOut = (event, values) => {
    dispatch(logOut(values));
    navigate('/login');
    console.log('clicked logout', event);
  };

  const handleDmsClick = () => {
    console.log('DMs clicked');
  };

  const handleRoomsClick = () => {
    console.log('Rooms clicked');
  };

  return (
    <Wrapper>
      <ProfileBox>
        {/* <ProfileBoxAvatar
          onClick={handleProfileOpen}
          src=""
          alt="Profile Avatar"
        >
          <Icons name='photo-icon' color='#222222' size='24' />
        </ProfileBoxAvatar>
        <Text>Anton</Text> */}
        <SideBarItem
          onClick={handleProfileOpen}
          alt="Photo icon"
          name="photo-icon"
          fill="#222222"
          size="24"
        >
          Anton
        </SideBarItem>
      </ProfileBox>
      <Frame>
        <SideBarItem
          onClick={handleDmsClick}
          alt="DMs icon"
          name="dms"
          fill="#222222"
          size="24"
        >
          DMs
        </SideBarItem>
        <SideBarItem
          onClick={handleRoomsClick}
          alt="Rooms icon"
          name="rooms"
          fill="#222222"
          size="24"
        >
          Rooms
        </SideBarItem>
        {/* <FrameBox>
          <ProfileBoxAvatar
            onClick={() => {
              console.log('More');
            }}
            src=""
            alt="Profile Avatar"
          />
          <Text>More</Text>
        </FrameBox> */}
      </Frame>
      <LogOutBox>
        <SideBarItem
          onClick={handleLogOut}
          alt="Logout icon"
          name="logout"
          fill="#222222"
          size="24"
        >
          LogOut
        </SideBarItem>
        {/* <LogOutButton onClick={handleLogOut}></LogOutButton>
        <Text>LogOut</Text> */}
      </LogOutBox>
    </Wrapper>
  );
}
