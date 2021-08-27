import React from 'react'
import { Container, Grid, List, Typography, ListItemText, Box} from '@material-ui/core';
import { Link } from "react-router-dom"
import {socialIcons} from "../nav/rightNav"
function Footer() {
    const Firstlinks=[
        {id:1 , link:"News"  , text:"News"},
        {id:2 , link:"Events", text:"Events"},
        {id:3 , link:"About" , text:"About"},
        {id:4 , link:"Faqs"  , text:"Faqs"},
    ]
    const secondLinks=[
        {id:1 , link:"PrivcyPolicy" , text:"Privcy Policy"},
        {id:2 , link:"ContactUs"    , text:"Contact Us"},
        {id:3 , link:"Complain"     , text:"Complain"},
     ]
    return (
        <footer>
            <Box className="footer-top" py="2rem">
            <Container>
           <Grid alignItems="baseline"   container spacing={4}> 
             <Grid   item xs={6} sm={3} md={3} lg={2}>
               <List>
                  {Firstlinks.map((link)=>(
                      <ListItemText key={link.id}><Link to={ `/${link.link}`}> {link.text} </Link>  </ListItemText>
                  ))}
               </List>
             </Grid>
             <Grid   item xs={6} sm={3} md={3} lg={2}>
               <List>
                  {secondLinks.map((link)=>(
                      <ListItemText key={link.id}><Link to={ `/${link.link}`}> {link.text} </Link>  </ListItemText>
                  ))}
               </List>
             </Grid>

             <Grid   item xs={10} sm={6} md={6} lg={5}>
                 <form>
                     <label htmlFor="email">Subscribe to Newsletter</label>
                     <Box display="flex" flexWrap="wrap" alignItems="center" my=".5rem">
                         <input type="email" placeholder="Email Address" id="email" name="email" />
                            <button>Subscribe</button>
                     </Box>


                 </form>
             </Grid>

             <Grid   item xs={6} sm={6} md={6} lg={3}>
            
             <div className="footer-social-icons">
             <p>
                 Follow Us On
            </p>
                 <ul>
                        {socialIcons && socialIcons.map((el)=>(
                        <li key={el.id}><a href={el.link}> {el.icon} </a> </li>
                        ))}
                </ul> 
             </div>
             </Grid>
         </Grid>

            </Container>

            </Box>

            <Box className="footer-bottom" py="1rem" display="flex" justifyContent="center">
            <Typography variant="body1">All rights reserved - Link Development Company © 2020</Typography>
            </Box>

        </footer>
    )
}

export default Footer
    