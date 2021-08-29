import React from 'react'
import {Typography , Button} from '@material-ui/core'
import { Link } from "react-router-dom"

import DoneIcon from '@material-ui/icons/Done';
function Setting() {
    return (
        <div className="setting-container">
            <div className="setting-part">
                <p> Language </p>
                <ul className = "list-unstyled">
                    <li className = "d-flex justify-content-between">
                        English
                        <DoneIcon color="secondary"/>
                    </li>
                    <li className = "d-flex justify-conyent-between">
                        اللغه العربيه
                    </li>
                </ul>
            </div>
            <div className="setting-part">
                <p> Font Size </p>
                <ul className = "list-unstyled d-flex align-items-center">
                    <li>
                    <a className="black">
                      <Typography     variant="h3" component="h2" m={2}>
                        A
                     </Typography>
                    </a>
                    </li>
                    <li>
                    <a className="black">
                      <Typography color="secondary"   variant="h4" component="h2" m={2}>
                        A
                     </Typography>
                    </a>
                    </li>
                    <li>
                     <a className="black">
                      <Typography    variant="h5" component="h2" m={2}>
                        A
                     </Typography>
                    </a>
                    </li>
                    
                </ul>
            </div>
           
            <div className="setting-part">
            <ul>
              <li>
                <Link   to="/account"><p> Account </p> </Link>
             </li>
             <li>
              <Button>Log Out</Button>
             </li>
             
                    
          </ul>
          </div>
        
        </div>
    )
}

export default Setting
    