import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Styles from './Common/Style/Styles';
import UserStore from './Store';
import { loginConfig } from './Api/index';
import { withLogger, LOG_LEVEL } from './Common/Components/LoggerProvider';

const wrapper = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
};

const errorIcon = {
  textAlign: 'center'
};

const textSection = {
  color: '#8a6d3b',
  fontSize: '1.8rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const linkStyle = {
  color: '#3870e4',
  padding: '6px 8px',
  fontSize: '1rem',
  lineHeight: '1.75',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  textAlign: 'left'
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  redirectToLogin = () => {
    const redirectURI = window.location.href;
    const redirectURIHex = UserStore.encryptToHex(redirectURI);
    UserStore.clearStorageData();
    window.location.replace(
      `${loginConfig.baseUrl}?redirect_to=${redirectURIHex}`
    );
  };

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    const logMessage = {};
    const { log } = this.props;
    console.log('Error Boundary Log', error, info);
    logMessage.message = error;
    logMessage.level = LOG_LEVEL.ERROR;
    log(logMessage);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Fragment>
          <div style={wrapper}>
            <div style={errorIcon}>
              <svg
                style={{ width: '280px', height: 'auto', marginRight: '32px' }}
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 421.47 536.61"
              >
                <defs />
                <rect
                  style={{ fill: '#99bcbf' }}
                  x="188.23"
                  y="332.61"
                  width={46}
                  height={193}
                />
                <rect
                  style={{ fill: '#bad8d7' }}
                  x="188.23"
                  y="332.61"
                  width={13}
                  height={193}
                />
                <rect
                  style={{ fill: '#bad8d7' }}
                  x="209.23"
                  y="332.61"
                  width={5}
                  height={193}
                />
                <rect
                  style={{ fill: '#fce000' }}
                  x="143.26"
                  y="106.88"
                  width="312.49"
                  height="312.49"
                  rx="24.7"
                  transform="translate(185.01 -187.1) rotate(45)"
                />
                <path
                  style={{ fill: '#232323' }}
                  d="M362 241.84v97.31A34.76 34.76 0 0 1 327.23 374h-56A34.22 34.22 0 0 1 237 339.78v-138.5a11.17 11.17 0 0 1 9.73-11.2A11 11 0 0 1 259 201v63.37a33.46 33.46 0 0 1 3.43-1.11v-82.57a11.18 11.18 0 0 1 9.74-11.21 11 11 0 0 1 12.23 10.92v81.7h3.43v-98.58a11.17 11.17 0 0 1 9.74-11.2 11 11 0 0 1 12.23 10.91v98.87h2.75v-90.34a11.17 11.17 0 0 1 9.73-11.2 11 11 0 0 1 12.24 10.91v99.73a35.15 35.15 0 0 1 3.43 3.68v-32.76c0-6.05 4.9-11.72 10.93-12.24A12 12 0 0 1 362 241.84z"
                  transform="translate(-88.77 -52.39)"
                />
                <path
                  style={{ fill: '#232323' }}
                  d="M476.45 244.5L318.13 86.18a26.36 26.36 0 0 0-37.26 0L122.56 244.5a26.33 26.33 0 0 0 0 37.25l158.31 158.32a26.36 26.36 0 0 0 37.26 0l158.32-158.32a26.35 26.35 0 0 0 0-37.25zm-18.14 37.25L318.13 421.94a26.36 26.36 0 0 1-37.26 0L140.69 281.75a26.35 26.35 0 0 1 0-37.25l140.18-140.19a26.36 26.36 0 0 1 37.26 0L458.31 244.5a26.33 26.33 0 0 1 0 37.25z"
                  transform="translate(-88.77 -52.39)"
                />
                <polygon
                  style={{ fill: '#859d9e' }}
                  points="188.23 525.61 193.23 516.61 202.23 520.61 209.23 509.33 217.23 520.61 225.23 515.61 229.23 522.61 234.23 525.61 226.23 533.61 214.23 531.61 210.23 536.61 202.23 534.61 200.23 531.61 192.23 530.61 188.23 525.61"
                />
              </svg>
            </div>
            <div style={textSection}>
              <p style={{ marginBottom: '5px', paddingLeft: '7px' }}>
                {`Looks like something went wrong on our end.`}
              </p>
              <button
                type="submit"
                style={linkStyle}
                onClick={this.redirectToLogin}
              >
                GO BACK TO HOMEPAGE
              </button>
            </div>
          </div>
        </Fragment>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  log: PropTypes.func.isRequired
};

// export default withStyles(Styles)(ErrorBoundary);
const errorBoundary = withStyles(Styles)(ErrorBoundary);
export default withLogger('ErrorBoundary')(errorBoundary);
