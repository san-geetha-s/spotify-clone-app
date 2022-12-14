import React, {useEffect, useState} from 'react';
import './App.css';
import {getTokenFromUrl} from './Spotify'
import Login from './Login';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player/Player';
import { useDataLayerValue } from './DataLayer';
import { ActionTypes } from '@mui/base';
const spotify=new SpotifyWebApi();
function App() {
  

  const [{user,token},dispatch]=useDataLayerValue();
 useEffect(()=>{

   const hash=getTokenFromUrl()
   window.location.hash=""
    
   const _token=hash.access_token;
   if(_token){
    dispatch({
      type:"SET_TOKEN",
      token:_token
     })


    spotify.setAccessToken(_token)
    spotify.getMe().then(user=>{
      dispatch({
        type:"SET_USER",
        user:user
       })
      
    })
    spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists
      })
     })
     spotify.getPlaylist('3wB7Sf13Ls4d4w8GZrGO8p').then(response =>
      dispatch({
        type:"SET_DISCOVER_WEEKLY",
        discover_weekly:response,
       })
      

     )  }

  
   

 },[])


 

 
  return (
    <div className="App">
      

      {
        token?
       <Player spotify={spotify}></Player>
        : 
        <Login></Login>
      }
      
    </div>
  );
}

export default App;
