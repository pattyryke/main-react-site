import React from 'react';

const Star = ({ x, y, size }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: x,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#fff',
      }}
    />
  );
};

export default Star;
