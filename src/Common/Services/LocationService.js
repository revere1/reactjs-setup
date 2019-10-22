import axios from 'axios';
import { LocationApi, API_ERROR_MESSAGE } from '../../Api';

export default class LocationService {
  static getUserLocations(userId, activeLocationId, callback) {
    axios
      .get(
        LocationApi.GET_USER_LOCATION.concat(
          `${userId}&activeLocationId=${activeLocationId}`
        )
      )
      .then(response => {
        if (response.data.status === 200) {
          callback(true, response.data.payLoad);
        } else {
          callback(false, response.data.errorMessage);
        }
      })
      .catch(() => {
        callback(false, API_ERROR_MESSAGE);
      });
  }
}
