import React from 'react';
import sprite from '../../images/sprite.svg';
import PropTypes from 'prop-types';

function Icons({ name, color, size }) {
  return (
    <svg
      className="icon"
      fill={color}
      stroke={color}
      width={size}
      height={size}
    >
      <use href={sprite + '#icon-' + name}></use>
    </svg>
  );
}

Icons.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Icons;

