import axios from 'axios';
import { jwtFilter, RoleApi } from '../../Api';

jwtFilter(axios);

/* Added for Module Switch -- Temporarily, eventually will be moved out to seperate project */
const loadEntityRights = async request => {
  try {
    const query = `locationId=${request.locationId}&moduleId=${
      request.moduleId
    }`;
    const { data } = await axios.get(RoleApi.GET_ENTITY_RIGHTS.concat(query));
    return data;
  } catch (error) {
    throw error;
  }
};

export default loadEntityRights;
