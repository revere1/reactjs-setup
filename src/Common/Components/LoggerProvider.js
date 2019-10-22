import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import UserStore from '../../Store';
import { ExceptionHandler } from './ExceptionHandler';
import {
  API,
  LOG_LEVEL,
  SHOW_LOGS_ON_CONSOLE,
  ROOT_LOGGER,
  moduleId,
  version,
  moduleName as module
} from '../../Api';

const { LogURI } = API;
const isNumber = num => /^\d+$/.test(num);

// http call to publish log into remote
const httpApiCall = async log => {
  const user = UserStore.getUserDetails();
  const userId = user && user.userId ? user.userId : 0;
  const requestLog = {
    ...log,
    userId,
    moduleId,
    version,
    section: 'UI',
    module
  };
  // eslint-disable-next-line
  axios.post(LogURI, requestLog).catch(console.err);
};

// if console.log is enabled then it will print log object into console
/* eslint-disable no-console */
const logInConsole = (isLogged = false, log) => {
  if (SHOW_LOGS_ON_CONSOLE) {
    if (isLogged) {
      console.log('%c LOG:Y ', 'background: #2f5e10; color: #ffffff;', log);
    } else {
      console.log('%c LOG:N ', 'background: #222; color: #bada55;', log);
    }
  }
};

// convert keys to values and values to keys
const convertObject = logLevel => {
  const levels = {};
  if (!logLevel) return levels;
  Object.keys(logLevel).forEach(k => {
    levels[logLevel[k]] = k;
  });
  return levels;
};

const levels = convertObject(LOG_LEVEL);
const LoggerContext = React.createContext({
  log: () => {},
  LOG_LEVEL
});

class LoggerProvider extends React.Component {
  log = entity => ({
    level = LOG_LEVEL.INFO,
    action,
    duration = 0,
    entityId = 0,
    message = ''
  }) => {
    const log = { entity, action, entityId, message, duration };
    log.level = levels[level];
    if (entity && action && isNumber(level) && level <= ROOT_LOGGER) {
      httpApiCall(log);
      logInConsole(true, log);
    } else {
      logInConsole(false, log);
    }
  };

  render() {
    const { children } = this.props;
    return (
      <LoggerContext.Provider value={{ log: this.log }}>
        {children}
      </LoggerContext.Provider>
    );
  }
}

LoggerProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// context into props wrapper
const withContextProps = ({ Consumer }) => entity => WrappedComponent => {
  const HasProps = props => (
    <Consumer>
      {context => (
        <ExceptionHandler {...props} log={context.log(entity)} entity={entity}>
          <WrappedComponent {...context} {...props} log={context.log(entity)} />
        </ExceptionHandler>
      )}
    </Consumer>
  );
  return HasProps;
};

const withLogger = withContextProps(LoggerContext);
export default LoggerProvider;
export { LoggerContext, withLogger, LOG_LEVEL };

// level = LOG_LEVEL.INFO,
// action,
// duration = 0,
// entityId = 0,
// message = ''
