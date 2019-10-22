import axios from 'axios';
import { GridApi, jwtFilter } from './index';

jwtFilter(axios);

export const fetchGridOrder = async (userId, gridId) => {
  const query = `?userId=${userId}&gridId=${gridId}`;
  try {
    const { data } = await axios.get(GridApi.GRID_PREF.concat(query));
    return data;
  } catch (error) {
    throw error;
  }
};

export const saveGridOrder = async request => {
  try {
    const { data } = await axios.post(GridApi.GRID_PREF, request);
    return data;
  } catch (error) {
    throw error;
  }
};
