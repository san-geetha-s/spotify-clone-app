import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import Header from '../Header/Header'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import spotify from '../Player/Player'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Body.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Body({spotify}) {
  const [{discover_weekly},dispatch]=useDataLayerValue();
  return (
    <div className='body'>
    <Header spotify={spotify}/>
   <div className="body_info">
    <img src={discover_weekly?.images[0].url} alt="" />
    <div className="body_infoText">
      <strong>PLAYLIST</strong>
      <h2>Discover Weekly</h2>
      <p>{discover_weekly?.description}</p>
    </div>
   </div>
   <div className="body_songs">
    <div className="body_icons">
      <PlayCircleFilledWhiteIcon className='body_shuffle'/>
      <FavoriteIcon fontSize='large'/>
      <MoreHorizIcon/>
    </div>
    {/*list of songs*/}
   </div>

    </div>
  )
}

export default Body

