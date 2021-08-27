import React from 'react'
import { NavLink as Lenk } from "react-router-dom"
import { Link } from "react-router-dom"

/////icons from material ui 
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
export const socialIcons = [
  {id:1 , icon: <TwitterIcon/>       ,link:"TwitterIcon.com"},
  {id:2 , icon: <FacebookIcon/>      ,link:"FacebookIcon.com"},
  {id:3 , icon: <LinkedInIcon/>      ,link:"LinkedInIcon.com"},
  {id:4 , icon: <SubscriptionsIcon/> ,link:"SubscriptionsIcon.com"},
  {id:5 , icon: <InstagramIcon/>     ,link:"InstagramIcon.com"},
]

function RightNav() {
       return (
       
        <div className="right-nav-container">
        <div className='d-flex'>
          <div className="social-icons">
            <ul>
            {socialIcons && socialIcons.map((el)=>(
              <li key={el.id}><a href={el.link}> {el.icon} </a> </li>
            ))}
            </ul>         
          </div>
            <div className="right-nav-links">
              <div className="right-nav-links-part">
              <Lenk className="right-nav-main-link" activeClassName='activLink'
                    to="/" >
                    Home
              </Lenk>
           
              </div>
              <div className="right-nav-links-part">
              <Lenk className="right-nav-main-link" activeClassName='activLink'
                    to="/" >
                    About Us
              </Lenk>
              <Link className="right-nav-links-link" to=""> Who Are Us</Link>
               </div>
              <div className="right-nav-links-part">
              <Lenk className="right-nav-main-link" activeClassName='activLink'
                    to="/" >
                    News
              </Lenk>
              <Link className="right-nav-links-link" to="/News"> News</Link>
              <Link className="right-nav-links-link"  to="">  Events</Link>
              </div>
              <div className="right-nav-links-part">
              <Lenk className="right-nav-main-link" activeClassName='activLink'
                    to="/" >
                    Careers
              </Lenk>
              <Link className="right-nav-links-link" to=""> Opportunites</Link>
               </div>
              <Lenk className="right-nav-main-link" activeClassName='activLink'
                to="/CareContactus" >
                Contact Us
              </Lenk>
              <Lenk className="right-nav-main-link" activeClassName='activLink'
                to="/sitemap" >
                Site Map
              </Lenk>
            </div>
        </div>
      
        </div>
  
    )
}

export default RightNav
