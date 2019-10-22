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

const DefaultControls = ({ classes, intl, match = '' }) => (
  <Fragment>
    {/* <ListItem
      button
      component={NavLink}
      to={{
        pathname: `${match.url}/task`,
        name: 'Tasks'
      }}
      className={classes.sidebarLink}
      activeClassName={classes.sidebarLinkActive}
    >
      <ListItemIcon>
        <Icon className={classes.themeIcons}>assignment</Icon>
      </ListItemIcon>
      <ListItemText
        disableTypography
        inset
        primary={intl.formatMessage({
          id: 'sidebar.Task',
          defaultMessage: 'Task'
        })}
        className={classes.sidebarLinkText}
      />
    </ListItem> */}
  </Fragment>
);

DefaultControls.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(withStyles(Styles)(DefaultControls));
