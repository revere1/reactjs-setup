const ManageRole = HR_MANAGE_ROLE_URI => ({
  EntityRights: HR_MANAGE_ROLE_URI.concat(`/apqp-system-user/entity-rights?`)
});

const GridPreference = URI => ({
  GridPref: URI
});

const Location = SPC_LOCATION_URI => ({
  GetUserLocation: SPC_LOCATION_URI.concat(
    `/apqp-system-admin/locations?info=S&userId=`
  )
});

/* URL's for Manage Car Module */

const CustomAttribute = URI => ({
  Fetch: URI.concat('/list-all'),

  FetchById: URI.concat('/custom-attributes/details-by-id/'),

  FetchCustomAttrTypes: URI.concat('/custom-attributes/attribute-types'),

  FetchModules: URI.concat('/custom-attributes/list-modules'),

  Create: URI.concat('/custom-attributes/create'),

  Update: URI.concat('/custom-attributes/update')
});

const generateUrls = profile => {
  if (profile === `localhost`) {
    return {};
  }
  if (profile === `dev`) {
    const HRT_MANAGE_ROLE = `https://gbfyoy7bcg.execute-api.us-east-1.amazonaws.com/${profile}/api/v0`;

    const GRID_PREF_URI = `https://gbfyoy7bcg.execute-api.us-east-1.amazonaws.com/${profile}/api/v0/apqp-system-user/grid-preference`;
    const MODULE_ADMIN = `http://192.168.6.97:3000/api/v0/apqp-8d-general/general`;

    return {
      Location: Location(HRT_MANAGE_ROLE),

      ManageRole: ManageRole(HRT_MANAGE_ROLE),

      GridPreference: GridPreference(GRID_PREF_URI),

      CustomAttribute: CustomAttribute(MODULE_ADMIN)
    };
  }

  return null;
};

export default generateUrls;
