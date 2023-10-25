import React from 'react';
import { useShoppingCart } from '../context/movieContext';
import {  useNavigate } from 'react-router-dom';

const MyListDisplay = ({ id, original_title, overview, poster_path }) => {
  const { mylist , list, detail,removeFromList } = useShoppingCart();
  const navigate=useNavigate()
  
  function checkList(){
    const check = list.filter(li=>li.id===id)
    if(check.length===0){
      return false
    }else{
      return true
    }
  }
 

  return (
   
      <div
        
        className=" flex w-52 transition-all duration-500 ease-in-out hover:scale-95 relative"
      >
        <div className="flex h-84 overflow-y-auto overflow-y-hidden opacity-0  flex-col bg-black bg-opacity-40 opacity-100 p-1">
          <div className="z-50 font-bold text-xl h-16 overflow-y-auto">{original_title}</div>
          <div className="mt-3 overflow-y-auto h-44 ">{overview}</div>
          
              <div className='flex gap-2 items-center justify-center mt-2'>
                <button onClick={()=>{

                  detail(id, original_title,overview,poster_path)
                  navigate('/details')
                  }} className='bg-c1red w-24 rounded-sm font-bold'>Details</button>
                <button onClick={()=>{removeFromList(id)}} className="text-white font-bold bg-c2gray w-24 rounded-sm">Remove</button>
              </div>
            
            
            
            
          
          
        </div>
        
      </div>
    
  );
};

export default MyListDisplay;
