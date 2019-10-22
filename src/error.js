import React from 'react';
import { Link } from 'react-router-dom';

const text = {
  margin: '0',
  padding: '0'
};
const image = {
  width: '100px',
  height: '120px',
  marginRight: '15px'
};
const holder = {
  boxSizing: 'border-box',
  padding: '15px',
  boxShadow: '0 0 20px rgba(168, 168, 168, 0.6)',
  width: '320px',
  margin: '20px',
  borderLeft: '4px solid #3870e4'
};
const header = {
  fontSize: '48px',
  margin: '0',
  color: '#3870e4'
};
const links = {
  marginTop: '10px',
  color: '#3870e4',
  textDecoration: 'none',
  display: 'block'
};
const cls1 = {
  fill: '#404144'
};

const cls2 = {
  fill: '#da7944',
  fillRule: 'evenodd'
};

const cls3 = {
  fill: '#f7dfa6',
  fillRule: 'evenodd'
};

const cls4 = {
  fill: '#515253',
  fillRule: 'evenodd'
};

const cls5 = {
  fill: '#3870e4',
  fillRule: 'evenodd'
};

const ErrorComponent = () => (
  <div style={holder}>
    <table>
      <tr>
        <td>
          <svg style={image} width="200" height="269" viewBox="0 0 200 269">
            <ellipse style={cls1} cx="100" cy="229" rx="91" ry="23" />
            <path
              id="Rectangle_1_copy"
              data-name="Rectangle 1 copy"
              style={cls2}
              d="M174,242.378C157.49,248.2,130.508,252,100,252c-29.889,0-56.41-3.643-73-9.267V155.5a73.5,73.5,0,0,1,147,0v86.878Z"
            />
            <path
              id="Ellipse_2_copy"
              data-name="Ellipse 2 copy"
              style={cls3}
              d="M134,169a17,17,0,1,1,17-17A17,17,0,0,1,134,169Zm-66,0a17,17,0,1,1,17-17A17,17,0,0,1,68,169Zm13,23h40a23,23,0,0,1,0,46H81A23,23,0,0,1,81,192Z"
            />
            <path
              style={cls4}
              d="M134.5,159a6.5,6.5,0,1,1,6.5-6.5A6.5,6.5,0,0,1,134.5,159ZM76,223s6.274-32.592,52-13C128,210,85.267,212.107,76,223Zm-7.5-65a6.5,6.5,0,1,1,6.5-6.5A6.5,6.5,0,0,1,68.5,158Z"
            />
            <path
              id="_"
              data-name="!"
              style={cls5}
              d="M76.2,8.854L63.854,11.017l8.45,40.2,9.619-1.686ZM73.859,59.27a5.97,5.97,0,0,0-1.014,4.7,5.9,5.9,0,0,0,2.549,4.056,7.352,7.352,0,0,0,9.379-1.644,6.387,6.387,0,0,0-1.538-8.777,6.592,6.592,0,0,0-5.011-.9A6.491,6.491,0,0,0,73.859,59.27Z"
            />
            <path
              id="_2"
              data-name="?"
              style={cls5}
              d="M122.467,51.386l0.476-2.444a11.177,11.177,0,0,1,4.393-6.461L131,39.787a26.94,26.94,0,0,0,6.231-6.083,14.367,14.367,0,0,0,2.361-6.289q0.963-7.555-3.232-12.3T123.611,9.282q-8.477-1.081-13.937,2.658t-6.525,11.444l11.7,1.492a7.288,7.288,0,0,1,2.525-4.838,6.426,6.426,0,0,1,5.017-1.231q6.3,0.8,5.426,7.636a8.382,8.382,0,0,1-1.76,4.152,25.908,25.908,0,0,1-5.539,4.674,18.622,18.622,0,0,0-5.867,5.965,24.462,24.462,0,0,0-2.522,8.835ZM110.624,66.9a7.425,7.425,0,0,0,9.485,1.209,6.327,6.327,0,0,0,1.086-8.836,7.251,7.251,0,0,0-9.4-1.2A6.326,6.326,0,0,0,110.624,66.9Z"
            />
          </svg>
        </td>
        <td>
          <h2 style={header}>401</h2>
          <p style={text}>Access Denied</p>
          <Link to="/home/dashboard" style={links}>
            Go Back Home
          </Link>
        </td>
      </tr>
    </table>
  </div>
);

export default ErrorComponent;
