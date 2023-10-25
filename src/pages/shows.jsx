import React from 'react'
import { useShoppingCart } from '../context/movieContext'
import NormalDisplay from '../components/normalDisplay'
import Slider from '../components/slider'

export default function Shows() {
  const {showslide}= useShoppingCart()
  const shows =showslide()
  console.log(shows)
  return (
    <div className='text-c3white relative mt-40 z-10 flex flex-wrap gap-12 justify-center'>
      
      {shows && shows.map((show,index)=>(
        <div key={index}>
          <Slider {...show}></Slider>
        </div>
      ))}
    </div>
  )
}
