import React, { useState } from 'react';
import PropTypes from 'prop-types';

function DropdownItem({ item }) {
  const { name, link } = item;
  const [over, setOver] = useState(false);
  const styles = {
    color: '#507cfb',
  };

  return (
    <li
      onMouseOver={() => setOver(true)}
      onFocus={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
    >
      <a href={link} style={over ? styles : null}>{name}</a>
    </li>
  );
}

DropdownItem.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default DropdownItem;
