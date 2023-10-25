import React from 'react'
import { useShoppingCart } from '../context/movieContext'

import Slider from '../components/slider'

export default function RecentlyAdded() {
  const {recent}= useShoppingCart()
 
 
  return (
    <div className='text-c3white relative mt-40 z-10 flex flex-wrap gap-12 justify-center'>
      
      {recent && recent.map((rece,index)=>(
        <div key={index}>
          <Slider {...rece}></Slider>
        </div>
      ))}
    </div>
  )
}
