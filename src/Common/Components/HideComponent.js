import PropTypes from 'prop-types';

const HideComponent = ({ hide = true, children }) => {
  if (hide) return null;
  return children;
};

HideComponent.propTypes = {
  hide: PropTypes.bool.isRequired
};
export default HideComponent;
