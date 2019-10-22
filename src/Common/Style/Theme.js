import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#1c4fb7',
      main: '#3870e4',
      dark: '#1146b1',
      contrastText: '#fff'
    },
    secondary: {
      light: '#4a76c9',
      main: '#2d67d3',
      dark: '#1249af',
      contrastText: '#fff'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    }
  },
  overrides: {
    MuiInputLabel: {
      shrink: {
        transform: 'scale(0.95)'
      }
    },
    MuiInput: {
      disabled: { color: 'rgba(0, 0, 0, 0.87) !important' },
      input: {
        minHeight: 25
      },
      inputMarginDense: {
        paddingTop: 5,
        paddingBottom: 4
      },
      multiline: {
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: 8,
        paddingRight: 8
      }
    },
    MuiButton: {
      root: {
        minHeight: 'auto'
      },
      raised: {
        boxShadow: 'none'
      }
    },
    MuiButtonBase: {
      root: {
        '&$disabled': {
          backgroundColor: '#f5f5f5'
        }
      }
    },
    MuiPrivateSwitchBase: {
      root: {
        '&$disabled': {
          backgroundColor: 'rgba(0, 0, 0, 0)'
        }
      },
      input: {
        '-webkit-appearance': 'none'
      }
    },
    MuiFormHelperText: {
      root: {
        color: 'red'
      }
    },
    MuiListItemIcon: {
      root: {
        marginRight: '0'
      }
    },
    MuiSelect: {
      selectMenu: {
        minHeight: 25
      }
    },
    MuiPaper: {
      elevation5: {
        boxShadow: '0 0 6px 1px rgba(206, 206, 206, 0.5)'
      },
      rounded: {
        borderRadius: '5px'
      }
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        boxShadow: '0 0 6px 1px rgba(206, 206, 206, 0.5)',
        borderRight: 'none'
      }
    },
    MuiDialog: {
      paperWidthXs: {
        maxWidth: '440px',
        width: '100%',
        overflow: 'hidden'
      },
      paperWidthMd: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      },
      paperWidthSm: {
        overflow: 'hidden'
      },
      paperScrollPaper: {
        maxHeight: 'calc(100% - 36px)'
      },
      paper: {
        margin: 18
      }
    },
    MuiDialogActions: {
      root: {
        '& button': {
          margin: '0 4px'
        }
      }
    },
    MuiChip: {
      // root: {
      //   backgroundColor: '#3870e4',
      //   color: '#ffffff',
      //   height: 28
      // }
    },
    MuiMenuItem: {
      root: {
        '& $selected': {
          backgroundColor: 'rgba(56, 113, 228, 0.3)',
          color: '#3870e4',
          '&:hover .dash_autosuggest__marker': {
            color: '#3870e4'
          },
          '&:hover .dash_autosuggest__nonmarker': {
            color: '#1146b1'
          }
        }
      }
    },
    MuiTableCell: {
      head: {
        color: '#757575',
        fontSize: '0.9rem'
      }
    },
    Pagination: {
      activeButton: {
        backgroundColor: '#3870e4',
        color: '#ffffff',
        '&:hover': {
          color: '#4b4b4b'
        }
      }
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: '#1146b1'
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '0.820rem',
        backgroundColor: '#f79626'
      },
      popper: {
        maxWidth: 220,
        wordBreak: 'break-word',
        opacity: '1'
      }
    },
    MuiFormLabel: {
      root: {
        color: 'rgba(0, 0, 0, 0.80)'
      }
    },
    TableDetailCell: {
      active: {
        backgroundColor: '#1146b1'
      }
    },
    TableFilterCell: {
      flexContainer: {
        flexDirection: 'row-reverse'
      }
    },
    TableDetailToggleCell: {
      toggleCell: {
        paddingLeft: 4
      }
    },
    TableContainer: {
      root: {
        backgroundColor: '#ffffff'
      }
    },
    MuiTableSortLabel: {
      root: {
        '&:focus': {
          color: '#f79626'
        },
        '&:hover': {
          color: '#f79626'
        }
      }
    },
    Table: {
      stickyTable: {
        zIndex: 1
      }
    },
    MuiTableBody: {
      root: {
        '& tr': {
          '& td': {
            '&:nth-child(2n)': {
              background: 'rgba(234, 234, 234, 0.3)'
            }
          }
        }
      }
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: '#f79626'
      },
      barColorPrimary: {
        backgroundColor: '#069c13'
      }
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: 'rgba(255, 255, 255, 0) !important'
      }
    },
    MuiPickersModal: {
      todayDialogAction: {
        '&:first-child': {
          marginRight: 0
        }
      }
    },
    MuiStepper: {
      root: {
        padding: 16,
        marginTop: 15,
        overflowX: 'auto',
        overflowY: 'hidden',
        width: '100%',
        boxSizing: 'border-box'
      }
    },
    MuiStepConnector: {
      alternativeLabel: {
        zIndex: 99
      }
    },
    MuiStepLabel: {
      root: {
        width: '100%'
      },
      labelContainer: {
        height: 74,
        '& p': {
          position: 'absolute',
          bottom: 14,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: 180
        }
      },
      label: {
        color: 'rgba(0, 0, 0, 0.60)',
        fontSize: '1rem',
        fontWeight: 500
      },
      active: {
        color: '#f79626 !important',
        '&:after': {
          content: '""',
          position: 'absolute',
          height: 12,
          background: '#3870e4',
          zIndex: 9999,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      completed: {
        color: '#069c13 !important'
      }
    },
    MuiStepIcon: {
      root: {
        color: 'rgba(0, 0, 0, 0.60)',
        width: 30,
        height: 30
      },
      active: {
        color: '#f79626 !important'
      },
      completed: {
        color: '#069c13 !important'
      }
    },
    MuiStepButton: {
      root: {
        minWidth: 160
      }
    },
    MuiStep: {
      horizontal: {
        paddingLeft: 18,
        paddingRight: 18
      }
    }
  }
});

export default Theme;
