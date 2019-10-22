import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { Link, NavLink, withRouter, Route, Switch } from 'react-router-dom';
/* Material UI Components */
import {
  withStyles,
  Menu,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  Icon,
  Tooltip,
  MenuItem
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
/* Other Components */
import { Plants } from './IconsList';
import TabComponentLoading from '../../Tools/TabComponentLoading';
/* Style Components */
import Styles from '../Style/Styles';
import logo from '../logo.svg';
import { setLocale } from '../Actions/action_locale';
import ModuleSwitch from './ModuleSwitch';
import UserStore from '../../Store/UserStore';
import LocationService from '../Services/LocationService';
import ProfilePic from '../profile.png';

const DefaultControls = Loadable({
  loader: () => import('./DefaultControls'),
  loading() {
    return <TabComponentLoading />;
  }
});

const ConfigureControls = Loadable({
  loader: () => import('./ConfigureControls'),
  loading() {
    return <TabComponentLoading />;
  }
});

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrop: false,
      userLocations: [],
      anchorEl: null,
      location: 0,
      userProfilePic: null
    };
  }

  componentDidMount() {
    this.fetchUserLocations();
    if (localStorage.userDetails) {
      const { userAvatar } = UserStore.getUserDetails();
      if (userAvatar) this.setState({ userProfilePic: userAvatar });
    }
  }

  fetchUserLocations = () => {
    const { userId } = UserStore.getUserDetails();
    const activeLocationId = UserStore.getActiveLocation();
    if (userId) {
      LocationService.getUserLocations(
        userId,
        activeLocationId,
        (flag, payload) => {
          if (flag) {
            this.setState({ userLocations: payload });
          }
        }
      );
    }
    this.setState({ location: UserStore.getActiveLocation() });
  };

  updateLocation = value => {
    UserStore.setActiveLocation(value);
    this.setState({ location: value });
    this.onLocationMenuClick();
    /* Not the way to do it.... we need to reload the active component on location change */
    window.location.reload();
  };

  // Location Menu Handler
  onLocationMenuClick = () => {
    this.setState(prevState => ({
      openDrop: !prevState.openDrop
    }));
  };

  getLocationName = id => {
    const { userLocations } = this.state;
    if (userLocations.length > 0) {
      const locationObj = userLocations.find(attr => attr.locationId === id);
      if (!locationObj) {
        // localStorage.clear();
      } else {
        const { locationName } = locationObj;
        return locationName;
      }
    }
    return '';
  };

  handleClick = () => {
    const { openDrop } = this.state;
    this.setState({ openDrop: !openDrop });
  };

  // handleClickOption = value => {
  //   this.setState({ plantName: value });
  //   this.setState({ openDrop: false });
  //   window.location.reload();
  // };

  handleClickLangMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleLangClose = () => {
    this.setState({ anchorEl: null });
  };

  updateLanguage = language => {
    const { setLocale: setLanguage } = this.props;
    setLanguage(language);
    this.handleLangClose();
  };

  render() {
    const { classes, intl, lang, clickedLink } = this.props;
    const {
      anchorEl,
      userLocations,
      userProfilePic,
      openDrop,
      location
    } = this.state;
    return (
      <div
        className={classes.dashControler}
        tabIndex={0}
        role="button"
        onClick={clickedLink}
        onKeyDown={clickedLink}
      >
        <div className={classes.dashSidebarMain}>
          <Link
            className={classes.sidebarlogo}
            to={{
              pathname: '/',
              name: 'Home'
            }}
          >
            <Tooltip
              title={`ver ${process.env.REACT_APP_VERSION}`}
              placement="left"
            >
              <img alt="Neviton" className={classes.mainLogo} src={logo} />
            </Tooltip>
          </Link>

          <Tooltip
            title={intl.formatMessage({
              id: 'sidebar.car',
              defaultMessage: 'CAR'
            })}
            placement="left"
          >
            <IconButton
              className={classes.SidebarButton}
              color="primary"
              component={NavLink}
              to={{
                pathname: '/car',
                name: 'CAR'
              }}
            >
              <Icon>category</Icon>
            </IconButton>
          </Tooltip>

          <Tooltip
            title={intl.formatMessage({
              id: 'sidebar.configure',
              defaultMessage: 'Configure'
            })}
            placement="left"
          >
            <IconButton
              className={classes.SidebarButton}
              color="primary"
              component={NavLink}
              to={{
                pathname: '/configure',
                name: 'Configure'
              }}
            >
              <Icon>stars</Icon>
            </IconButton>
          </Tooltip>

          <div className={classes.SidebarButtonsEnd}>
            <ModuleSwitch />

            <IconButton
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClickLangMenu}
              className={classes.SidebarLanguageButton}
            >
              {lang}
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleLangClose}
            >
              <MenuItem
                onClick={() => this.updateLanguage('en')}
                key="en"
                value="en"
              >
                EN
              </MenuItem>
              <MenuItem
                onClick={() => this.updateLanguage('de')}
                key="de"
                value="de"
              >
                DE
              </MenuItem>
            </Menu>
          </div>
        </div>

        <List component="nav" className={classes.dashSidebar}>
          <div className={classes.sidebarBlocks}>
            <ListItem
              className={classes.sidebarExpandButton}
              button
              onClick={this.handleClick}
            >
              <ListItemIcon>
                <Plants className={classes.sidebarExpandButtonIcon} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                inset
                className={classes.sidebarExpandText}
                // primary="Location"
                primary={
                  <FormattedMessage
                    id="common.location"
                    defaultMessage="Location"
                  />
                }
                secondary={<span>{this.getLocationName(location)}</span>}
              />
              {openDrop ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse
              in={openDrop}
              timeout="auto"
              unmountOnExit
              className={classes.sidebarCollups}
            >
              <List component="div" disablePadding>
                {userLocations.map(obj => (
                  <ListItem
                    className={classes.sidebarNested}
                    button
                    key={obj.locationId}
                    onClick={() => this.updateLocation(obj.locationId)}
                  >
                    <ListItemText
                      disableTypography
                      className={classes.sidebarNestedText}
                      inset
                      primary={obj.locationName}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>

          <Switch>
            <Route path="/configure" component={ConfigureControls} />
          </Switch>
        </List>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  clickedLink: PropTypes.func,
  intl: intlShape.isRequired,
  setLocale: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired
};

Sidebar.defaultProps = {
  clickedLink: () => {}
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang,
    location: state.location.activeLocation,
    setLocale: PropTypes.func.isRequired
  };
}
export default injectIntl(
  withRouter(
    connect(
      mapStateToProps,
      { setLocale }
    )(withStyles(Styles)(Sidebar))
  )
);
