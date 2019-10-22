import { SET_ACTIVE_SIDEBAR } from '../actionTypes';
import { RISKS } from '../Constants/Constants_Sidebar';

export default function sidebarControl(
  state = { sidebar: RISKS },
  action = {}
) {
  switch (action.type) {
    case SET_ACTIVE_SIDEBAR:
      return { sidebar: action.sidebar };
    default:
      return state;
  }
}
