import React from 'react';

import './Button.css';

export default function Button({ clickAction, value, type }) {
  return (
    <button id="button" type={type} onClick={clickAction}>
      {value}
    </button>
  );
}
