import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const appRoot = document.getElementById('root');

class BreadnoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    appRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    appRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

BreadnoteContainer.propTypes = {
  children: PropTypes.shape.isRequired
};

export default BreadnoteContainer;
