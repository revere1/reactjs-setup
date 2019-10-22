import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
/* Material UI Style override */
import Styles from '../Style/Styles';

class Option extends Component {
  handleClick = event => {
    const { onSelect, option } = this.props;
    onSelect(option, event);
  };

  render() {
    const { children, isFocused, onFocus } = this.props;

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
      >
        {children}
      </MenuItem>
    );
  }
}

function SelectWrapped(props) {
  const { classes, ...other } = props;
  other.clearable = other.clearable === undefined ? true : other.clearable;
  return (
    <Select
      optionComponent={Option}
      className={classes.customMultiSelect}
      noResultsText={<Typography>No results found</Typography>}
      arrowRenderer={arrowProps =>
        arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
      }
      clearRenderer={() => <ClearIcon />}
      backspaceRemoves={other.clearable} // this is to prevent backspace button removal of chips
      deleteRemoves={other.clearable} // this is to prevent delete button removal of chips
      clearable={other.clearable} // this is for X mark at last in that multi select box
      valueComponent={valueProps => {
        const { value, children, onRemove, disabled } = valueProps;
        const onDelete = event => {
          event.preventDefault();
          event.stopPropagation();
          onRemove(value);
        };
        if (onRemove) {
          return (
            <Chip
              tabIndex={-1}
              label={children}
              className={classes.selectedChip}
              deleteIcon={<CancelIcon onTouchEnd={onDelete} />} // This is for x mark on chips in mutli select
              onDelete={value.isNotDeletable ? null : onDelete} // This is for x mark on chips in mutli select
              color={value.isNotDeletable ? '' : 'primary'}
              onMouseDown={e => {
                if (!disabled && !value.isNotDeletable) {
                  onRemove(value);
                }
                // for sanity's sake
                e.stopPropagation();
              }}
            />
          );
        }

        return <div className="Select-value">{children}</div>;
      }}
      {...other}
    />
  );
}

Option.propTypes = {
  children: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  option: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

SelectWrapped.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired
};

export default withStyles(Styles)(SelectWrapped);
