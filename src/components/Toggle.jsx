import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <label className="btn" onChange={(e) => setIsActive(!isActive)}>
        <input type="checkbox" name="selected" />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Toggle;
