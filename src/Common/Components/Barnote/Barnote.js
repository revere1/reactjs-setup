import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* Material UI Components */
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
/* Style Components */
import Styles from './../../../Common/Style/Styles';

class Barnote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTypeIcon = type => {
    switch (type) {
      case 'error':
        return <Icon className="barnoteIcon">error</Icon>;
      case 'warning':
        return <Icon className="barnoteIcon">warning</Icon>;
      case 'success':
        return <Icon className="barnoteIcon">check</Icon>;
      default:
        return null;
    }
  };

  getTypeColor = type => {
    switch (type) {
      case 'error':
        return 'themeBackgroundError';
      case 'warning':
        return 'themeBackgroundwarning';
      case 'success':
        return 'themeBackgroundSuccess';
      default:
        return null;
    }
  };

  render() {
    const { open, onClose, type, classes, message = [] } = this.props;
    return (
      <div className={classes.barnoteHolder}>
        <Collapse in={open}>
          <div className={this.getTypeColor(type)}>
            <div className={classes.barnote}>
              {type ? this.getTypeIcon(type) : null}
              <span className={classes.barnoteText}>
                {message.map(e => <p key={e}>{e}</p>)}
              </span>
              <IconButton onClick={onClose} aria-label="Delete">
                <Icon>close</Icon>
              </IconButton>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

Barnote.defaultProps = {
  onClose: 'undefined'
};

Barnote.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  type: PropTypes.string.isRequired,
  message: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withStyles(Styles)(Barnote);
