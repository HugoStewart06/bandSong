import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Credentials } from './Credentials';
import axios from 'axios';

import GenresGrid from './components/GenresGrid';
import PlaylistGrid from './components/PlaylistGrid';
import Navbar from './components/Navbar';

import './App.css';

const App = () => {
  const spotify = Credentials();
  // HOOKS PLAYLISTGRID
  const [playlists, setPlaylist] = useState([]);
  const [catchid, setCatchid] = useState('');

  // HOOKS GENREGRID
  const [token, setToken] = useState('');
  const [genres, setGenres] = useState([]);
  const [valueInput, setValueInput] = useState('');
  const [filterGenres, setFilteredGenres] = useState(genres);

  // USE EFFECT GENREGRID/ID&SECRET
  useEffect(() => {
    setFilteredGenres(genres.filter(genre => genre.name.toLowerCase().includes(valueInput.toLowerCase())));
  }, [valueInput, genres]);

  useEffect(
    () => {
      axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      }).then((tokenResponse) => {
        setToken(tokenResponse.data.access_token);
      });
    },
    [spotify.ClientId, spotify.ClientSecret]
  );

  // USE EFFECT GENREGRID/TOKEN
  useEffect(() => {
    axios('https://api.spotify.com/v1/browse/categories?limit=50&country=US', {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token }
    }).then((res) => {
      setGenres(res.data.categories.items);
    });
  }, [token]);

  // USE EFFECT PLAYLSIT/ID
  useEffect(
    () => {
      axios(`https://api.spotify.com/v1/browse/categories/${catchid}/playlists?limit=50`, {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + token }
      }).then((res) => {
        setPlaylist(res.data.playlists.items);
      });
    },
    [token, catchid]
  );
  return (
    <div className="container">
     <Navbar setValueInput={setValueInput} />
      <Switch>
        <Route path="/playlist/:id" playlists={playlists}>
          <PlaylistGrid token={token} playlists={playlists} setCatchid={setCatchid} />
        </Route>
        <Route path="/home">
          <GenresGrid filterGenres={filterGenres} />
        </Route>

      </Switch>
    </div>
  );
};

export default App;
