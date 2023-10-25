import React from 'react'
import { useShoppingCart } from '../context/movieContext'
import Slider from '../components/slider';
import {  useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';
export default function Search() {
    const navigate = useNavigate()
    const {searched}=useShoppingCart();
    const handleNavigate = (path) => {
        navigate(path);
      };
  return (
    <div>
         <div className='text-c3white absolute     top-28 z-50 font-bold hover:bg-c2gray rounded-sm ml-4' onClick={()=>{handleNavigate('/')}}><ArrowLeft size={24} /></div>
        <div style={{ overflowX: 'scroll' }} className='flex   overflow-x-auto mt-36 gap-2 '>
           {searched && searched.map((search,index)=>(
            <div key={index}>
                
                <Slider {...search}></Slider>
            </div>
        ))} 
        </div>
        
    </div>
  )
}
