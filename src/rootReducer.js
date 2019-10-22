import { combineReducers } from 'redux';

import locale from './Common/Reducers/reducer_locale';
import sidebarControl from './Common/Reducers/reducer_sidebar';
import location from './Common/Reducers/reducer_location';

export default combineReducers({
  locale,
  sidebarControl,
  location
});
