import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* Material UI Components */
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
/* Style Components */
import Styles from '../../../Common/Style/Styles';
import BreadnoteContainer from './BreadnoteContainer';

class Breadnote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount = () => {
  //   clearTimeout(this.props.onClose);
  // };

  componentDidMount = () => {
    if (this.props.open) {
      this.autoClose();
    }
  };

  componentDidUpdate = prevProps => {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        this.autoClose();
      } else {
        clearTimeout(this.autoClose);
      }
    }
  };

  componentWillUnmount = () => {
    clearTimeout(this.autoClose);
  };

  getTypeIcon = type => {
    switch (type) {
      case 'error':
        return <Icon className="breadnoteIcon">error</Icon>;
      case 'warning':
        return <Icon className="breadnoteIcon">warning</Icon>;
      case 'success':
        return <Icon className="breadnoteIcon">check</Icon>;
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

  autoClose = () => {
    setTimeout(this.props.onClose, 2000);
  };

  render() {
    const { open, onClose, type, classes, message = [], noClose } = this.props;
    return (
      <BreadnoteContainer>
        <div className={classes.breadnoteHolder}>
          <Collapse in={open}>
            <div className={this.getTypeColor(type)}>
              <div className={classes.breadnote}>
                {type ? this.getTypeIcon(type) : null}
                <span className={classes.breadnoteText}>
                  {message.map(e => (
                    <p key={e}>{e}</p>
                  ))}
                </span>
                {noClose ? null : (
                  <IconButton
                    className={classes.button}
                    onClick={onClose}
                    aria-label="Delete"
                  >
                    <Icon>close</Icon>
                  </IconButton>
                )}
              </div>
            </div>
          </Collapse>
        </div>
      </BreadnoteContainer>
    );
  }
}

Breadnote.defaultProps = {
  onClose: 'undefined',
  noClose: 'bool'
};

Breadnote.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  open: PropTypes.bool.isRequired,
  noClose: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClose: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  type: PropTypes.string.isRequired,
  message: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withStyles(Styles)(Breadnote);
export const SUCCESS = 'success';
export const ERROR = 'error';
export const WARN = 'warning';
