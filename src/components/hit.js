import React from 'react';
import PropTypes from 'prop-types';

const Hit = (props) => {
  const { hit } = props;

  return (
    <React.Fragment>
      <h1>{hit}</h1>
    </React.Fragment>
  );
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired
};

export default Hit;
