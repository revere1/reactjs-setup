import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
/* Material UI Components */
import { injectIntl, intlShape } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
/* Style Components */
import Styles from '../Style/Styles';
/* Other Components */

const ConfigureControls = ({ classes, intl, match = '' }) => (
  <Fragment>
    {/* <ListItem
      button
      component={NavLink}
      to={{
        pathname: `${match.url}/manage-location`,
        name: 'Manage Location'
      }}
      className={classes.sidebarLink}
      activeClassName={classes.sidebarLinkActive}
    >
      <ListItemIcon>
        <Icon className={classes.themeIcons}>group</Icon>
      </ListItemIcon>
      <ListItemText
        disableTypography
        inset
        primary="Manage Location"
        // primary={intl.formatMessage({
        //   id: 'sidebar.manageLocation',
        //   defaultMessage: 'Manage Location'
        // })}
        className={classes.sidebarLinkText}
      />
    </ListItem> */}

    {/* <ListItem
      button
      component={NavLink}
      to={{
        pathname: `${match.url}/manage-division`,
        name: 'Manage Division'
      }}
      className={classes.sidebarLink}
      activeClassName={classes.sidebarLinkActive}
    >
      <ListItemIcon>
        <Icon className={classes.themeIcons}>group</Icon>
      </ListItemIcon>
      <ListItemText
        disableTypography
        inset
        primary="Manage Division"
        // primary={intl.formatMessage({
        //   id: 'sidebar.manageDivision',
        //   defaultMessage: 'Manage Division'
        // })}
        className={classes.sidebarLinkText}
      />
    </ListItem> */}

    {/* <ListItem
      button
      component={NavLink}
      to={{
        pathname: `${match.url}/manage-department`,
        name: 'Manage Department'
      }}
      className={classes.sidebarLink}
      activeClassName={classes.sidebarLinkActive}
    >
      <ListItemIcon>
        <Icon className={classes.themeIcons}>group</Icon>
      </ListItemIcon>
      <ListItemText
        disableTypography
        inset
        primary="Manage Department"
        // primary={intl.formatMessage({
        //   id: 'sidebar.manageDepartment',
        //   defaultMessage: 'Manage Department'
        // })}
        className={classes.sidebarLinkText}
      />
    </ListItem> */}

    {/* <ListItem
      button
      component={NavLink}
      to={{
        pathname: `${match.url}/manage-role`,
        name: 'Manage Role'
      }}
      className={classes.sidebarLink}
      activeClassName={classes.sidebarLinkActive}
    >
      <ListItemIcon>
        <Icon className={classes.themeIcons}>group</Icon>
      </ListItemIcon>
      <ListItemText
        disableTypography
        inset
        primary="Manage Role"
        // primary={intl.formatMessage({
        //   id: 'sidebar.manageRole',
        //   defaultMessage: 'Manage Role'
        // })}
        className={classes.sidebarLinkText}
      />
    </ListItem> */}

    {/* <ListItem
      button
      component={NavLink}
      to={{
        pathname: `${match.url}/manage-users`,
        name: 'Manage Users'
      }}
      className={classes.sidebarLink}
      activeClassName={classes.sidebarLinkActive}
    >
      <ListItemIcon>
        <Icon className={classes.themeIcons}>group</Icon>
      </ListItemIcon>
      <ListItemText
        disableTypography
        inset
        primary="Manage Users"
        // primary={intl.formatMessage({
        //   id: 'sidebar.manageUsers',
        //   defaultMessage: 'Manage Users'
        // })}
        className={classes.sidebarLinkText}
      />
    </ListItem> */}

    {/* <ListItem
      button
      component={NavLink}
      to={{
        pathname: `${match.url}/manage-partFamily`,
        name: 'Manage Part Family'
      }}
      className={classes.sidebarLink}
      activeClassName={classes.sidebarLinkActive}
    >
      <ListItemIcon>
        <Icon className={classes.themeIcons}>group</Icon>
      </ListItemIcon>
      <ListItemText
        disableTypography
        inset
        primary="Manage Part Family"
        // primary={intl.formatMessage({
        //   id: 'sidebar.managePartFamily',
        //   defaultMessage: 'Manage Part Family'
        // })}
        className={classes.sidebarLinkText}
      />
    </ListItem> */}

    {/* <ListItem
      button
      component={NavLink}
      to={{
        pathname: `${match.url}/manage-workStation`,
        name: 'Manage WorkStation'
      }}
      className={classes.sidebarLink}
      activeClassName={classes.sidebarLinkActive}
    >
      <ListItemIcon>
        <Icon className={classes.themeIcons}>group</Icon>
      </ListItemIcon>
      <ListItemText
        disableTypography
        inset
        primary="Manage WorkStation"
        // primary={intl.formatMessage({
        //   id: 'sidebar.manageWorkStation',
        //   defaultMessage: 'Manage WorkStation'
        // })}
        className={classes.sidebarLinkText}
      />
    </ListItem> */}
  </Fragment>
);

ConfigureControls.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(withStyles(Styles)(ConfigureControls));
