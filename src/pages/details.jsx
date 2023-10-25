import React from 'react'
import NormalDisplay from '../components/normalDisplay'
import { useShoppingCart } from '../context/movieContext'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'
export default function Details() {
    const navigate =useNavigate()
    const {details}=useShoppingCart()
  return (
    <div>
        
        <div className='text-c3white absolute z-50 font-bold hover:bg-c2gray rounded-sm ml-4' onClick={()=>navigate('/')}><ArrowLeft size={24} /></div>
        {details &&
        <NormalDisplay id={details.id} original_title={details.original_title} overview={details.overview} poster_path={details.poster_path} />
        }
      
    </div>
  )
}
