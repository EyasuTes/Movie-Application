import React,{createContext, useContext, useEffect, useState} from "react";


const ShoppingCartContext =createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({ children }) {
    console.log()
    const api_Key=import.meta.env.VITE_API_KEY
    const [homeTopTrending, sethomeTopTrending]=useState([])
    const [trendingNow, setTrendingNow]=useState()
    const [shows,setShows]=useState()
    const [movies, setMovies]=useState()
    const [recent, setRecent]=useState()
    const [list, setList]=useState([])
    const [searched, setSearched]=useState('')
    const [details, setDetails]=useState()
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${api_Key}`)
            .then(res=>res.json())
            .then(data=>{
                
                sethomeTopTrending(data.results[0])
                setTrendingNow(data.results)
            })
    },[])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${api_Key}`)
            .then(res=>res.json())
            .then(data=>{
                
                setShows(data.results)
                
            })
    },[])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${api_Key}`)
            .then(res=>res.json())
            .then(data=>{
                
                setMovies(data.results)
                
                
            })
    },[])
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${api_Key}`)
            .then(res=>res.json())
            .then(data=>{
                
                setRecent(data.results)
                
                
            })
    },[])
   
    function addSearched(value){
        const sele =value.replace(/ /g, '%20')
        fetch(`https://api.themoviedb.org/3/search/multi?query=${sele}&include_adult=false&language=en-US&page=1&api_key=${api_Key}`)
            .then(res=>res.json())
            .then(data=>{
                
                setSearched(data.results)
                
                
            })
    }
    
    function mylist(id, name, overview, img) {
        setList((prevList) => {
          const check = prevList.filter((list) => list.id === id);
          if (check.length === 0) {
            return [...prevList, { id: id, original_title: name, overview: overview, poster_path: img }];
          }
          return prevList; 
        });
      }
    function removeFromList(id){
        setList((prevList)=>{
            const li = prevList.filter((list)=>list.id!==id)
            return li
        })
    }
      function detail(id, original_title, overview, poster_path ){
        setDetails({id:id, original_title:original_title, overview:overview, poster_path:poster_path })
      }
      
   
    function trendingFilms(){
        
        return trendingNow;
    }
    function showslide(){
        
        return shows
    }

    return (
        <ShoppingCartContext.Provider value={{removeFromList, detail, details, searched, addSearched, homeTopTrending, trendingFilms, showslide, movies, recent, mylist, list }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

