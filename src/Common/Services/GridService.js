import axios from 'axios';
import { GridApi, API_ERROR_MESSAGE } from '../../Api';

class GridServices {
  static saveGridOrder(request, callback) {
    axios
      .post(GridApi.SAVE_GRID_PREF, request)
      .then(response => {
        if (response.data.status === 201) {
          callback(true, response.data.payLoad);
        } else {
          callback(false, response.data.errorMessage);
        }
      })
      .catch(error => {
        callback(false, API_ERROR_MESSAGE);
      });
  }

  static getGridOrderByUserId(request, callback) {
    axios
      .get(
        `${GridApi.SAVE_GRID_PREF}?userId=${request.userId}&gridId=${
          request.gridId
        }`,
        request
      )
      .then(response => {
        if (response.data.status === 200) {
          callback(true, response.data.payLoad.columnSequence);
        } else {
          callback(false, response.data.errorMessage);
        }
      })
      .catch(error => {
        callback(false, API_ERROR_MESSAGE);
      });
  }

  static resetGridPreferences(request, callback) {
    axios
      .put(GridApi.SAVE_GRID_PREF, request)
      .then(response => {
        if (response.data.status === 200) {
          callback(true, response.data.payLoad);
        } else {
          callback(false, response.data.errorMessage);
        }
      })
      .catch(error => {
        callback(false, API_ERROR_MESSAGE);
      });
  }
}
export default GridServices;
