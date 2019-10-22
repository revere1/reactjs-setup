/* Temporary, eventually will be moved out to seperate project */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import {
  withStyles,
  Tooltip,
  IconButton,
  Icon,
  Menu,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  Avatar
} from '@material-ui/core';
import Styles from '../Style/Styles';
import { loginConfig } from '../../Api';
import UserStore from '../../Store';
// import loadEntityRights from '../Services/EntityRights_Api';

/* Filter the active module and
      Aggregator module - 2
      ODP module - 1000 */
const filterModule = [Number(process.env.REACT_APP_MODULEID), 2, 1000];

class ModuleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      searchAppName: ''
    };
  }

  moduleFilterReducer = (moduleList, module) => {
    if (filterModule.indexOf(module.systemModuleId) === -1)
      moduleList.push(module);
    return moduleList;
  };

  handleOpenAppMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseAppMenu = () => {
    this.setState({ anchorEl: null });
  };

  handleAppSearch = event => {
    this.setState({ searchAppName: event.target.value });
  };

  switchModule = async app => {
    window.open(`${loginConfig.baseUrl}${app.moduleUrl}`);
  };

  render() {
    const { classes, intl } = this.props;
    const { anchorEl, searchAppName } = this.state;
    let modules = [];
    const userDetails = UserStore.getLocalStorageItem('userDetails');
    if (userDetails) {
      ({ modules } = userDetails);
      if (modules) modules = modules.reduce(this.moduleFilterReducer, []);
    }
    return (
      <Fragment>
        <Tooltip
          id="application"
          title={intl.formatMessage({
            id: 'sidebar.switch',
            defaultMessage: 'Switch...'
          })}
          placement="left"
        >
          <IconButton
            className={classes.SidebarButton}
            color="primary"
            aria-label="User"
            onClick={this.handleOpenAppMenu}
          >
            <Icon>widgets</Icon>
          </IconButton>
        </Tooltip>
        <Menu
          id="AppMenu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleCloseAppMenu}
          className={classes.sidebarMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          {modules.length ? (
            <Fragment>
              <Typography className={classes.sidebarMenuHeader}>
                {intl.formatMessage({
                  id: 'sidebar.allApplications',
                  defaultMessage: 'All Applications'
                })}
              </Typography>
              <TextField
                id="searchAppName"
                className={classes.sidebarMenuSearch}
                value={searchAppName}
                placeholder={intl.formatMessage({
                  id: 'common.search',
                  defaultMessage: 'Search'
                })}
                onChange={this.handleAppSearch}
                margin="none"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>search</Icon>
                    </InputAdornment>
                  )
                }}
              />
              {modules.map(app => {
                if (
                  app.moduleName
                    .toLowerCase()
                    .indexOf(searchAppName.toLowerCase()) === -1
                ) {
                  return null;
                }
                return (
                  <MenuItem
                    key={app.moduleName}
                    onClick={() => this.switchModule(app)}
                  >
                    <Avatar
                      className={classes.sidebarAvatarLogo}
                      alt={app.moduleName}
                      src={app.moduleIcon}
                    />
                    {app.moduleName}
                  </MenuItem>
                );
              })}
            </Fragment>
          ) : (
            <Typography className={classes.sidebarMenuHeader}>
              {intl.formatMessage({
                id: 'sidebar.noModules',
                defaultMessage: 'No Other Modules Assigned'
              })}
            </Typography>
          )}
        </Menu>
      </Fragment>
    );
  }
}

ModuleSwitch.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(withStyles(Styles)(ModuleSwitch));
