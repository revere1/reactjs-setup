import { SET_LOCATION } from '../actionTypes';
import UserStore from '../../Store/UserStore';

export const setActiveLocation = location => ({
  type: SET_LOCATION,
  location
});

export const setLocation = location => dispatch => {
  UserStore.setActiveLocation(location);
  dispatch(setActiveLocation(location));
};
