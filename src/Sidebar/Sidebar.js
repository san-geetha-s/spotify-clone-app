import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOption'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';
export default function Sidebar() {
  const[{playlists}, dispatch]=useDataLayerValue()
  return (
    <div className='sidebar'>
      <img className='sidebar_logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''></img>

      <SidebarOption Icon={HomeIcon} title='Home'/>
      <SidebarOption  Icon={SearchIcon} title='Search'/>
      <SidebarOption  Icon={LibraryMusicIcon} title='Your Library'/>
      <br/>
      <strong className='sidebarOption_title'>PLAYLISTS</strong>
      <hr></hr>
      {playlists?.items?.map((playlist,index)=>{
        <SidebarOption title={playlist.name} key={index}/>
})}
     
    </div>

  )
}
