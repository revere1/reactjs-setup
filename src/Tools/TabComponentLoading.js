import React from 'react';

const divStyle = {
  width: '100%',
  textAlign: 'center'
};

// const svgLoadingStyle = {
//   isolation: 'isolate',
//   borderRadius: 7,
//   width: 100
// };

const dashPoints = {
  width: '100%'
};

const TabComponentLoading = () => (
  <div style={divStyle}>
    {/* <svg
      style={svgLoadingStyle}
      version="1.1"
      id="L9"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
    >
      <path
        fill="#3870e4"
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="0.5s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg> */}
    <svg style={dashPoints} width="452" height="85" viewBox="0 0 452 152">
      <circle fill="#eee" cx="32.5" cy="32.5" r="32.5" />
      <circle fill="#eee" cx="32.5" cy="119.5" r="32.5" />
      <rect fill="#eee" x="88" y="87" width="364" height="65" rx="10" ry="10" />
      <rect fill="#eee" x="88" width="364" height="65" rx="10" ry="10" />
    </svg>
  </div>
);

export default TabComponentLoading;
