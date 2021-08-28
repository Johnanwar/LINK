import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, Typography,CardActionArea, CardContent ,CardMedia , } from "@material-ui/core";
 import DateRangeIcon from '@material-ui/icons/DateRange';
import { Link } from "react-router-dom"
///// components
import AddToWishlist from "./AddToWishlist"
import SosialShare from "./SosialShare"

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    boxShadow:"0 3px 6px #eee",
  },
  media: {
    height: '220px',
  },
  Card_Content:{
    padding:"0 14px",
    "& a":{
      color:'#000',
    "& h2":{
      height:"112px",
      textOverflow:"ellipsis",
      overflow:"hidden",
      fontSize: '16px',
     },
    },
    "& p":{
      height: '99px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      marginBottom:' 10px',
    },
    "& .news_Category":{
      color:"#000",
      backgroundColor:"#e3e3e3",
      width:"max-content",
      padding:"4px",
      borderRadius:"5px",
      margin:"10px 0"
    }
  }

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
       
        <CardContent className={classes.Card_Content}>
        <Box alignContent="flex-end"  display="flex" className="justify-content-end" pb={0}  pt=".5rem">
            <AddToWishlist element={element}/>
           <SosialShare/>
        </Box>
        <Link to={`/NewsDetails/${element.id}`}>
              <Typography  gutterBottom variant="h6" component="h2">
                  {element.title}
              </Typography>
        </Link>
        <Typography className="news_Category"  variant="body2" color="textSecondary" component="h6">
            {element.cat}
        </Typography>
        <Typography  variant="body2" color="textSecondary" component="p">
          {element.description} 
         </Typography>

        <Typography variant="body2" color="textSecondary" component="h6" gutterBottom className="d-flex align-items-center">
            <DateRangeIcon color="secondary"/> 
             <Box  ml="1rem"> {element.publishedAt &&  (element.publishedAt).slice(0,10)} </Box>
        </Typography>
       </CardContent>
       
        
      </Card>
    )
}

export default NewsCard
