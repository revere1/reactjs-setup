import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { injectIntl, intlShape } from 'react-intl';

/* Material UI Components */
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
/* Style Components */
import Styles from '../Style/Styles';
/* Other Components */

const ProfileControls = ({ classes, intl }) => (
  <Fragment>
    <ListItem
      button
      component={NavLink}
      to={{
        pathname: `/profile-settings`,
        name: 'Profile Settings'
      }}
      className={classes.sidebarLink}
      activeClassName={classes.sidebarLinkActive}
    >
      <ListItemIcon>
        <Icon className={classes.themeIcons}>settings</Icon>
      </ListItemIcon>
      <ListItemText
        disableTypography
        inset
        // primary="profile Settings"
        // primary={i18n.label('sidebar.profileSettings', 'Profile Settings')}
        primary={intl.formatMessage({
          id: 'sidebar.profile',
          defaultMessage: 'Profile Settings'
        })}
        className={classes.sidebarLinkText}
      />
    </ListItem>
  </Fragment>
);

ProfileControls.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(withStyles(Styles)(ProfileControls));
