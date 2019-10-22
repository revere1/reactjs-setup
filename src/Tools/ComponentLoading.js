import React from 'react';
import './Spinner.css';

const divStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1
};

/* SVG Loader -- Doesn't work with IE-11 */
// const svgLoadingStyle = {
//   isolation: 'isolate',
//   borderRadius: 7,
//   width: 100,
//   position: 'absolute',
//   top: 'calc( 50% + 60px )',
//   left: '50%',
//   transform: 'translate(-50%, -50%)'
// };

// const ComponentLoading = () => (
//   <div style={divStyle}>
//     <svg
//       style={svgLoadingStyle}
//       version="1.1"
//       id="L9"
//       x="0px"
//       y="0px"
//       viewBox="0 0 100 100"
//       enableBackground="new 0 0 0 0"
//     >
//       <path
//         fill="#3870e4"
//         d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
//       >
//         <animateTransform
//           attributeName="transform"
//           attributeType="XML"
//           type="rotate"
//           dur="0.5s"
//           from="0 50 50"
//           to="360 50 50"
//           repeatCount="indefinite"
//         />
//       </path>
//     </svg>
//   </div>
// );

/* Loader for IE 11 */
const ComponentLoading = () => (
  <div style={divStyle}>
    <div className="spinner" />
  </div>
);

export default ComponentLoading;
