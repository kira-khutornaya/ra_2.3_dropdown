import React, { useState } from 'react';
import DropdownList from './DropdownList';

function Dropdown() {
  const [listStatus, setStatus] = useState(false);
  const openedMark = listStatus ? 'dropdown-wrapper open' : 'dropdown-wrapper';
  const onClick = () => {
    setStatus((status) => !status);
  };

  return (
    <div className="container">
      <div data-id="wrapper" className={openedMark}>
        <button data-id="toggle" className="btn" type="button" onClick={onClick}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>

        <DropdownList />
      </div>
    </div>
  );
}

export default Dropdown;
