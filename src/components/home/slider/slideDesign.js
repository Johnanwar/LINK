import React from 'react'
import Button from '@material-ui/core/Button';


function Slide({el}) {
    return (
        <div className="relative">
        <div className="slide-design">
            <img title= {el.text}  src={el.img} />
         
         </div>
         <div className="slider-content">
                <h3>{el.header} </h3>
                <p>{el.text}</p>
                <Button variant="contained" color="secondary">
                    Donate Now
                </Button>
            </div>
        </div>
    )
}

export default Slide 
    