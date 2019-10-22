import React from 'react';
/* Material UI Components */
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc';
/* Style Components */
import Styles from './../Style/Styles';

const DragHandle = SortableHandle(({ classes }) => (
  <IconButton aria-label="View" className={classes.themeIconButtonSmallgray}>
    <Icon>drag_indicator</Icon>
  </IconButton>
));

const SortableItem = SortableElement(
  ({ value, number, key, classes, onRemoveInput, onChangeInput }) => (
    <div className={classes.dynamicForm} key={key}>
      <DragHandle classes={classes} />
      <input
        type="text"
        placeholder={`#${number + 1}`}
        value={value}
        onChange={onChangeInput(number)}
      />
      <IconButton
        aria-label="View"
        className={classes.themeIconButtonSmall}
        onClick={onRemoveInput(number)}
      >
        <Icon>delete</Icon>
      </IconButton>
    </div>
  )
);

const DynamicReorderForm = SortableContainer(
  ({ items, classes, onRemoveInput, onChangeInput, onAddInput }) => (
    <div className={classes.dynamicFormHolder}>
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index + 1}`}
          index={index}
          number={index}
          value={value.name}
          classes={classes}
          onChangeInput={onChangeInput}
          onRemoveInput={onRemoveInput}
        />
      ))}
      <Button onClick={onAddInput} className={classes.dashBlockButton}>
        Add New
      </Button>
    </div>
  )
);

export default withStyles(Styles)(DynamicReorderForm);
