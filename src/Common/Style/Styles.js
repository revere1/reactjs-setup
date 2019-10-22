import Background from '../background.jpg';

export default {
  // Login Page

  loginWrapper: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    position: 'relative',
    width: '100vw',
    minHeight: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
  },
  loginHeader: {
    height: '100%',
    maxHeight: '40px'
  },
  loginHeaderBlock: {
    width: '70%',
    margin: '0 auto',
    DISPLAY: 'block'
  },
  loginBlock: {
    background: '#ffffff',
    position: 'relative',
    width: '100%',
    maxWidth: '360px',
    padding: 15,
    boxSizing: 'border-box',
    overflowX: 'hidden',
    overflowY: 'auto',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 0 12px 2px rgba(31, 80, 179, 0.6)'
  },
  loginForm: {
    margin: '10vh auto',
    width: '100%',
    maxWidth: '260px',
    flex: '1 0 auto'
  },
  loginFormTitle: {
    margin: '0 0 5px',
    fontWeight: 200,
    fontSize: '1.5rem',
    color: '#3870e4',
    borderLeft: '4px solid #3870e4',
    paddingLeft: '10px'
  },
  loginFormSubTitle: {
    color: '#a1a1a1',
    fontWeight: 200,
    fontSize: 16
  },
  loginFormInputButton: {
    background: '#3870e4',
    color: '#ffffff',
    fontSize: '0.95rem',
    width: 160,
    height: 45,
    marginTop: 15,
    position: 'relative',
    '&:hover': {
      background: '#3870e4',
      color: '#1146b1'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      background: '#3870e4',
      width: 120,
      margin: '0 auto',
      bottom: -5,
      height: 10,
      zIndex: 1,
      filter: 'blur(10px)'
    }
  },
  loginFooter: {
    margin: 0,
    color: '#a1a1a1',
    fontWeight: 200,
    fontSize: 14
  },
  loginFormCheck: {
    textTransform: 'uppercase'
  },
  loginFormForgotButton: {
    padding: 5,
    display: 'block',
    color: '#a1a1a1',
    marginTop: 10,
    fontWeight: 500,
    '&:hover': {
      background: 'none',
      color: '#3870e4'
    }
  },

  loginCodeContainer: {
    margin: '15px auto',
    textAlign: 'center',
    '& img': {
      width: 140
    }
  },

  // Theme Button

  themeButton: {
    background: '#3870e4',
    color: '#ffffff',
    fontSize: '0.95rem',
    width: 160,
    height: 45,
    position: 'relative',
    zIndex: 2,
    margin: 10,
    '&:hover': {
      background: '#3870e4',
      color: '#1146b1'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      background: '#3870e4',
      width: 120,
      margin: ' 0 auto',
      bottom: -5,
      height: 10,
      zIndex: 0,
      filter: 'blur(10px)'
    }
  },

  themeButtonErr: {
    background: '#d3322d',
    color: '#ffffff',
    fontSize: '0.95rem',
    width: 160,
    height: 45,
    position: 'relative',
    zIndex: 2,
    margin: 10,
    '&:hover': {
      background: '#d3322d',
      color: '#6b201d'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      background: '#d3322d',
      width: 120,
      margin: ' 0 auto',
      bottom: -5,
      height: 10,
      zIndex: 0,
      filter: 'blur(10px)'
    }
  },

  themeButtonSuccess: {
    background: '#069c13',
    color: '#ffffff',
    fontSize: '0.95rem',
    width: 160,
    height: 45,
    position: 'relative',
    zIndex: 2,
    margin: 10,
    '&:hover': {
      background: '#069c13',
      color: '#267e2e'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      background: '#069c13',
      width: 120,
      margin: ' 0 auto',
      bottom: -5,
      height: 10,
      zIndex: 0,
      filter: 'blur(10px)'
    }
  },

  themeButtonwarning: {
    background: '#f79626',
    color: '#ffffff',
    fontSize: '0.95rem',
    width: 160,
    height: 45,
    position: 'relative',
    zIndex: 2,
    margin: 10,
    '&:hover': {
      background: '#f79626',
      color: '#f1740d'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      background: '#f79626',
      width: 120,
      margin: ' 0 auto',
      bottom: -5,
      height: 10,
      zIndex: 0,
      filter: 'blur(10px)'
    }
  },

  themeButtonNormal: {
    padding: 0,
    color: '#a1a1a1',
    marginTop: 5,
    fontWeight: 400,
    '&:hover': {
      background: 'none',
      color: '#3870e4'
    }
  },

  themeIconButtonSmall: {
    width: 28,
    height: 28,
    padding: 0
  },

  themeIconButtonSmallgray: {
    width: 28,
    height: 28,
    color: '#cfcfcf',
    padding: 0
  },

  themeIconButtonPrimary: {
    background: '#3870e4',
    color: '#ffffff',
    margin: 10
  },

  thememessagewarning: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f79626',
    marginBottom: 5,
    borderRadius: 5
  },

  thememessageicon: {
    color: '#ffffff',
    fontSize: 36,
    width: '1.6em',
    marginRight: 10
  },

  themeFlotingButton: {
    right: 30,
    bottom: 30,
    zIndex: 55,
    position: 'fixed',
    background: '#3870e4',
    color: '#ffffff',
    width: 60,
    height: 60,
    '&:hover': {
      background: '#1146b1'
    }
  },

  thememessagetext: {
    color: '#ffffff'
  },

  themeTextAlignCenter: {
    textAlign: 'center !important'
  },

  themeTextAlignRight: {
    textAlign: 'right !important'
  },

  themeTextAlignLeft: {
    textAlign: 'left !important'
  },

  themeResponsiveImage: {
    width: '100%'
  },

  themeClickable: {
    cursor: 'pointer',
    textAlign: 'center !important',
    backgroundColor: '#f79626 !important'
  },

  themeErrorText: {
    color: '#d3322d'
  },

  themeSuccessText: {
    color: '#069c13'
  },

  themewarningText: {
    color: '#f79626'
  },

  themeLink: {
    textDecoration: 'none',
    color: '#3870e4'
  },

  TagChipError: {
    backgroundColor: '#d3322d',
    margin: 2,
    '&:hover': {
      backgroundColor: '#6b201d'
    },
    '&:focus': {
      backgroundColor: '#d3322d'
    }
  },

  TagChipPrimary: {
    backgroundColor: '#3870e4',
    margin: 2,
    '&:hover': {
      backgroundColor: '#1146b1'
    },
    '&:focus': {
      backgroundColor: '#3870e4'
    }
  },

  TagChipSuccess: {
    backgroundColor: '#069c13',
    margin: 2,
    '&:hover': {
      backgroundColor: '#267e2e'
    },
    '&:focus': {
      backgroundColor: '#069c13'
    }
  },

  TagChipWarning: {
    backgroundColor: '#f79626',
    margin: 2,
    '&:hover': {
      backgroundColor: '#f1740d'
    },
    '&:focus': {
      backgroundColor: '#f1740d'
    }
  },

  // Sidebar

  dashControlerWrapper: {
    outline: 'none'
  },

  dashControler: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    boxShadow: '0 0 12px 2px rgba(51, 51, 51, 0.3)',
    outline: 'none',
    overflow: 'hidden'
  },

  dashSidebarMain: {
    padding: 10,
    width: 70,
    background: '#ffffff',
    boxSizing: 'border-box',
    position: 'relative',
    textAlign: 'center',
    boxShadow: '0 0 6px 1px rgba(206, 206, 206, 0.5)'
  },

  dashSidebar: {
    width: 260,
    padding: 10,
    boxSizing: 'border-box',
    overflowX: 'hidden',
    overflowY: 'auto'
  },

  SidebarButtonsEnd: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  },

  sidebarlogo: {
    display: 'block',
    width: '100%',
    marginBottom: 15
  },

  mainLogo: {
    margin: '5px auto 5px',
    display: 'block',
    marginBottom: 5,
    width: '100%',
    maxWidth: 40
  },

  sidebarLink: {
    marginBottom: 5,
    borderRadius: 3,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    boxSizing: 'border-box',
    '&:hover': {
      background: '#3870e4',
      color: '#ffffff',
      '& $themeIcons': {
        color: '#ffffff',
        fontWeight: 400
      },
      '& $sidebarLinkText': {
        color: '#ffffff',
        fontWeight: 400
      }
    },
    '& $themeIcons': {
      color: '#757575'
    }
  },

  sidebarMenu: {
    maxHeight: 600
  },

  sidebarAvatarLogo: {
    width: 30,
    height: 30,
    borderRadius: 0,
    marginRight: 15
  },

  sidebarMenuHeader: {
    textDecoration: 'none',
    outline: 'none',
    padding: 10,
    color: '#a1a1a1'
  },

  sidebarMenuSearch: {
    padding: '0 10px',
    outline: 'none',
    '& input': {
      padding: '2px 0 7px'
    },
    '& span': {
      color: '#a1a1a1'
    }
  },

  sidebarLinkText: {
    color: '#757575',
    fontWeight: 400,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },

  themeIcons: {
    color: '#a1a1a1'
  },

  sidebarLinkActive: {
    background: '#3870e4',
    '& $sidebarLinkText': {
      color: '#ffffff'
    },
    '& $themeIcons': {
      color: '#ffffff'
    }
  },

  SidebarButton: {
    margin: '0 0 5px',
    color: '#757575',
    '&:hover': {
      color: '#3870e4'
    },
    '&.active': {
      color: '#3870e4',
      background: 'rgba(202, 219, 255, 0.28)'
    }
  },

  SidebarLanguageButton: {
    margin: '0 0 5px',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#757575',
    height: 47,
    textTransform: 'uppercase',
    '&:hover': {
      color: '#3870e4'
    },
    '&.active': {
      color: '#3870e4'
    }
  },

  sidebarExpandButtonIcon: {
    color: '#ffffff !important',
    fontSize: 36
  },

  sidebarExpandButton: {
    padding: '5px 12px',
    borderRadius: 3,
    color: '#ffffff',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },

  sidebarExpandText: {
    fontSize: 12,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '& span': {
      display: 'block',
      fontSize: 16
    }
  },

  sidebarNested: {
    padding: 10,
    borderRadius: 5,
    '&:hover': {
      background: '#1146b1',
      color: '#ffffff'
    }
  },

  sidebarNestedText: {
    fontWeight: 400,
    fontSize: '0.95rem',
    paddingLeft: '50px !important',
    color: '#ffffff',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },

  sidebarBlocks: {
    padding: 5,
    background: '#3870e4',
    borderRadius: 5,
    marginBottom: 5
  },

  SidebarMiniSelect: {
    '& selectMenu': {
      width: 5
    }
  },

  sidebarBatchText: {
    padding: 5,
    width: 20,
    height: 20,
    background: '#1146b1',
    textAlign: 'center',
    borderRadius: '50%',
    fontWeight: 400,
    lineHeight: '1.4rem',
    color: '#ffffff'
  },

  // Toolbar

  Toolbar: {
    boxShadow: 'none',
    position: 'absolute',
    zIndex: 15,
    right: 0,
    top: 0,
    left: 'auto',
    width: 'calc(100% - 330px) !important',
    background: 'none'
  },

  ToolbarIn: {
    minHeight: 58
  },

  FullToolbar: {
    boxShadow: 'none',
    position: 'absolute',
    zIndex: 15,
    right: 0,
    top: 0,
    left: 'auto',
    width: 'calc(100% - 70px) !important',
    background: 'none'
  },

  ToolbarTitle: {
    flex: 1,
    fontWeight: 400,
    color: '#2d67d3',
    fontSize: 20
  },

  ToolbarButton: {
    display: 'none',
    color: '#1146b1',
    width: 28,
    height: 28,
    marginRight: 10,
    padding: 0
  },

  ToolbarTitleUser: {
    fontSize: 16,
    fontWeight: 400,
    marginRight: 10,
    color: '#4b4b4b'
  },

  ToolbarButtonRight: {
    color: '#1146b1',
    position: 'relative',
    width: 28,
    height: 28,
    padding: 0
  },

  ToolbarButtonBatch: {
    background: '#1146b1',
    fontSize: 12,
    padding: 4,
    boxSizing: 'border-box',
    borderRadius: '50%',
    position: 'absolute',
    top: 4,
    right: 2
  },

  // Dashboard

  dashWrapper: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh'
  },

  fullDashBody: {
    position: 'absolute',
    top: 58,
    right: '0',
    left: 70,
    zIndex: '10'
  },

  dashBody: {
    position: 'absolute',
    top: 58,
    right: '0',
    left: '330px',
    zIndex: '10'
  },

  dashCointainer: {
    padding: '0 16px 16px',
    boxSizing: 'border-box',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    height: 'calc(100vh - 58px)'
  },

  // Dashblock

  dashHeadText: {
    fontWeight: 200,
    marginBottom: 15,
    marginTop: 15
  },

  dashBlockContent: {
    borderRadius: 5,
    boxSizing: 'border-box',
    background: '#ffffff',
    position: 'relative'
  },

  dashBlockContentLink: {
    textDecoration: 'none',
    color: '#a1a1a1'
  },

  dashBlockHeader: {
    padding: '10px 15px',
    display: 'flex',
    background: '#3870e4',
    borderRadius: '3px 3px 0 0',
    height: 56,
    boxSizing: 'border-box'
  },

  dashBlockHeaderLight: {
    padding: '10px 15px',
    display: 'flex',
    background: '#ffffff',
    borderRadius: '3px 3px 0 0',
    height: 56,
    boxSizing: 'border-box'
  },

  dashBlockHeaderTitle: {
    flex: 1,
    fontSize: '1.2rem',
    fontWeight: 400,
    marginTop: 6,
    color: '#ffffff'
  },

  dashBlockHeaderLightTitle: {
    flex: 1,
    fontSize: '1rem',
    fontWeight: 400,
    marginTop: 6,
    color: '#3870e4'
  },

  dashBlockHeaderLightTitleLink: {
    flex: 1,
    fontSize: '1.2rem',
    fontWeight: 400,
    marginTop: 6,
    color: '#3870e4',
    textDecoration: 'none',
    '& span': {
      fontSize: '1rem',
      color: '#a1a1a1'
    }
  },

  dashBlockButton: {
    color: '#ffffff',
    height: 36,
    background: '#1146b1',
    marginRight: '0.5em',
    '&:hover': {
      color: '#ffffff',
      background: '#1146b1'
    }
  },

  dashErrorButton: {
    color: '#ffffff',
    height: 36,
    background: '#d3322d',
    marginRight: '0.5em',
    '&:hover': {
      color: '#ffffff',
      background: '#6b201d'
    }
  },

  dashSuccessButton: {
    color: '#ffffff',
    height: 36,
    background: '#069c13',
    marginRight: '0.5em',
    '&:hover': {
      color: '#ffffff',
      background: '#267e2e'
    }
  },

  dashWarningButton: {
    color: '#ffffff',
    height: 36,
    background: '#f79626',
    marginRight: '0.5em',
    '&:hover': {
      color: '#ffffff',
      background: '#267e2e'
    }
  },

  dashBlockButtonIcon: {
    marginLeft: 10,
    width: 36,
    height: 36
  },

  dashBlockFooter: {
    background: '#ffffff',
    borderRadius: '0 0 3px 3px',
    padding: 15
  },

  dashBlockSub: {
    fontWeight: 200,
    color: '#a1a1a1'
  },

  dashBlockFormLevel: {
    marginTop: 22,
    color: 'rgba(0, 0, 0, 0.80)'
  },

  dashBlockSection: {
    padding: 15,
    height: 'calc(100vh - 74px)',
    overflowX: 'hidden',
    overflowY: 'auto',
    boxSizing: 'border-box'
  },

  dashBlockScrollSection: {
    padding: 15,
    boxSizing: 'border-box'
  },

  dashBlockScrollSectionWithTab: {
    padding: 1,
    margin: -1,
    boxSizing: 'border-box'
  },

  dashBlockSectionWithTab: {
    padding: 15,
    height: 'calc(100vh - 129px)',
    overflowX: 'hidden',
    overflowY: 'auto',
    boxSizing: 'border-box'
  },

  dashBlockForms: {
    marginBottom: 15
  },

  dashBlockComments: {
    padding: 5,
    overflowX: 'hidden',
    overflowY: 'auto',
    marginBottom: 15,
    position: 'relative',
    paddingLeft: 45
  },

  dashBlockCommentsHeader: {
    fontSize: 14,
    color: '#a1a1a1',
    marginTop: 5,
    '& b': {
      color: '#4b4b4b',
      fontWeight: 500
    }
  },

  dashBlockCommentsSection: {
    fontSize: 16,
    color: '#212121',
    '& b': {
      fontWeight: 500
    }
  },

  dashBlockCommentsProfile: {
    width: 35,
    position: 'absolute',
    height: 35,
    borderRadius: '50%',
    background: '#eeeeee',
    left: 0,
    top: 0
  },

  dashBlockCommentsButton: {
    background: 'none',
    color: '#3870e4',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    marginRight: 10
    // fontWeight: 600
    // flex: '1 1 auto',
    // margin: '0px',
    // overflow: 'hidden',
    // opacity: '1'
  },

  dashBlockMakeCommentsButton: {
    background: 'none',
    cursor: 'text',
    outline: 'none',
    border: '0.75px solid #a1a1a1',
    overflow: 'hidden',
    borderRadius: 10,
    padding: '12px 4px',
    textAlign: 'left',
    fontSize: 15,
    width: '100%',
    color: '#a1a1a1'
  },

  dashBlockTabsContainer: {
    borderRadius: '3px 3px 0 0',
    background: 'rgba(234, 234, 234, 0.3)',
    position: 'inherit'
  },

  dashBlockTabs: {},

  dashBlockTabsEach: {
    minHeight: 55
  },

  dashBlockTable: {
    padding: 5,
    width: '100%',
    '& th': {
      padding: '5px',
      fontWeight: 200,
      color: '#a1a1a1',
      textAlign: 'left'
    },
    '& td': {
      padding: '5px',
      textAlign: 'left',
      maxWidth: '0',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      // whiteSpace: 'nowrap',
      color: '#4b4b4b'
    }
  },

  dashInnerHeader: {
    padding: '5px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '3px 3px 0 0',
    marginBottom: 15
  },

  dashInnerHeaderTitle: {
    flex: 1,
    padding: '0 10px',
    fontSize: 20,
    fontWeight: 400,
    color: '#3870e4'
  },

  dashInnerHeaderButtonIcon: {
    width: 36,
    color: '#757575',
    margin: '5px 0 5px 15px',
    height: 36,
    padding: 0
  },

  dashInnerFooter: {
    marginTop: 15,
    marginBottom: 15
  },
  dashInnerTable: {
    height: 'calc(100vh - 317px)',
    overflow: 'auto'
  },
  dashCheckboxWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.46429em'
  },

  dashRadioWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.46429em'
  },

  dashCheckboxWrapperHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '1.3rem',
    fontWeight: 200,
    color: '#3870e4'
  },

  dashFileHolder: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '0 -15px'
  },

  dashFileButton: {
    border: 'none',
    cursor: 'pointer',
    margin: '10px',
    outline: 'none',
    display: 'flex',
    padding: '5px',
    background: 'none',
    wordBreak: 'break-all',
    alignItems: 'center',
    flexDirection: 'row',
    textDecoration: 'none',
    fontWeight: '400',
    fontSize: '0.9rem',
    color: '#4b4b4b'
  },
  dashFileButtonIcon: {
    fontSize: 32,
    color: '#4b4b4b'
  },
  dashFileButtonRemove: {
    color: '#d3322d'
  },

  dashFileUpload: {
    padding: 20,
    width: '100%',
    boxSizing: 'border-box',
    border: '3px dashed #3870e4',
    borderRadius: 10,
    textAlign: 'center',
    color: '#3870e4',
    marginBottom: 6
  },

  dashMultiInput: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },

  dashMultiInputEach: {
    width: 'calc( 100% - 100px )'
  },

  dashMultiInputSelect: {
    width: 100
  },

  dashCustomInputWrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  dashInputUpdateIndicator: {
    backgroundColor: 'rgba(56, 113, 228, 0.3)'
  },

  // Dash Filter

  dashFilterOuter: {
    background: '#ffffff',
    borderRadius: 2,
    marginBottom: 15,
    position: 'relative',
    zIndex: 99999,
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
  },

  dashFilterBody: {
    padding: 10
  },

  dashFilterHeader: {
    display: 'flex',
    padding: '0 14px',
    height: 49,
    alignItems: 'center',
    cursor: 'pointer',
    outline: 'none'
  },

  dashFilterHeaderText: {
    fontWeight: 300,
    fontSize: '1.1rem',
    marginLeft: 5,
    color: '#3870e4',
    flex: 1
  },

  dashFilterHeaderIcon: { color: '#3870e4' },

  dashFilterHeaderButton: { color: '#a1a1a1' },

  dashFilterFooter: {
    height: 60,
    display: 'flex',
    boxSizing: 'border-box',
    padding: 5
  },

  // Dash Slack.

  dashSlackContainer: {
    width: 320
  },
  dashSlackHeader: {
    padding: 15,
    background: '#3870e4',
    borderRadius: '5px 5px 0  0',
    color: '#ffffff',
    fontWeight: '200'
  },
  dashSlackBody: {
    padding: 15,
    background: '#3870e4',
    borderRadius: '0  0 5px 5px'
  },

  // Input VirtualTable

  dashInputTableWrapper: {
    overflowX: 'auto',
    overflowY: 'hidden',
    marginLeft: -15,
    marginRight: -15,
    marginBottom: -15
  },

  dashInputTable: {
    width: '100%',
    minWidth: 990,
    borderRadius: 5,
    borderSpacing: '0',
    overflow: 'hidden',
    '& thead': {
      '& tr': {
        '& th': {
          textAlign: 'left',
          fontWeight: 500,
          fontSize: '1rem',
          color: '#3870e4',
          padding: 10,
          height: 30,
          boxSizing: 'border-box'
        }
      }
    },
    '& tbody': {
      borderRadius: 5,
      '& tr': {
        '&:hover': {
          background: 'rgba(234, 234, 234, 0.3)'
        },
        '& td': {
          padding: '0 15px',
          boxSizing: 'border-box',
          verticalAlign: 'top',
          borderBottom: '1px solid rgba(224, 224, 224, 1)',
          '&:focus-within': {
            outline: '3px solid #3870e4'
          },
          '&:nth-child(2n)': {
            background: 'rgba(234, 234, 234, 0.3)'
          },
          '& h6': {
            marginTop: 10,
            fontWeight: 500,
            color: '#3870e4'
          }
        },

        '&:last-child td': {
          borderBottom: '1px solid transparent'
        }
      }
    }
  },

  dashInputTableFixedWrapper: {
    height: 'calc(100vh - 200px)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: -15,
    marginRight: -15,
    marginBottom: -15
  },

  dashInputTableFixedHeaders: {
    flex: '0 0 58px',
    overflowY: 'scroll',
    '& table': {
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      width: '100%',
      '& tr': {
        '& th': {
          border: '1px solid transparent',
          textAlign: 'left',
          verticalAlign: 'top',
          fontWeight: 500,
          fontSize: '1rem',
          color: '#3870e4',
          padding: 8,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          '&:first-child': {
            width: 90
          }
        }
      }
    }
  },

  dashInputTableFixedBody: {
    overflowY: 'auto',
    '& table': {
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      width: '100%',
      '& tr': {
        '&:hover': {
          background: 'rgba(234, 234, 234, 0.3)'
        },
        '& td': {
          border: '1px solid rgba(224, 224, 224, 1)',
          padding: 8,
          verticalAlign: 'top',
          textAlign: 'left',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          '&:first-child': {
            width: 90
          },
          '&:focus-within': {
            outline: '3px solid #3870e4'
          },
          '&:nth-child(2n)': {
            background: 'rgba(234, 234, 234, 0.3)'
          },
          '& h6': {
            marginTop: 10,
            fontWeight: 500,
            color: '#3870e4'
          }
        }
      }
    }
  },

  dashInputTableFixedHolder: {
    position: 'relative',
    padding: '35px 0 0'
  },

  dashInputTableFixedButtons: {
    position: 'absolute',
    top: -8,
    right: -8
  },

  // Input VirtualTable For Role Only

  dashInputTableCustom: {
    width: '100%',
    boxShadow: '0 0 6px 1px rgba(206, 206, 206, 0.5)',
    borderRadius: 5,
    borderSpacing: '0',
    overflow: 'hidden',
    '& tr': {
      '&:hover': {
        background: 'rgba(202, 219, 255, 0.28)'
      },
      '& td': {
        padding: '0 15px',
        boxSizing: 'border-box',
        height: 50,
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        textAlign: 'center',
        '&:first-child': {
          textAlign: 'left'
        },
        '&:nth-child(2n)': {
          background: 'rgba(234, 234, 234, 0.3)'
        }
      },
      '& th': {
        textAlign: 'center',
        fontWeight: 300,
        fontSize: '1rem',
        color: '#ffffff',
        padding: 10,
        height: 50,
        boxSizing: 'border-box'
      },
      '&:last-child td': {
        borderBottom: '1px solid transparent'
      }
    }
  },

  dashTableCustomTypeOne: {
    background: '#f79626'
  },

  dashTableCustomTypeTwo: {
    background: '#2d67d3'
  },

  // Custom VirtualTable

  dashCustomTableHolder: {
    overflowX: 'auto',
    boxShadow: '0 0 6px 1px rgba(206, 206, 206, 0.5)',
    borderRadius: 5
  },

  dashCustomTable: {
    width: '100%',
    borderSpacing: 0,
    border: 'none',
    '& tr': {
      '& th': {
        fontWeight: 200,
        color: '#ffffff',
        backgroundColor: '#3870e4',
        height: 58,
        fontSize: 16,
        padding: '10px 15px',
        boxSizing: 'border-box',
        textAlign: 'left',
        '&:hover': {
          backgroundColor: '#1146b1'
        },
        '&:first-child': {
          overflow: 'hidden'
        },
        '&:last-child': {
          overflow: 'hidden'
        }
      },
      '& td': {
        padding: '0 15px',
        boxSizing: 'border-box',
        height: 50,
        fontSize: '0.820rem',
        overflow: 'hidden',
        maxWidth: 110,
        // whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textAlign: 'left',
        width: '50%',
        '&:nth-child(2n)': {
          background: 'rgba(234, 234, 234, 0.3)'
        }
      },
      '&:not(:last-child)': {
        '& td': {
          borderBottom: '1px solid rgba(224, 224, 224, 1)'
        }
      },
      '&:hover': {
        background: 'rgba(202, 219, 255, 0.28)'
      }
    }
  },

  // Simple VirtualTable
  simpleTable: {
    width: '100%',
    borderSpacing: 0,
    background: '#3870e4',
    borderRadius: 5,
    overflow: 'hidden',
    '& tr': {
      '& td': {
        width: '25%',
        padding: 8,
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 200
      },
      '&:nth-child(2n)': {
        background: 'rgba(202, 219, 255, 0.28)'
      }
    }
  },

  // DashTable

  dashTable: {
    borderRadius: 5,
    overflow: 'hidden'
  },

  dashTableTabBlock: {
    borderRadius: 5,
    overflow: 'hidden',
    boxSizing: 'border-box',
    background: '#ffffff',
    position: 'relative'
  },

  dashTableHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: 5,
    background: '#ffffff',
    boxShadow:
      '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    zIndex: 5
  },

  dashTableHeaderTitle: {
    flex: 1,
    fontSize: '1.2rem',
    fontWeight: 400,
    marginTop: 6,
    color: '#ffffff'
  },

  dashTableHeaderSearch: {
    color: '#757575',
    height: 45,
    background: 'rgba(193, 193, 193, 0.2)',
    borderRadius: 5,
    minWidth: 120,
    width: '100%',
    maxWidth: 300,
    order: -1
  },

  dashTableHeaderSearchIcon: {
    padding: 10
  },

  dashTableHeaderButton: {
    marginLeft: 10,
    color: '#ffffff',
    background: '#1146b1'
  },

  dashTableHeaderButtonIcon: {
    margin: '5px 0 5px 15px',
    width: 36,
    height: 36,
    color: '#757575',
    padding: 0
  },

  dashTableHeaderSelect: {
    minWidth: 150
  },

  dashTableFooterButton: {
    color: '#ffffff',
    background: '#1146b1'
  },

  dashTabledetailContainer: {
    margin: '10px 10px 15px'
  },

  dashTabledetailHeader: {
    color: '#ffffff'
  },

  numberindicator: {
    background: '#3870e4'
  },

  dash_autosuggest_suggestion: {
    fontWeight: '200 !important'
  },

  dashTableExpand: {
    padding: 15
  },

  dashTableExpandIn: {
    padding: 15
  },

  dashTableExpandImg: {
    width: '100%'
  },

  dashTableFilter: {
    '& input': {
      width: '100%'
    }
  },

  // DashModal
  dashModal: {
    borderRadius: '5px !important'
  },

  dashModalFullHeader: {
    background: '#3870e4',
    padding: '7px 14px 7px 7px',
    color: '#ffffff',
    fontWeight: '200',
    fontSize: '20px',
    borderRadius: '3px 3px 0 0',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '26px',
    '& span': {
      flex: '1'
    }
  },

  dashModalAction: {
    margin: '10px 15px',
    height: 40
  },

  dashModalActionText: {
    flex: 1,
    color: 'red'
  },

  dashModalActionCount: {
    flex: 1,
    color: '#cfcfcf'
  },

  dashModalTypo: {
    margin: '15px 0',
    fontWeight: 400,
    '& span': {
      display: 'inline-block',
      background: '#3870e4',
      width: '30px',
      height: '30px',
      textAlign: 'center',
      lineHeight: '30px',
      color: '#ffffff',
      borderRadius: '50px',
      marginRight: '10px',
      verticalAlign: 'middle',
      outline: 'none',
      cursor: 'pointer'
    }
  },

  dashModalFull: {
    width: '100%'
  },

  dashModalFullHeaderTitle: {
    fontWeight: 300,
    color: '#ffffff',
    lineHeight: '25px',
    fontSize: 20,
    flex: '1',
    padding: 10
  },

  dashModalFullHeaderTitleFirst: {
    fontWeight: 300,
    color: '#ffffff',
    lineHeight: '25px',
    fontSize: 20,
    flex: '1',
    maxWidth: 260,
    position: 'relative',
    padding: 10,
    background: '#1146b1',
    borderRadius: '5px 0 0 5px',
    cursor: 'pointer'
  },

  triangle_right: {
    width: '0',
    height: '0',
    borderTop: '22px solid transparent',
    borderLeft: '22px solid #1146b1',
    borderBottom: '22px solid transparent',
    marginRight: 5
  },

  dashModalContent: {
    padding: '15px !important',
    boxShadow: 'inset 0 0 6px 1px rgba(206, 206, 206, 0.5)',
    overflowX: 'hidden',
    overflowY: 'auto'
  },

  dashModalActionStaper: {
    paddingLeft: 15,
    marginLeft: 15,
    borderLeft: '1px solid rgba(224, 224, 224, 1)'
  },

  dashModalFullContent: {
    boxShadow: 'inset 0 0 6px 1px rgba(206, 206, 206, 0.5)'
  },

  dashModalheadingSub: {
    marginBottom: 0,
    color: '#3870e4',
    fontWeight: 500
  },

  dashModalGroup: {
    background: 'rgba(202, 219, 255, 0.28)',
    padding: 10,
    borderRadius: 5
  },

  dashModalContentTable: {
    padding: 0,
    width: '100%',
    '& th': {
      fontWeight: 200,
      color: '#a1a1a1',
      textAlign: 'left'
    },
    '& td': {
      padding: '5px 0',
      textAlign: 'left',
      '&:first-child': {
        width: 200
      },
      '& span': {
        color: '#3870e4'
      }
    }
  },

  dashModalInput: {
    width: 95,
    border: '2px solid #3870e4',
    outline: 'none',
    borderRadius: 5,
    paddingLeft: 5
  },

  dashModalInputFull: {
    border: '2px solid #3870e4',
    outline: 'none',
    borderRadius: 5,
    paddingLeft: 5
  },

  dashModalSubmit: {
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },

  dashModalDivider: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: -10,
    marginRight: -10,
    backgroundColor: 'rgba(56, 113, 228, 0.3)'
  },

  // Confirm Box
  confirmBoxModalHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '1.6em',
    '& span': {
      marginRight: 10,
      fontSize: '1.9em'
    }
  },

  // Breadnote

  breadnoteHolder: {
    position: 'fixed',
    right: 20,
    bottom: 20,
    zIndex: 1600,
    borderRadius: 5,
    overflow: 'hidden'
  },

  breadnote: {
    padding: '5px 5px 5px 10px',
    display: 'flex',
    width: 360,
    alignItems: 'center',
    height: 50
  },

  breadnoteText: {
    color: '#ffffff',
    flex: 1,
    '& p': {
      margin: 3,
      display: 'flex',
      alignItems: 'center',
      wordBreak: 'break-word'
    }
  },

  '@media (max-width: 560px)': {
    breadnoteHolder: {
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: 0
    },
    breadnote: {
      width: 'inherit'
    }
  },

  // Barnote

  barnoteHolder: {
    position: 'relative',
    borderRadius: 5,
    overflow: 'hidden'
  },

  barnote: {
    padding: '5px 5px 5px 10px',
    display: 'flex',
    alignItems: 'center',
    height: 50
  },

  barnoteText: {
    color: '#ffffff',
    flex: 1,
    '& p': {
      margin: 3,
      display: 'flex',
      alignItems: 'center',
      wordBreak: 'break-word'
    }
  },

  // Multi - Common
  '@global': {
    '.Select-control': {
      display: 'flex',
      alignItems: 'center',
      border: 0,
      background: 'transparent',
      height: 'auto',
      '&:hover': {
        boxShadow: 'none',
        cursor: 'pointer'
      }
    },
    '.Select-multi-value-wrapper': {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap'
    },
    '.Select--multi .Select-input': {
      margin: 0
    },
    '.Select.has-value.is-clearable.Select--single > .Select-control .Select-value': {
      padding: 0,
      width: 'calc(100% - 50px)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    '.Select-noresults': {
      padding: 15
    },
    '.Select-input': {
      display: 'inline-flex !important',
      padding: 0,
      height: 'auto'
    },
    '.Select-input input': {
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'default',
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
      outline: 0
    },
    '.Select-placeholder, .Select--single .Select-value': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'Roboto',
      fontSize: '1rem',
      padding: 0
    },
    '.Select--single > .Select-control .Select-value': {
      color: '#212121'
    },
    '.Select-placeholder': {
      opacity: 0.42,
      color: '#cfcfcf'
    },
    '.Select-menu-outer': {
      backgroundColor: '#ffffff',
      boxShadow: '0 0 12px 2px rgba(51, 51, 51, 0.3)',
      overflow: 'hidden',
      border: 'none',
      position: 'absolute',
      left: 0,
      top: '100%',
      width: '100%',
      zIndex: 2,
      maxHeight: 200,
      marginBottom: 15
    },
    '.Select.is-focused:not(.is-open) > .Select-control': {
      boxShadow: 'none',
      backgroundColor: 'transparent'
    },
    '.Select.is-focused> .Select-control': {
      backgroundColor: 'transparent'
    },
    '.Select.is-open> .Select-control': {
      backgroundColor: 'transparent'
    },
    '.Select-menu': {
      maxHeight: 200,
      overflowY: 'auto',
      display: 'block'
    },
    '.Select-menu div': {
      boxSizing: 'content-box'
    },
    '.Select-arrow-zone, .Select-clear-zone': {
      color: '#757575',
      cursor: 'pointer',
      height: 24,
      width: 24,
      zIndex: 1
    },
    // Only for screen readers. We can't use display none.
    '.Select-aria-only': {
      position: 'absolute',
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      height: 1,
      width: 1,
      margin: -1
    },
    '.Select.is-disabled > .Select-control': {
      backgroundColor: 'transparent'
    },
    '.Select.is-disabled .Select-arrow-zone': {
      opacity: 1
    }
  },

  selectedChip: {
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 2
  },

  // Popover
  popoverImage: {
    minWidth: 600,
    minHeight: 240,
    maxWidth: 640,
    background: '#ffffff',
    '& img': {
      width: '100%',
      display: 'block'
    }
  },
  popoverTable: {
    padding: 15,
    maxWidth: 500,
    '& td': {
      padding: '5px 10px',
      '& span': {
        color: '#3870e4',
        verticalAlign: 'bottom',
        marginLeft: 2,
        marginRight: 2
      }
    }
  },
  popoverAction: {
    padding: 15
  },

  // Form Component

  dynamicForm: {
    width: '100%',
    marginBottom: 10,
    padding: '0 10px',
    boxShadow: '0 0 6px 1px rgba(206, 206, 206, 0.5)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing: 'border-box',
    background: '#ffffff',
    zIndex: 999999,
    '& input': {
      border: 'none',
      outline: 'none',
      padding: '5px 10px',
      flex: 1,
      height: 50,
      boxSizing: 'border-box',
      fontSize: 16,
      fontFamily: 'Roboto',
      minWidth: 100,
      '&:disabled': {
        background: 'transparent',
        opacity: 0.5
      }
    }
  },

  dynamicFormMultipleLevelSystemCodes: {
    fontWeight: 500,
    fontSize: 16,
    color: '#757575',
    marginLeft: 10,
    marginRight: 10
  },

  dynamicFormMultipleEachMargin: {
    marginRight: 5
  },

  dynamicFormMultipleHeader: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 4,
    height: 40
  },

  dynamicFormMultiple: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    background: 'rgba(202, 219, 255, 0.28)',
    padding: 5,
    marginBottom: 10,
    borderRadius: 4,
    height: 60
  },

  dynamicFormHierarchyLevel: {
    fontWeight: 500,
    fontSize: 16,
    width: 260,
    color: '#757575',
    marginLeft: 10
  },

  dynamicFormMultipleNumbering: {
    fontWeight: 500,
    fontSize: 16,
    color: '#757575',
    marginLeft: 10,
    marginRight: 10
  },

  dynamicFormMultipleLevel: {
    fontWeight: 500,
    fontSize: 16,
    color: '#757575',
    marginLeft: 10,
    marginRight: 10
  },

  dynamicFormMultipleCheckbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.46429em',
    minWidth: 115
  },

  dynamicFormMultipleCheckboxHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.46429em',
    minWidth: 115
  },

  dynamicFormHierarchyWrap: {
    padding: '10px 0'
  },

  dynamicFormHierarchy: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    background: 'rgba(202, 219, 255, 0.28)',
    padding: 5,
    borderRadius: 4,
    height: 60
  },

  dynamicFormMultipleEach: {
    marginRight: 5
  },

  dynamicFormHolder: {
    marginTop: 10
  },

  dashChartContainer: {
    padding: 0,
    marginBottom: 8
  },

  // Responsive

  '@media (max-width: 960px)': {
    Toolbar: {
      width: '100% !important'
    },
    FullToolbar: {
      width: '100% !important'
    },
    ToolbarButton: {
      display: 'block'
    },
    dashBody: {
      width: '100%',
      left: '0px',
      top: 58
    },
    fullDashBody: {
      width: '100%',
      left: '0px'
    },
    dashTable: {
      margin: '0',
      borderRadius: 0
    },
    dashCointainer: {
      padding: 0
    },
    dashBlockTabsContainer: {
      borderRadius: 0
    },
    dashTableTabBlock: {
      borderRadius: 0
    },
    dashTableHeader: {
      padding: 5
    },
    dashFilterOuter: {
      marginLeft: 15,
      marginRight: 15
    },
    dashBlockSection: {
      height: 'calc(100vh - 58px)'
    },
    dashBlockSectionWithTab: {
      height: 'calc(100vh - 113px)'
    },
    dashBlockContent: {
      borderRadius: 0
    },
    dashChartContainer: {
      padding: 15
    },
    drawerView: {
      width: '100vw !important',
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    dashInnerTable: {
      height: 'calc(100vh - 298px)',
      overflow: 'auto'
    },
    dashInputTableFixedHeaders: {
      '& tbody': {
        height: 'calc(100vh - 250px)'
      }
    }
  },

  // Display Box
  displayBox: {
    boxSizing: 'border-box',
    boxShadow: '0 0 6px 1px rgba(206, 206, 206, 0.5)',
    background: '#ffffff',
    borderRadius: 5,
    height: 100,
    minWidth: 260,
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    '&:hover': {
      background: '#3870e4',
      '& $themeIcons': {
        color: '#ffffff',
        animation: 'bousnce 0.5s ',
        animationTimingFunction: 'ease-in'
      },
      '& $displayBoxBlockText': {
        color: '#ffffff',
        extend: 'animated'
      },
      '& $displayBoxSubText': {
        color: '#ffffff'
      },
      '& $displayBoxBlockMarkerUp': {
        color: '#ffffff'
      },
      '& $displayBoxBlockMarkerDown': {
        color: '#ffffff'
      },
      '& $dashCheckboxWrapper': {
        color: '#ffffff'
      },
      '& span': {
        color: '#ffffff !important'
      }
    }
  },

  displayBoxLink: {
    textDecoration: 'none'
  },

  displayBoxBatch: {
    padding: 5,
    boxSizing: 'border-box',
    '& $themeIcons': {
      fontSize: '2rem',
      color: '#cfcfcf'
    },
    width: 100,
    textAlign: 'center'
  },
  displayBoxContent: {
    padding: 5,
    marginLeft: 20
  },
  displayBoxBlockText: {
    fontSize: '2rem',
    fontWeight: 500,
    color: '#3870e4'
  },
  displayBoxBlockMarkerUp: {
    fontSize: '1.1rem',
    marginLeft: 10,
    color: '#d3322d',
    fontWeight: 400,
    verticalAlign: 'text-bottom',
    '& span': {
      verticalAlign: 'text-bottom'
    }
  },
  displayBoxBlockMarkerDown: {
    fontSize: '1.1rem',
    marginLeft: 10,
    color: '#069c13',
    fontWeight: 400,
    verticalAlign: 'text-bottom',
    '& span': {
      verticalAlign: 'text-bottom'
    }
  },
  displayBoxSubText: {
    fontSize: '1rem',
    fontWeight: 400,
    color: '#4b4b4b'
  },
  displayBoxSubFloat: {
    right: 10,
    position: 'absolute',
    top: 10
  },

  // Display VirtualTable

  displayTable: {
    width: '100%'
  },
  displayTableHeader: {
    width: '100%',
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& $displayTableCell': {
      color: '#1146b1',
      textTransform: 'uppercase',
      fontSize: '0.70rem'
    }
  },
  displayTableRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxShadow: '0 0 6px 1px rgba(206, 206, 206, 0.5)',
    alignItems: 'center',
    height: 50,
    overflow: 'hidden',
    borderRadius: 5,
    background: '#ffffff',
    marginBottom: 10,
    '&:hover': {
      background: '#3870e4',
      cursor: 'pointer',
      '& $displayTableCell': {
        color: '#ffffff',
        '&:hover': {
          background: '#1146b1'
        }
      },
      '& $displayTableFirstCell': {
        color: '#ffffff',
        '&:hover': {
          background: '#1146b1'
        }
      },
      '& $displayTableCellIconUp': {
        color: '#ffffff'
      },
      '& $displayTableCellIconDown': {
        color: '#ffffff'
      },
      '& $themeIcons': {
        color: '#1146b1'
      }
    }
  },
  displayTableCell: {
    flex: '0 0 16%',
    maxWidth: '16%',
    padding: '16px 10px',
    boxSizing: 'border-box',
    fontSize: '1rem',
    color: '#2b4882',
    fontWeight: 500,
    textAlign: 'right',
    textDecoration: 'none'
  },
  displayTableCellIconUp: {
    verticalAlign: 'bottom',
    color: '#d3322d'
  },
  displayTableCellIconDown: {
    verticalAlign: 'bottom',
    color: '#069c13'
  },
  displayTableFirstCell: {
    flex: '0 0 20%',
    maxWidth: '20%',
    padding: '16px 10px',
    boxSizing: 'border-box',
    fontSize: '1rem',
    color: '#4b4b4b',
    textDecoration: 'none',
    fontWeight: 500
  },
  displayTableHeaderInput: {
    '& input': {
      paddingTop: 3
    }
  },

  // Custom Delete

  popupDeleteConfirm: {
    padding: '10px 15px',
    display: 'flex',
    background: '#d3322d',
    alignItems: 'center',
    boxSizing: 'border-box'
  },

  popupDeleteConfirmTitle: {
    flex: 1,
    fontSize: '1rem',
    fontWeight: 200,
    color: '#ffffff'
  },

  // charts

  dashChartContent: {
    borderRadius: 5,
    boxSizing: 'border-box',
    background: '#ffffff',
    position: 'relative',
    marginBottom: 16
  },

  customLegent: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#a1a1a1',
    flexWrap: 'wrap',
    fontSize: '0.825rem'
  },

  customLegentEach: {
    marginLeft: 5,
    marginBottom: 10,
    marginRight: 15
  },

  customLegentSuccess: {
    backgroundColor: '#069c13',
    display: 'block',
    width: 15,
    height: 2,
    marginBottom: 2
  },

  customLegentSemiSuccess: {
    backgroundColor: '#00acc1',
    display: 'block',
    width: 15,
    height: 2,
    marginBottom: 2
  },

  customLegentPrimary: {
    backgroundColor: '#3870e4',
    display: 'block',
    width: 15,
    height: 2,
    marginBottom: 2
  },

  customLegentError: {
    backgroundColor: '#d3322d',
    display: 'block',
    width: 15,
    height: 2,
    marginBottom: 2
  },

  customLegentSemiError: {
    backgroundColor: '#f4511e',
    display: 'block',
    width: 15,
    height: 2,
    marginBottom: 2
  },

  customLegentwarning: {
    backgroundColor: '#f79626',
    display: 'block',
    width: 15,
    height: 2,
    marginBottom: 2
  },

  customLegentManual: {
    backgroundColor: '#ba68c8',
    display: 'block',
    width: 15,
    height: 2,
    marginBottom: 2
  },

  chartObjective: {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center'
  },

  chartObjectiveNum: {
    fontSize: '2rem',
    fontWeight: 'bold'
  },

  chartObjectiveText: {},

  chartListCustomTable: {
    padding: 15,
    width: '100%',
    '& th': {
      padding: '5px',
      fontWeight: 200,
      color: '#a1a1a1',
      textAlign: 'left'
    },
    '& td': {
      padding: '5px',
      textAlign: 'left',
      maxWidth: '0',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      color: '#4b4b4b',
      '&:last-child': {
        textAlign: 'right'
      }
    }
  },

  dashChartSearch: {
    color: '#757575',
    height: 45,
    background: 'rgba(193, 193, 193, 0.2)',
    borderRadius: 5,
    minWidth: 120,
    width: '100%',
    maxWidth: 300,
    order: -1
  },

  dashChartSearchIcon: {
    padding: 10
  },

  dashChartHeader: {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    padding: 0,
    zIndex: 5
  },

  dashChartHeaderSpace: {
    flex: 1
  },

  // Loder

  loadedGroup: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#3870e4',
    padding: 5
  },

  // Dev Express
  devNumericInput: {
    '& input': {
      width: '100%'
    }
  },

  modalDevTable: {
    margin: -15
  },

  devToggleCellButton: {
    width: 32,
    height: 32,
    marginLeft: -17
  },

  devToggleCell: {
    textAlign: 'center',
    textOverflow: 'initial',
    paddingTop: 0,
    paddingBottom: 0
  },
  // Drawer View
  drawerView: {
    width: 590,
    position: 'relative'
  },

  drawerViewHeader: {
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  drawerViewBody: {
    padding: 15
  },

  // Text Editor

  textEditor: {
    overflow: 'hidden',
    borderRadius: 5
  },

  textEditorHeader: {
    padding: 10,
    '& button': {
      marginRight: 10,
      color: '#4b4b4b'
    }
  },

  textEditorWrapper: {
    border: '2px solid #a1a1a1',
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    height: 100
  },

  // Comment Block

  commentTitle: {
    fontSize: 18,
    color: '#757575'
  },

  // Custom Chip
  customChip: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3870e4',
    color: '#ffffff',
    padding: 10,
    boxSizing: 'border-box',
    height: 28,
    borderRadius: 15,
    overflow: 'hidden',
    fontSize: '0.8125rem'
  },

  customChipSelect: {
    margin: '0 0 0 10px',
    '& div': {
      minHeight: 'auto !important',
      color: '#ffffff',
      fontSize: '0.8125rem',
      '& svg': {
        fill: '#ffffff'
      }
    }
  },

  dashChartTableContainer: {
    overflowX: 'auto',
    overflowY: 'hidden',
    paddingTop: 30,
    paddingLeft: 30,
    position: 'relative'
  },

  dashChartTable: {
    width: '100%',
    minWidth: 712,
    '& th': {
      fontWeight: 500,
      color: '#4b4b4b',
      textAlign: 'center'
    },
    '& td': {
      '&:first-child': {
        fontWeight: 500,
        color: '#4b4b4b',
        width: 100
      },
      textAlign: 'center',
      maxWidth: '0',
      color: '#4b4b4b',
      width: 200
    },
    '& button': {
      width: '100%',
      borderRadius: 0
    }
  },

  dashChartTableTopText: {
    position: 'absolute',
    left: '50%',
    transform: 'translateY(-50%)',
    top: 10,
    fontSize: 16,
    fontWeight: 500
  },

  dashChartTableLeftText: {
    position: 'absolute',
    top: '50%',
    left: 20,
    transform: 'translateX(-50%) rotate(270deg)',
    fontSize: 16,
    fontWeight: 500
  },

  // Combobox

  comboBox: {
    boxSizing: 'border-box',
    background: '#ffffff',
    border: '1px solid #cfcfcf',
    borderRadius: 5,
    height: 100,
    width: 260,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    '&:hover': {
      background: '#f5f5f5'
    }
  },

  comboBoxGray: {
    boxSizing: 'border-box',
    background: '#eaeaea',
    border: '1px solid #cfcfcf',
    borderRadius: 5,
    height: 100,
    width: 260,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    '&:hover': {
      background: '#f5f5f5'
    }
  },

  comboBoxWarning: {
    boxSizing: 'border-box',
    background: '#fde9d3',
    border: '1px solid #f79626',
    borderRadius: 5,
    height: 100,
    width: 260,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    '&:hover': {
      background: '#f6c186'
    }
  },

  comboBoxSuccess: {
    boxSizing: 'border-box',
    background: '#cdebd0',
    border: '1px solid #069c13',
    borderRadius: 5,
    height: 100,
    width: 260,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    '&:hover': {
      background: '#5ad365'
    }
  },

  comboBoxLink: {
    textDecoration: 'none'
  },

  comboBoxBatch: {
    padding: 5,
    boxSizing: 'border-box',
    '& $themeIcons': {
      fontSize: '2rem',
      color: '#cfcfcf'
    },
    width: 100,
    textAlign: 'center'
  },

  comboBoxContent: {
    padding: 10
  },

  comboBoxBlockText: {
    fontSize: '2rem',
    fontWeight: 500,
    color: '#3870e4'
  },

  comboBoxBlockMarkerUp: {
    fontSize: '1.1rem',
    marginLeft: 10,
    color: '#d3322d',
    fontWeight: 400,
    verticalAlign: 'text-bottom',
    '& span': {
      verticalAlign: 'text-bottom'
    }
  },

  comboBoxBlockMarkerDown: {
    fontSize: '1.1rem',
    marginLeft: 10,
    color: '#069c13',
    fontWeight: 400,
    verticalAlign: 'text-bottom',
    '& span': {
      verticalAlign: 'text-bottom'
    }
  },

  comboBoxSubText: {
    fontSize: '1rem',
    fontWeight: 400,
    color: '#4b4b4b'
  },

  comboBoxSubFloat: {
    right: 10,
    position: 'absolute',
    top: 10
  },

  slotBlocks: {
    padding: 10,
    marginBottom: 10,
    display: 'flex',
    borderRadius: 5,
    boxShadow: '0 0 6px 1px rgba(206, 206, 206, 0.5)'
  },

  slotBlockHeader: {
    flex: 'none',
    width: 160,
    padding: '5px 15px 5px 5px',
    textAlign: 'right',
    borderRight: '1px solid  rgba(56, 113, 228, 0.4)',
    marginRight: 15
  },

  slotBlockMarkText: {
    '&:hover': {
      background: '#eeeeee',
      cursor: 'pointer'
    }
  },

  slotBlockMark: {
    background: '#ff9632',
    fontWeight: 400
  },

  slotBlockBody: {
    padding: 5
  },

  superScriptIconRequirement: {
    position: 'absolute',
    top: '3px',
    right: '1px',
    fontSize: '18px',
    marginTop: '0',
    paddingTop: '0'
  },

  superScriptIconStep: {
    position: 'absolute',
    top: '9px',
    right: '1px',
    fontSize: '18px',
    marginTop: '0',
    paddingTop: '0'
  },

  // Animations

  '@keyframes bousnce': {
    '0%': {
      transform: 'scale(1)'
    },
    '50%': {
      transform: 'scale(1.5)'
    },
    '100%': {
      transform: 'scale(1)'
    }
  },

  // New Addtions
  dynamicFieldLevel: {
    fontWeight: 500,
    fontSize: 16,
    width: 25,
    color: '#757575',
    marginLeft: 10,
    alignSelf: 'flex-start'
  },
  dynamicRenderFormMultiple: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    marginBottom: 10,
    borderRadius: 4,
    height: 60,
    background: 'transparent'
  },

  dashModalGroupDynamic: {
    background: 'rgba(202, 219, 255, 0.28)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },

  dashBlockButtonDynamic: {
    color: '#ffffff',
    background: '#1146b1',
    marginRight: '0.5em',
    marginTop: 8,
    '&:hover': {
      color: '#ffffff',
      background: '#1146b1'
    }
  },

  dynamicDeleteIconGrid: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },

  dashInputTableCustomTypeTwo: {
    width: '100%',
    boxShadow: '0 0 6px 1px rgba(206, 206, 206, 0.5)',
    borderRadius: 5,
    borderSpacing: '0',
    overflow: 'hidden',
    '& tr': {
      '&:hover': {
        background: 'rgba(202, 219, 255, 0.28)'
      },
      '& td': {
        padding: '0 15px',
        boxSizing: 'border-box',
        height: 50,
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        '&:nth-child(2n)': {
          background: 'rgba(234, 234, 234, 0.3)'
        }
      },
      '& th': {
        fontWeight: 400,
        fontSize: '1rem',
        padding: 10,
        height: 50,
        boxSizing: 'border-box',
        textAlign: 'left',
        color: '#3870e4'
      },
      '&:last-child td': {
        borderBottom: '1px solid transparent'
      }
    }
  },

  StepButtons: {
    '&:disabled': {
      backgroundColor: 'rgba(0, 0, 0, 0.03)'
    }
  },

  numberButton: {
    display: 'flex',
    alignItems: 'center',
    background: '#eeeeee',
    margin: '0 10px',
    borderRadius: 50,
    padding: '3px 15px',
    color: '#6e7075',
    '& .material-icons': {
      marginLeft: 10
    }
  },

  IconWithNumber: {
    position: 'relative',
    '& p': {
      color: '#ffffff',
      margin: 0,
      padding: 0,
      fontSize: 12,
      position: 'absolute',
      fontWeight: '500',
      top: 2,
      right: 2,
      marginTop: 1,
      background: '#f79626',
      width: 20,
      height: 20,
      lineHeight: '20px',
      borderRadius: 50
    }
  },

  modalFilterWrapper: {
    boxShadow:
      '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    padding: 15,
    position: 'absolute',
    zIndex: 10,
    background: '#ffffff',
    right: 0,
    left: 0,
    top: 59
  },

  modalFilter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  modalFilterTitle: {
    fontSize: 18,
    color: '#3870e4',
    cursor: 'pointer'
  },

  modalTableWithFilter: {
    marginTop: 63
  },

  // Step Progress
  stepProgress: {
    padding: 15
  },

  stepProgressTypo: {
    color: '#000000',
    fontWeight: 500,
    '& .material-icons': {
      display: 'inline-block',
      width: '40px',
      height: '40px',
      textAlign: 'center',
      lineHeight: '40px',
      borderRadius: '100px',
      marginRight: '10px',
      verticalAlign: 'middle',
      outline: 'none',
      cursor: 'pointer',
      fontSize: 36
    }
  },

  stepProgressTypoSuccess: {
    background: '#069c13',
    color: '#ffffff'
  },

  stepProgressTypoError: {
    background: '#d3322d',
    color: '#ffffff'
  },

  stepProgressTypoWarning: {
    background: '#f79626',
    color: '#ffffff'
  },

  stepProgressTypoNone: {
    background: '#666666',
    color: '#ffffff'
  },

  stepProgressInfo: {
    marginLeft: 25,
    paddingLeft: 44,
    fontSize: 16,
    color: '#666666',
    borderLeft: '2px solid #eeeeee',
    display: 'block',
    height: 70
  },

  stepProgressInfoLast: {
    marginLeft: 25,
    paddingLeft: 44,
    fontSize: 16,
    color: '#666666',
    display: 'block',
    height: 60
  },
  centerForm: {
    maxWidth: 800,
    width: '100%'
  },

  centerText: {
    textAlign: 'center'
  },
  dashBlockCommentsWrapper: {
    maxHeight: '400px',
    overflow: 'auto'
  },

  '@media (min-width: 959.98px) and (max-width: 1450px)': {
    displayBox: {
      minWidth: 'auto'
    }
  },

  // Sidebar Images
  SidebarImgButton: {
    boxSizing: 'border-box',
    border: '3px solid #3870e4',
    overflow: 'hidden',
    width: 36,
    height: 36,
    display: 'block',
    margin: '0 auto 5px',
    borderRadius: '50%',
    backgroundColor: '#3870e4',
    '& img': {
      width: '100%'
    }
  },

  profilePageImage: {
    textAlign: 'center',
    '& img': {
      display: 'block',
      boxSizing: 'border-box',
      width: 160,
      height: 160,
      borderRadius: '50%',
      border: '5px solid #3870e4',
      margin: '0 auto',
      backgroundColor: '#3870e4'
    }
  },

  profilePageImageBtn: {
    background: '#3870e4',
    marginTop: -26,
    color: '#ffffff',
    '&:hover': {
      background: '#1146b1'
    }
  },

  // Media Block
  mediaBlock: {
    width: '100%',
    position: 'relative'
  },
  mediaHeader: {
    position: 'absolute',
    left: 0,
    width: 200
  },
  mediaBody: {
    position: 'absolute',
    left: 200,
    width: 'calc(100% - 200px)'
  },
  '@media (max-width: 1080px)': {
    mediaHeader: {
      position: 'relative',
      width: '100%'
    },
    mediaBody: {
      position: 'relative',
      left: 0,
      width: '100%'
    }
  },

  // Cropper
  Cropper: {
    width: '100%',
    height: 400,
    marginBottom: 100
  },
  '@media (min-width: 959.98px) and (max-width: 1450px)': {
    displayBox: {
      minWidth: 'auto'
    }
  }
};
