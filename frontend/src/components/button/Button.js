import React from 'react';

import './Button.css';

export default function Button({ clickAction, value }) {
  return (
    <button id="button" type="button" onClick={clickAction}>
      {value}
    </button>
  );
}
