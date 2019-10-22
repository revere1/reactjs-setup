import { SET_ACTIVE_SIDEBAR } from '../actionTypes';

export const setActiveSidebar = sidebar => ({
  type: SET_ACTIVE_SIDEBAR,
  sidebar
});

export const activeSidebar = sidebar => dispatch => {
  localStorage.activeSidebar = sidebar;
  dispatch(setActiveSidebar(sidebar));
};
