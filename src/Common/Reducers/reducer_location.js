import { SET_LOCATION } from '../actionTypes';

export default function location(state = {}, action = {}) {
  switch (action.type) {
    case SET_LOCATION:
      return { activeLocation: action.location };
    default:
      return state;
  }
}
