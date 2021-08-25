import React, {useState } from "react"
import { Link } from "react-router-dom"
import { Menu ,AppBar, Toolbar, Button, Typography, makeStyles ,Paper} from '@material-ui/core'
import '../../styles/nav.css';
//////////////////////////images from assets folder
import logo from "../../assets/images/logo.png"
import profilePic from "../../assets/images/profile.png"
//////////////////////////icons from materialui
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
const useStyles = makeStyles((theme) => ({
root: {
  flexGrow: 1,
  display:"flex",

  marginBottom:"85px",
  "& .navLinks":{
    display:"flex",
    width:"40%",
    "& a":{
      color:'#fff',
      padding: '25px',
    }
  }
},
 
 

}));

export default  function Nav() {
 
 

   const classes = useStyles();
 


    return (
      <>

      <Paper elevation={0} square className={classes.root}>

      <AppBar className="container" style={{zIndex:"9"}} position="fixed">
        <Toolbar class="nav-container d-flex justify-content-between align-items-center">
          <img alt="logo"  src={logo}/>
          <div className = "d-flex align-items-center justify-content-around nav_header_links">
           <div className="Search-container"> 
           <input placeholder="Searsh" type="search"/>   
            <a className="Icon Search-icon"> <SearchIcon/> <span> Search </span> </a>
          </div>
           <a className="Icon notfication-icon"> <NotificationsNoneIcon/> <span> Notfication </span></a>
           <div className ='d-flex align-items-center'>
            <img className="profile_img" src={profilePic} alt="User Name" />
            <Link to= "/"> User Name </Link>
           </div>
           <a className="Icon Setting-icon"> <SettingsOutlinedIcon/>  <span> Setting </span> </a>
 
         </div>


        

        
        
     



 
        </Toolbar>
      </AppBar>
    </Paper>      


      </>      
        
    )
}