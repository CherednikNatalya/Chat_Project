import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { Wrapper, Text, ButtonMapOpen, MapBox } from './SearchBarStyled';
import SearchInput from '../SearchInput/SearchInput';
import ChatList from '../ChatList/ChatList';
import ChatMap from '../ChatMap/ChatMap';
// import PropTypes from 'prop-types'

export default function SearchBar(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <SearchInput />
      <ButtonMapOpen onClick={handleOpen}>Search by map</ButtonMapOpen>
      <Text>
        There are no rooms in the list.
        <br /> Find chat of a country and it will be shown here
      </Text>
      <ChatList />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <MapBox>
            <ChatMap />
          </MapBox>
        </Fade>
      </Modal>
    </Wrapper>
  );
}

// SearchBar.propTypes = {}
