const zendesk = UserStore => {
  window.zESettings = {
    webWidget: {
      zIndex: 1299,
      offset: { horizontal: '65px', vertical: '15px' },
      color: {
        theme: '#3870e4',
        launcher: '#3870e4',
        launcherText: '#f5f5f5',
        button: '#1146b1',
        resultLists: '#1d3d7c',
        header: '#3870e4',
        articleLinks: '#f1740d'
      }
    }
  };
  const userDetails = UserStore.getUserDetails();
  if (userDetails) {
    window.zE('webWidget', 'prefill', {
      name: {
        value: `${userDetails.firstName} ${userDetails.lastName}`,
        readOnly: (userDetails.firstName && true) || false // optional
      },
      email: {
        value: userDetails.emailId,
        readOnly: (userDetails.emailId && true) || false // optional
      }
    });
  }
};

export default zendesk;
