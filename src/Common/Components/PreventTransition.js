import React from 'react';
import { Prompt, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import cuid from 'cuid';
/* Material UI Components */
import { withStyles } from '@material-ui/core/styles';
import { intlShape, injectIntl } from 'react-intl';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
/* Style Components */

import Styles from '../Style/Styles';

class PreventTransitionPrompt extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      nextLocation: ''
    };

    this.showPrompt = Symbol.for(`__PreventTransitionPrompt_${cuid()}`);
  }

  componentDidMount() {
    window[this.showPrompt] = this.show;
  }

  componentWillUnmount() {
    delete window[this.showPrompt];
  }

  getTypeIcon = type => {
    switch (type) {
      case 'warning':
        return <Icon className="themeColorwarning">warning</Icon>;

      default:
        return null;
    }
  };

  getTypeColor = type => {
    switch (type) {
      // case 'delete':
      //   return 'errorButton';
      case 'warning':
        return 'warningButton';
      // case 'failed':
      //   return 'errorButton';
      // case 'success':
      //   return 'successButton';
      default:
        return null;
    }
  };

  /**
   * Show the dialog. Invoked primarily from React Router transition
   * handler getUserConfirmation.
   *
   * @param allowTransitionCallback A function that accepts a flag whether or not to allow the route transition
   */
  show = allowTransitionCallback => {
    this.setState({ open: true }, () => allowTransitionCallback(false));
  };

  handleClose = () => {
    this.setState({ open: false, nextLocation: '' });
  };

  /**
   * Handles the Router transition. Returns true if allowed
   * or the dialog trigger key to enable the dialog.
   *
   * This would be a good candidate to allow optionally
   * being passed as a callback prop to let
   * caller decide if transition is allowed.
   */
  handleTransition = location => {
    this.setState({ nextLocation: location.pathname });
    if (this.state.nextLocation === '') {
      return Symbol.keyFor(this.showPrompt);
    }
    return true;
  };

  handleAllowTransition = () => {
    // this.getTypeColor('warning');
    this.props.history.push(this.state.nextLocation);
  };

  render() {
    const { when, title, message, classes, type, intl } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        {/* React Router prompt, callback will return true to allow transition or dialog key to prevent */}
        <Prompt when={when} message={e => this.handleTransition(e)} />
        <Dialog open={open} aria-labelledby="form-dialog-title" maxWidth="xs">
          <DialogTitle
            disableTypography
            id="form-dialog-title"
            className={classes.confirmBoxModalHeader}
          >
            {type ? this.getTypeIcon(type) : null} {title}
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText>{message}</DialogContentText> */}
            {message}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={e => this.handleClose(e)}
              color="primary"
              autoFocus
            >
              {intl.formatMessage({
                id: 'common.no',
                defaultMessage: 'No'
              })}
            </Button>
            <Button
              onClick={location => this.handleAllowTransition(location)}
              className={this.getTypeColor(type)}
              color="primary"
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

PreventTransitionPrompt.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  // open: PropTypes.bool.isRequired,
  // close: PropTypes.func.isRequired,
  // reDirectClose: PropTypes.func.isRequired,
  // reDirect: PropTypes.func.isRequired,
  // action: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  // actionText: PropTypes.string.isRequired,
  // closeTextRedirect: PropTypes.string.isRequired,
  // closeText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intl: intlShape.isRequired
};

// export default PreventTransitionPrompt;
export default withRouter(
  injectIntl(withStyles(Styles)(PreventTransitionPrompt))
);
