import React , {useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import {FacebookIcon , EmailIcon , TwitterIcon,  FacebookShareButton , TwitterShareButton , EmailShareButton} from "react-share";
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
function SosialShare() {
    const shareUrl = window.location.href
    const [showIcons , setShowIcons] = useState(false)
     return (
        <IconButton color="secondary" aria-label="Share" >
                <ShareIcon 
                   className={showIcons?(`share-icon transition-share`) :(`share-icon`)}
                    onClick={()=>(setShowIcons(!showIcons))}
                />

                 {showIcons && 
                <div className = "share-icons-container">
                    <FacebookShareButton url={shareUrl}>
                     <FacebookIcon size ={40}borderRadius={5}/>
                    </FacebookShareButton>
                    
                    <TwitterShareButton url={shareUrl}>
                     <TwitterIcon size ={40} />
                    </TwitterShareButton>
                
                    <EmailShareButton  round={true} size ={'50px'}  url={shareUrl}>
                     <EmailIcon size ={40} borderRadius={5}/>
                    </EmailShareButton>
                </div>
            }
       </IconButton>
    )  
}

export default SosialShare
