import React from 'react';
import PropTypes from 'prop-types';
import { LOG_LEVEL } from '../../Api';

class ExceptionHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  /* eslint-disable no-console */
  componentDidCatch(error) {
    const { log } = this.props;
    this.setState({ hasError: true });
    const logMessage = { message: error.message };
    console.log(
      '%c ERROR ',
      'background: #f20404; color: #ffffff;',
      logMessage
    );
    log({
      ...logMessage,
      level: LOG_LEVEL.ERROR,
      action: 'COMPONENT_LOADING_FAILED',
      duration: 0,
      entityId: 0
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <span>
          Something went wrong,&nbsp;
          <a href="#" onClick={() => window.location.reload()}>
            reload
          </a>
          &nbsp; and try again
        </span>
      );
    }
    return children;
  }
}

ExceptionHandler.propTypes = {
  children: PropTypes.node.isRequired,
  log: PropTypes.func.isRequired
};

export default ExceptionHandler;
export { ExceptionHandler };
