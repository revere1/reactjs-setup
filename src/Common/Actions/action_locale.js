import { SET_LOCALE } from '../actionTypes';
import UserStore from '../../Store';

export const localeSet = lang => ({
  type: SET_LOCALE,
  lang
});

export const setLocale = lang => dispatch => {
  UserStore.setLocalStorageItem('activeLocale', lang);
  dispatch(localeSet(lang));
};
