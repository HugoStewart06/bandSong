import React from 'react';
import PropTypes from 'prop-types';

import './Tracks.css';

const Tracks = ({ tracks, setSong }) => {
  return (
    <div className ='playlist-item track-container'>
      {tracks.map((track, i) => {
        return (
          <div className='tracks' key={i} onClick={() => setSong(track.track.preview_url)}>
            <p>{track.track.artists[0].name} - {track.track.name}</p>
          </div>
        );
      })}
    </div>
  );
};

Tracks.propTypes = {
  tracks: PropTypes.string.isRequired,
  setSong: PropTypes.string.isRequired
};

export default Tracks;
