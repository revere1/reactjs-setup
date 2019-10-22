import React, { Component } from 'react';
import Loadable from 'react-loadable';
/* Material UI Components */
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import { withRouter } from 'react-router-dom';
/* Other Components */
import SidebarLoading from '../../Tools/SidebarLoading';

const Sidebar = Loadable({
  loader: () => import('./Sidebar'),
  loading() {
    return <SidebarLoading />;
  }
});

const Navbar = Loadable({
  loader: () => import('./Navbar'),
  loading: () => null
});

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }

  handleDrawerToggle = () => {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  };

  toggleDrawer = (side, open) => () => this.setState({ [side]: open });

  render() {
    const { mobileOpen } = this.state;
    return (
      <div>
        <Hidden mdUp>
          <SwipeableDrawer
            role="button"
            open={mobileOpen}
            onClose={this.toggleDrawer('mobileOpen', false)}
            onOpen={this.toggleDrawer('mobileOpen', true)}
          >
            <Sidebar clickedLink={this.toggleDrawer('mobileOpen', false)} />
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer variant="permanent" open>
            <Sidebar />
          </Drawer>
        </Hidden>
        <Navbar handleDrawerToggle={this.handleDrawerToggle} />
      </div>
    );
  }
}

export default withRouter(Controls);
