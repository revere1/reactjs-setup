import { SET_LOCALE } from '../actionTypes';

export default function locale(state = { lang: 'en' }, action = {}) {
  switch (action.type) {
    case SET_LOCALE:
      return { lang: action.lang };
    default:
      return state;
  }
}
