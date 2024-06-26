// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/layout/mainContent.scss';

const MainContent = ({ children }) => {
  return <div className='mainContent'>{children}</div>;
};

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;

