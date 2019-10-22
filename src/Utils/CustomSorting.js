import moment from 'moment';
import { toInteger, each } from 'lodash';
// export const sortDropDownMenuData = (a, b) => {
//   if (a && b) {
//     const A = a.label.toUpperCase();
//     const B = b.label.toUpperCase();
//     return A.localeCompare(B);
//   }
//   return 0;
// };

export const sortAlphabetically = (firstValue, secondValue) => {
  const a = !firstValue ? '' : firstValue;
  const b = !secondValue ? '' : secondValue;
  const A = a.trim().toUpperCase();
  const B = b.trim().toUpperCase();
  if (A === B) {
    return 0;
  }
  return A < B ? -1 : 1;
};

export const sortMixedIdNumbers = (a, b) => {
  if (a && b) {
    const A = a.split('-');
    const B = b.split('-');
    const preFix = sortAlphabetically(A[0], B[0]);
    if (!preFix) return toInteger(A[1]) - toInteger(B[1]);
    return preFix;
  }
  return 0;
};

export const sortNumbers = (a, b) => {
  if (a && b) {
    const A = a.split('-');
    const B = b.split('-');
    return toInteger(A[1]) - toInteger(B[1]);
  }
  return 0;
};

export const compareDate = (a, b) => {
  if (a && b) {
    if (moment(a).isSame(b)) {
      return 0;
    }
    return moment(a).isBefore(b) ? -1 : 1;
  }
  return 0;
};

export const sortDropDownMenuData = (a, b) => {
  const A = a.label.toUpperCase();
  const B = b.label.toUpperCase();
  if (A === B) {
    return 0;
  }
  return A < B ? -1 : 1;
};

// Reformat and Sort DropDown data
// @params data -> Raw data list
// @params label -> String label key name
// @params value -> String value key name
// @returns name -> Sorted Array List
export const sortDropDownMenu = (data, label, value) => {
  const name = [];
  each(data, item => {
    name.push({
      label: item[label],
      value: item[value]
    });
  });
  name.sort(sortDropDownMenuData);
  return name;
};
