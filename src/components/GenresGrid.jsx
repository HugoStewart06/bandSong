import React from 'react';
import PropTypes from 'prop-types';

import GridItem from './GridItem';
import './GenresGrid.css';

const GenresGrid = ({ filterGenres }) => {
  return (
    <div className="grid-container">
      {filterGenres.map((genre, i) => {
        return (
          <GridItem key={i} {...genre} />
        );
      })}
    </div>
  );
};

GenresGrid.propTypes = {
  token: PropTypes.string.isRequired,
  filterGenres: PropTypes.string.isRequired
};

export default GenresGrid;
