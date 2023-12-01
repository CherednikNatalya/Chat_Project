import React from 'react';
import PropTypes from 'prop-types';
import { SideBarBox, SideBarIcon, Text } from './SideBarItemStyled';
import Icons from '../Icons/Icons';

function SideBarItem({onClick, alt, name, fill, stroke, size, children}) {
  return (
    <SideBarBox onClick={() => onClick()}>
      <SideBarIcon alt={alt}>
        <Icons name={name} fill={fill} stroke={stroke} size={size} />
      </SideBarIcon>
      <Text>{children}</Text>
    </SideBarBox>
  );
}

SideBarItem.propTypes = {
  onClick: PropTypes.func,
  alt: PropTypes.string,
  name: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.string
};

export default SideBarItem;
