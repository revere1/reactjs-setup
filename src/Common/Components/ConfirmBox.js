import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* Material UI Components */
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
/* Style Components */
import Styles from '../Style/Styles';

class ConfirmBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTypeIcon = type => {
    switch (type) {
      case 'delete':
        return <Icon className="themeColorError">error</Icon>;
      case 'warning':
        return <Icon className="themeColorwarning">warning</Icon>;
      case 'failed':
        return <Icon className="themeColorError">report</Icon>;
      case 'success':
        return <Icon className="themeColorSuccess">check</Icon>;
      default:
        return null;
    }
  };

  getTypeColor = type => {
    switch (type) {
      case 'delete':
        return 'errorButton';
      case 'warning':
        return 'warningButton';
      case 'failed':
        return 'errorButton';
      case 'success':
        return 'successButton';
      default:
        return null;
    }
  };

  render() {
    const {
      classes,
      title,
      message,
      action,
      type,
      open,
      close,
      actionText,
      closeText
    } = this.props;
    return (
      <Dialog
        open={open}
        onClose={close}
        className={classes.confirmBoxModal}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
      >
        <DialogTitle
          disableTypography
          id="form-dialog-title"
          className={classes.confirmBoxModalHeader}
        >
          {type ? this.getTypeIcon(type) : null} {title}
        </DialogTitle>
        <DialogContent>{message} </DialogContent>
        <DialogActions className={classes.dashModalAction}>
          {close ? <Button onClick={close}>{closeText}</Button> : null}
          {action ? (
            <Button onClick={action} className={this.getTypeColor(type)}>
              {actionText}
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    );
  }
}

ConfirmBox.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  closeText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(Styles)(ConfirmBox);
