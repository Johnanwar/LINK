import React from 'react'
import {Typography , Button} from '@material-ui/core'
import { Link } from "react-router-dom"

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
function Notfications() {
    const notficationArr = [
        {id:1 , text:" Slabs are a “love it or hate it” type of thing. They are part "},
        {id:2 , text:" Slabs are a “love it or hate it” type of thing. They are part "},
        {id:3 , text:" Slabs are a “love it or hate it” type of thing. They are part "},
      ]
    return (
        <div className="setting-container notfication-container">
                 <p> Recent Notifications </p>
             {notficationArr&& notficationArr.map((el)=>(
                <div key={el.id} className="notfication-part">
                        <Link className="black" to={`/notfiction/${el.id}`}>  
                            {el.text}
                        </Link>
               </div>
              
            ))}
            <Link className="black view-all-notfications" to="/notfication">  
              <Typography color="secondary"    variant="h6" component="h2" m={2}>
                All Notifications
              </Typography> 
              <ArrowRightAltIcon color="secondary"/>   
              </Link>
          
     
        
        </div>
    )
}

export default Notfications
    