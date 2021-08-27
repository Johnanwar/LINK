import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,autoplay, Autoplay ,EffectFade} from 'swiper';
 import KeyboardArrowLeftTwoToneIcon from '@material-ui/icons/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@material-ui/icons/KeyboardArrowRightTwoTone';
import Slide from "./slideDesign"
//////////////////images
import img1 from "../../../assets/images/Layer.png";
import img2 from "../../../assets/images/Layer2.png" ;
import img3 from "../../../assets/images/Layer3.png";
 

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y ,Autoplay , EffectFade ]);


function Slider( ) {
    const params = {
        slidesPerView :1,
        
        // spaceBetween: 50,
        // loop :true,    
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false
        // },
        pagination:{
            clickable: true 
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        effect:'fade',
      
     }       
            
   const slides =[
    {id:1 ,  img:img2 , header:"All Foundation " , text:"is focused on inspiring the next generation of  kids Healthcare professionals."},
    {id:2 ,  img:img1 , header:"All Foundation " , text:"is focused on inspiring the next generation of  kids Healthcare professionals."},
    {id:3 ,  img:img3 , header:"All Foundation " , text:"is focused on inspiring the next generation of  kids Healthcare professionals."},
  ]    
  
    return (
        <div className="swiper-slider-container" >
                <Swiper 
                style={{overflow:"visible"}}
              {...params}>
                        
                    {slides ? (
                      slides.map((el)=>(
                        <SwiperSlide  key={el.id}>
                        <Slide
                          el={el}
                        />
                         </SwiperSlide>  
                    ))
                    ) : ("") }
                

                           <div className="swiper-button-prev"> <KeyboardArrowLeftTwoToneIcon/> </div>
                           <div className="swiper-button-next"> <KeyboardArrowRightTwoToneIcon/>  </div>
                          
                </Swiper>
                                     
               
        </div>
    )
}

export default Slider
 