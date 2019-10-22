import React from 'react';
import ReactExport from 'react-data-export';
import { intlShape } from 'react-intl';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
/* Other Components */
import { ExcelData } from './CustomGridPlugin';

const { ExcelFile } = ReactExport;
const { ExcelSheet } = ReactExport.ExcelFile;
const { ExcelColumn } = ReactExport.ExcelFile;

const IconComponent = ({ classes, intl }) => (
  <Tooltip
    placement="bottom"
    title={intl.formatMessage({
      id: 'icon.download',
      defaultMessage: 'Download'
    })}
  >
    <IconButton
      className={classes.dashTableHeaderButtonIcon}
      aria-label="Reset"
    >
      <Icon>cloud_download</Icon>
    </IconButton>
  </Tooltip>
);

const ExportExcel = ({ classes, intl }) => {
  /* check for data in the grid */

  if (ExcelData.data[0].data.length > 0) {
    return (
      <ExcelFile
        element={<IconComponent classes={classes} intl={intl} />}
        filename={ExcelData.name}
      >
        <ExcelSheet dataSet={ExcelData.data} name={ExcelData.name} />
      </ExcelFile>
    );
  }
  return null;
};

const CustomExportExcel = ({
  headers,
  keys,
  fileName,
  rows,
  classes,
  buttonName
}) => (
  <ExcelFile
    element={<MenuItem classes={classes}>{buttonName}</MenuItem>}
    filename={fileName}
  >
    <ExcelSheet data={rows} name={fileName}>
      {keys.map((k, i) => (
        <ExcelColumn key={`${i * 30}`} label={headers[i]} value={k} />
      ))}
    </ExcelSheet>
  </ExcelFile>
);

/* 
Currently used only in ManageRoles View members screen 
-- Validation for data existence is done at the component invoking this function
*/
const ExportExcelButton = ({ buttonName }) => (
  <ExcelFile
    element={<Button color="primary">{buttonName}</Button>}
    filename={ExcelData.name}
  >
    <ExcelSheet dataSet={ExcelData.data} name={ExcelData.name} />
  </ExcelFile>
);

IconComponent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  intl: intlShape.isRequired
};

ExportExcel.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  intl: intlShape.isRequired
};

CustomExportExcel.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  headers: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string)]),
  keys: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string)]),
  fileName: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string)]),
  buttonName: PropTypes.string.isRequired
};

CustomExportExcel.defaultProps = {
  headers: [],
  keys: [],
  fileName: [],
  rows: [],
  classes: []
};

ExportExcelButton.propTypes = {
  buttonName: PropTypes.string.isRequired
};

export { CustomExportExcel, ExportExcel, ExportExcelButton };
