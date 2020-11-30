import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import Tracks from './Tracks';

import './PlaylistGrid.css';

const PlaylistGrid = ({ token, setCatchid, playlists }) => {
  const { id } = useParams();
  setCatchid(id);
  const [tracks, setTracks] = useState([]);
  const [song, setSong] = useState('');
  const [displayTracks, setDisplayTracks] = useState(false);

  const handleClik = (id) => {
    setDisplayTracks(true);
    axios(`https://api.spotify.com/v1/playlists/${id}/tracks?limit=50`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then((res) => {
      setTracks(res.data.items);
    });
  };
  return (
    <div>
      <h4 className='category-title'>{id.replace(/[&]/g, 'n').replace(/[/-_]/g, ' ')}</h4>
      <div className='playlist-container'>
        <div className='scrollx-section'>
          { playlists.map((playlist) => {
            return (
              <div className='playlist-item' key={playlist.id} onClick={() => handleClik(playlist.id)} >
              <img src={(playlist.images[0].url)} alt="picture"/>
              </div>
            );
          })}
        </div>
      </div>
      {displayTracks &&
      <div className='trackAndPlayer-container'>
        <h2 className='track-title'>Tracks</h2>
        <audio controls autoPlay={false} name="media" src={song} type="audio/mpeg" className='player' />
      </div>}
      {displayTracks &&
        <Tracks tracks={tracks} setSong={setSong}/>}
    </div>
  );
};

PlaylistGrid.propTypes = {
  setCatchid: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  playlists: PropTypes.string.isRequired
};

export default PlaylistGrid;
