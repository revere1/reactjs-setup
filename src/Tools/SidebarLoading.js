import React from 'react';

const dashControler = {
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  boxShadow: '0 0 12px 2px rgba(51, 51, 51, 0.3)'
};

const dashPoints = {
  width: '100%'
};

const dashSidebarMain = {
  padding: 10,
  width: 70,
  background: '#ffffff',
  boxSizing: 'border-box',
  position: 'relative',
  textAlign: 'center',
  boxShadow: '0 0 6px 1px rgba(206, 206, 206, 0.5)'
};

const SidebarButtonsEnd = {
  position: 'absolute',
  bottom: 20,
  left: 0,
  right: 0
};

const dashSidebar = {
  width: 260,
  padding: 10,
  boxSizing: 'border-box'
};

const SidebarLoading = () => (
  <div>
    <div style={dashControler}>
      <div style={dashSidebarMain}>
        <svg style={dashPoints} width="103" height="190" viewBox="0 0 103 398">
          <circle cx="51.5" cy="51.5" r="51.5" fill="#eee" />
          <circle cx="51.5" cy="169.5" r="32.5" fill="#eee" />
          <circle cx="51.5" cy="267.5" r="32.5" fill="#eee" />
          <circle cx="51.5" cy="365.5" r="32.5" fill="#eee" />
        </svg>

        <div style={SidebarButtonsEnd}>
          <svg
            style={dashPoints}
            width="103"
            height="190"
            viewBox="0 0 103 398"
          >
            <circle cx="51.5" cy="365.5" r="32.5" fill="#eee" />
          </svg>
        </div>
      </div>

      <div style={dashSidebar}>
        <svg style={dashPoints} width="452" height="85" viewBox="0 0 452 152">
          <circle fill="#eee" cx="32.5" cy="32.5" r="32.5" />
          <circle fill="#eee" cx="32.5" cy="119.5" r="32.5" />
          <rect
            fill="#eee"
            x="88"
            y="87"
            width="364"
            height="65"
            rx="10"
            ry="10"
          />
          <rect fill="#eee" x="88" width="364" height="65" rx="10" ry="10" />
        </svg>
      </div>
    </div>
  </div>
);

export default SidebarLoading;
