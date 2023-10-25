import React from 'react'
import { Plus } from 'phosphor-react';
import { useShoppingCart } from '../context/movieContext';


export default function NormalDisplay( {id, original_title, overview, poster_path}) {
    
    const { mylist, list,removeFromList}=useShoppingCart()
    function checkList(){
        console.log(list)
        if(list){
            const check = list.filter(li=>li.id===id)
            if(check.length===0){
                return false
            }else{
                return true
            }  
        }
        else{
            return false
        }
        
      }
      const avaliable = checkList()
  return (
    <div>
        
      <div className='flex  justify-center lg:mx-64 md:mx-32 sm:mx-24 mx-6 mt-32'>
                <div style={{boxShadow: '0 0px 20px 40px  rgba(0,0,0,0.2)'}}  className=' pl-4 rounded-md relative z-10 flex flex-col gap-4 pt-12 bg-c4black bg-opacity-20 '>
                    <h1 style={{clipPath:'polygon(0 0, 90% 50%, 90% 50%, 0 100% )'}} className='font-bold text-3xl text-c3white p-4 bg-c1red z-10 relative'>{original_title}</h1>
                    <div className='text-c3white'>{overview}</div>
                    <div className='flex gap-4 items-center'>
                        {!avaliable?
                        <div className='text-c3white bg-c1red p-2 rounded-sm flex items-center' onClick={() => mylist(id, original_title, overview, poster_path)}><Plus size={16} />  My List</div>
                        :
                        <button onClick={()=>{removeFromList(id)}} className="text-white bg-c2gray w-24 rounded-sm py-2 cursor-pointer">Remove</button>
                        }
                         
                    </div>
                    
                </div>
                <img style={{ height:'70vh', width:'40vw' }} className='z-0' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />

            </div>
    </div>
  )
}
