import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* Material UI Components */
import { injectIntl, intlShape } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
/* Other Components */
import { Link, withRouter } from 'react-router-dom';
/* Style Components */
import Styles from '../Style/Styles';
import '../Style/App.css';
import '../Style/Animate.css';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import UserStore from '../../Store';
import { loginConfig } from '../../Api';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logout = () => {
    UserStore.clearStorageData();
    window.location.replace(`${loginConfig.baseUrl}`);
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, handleDrawerToggle, intl } = this.props;
    const userDetails = UserStore.getLocalStorageItem('userDetails');
    let firstName = null;
    let lastName = null;
    if (userDetails) {
      ({ firstName, lastName } = userDetails);
    }
    return (
      <AppBar className={classes.Toolbar} position="static" color="secondary">
        <Toolbar className={classes.ToolbarIn}>
          <IconButton
            className={classes.ToolbarButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleDrawerToggle}
          >
            <Icon className="material-icons">menu</Icon>
          </IconButton>

          <Breadcrumbs />

          <Typography
            className={classes.ToolbarTitleUser}
            variant="title"
            color="inherit"
          >
            {firstName || 'Guest'}
            &nbsp;
            {lastName || 'User'}
          </Typography>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            className={classes.ToolbarMenuItem}
            elevation={5}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(withRouter(withStyles(Styles)(Navbar)));
