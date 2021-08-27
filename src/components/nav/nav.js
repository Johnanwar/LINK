import React, {useState } from "react"
import { Link } from "react-router-dom"
import { Menu ,AppBar, Toolbar, Box ,Paper} from '@material-ui/core'
//////////////////////////images from assets folder
import logo from "../../assets/images/logo.png"
import profilePic from "../../assets/images/profile.png"
import menu from "../../assets/images/Menu.svg"

//////////////////////////icons from materialui
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ClearIcon from '@material-ui/icons/Clear';
///////////////////////// components
import Setting from "./setting"
import Notfications from "./notfications"
import RightNav from "./rightNav"


export default  function Nav() {
 const [showSerash , setShowSearch]=useState(false)
 const [showSetting , setShowSetting]=useState(false)
 const [showNotfication , setShowNotfication ]=useState(false)
 const [showRighNav , setShowRighNav]=useState(false)
    return (
      <nav className="nav-container">
          
      <Paper elevation={0} square>

      <AppBar className="container" position="fixed">
        <Toolbar class="nav-container d-flex justify-content-between align-items-center">
        <Box display="flex" alignItems="center">
        {showRighNav? (
          <ClearIcon onClick={()=>setShowRighNav(!showRighNav)} style={{cursor:"pointer"}}/>
          ) : (
          <img onClick={()=>setShowRighNav(!showRighNav)} src={menu}/>
          )}
          {showRighNav && <RightNav/> }
          <Link to= "/"> <img className="logo-img" alt="logo"  src={logo}/></Link>
        </Box>
        
          <div className = "d-flex align-items-center justify-content-around nav_header_links">
          {/* /////////////////////// search component */}
           {showSerash? (
           <div className="Search-containe-main"> 
              <div className="Search-container"> 
              <input placeholder="Searsh" type="search"/>   
                <a  onClick={()=>setShowSearch(!showSerash)} className=" Search-icon"> <SearchIcon/></a>
              </div>
          </div>
          ) :(      
            <a onClick={()=>setShowSearch(!showSerash)} className="Icon Search-icon"> <SearchIcon/> <span> Search </span> </a>
          )}
          {/* /////////////////////// seaNotification component */}
          <div className = "relative">
           <a onClick={()=>setShowNotfication(!showNotfication)} className={ showNotfication ?(`Setting-icon `) :(`Setting-icon setting-hover`)}> <NotificationsNoneIcon/> <span> Notfication </span></a>
           {showNotfication && <Notfications/> }
           
          </div>
          {/* /////////////////////// User componSettingent */}
          <div className ='d-flex align-items-center profile-nav-container'>
            <img className="profile_img" src={profilePic} alt="User Name" />
            <Link to= "/"> User Name </Link>
           </div>
          {/* /////////////////////// seaNotification componSettingent */}
          <div className = "relative">
          <a onClick={()=>setShowSetting(!showSetting)} className={ showSetting ?(`Setting-icon `) :(`Setting-icon setting-hover`)}> <SettingsOutlinedIcon/>  <span> Setting </span> </a>
          { 
            showSetting &&   <Setting/>
          }
       
          </div>
         </div>


        

        
        
     



 
        </Toolbar>
      </AppBar>
    </Paper>      


      </nav>      
        
    )
}