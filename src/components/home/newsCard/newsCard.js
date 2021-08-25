import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
 import Typography from '@material-ui/core/Typography';
 import DateRangeIcon from '@material-ui/icons/DateRange';
import { Link } from "react-router-dom"
///// components
import AddToWishlist from "./AddToWishlist"
import SosialShare from "./SosialShare"

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  media: {
    height: 140,
  },
});
function NewsCard({element}) {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
      <Link to={`/NewsDetails/${element.id}`}>
         <CardActionArea>
             <CardMedia
                className={classes.media}
                image={element.urlToImage}
                title="Contemplative Reptile"
            />
        </CardActionArea>
      </Link>
       
        <CardContent>
               {/* ///////////////// share button */}
        <CardActions className="justify-content-end"  >
            <AddToWishlist element={element}/>
           <SosialShare/>
        </CardActions>
            <Typography gutterBottom variant="h6" component="h2">
                {element.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {element.description} 
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p" className="d-flex align-items-center">
             <DateRangeIcon color="secondary" m={2}/> 
            <span> {element.publishedAt &&  (element.publishedAt).slice(0,10)} </span>
           </Typography>
       </CardContent>
       
        
      </Card>
    )
}

export default NewsCard
