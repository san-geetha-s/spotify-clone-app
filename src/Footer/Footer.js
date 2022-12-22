import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';
function Footer() {
  return (
    <div className='footer'>
      <div className="footer_left">
        <img className='footer_albumLogo' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuksbUFUuopzB_iF-z-lQCNVVz7rN9Ie8mvNF0bqN-9g-6Vic_" alt="" />
      <div className="footer_songInfo">
        <h4>yeah</h4>
        <p>Sid Sriram</p>
      </div>
 
      </div>
      <div className="footer_center">
    <ShuffleIcon className='footer_green'/>
    <SkipPreviousIcon className='footer_icon'/>
    <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
    <SkipNextIcon className='footer_icon'/>
    <RepeatIcon className='footer_green'/>
 
</div>
<div className="footer_right">
<Grid container spacing={2}>
  <Grid item>
    <PlaylistPlayIcon/>
  </Grid>
  <Grid item>
    <VolumeDownIcon/>
  </Grid>
  <Grid item xs>
    <Slider/>
    
  </Grid>
</Grid>
</div>

    </div>
  )
}

export default Footer
