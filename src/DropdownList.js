import React from 'react';
import DropdownItem from './DropdownItem';
import items from './data';

function DropdownList() {
  return (
    <ul data-id="dropdown" className="dropdown">
      {
        items.map((item) => (
          <DropdownItem
            item={item}
            key={item.name}
          />
        ))
      }
    </ul>
  );
}

export default DropdownList;
