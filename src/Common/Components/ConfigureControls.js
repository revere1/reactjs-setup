import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
/* Material UI Components */
import {
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from '@material-ui/core';
/* Style Components */
import Styles from '../Style/Styles';
/* Other Components */

class ConfigureControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      systemCodesMenu: false
    };
  }

  render() {
    const { intl, classes, match = '' } = this.props;
    console.log('?????????????????????');
    return (
      <Fragment>
        <ListItem
          button
          component={NavLink}
          to={{
            pathname: `${match.url}/test-grid`,
            name: 'Custom Attribute'
          }}
          className={classes.sidebarLink}
          activeClassName={classes.sidebarLinkActive}
        >
          <ListItemIcon>
            <Icon className={classes.themeIcons}>usb</Icon>
          </ListItemIcon>
          <ListItemText
            disableTypography
            inset
            primary={intl.formatMessage({
              id: 'sidebar.customAttribute',
              defaultMessage: 'Test - Grid'
            })}
            className={classes.sidebarLinkText}
          />
        </ListItem>
      </Fragment>
    );
  }
}
ConfigureControls.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(withStyles(Styles)(ConfigureControls));
