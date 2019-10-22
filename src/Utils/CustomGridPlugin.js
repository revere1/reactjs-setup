import React from 'react';
import PropTypes from 'prop-types';
import { TemplateConnector, Plugin } from '@devexpress/dx-react-core';
import UserStore from '../Store';

const ExcelData = {};

const GridPreferenceData = {
  modulesGridId: null,
  userId: null,
  columnSequence: [],
  defaultColumnOrder: []
};

/* Function to filter out gridColumns */
const filterColumn = gridColumns =>
  gridColumns.filter(({ column }) => column.name !== 'customColumn');

/* Function to retrieve columnTitle from a grid */
const getColumnTitle = gridColumns =>
  gridColumns.map(({ column }) => column.title);

/* Function to generate the Excel data for a grid as per the format required by ExportExcel plugin */
const generateData = (gridColumns, rows) => {
  /* Retrieve each cell's value in a row in the grid */
  const data = rows.map(row =>
    gridColumns.map(({ column }) => row[column.name])
  );
  /* Format the data for the plugin */
  const dataSet = [{ columns: getColumnTitle(gridColumns), data: [...data] }];
  return dataSet;
};

// Used as a reducer function
const ExcelPipeline = [filterColumn, generateData];

/* Setting Grid Preference Data as per API request payload w.r.t module */
const setGridPreference = (modulesGridId, defaultColumnOrder, tableColumns) => {
  GridPreferenceData.modulesGridId = modulesGridId;
  GridPreferenceData.userId = UserStore.getLocalStorageItem(
    'userDetails'
  ).userId;
  GridPreferenceData.columnSequence = tableColumns
    .map(attr => attr.column.name)
    .join(',');
  GridPreferenceData.defaultColumnOrder = defaultColumnOrder;
};

const CustomGridPlugin = ({ modulesGridId, defaultColumnOrder, filename }) => (
  <Plugin name="Export">
    <TemplateConnector>
      {({ rows, tableColumns }) => {
        /* tableColumns --> contains visible columns in the grid */
        /* Grid Preference */
        setGridPreference(modulesGridId, defaultColumnOrder, tableColumns);
        /* Export Excel */
        ExcelData.data = ExcelPipeline.reduce(
          (gridColumns, fn) => fn(gridColumns, rows),
          tableColumns
        );
        ExcelData.name = filename;
        return null;
      }}
    </TemplateConnector>
  </Plugin>
);

CustomGridPlugin.defaultProps = {
  modulesGridId: undefined,
  defaultColumnOrder: []
};

CustomGridPlugin.propTypes = {
  modulesGridId: PropTypes.number,
  defaultColumnOrder: PropTypes.arrayOf(PropTypes.string),
  filename: PropTypes.string.isRequired
};

export { ExcelData, GridPreferenceData, CustomGridPlugin };
