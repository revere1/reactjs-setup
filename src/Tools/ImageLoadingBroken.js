import React from 'react';

const divStyle = {
  width: '100%',
  textAlign: 'center'
};

const ImageLoadingBroken = () => (
  <div style={divStyle}>
    <svg
      id="L9"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      enableBackground="new 0 0 0 0"
    >
      <path
        fill="none"
        d="M0 0h24v24H0zm0 0h24v24H0zm21 19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2"
      />
      <path fill="none" d="M0 0h24v24H0z" />
      <path fill="#eee" d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z" />
    </svg>
  </div>
);

export default ImageLoadingBroken;
