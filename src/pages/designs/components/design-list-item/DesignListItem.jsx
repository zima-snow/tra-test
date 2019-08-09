import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  _id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  assemblyStatus: PropTypes.string.isRequired,
  reviewStatus: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
};

const DesignListItem = ({ _id, img, age, assemblyStatus, reviewStatus, title, updated }) => {
  return <div>{title}</div>;
};

DesignListItem.propTypes = propTypes;

export default DesignListItem;
