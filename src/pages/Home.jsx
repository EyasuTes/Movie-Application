import { useEffect } from 'react'
import React  from 'react'
import { useShoppingCart } from '../context/movieContext'

import NormalDisplay from '../components/normalDisplay';
import Slider from '../components/slider';



export default function Home() {
    
  
    const {homeTopTrending, trendingFilms,showslide} =useShoppingCart();
    
    const trendings=trendingFilms()
    const shows = showslide()
    console.log(trendings)
    return (
        <div className='flex flex-col gap-8'>

            
            <NormalDisplay {...homeTopTrending}></NormalDisplay>
             
            <div  className='relative h-84 flex flex-col justify-center mx-2'>
                <div className='text-c3white z-10 relative '>Trending Now</div>    
                <div style={{ overflowX: 'scroll' }} className='flex   overflow-x-auto  gap-2 '>
                    {trendings && trendings.map((trending, index)=>(
                        <div  key={index}>
                            <Slider {...trending }></Slider>  
                        </div>
                        
                    ))}                
                </div>
            </div>
            <div  className='relative h-84 flex flex-col justify-center mx-2 mb-12'>
                <div className='text-c3white z-50 relative'>TV Shows</div>
                <div style={{ overflowX: 'scroll' }} className='flex   overflow-x-auto  gap-2 '>
                    {
                    shows && shows.map((show,index)=>(
                        <div key={index}>
                          <Slider {...show}></Slider>  
                        </div>
                        
                    ))
                    }
                </div>
                
                
            </div>
            
           
            
        </div>

    );
}
