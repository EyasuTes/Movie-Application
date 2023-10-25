import React from 'react'
import { useShoppingCart } from '../context/movieContext'
import Slider from '../components/slider'
export default function MyList() {
  const {list}=useShoppingCart()
  return (
    <div className='text-c3white relative mt-40 z-10 flex flex-wrap gap-12 '>
      
    {list && list.map((li,index)=>(
      <div key={index}>
        <Slider {...li}></Slider>
      </div>
    ))}
  </div>
  )
}
