import React from 'react';

const withProps = injectedProps => WrappedComponent => {
  const HasProps = props => <WrappedComponent {...injectedProps} {...props} />;
  return HasProps;
};

export default withProps;
export { withProps };
