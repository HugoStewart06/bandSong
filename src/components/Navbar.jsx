import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import IconSearch from './IconSearch';

import './Navbar.css';

const Navbar = ({ setValueInput }) => {
  return (
      <div>
        <nav className="header" id="section-home">
          <Link to='/home' className='link-title'>
            <div title='title-container'>
              <h1 className='title title-homepage'>BANDGANGS</h1>
            </div>
          </Link>
          <IconSearch setValueInput={setValueInput} />
        </nav>
      </div>
  );
};

Navbar.propTypes = {
  setValueInput: PropTypes.string.isRequired
};

export default Navbar;
