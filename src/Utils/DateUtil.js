import moment from 'moment';

export const getDate = dateStr => {
  if (!dateStr) return '';
  return moment(dateStr).format('DD-MMM-YYYY');
};

export const getUtcDateTime = date => {
  if (!date) return '';
  const utcDate = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes()
  );
  return utcDate;
};

export const convertLocToUtcDate = utcDate => {
  if (!utcDate) return '';
  return moment(utcDate).valueOf();
};

export const getISTDateTime = utcDate => {
  const date = new Date(utcDate);
  const newDate = new Date(
    date.getTime() + date.getTimezoneOffset() * 60 * 1000
  );

  const offset = date.getTimezoneOffset() / 60;
  const hours = date.getHours();

  newDate.setHours(hours - offset);

  return newDate;
};

export const getLocalDateTime = utcDate => {
  if (!utcDate) return '';
  return moment
    .utc(utcDate)
    .local()
    .format('DD-MMM-YYYY hh:mm a');
};

export const getLocalDate = utcDate => {
  if (!utcDate) return '';
  return moment
    .utc(utcDate)
    .local()
    .format('DD-MMM-YYYY');
};

export const getCurentDate = () => new Date();
export default { getDate, getCurentDate };

export const addHoursToDateTime = (utcDateTime, hoursToAdd) => {
  if (!utcDateTime || !hoursToAdd) {
    return '';
  }
  return moment
    .utc(utcDateTime)
    .local()
    .add(hoursToAdd, 'hour');
};

export const getDateTime = utcDateTime => {
  if (!utcDateTime) {
    return '';
  }
  return moment.utc(utcDateTime).local();
};

export const getDateTimeDiff = (newDateTime, oldDateTime) => {
  if (!newDateTime || !oldDateTime) {
    return '';
  }
  // returns True if newDateTime is after oldDateTime
  return moment(newDateTime).isAfter(moment(oldDateTime), 'day');
};

export const areDatesSameOrAfter = (newDateTime, oldDateTime) => {
  if (!newDateTime || !oldDateTime) {
    return '';
  }
  // returns True if newDateTime is same/after oldDateTime
  return moment(newDateTime).isSameOrAfter(moment(oldDateTime), 'day');
};
