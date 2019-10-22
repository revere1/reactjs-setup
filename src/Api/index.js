import loadUrls from './aws';
import LoginConfig from './congnito.config';
import jwtFilter from './Interceptor';

const env = process.env.REACT_APP_ENV;
const RootURI = loadUrls(env);
const isSecurityApplied = true;

const S3Keys = LoginConfig.getS3Keys(env);

export const moduleName = 'CAR'; // for CAR Module
export const moduleId = 6; // for CAR Module
export const version = 1; // Randomly Taken later we can change
export const LOG_LEVEL = Object.freeze({
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3,
  TRACE: 4
});

export const SHOW_LOGS_ON_CONSOLE = false;
// export const SHOW_LOGS_ON_CONSOLE = true;
export const ROOT_LOGGER = LOG_LEVEL.TRACE;

export const loginConfig = LoginConfig.cognitoConfig(env);
export const MQTTConfig = LoginConfig.getMQTTConfig();
export const S3Config = bucket => LoginConfig.getS3Config(bucket, env);
export const Key = {
  S3_ANALYSE_SCC_BUCKET: S3Keys.S3_ANALYSE_SCC_BUCKET,
  S3_TASK_BUCKET: S3Keys.S3_TASK_BUCKET
};

export { isSecurityApplied };

export { jwtFilter };

export const API_ERROR_MESSAGE = 'Unexpected Error';

export class RoleApi {
  static GET_ENTITY_RIGHTS = RootURI.ManageRole.EntityRights;
}

export class LocationApi {
  static GET_USER_LOCATION = RootURI.Location.GetUserLocation;
}

/* Grid Preference */
export class GridApi {
  static GRID_PREF = RootURI.GridPreference.GridPref;

  // static SAVE_GRID_PREF = RootURI.GridPreference.GridPref;
}

export class CustomAttrApi {
  static FETCH = RootURI.CustomAttribute.Fetch;

  static FETCH_BY_ID = RootURI.CustomAttribute.FetchById;

  static FETCH_ATTR_TYPES = RootURI.CustomAttribute.FetchCustomAttrTypes;

  static FETCH_MODULES = RootURI.CustomAttribute.FetchModules;

  static CREATE = RootURI.CustomAttribute.Create;

  static UPDATE = RootURI.CustomAttribute.Update;
}

export class API {
  static LogURI = RootURI.LoggerURI;
}
