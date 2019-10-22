import React from 'react';
import './Spinner.css';

// const svgLoadingStyle = {
//   isolation: 'isolate',
//   borderRadius: 7,
//   width: 30,
//   marginLeft: 5
// };

// const MinorLoadingWhite = () => (
//   <svg
//     style={svgLoadingStyle}
//     version="1.1"
//     id="L9"
//     x="0px"
//     y="0px"
//     viewBox="0 0 50 50"
//     enableBackground="new 0 0 0 0"
//   >
//     <path
//       fill="#fff"
//       d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
//     >
//       <animateTransform
//         attributeType="xml"
//         attributeName="transform"
//         type="rotate"
//         from="0 25 25"
//         to="360 25 25"
//         dur="0.6s"
//         repeatCount="indefinite"
//       />
//     </path>
//   </svg>
// );

const MinorLoadingWhite = () => <div className="spinner mini-spinner" />;

export default MinorLoadingWhite;
