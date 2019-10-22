import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Loadable from 'react-loadable';
import { withRouter } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import './Common/Style/App.css';
import './Common/Style/Animate.css';
import theme from './Common/Style/Theme';
import messagesEN from './I18N/en.json';
import messagesDE from './I18N/de.json';
import Styles from './Common/Style/Styles';
import ConfirmBox from './Common/Components/ConfirmBox';
import { isSessionExpired } from './Utils/AppSessionUtil';
import zendesk from './Utils/zendesk';
import Routes from './Routes';
import { loginConfig } from './Api';
import UserStore from './Store';
// import AccessDenied from './AccessDenied';
import ErrorBoundary from './ErrorBoundary';
import LoggerProvider from './Common/Components/LoggerProvider';

const Controls = Loadable({
  loader: () => import('./Common/Components/Controls'),
  loading: () => null
});

const messages = {
  en: messagesEN,
  de: messagesDE
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loadApp: false };
  }

  // async
  componentDidMount() {
    // await this.fetchEntityRights();
    this.checkModuleRights();
  }

  checkModuleRights = () => {
    if (localStorage.entities) {
      const moduleRights = UserStore.getRights();
      if (moduleRights.length > 0) {
        this.setState({ loadApp: true });
      }
    }
  };

  // fetchEntityRights = async () => {
  //   this.setState({ loadApp: false });
  //   try {
  //     const { defaultLocationId } = UserStore.getUserDetails();
  //     const activeLocation = UserStore.getActiveLocation();
  //     const request = {
  //       locationId:
  //         activeLocation !== defaultLocationId
  //           ? activeLocation
  //           : defaultLocationId,
  //       moduleId: process.env.REACT_APP_MODULEID
  //     };
  //     const data = await loadEntityRights(request);
  //     if (data && data.status === 200) {
  //       await UserStore.setRights(data.payLoad);
  //       this.setState({ loadApp: true });
  //     } else this.setState({ isAccessDenied: true });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  closeConfirmBox = () => {
    const redirectURI = window.location.href;
    const redirectURIHex = UserStore.encryptToHex(redirectURI);
    // UserStore.clearStorageData();
    window.location.replace(
      `${loginConfig.baseUrl}?redirect_to=${redirectURIHex}`
    );
  };

  render() {
    const { classes, lang } = this.props;
    const { loadApp } = this.state;
    return (
      <LoggerProvider>
        <ErrorBoundary>
          <IntlProvider locale={lang} messages={messages[lang]}>
            <MuiThemeProvider theme={theme}>
              {!loadApp ? (
                <Fragment>
                  <div className={classes.dashWrapper}>
                    <ConfirmBox
                      open={isSessionExpired()}
                      actionText="Login"
                      action={this.closeConfirmBox}
                      type="warning"
                      title="Invalid Session"
                      message="Application session is Invalid, Please Login again."
                    />
                    <Fragment>
                      <Controls />
                      <div className={classes.dashBody}>
                        <main>
                          <div className={classes.dashCointainer}>
                            <Routes />
                          </div>
                        </main>
                      </div>
                    </Fragment>
                  </div>
                </Fragment>
              ) : (
                  <Fragment>
                    <div className={classes.dashWrapper}>
                      <ConfirmBox
                        open={isSessionExpired()}
                        actionText="Login"
                        action={this.closeConfirmBox}
                        type="warning"
                        title="Invalid Session"
                        message="Application session is Invalid, Please Login again.."
                      />
                    </div>
                  </Fragment>
                )}
            </MuiThemeProvider>
          </IntlProvider>
        </ErrorBoundary>
      </LoggerProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  lang: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  };
}

export default withStyles(Styles)(withRouter(connect(mapStateToProps)(App)));

// zendesk
zendesk(UserStore);
