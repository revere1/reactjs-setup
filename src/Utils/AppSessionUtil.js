import moment from 'moment';
import UserStore from '../Store';
import { isLocalhost } from '../Api/Interceptor';

const sessionTimeLimit = parseInt(process.env.REACT_APP_SESSION_TIME_LIMIT, 10);

const checkStorage = () => {
  if (isLocalhost) return true;
  if (
    // UserStore.getSessionStorageItem('userDetails') &&
    // UserStore.getSessionStorageItem('entities') &&
    UserStore.getLocalStorageItem('userDetails') &&
    UserStore.getLocalStorageItem('entities')
  ) {
    return true;
  }
  return false;
};

const getDiffInMinutes = (date1ms, date2ms) => {
  let differenceMs = date2ms - date1ms;
  differenceMs /= 60000; // Reduce from milliseconds to minutes
  return Math.floor(differenceMs); // Remove decimals
};

const getCurrentTime = () => moment().valueOf();

const getSessionTime = () => {
  const sessionTime = UserStore.getLocalStorageItem('activeSession');
  if (sessionTime) return parseInt(sessionTime, 10);
  return getCurrentTime();
};

export const renewSessionTime = () => {
  const sessionTime = getCurrentTime();
  UserStore.setLocalStorageItem('activeSession', sessionTime);
};

export const isSessionExpired = () => {
  const lastActiveSession = getSessionTime();
  const currentTime = getCurrentTime();
  const duration = getDiffInMinutes(lastActiveSession, currentTime);
  if (duration <= sessionTimeLimit && checkStorage()) {
    renewSessionTime();
    return false;
  }
  if (!isLocalhost) {
    UserStore.clearStorageData();
  }
  return true;
};
