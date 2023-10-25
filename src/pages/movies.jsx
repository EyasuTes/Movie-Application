import React from 'react'
import { useShoppingCart } from '../context/movieContext'
import NormalDisplay from '../components/normalDisplay'
import Slider from '../components/slider'

export default function Movies() {
  const {movies}= useShoppingCart()
 
 
  return (
    <div className='text-c3white relative mt-40 z-10 flex flex-wrap gap-12 justify-center'>
      
      {movies && movies.map((movie,index)=>(
        <div key={index}>
          <Slider {...movie}></Slider>
        </div>
      ))}
    </div>
  )
}
