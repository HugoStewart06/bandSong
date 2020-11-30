import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './GridItem.css';

const GridItem = ({ ...genre }) => {
  const [isShown, setIsShown] = useState(false);

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/playlist/${id}`);
  };

  return (
    <div
      className='grid-item'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => handleClick(genre.id)}>
      <img src={(genre.icons[0].url)} alt="picture" className={isShown && 'hoveredImage'} />
      {isShown && <p className='hoveredItem'>{genre.name.replace(/[&]/g, 'n').replace(/[/-]/g, ' ')}</p>}
      <h4 className='showOnMobile'>{genre.id}</h4>
    </div>
  );
};

GridItem.propTypes = {
  filterGenres: PropTypes.string.isRequired
};

export default GridItem;
