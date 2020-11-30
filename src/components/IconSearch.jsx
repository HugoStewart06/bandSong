import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons/lib';

import './IconSearch.css';

const IconSearch = ({ setValueInput }) => {
  const [on, setOn] = useState(false);

  return (
    <IconContext.Provider value={{ size: '50', color: 'white', oppacity: '0.8', padding: '50' }}>
      <div className="search-container">
        {on && <input onChange={(e) => setValueInput(e.target.value)} type="text" placeholder="search..." className="search-txt" />}
        <button onClick={() => setOn(!on)} className="search-btn"/>
      </div>
    </IconContext.Provider>
  );
};

IconSearch.propTypes = {
  setValueInput: PropTypes.string.isRequired
};

export default IconSearch;
