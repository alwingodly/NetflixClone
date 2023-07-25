import React from 'react'
import { useEffect } from 'react'
import {API_KEY ,img_URL} from '../../constants/constant.js'
import axios from '../../axios.js'
import { useState } from 'react'
function Banner() {
  const[movie, setMovie]=useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const results = response.data.results;
      const randomIndex = Math.floor(Math.random() * results.length);
      setMovie(results[randomIndex]);
    });
  }, []);


  return (

    <div style={{backgroundImage:`url(${movie ?img_URL+movie.backdrop_path : ''})`}} className='banner'>
      <div className='content'>
         <h1 className='title'>{movie ? movie.title: ''}</h1>
         <div className='banner-buttons'>
<button className='button'>Play</button>
<button className='button'>my list</button>
         </div>
         <h1 className='desc'>{movie ? movie.overview: ''} </h1>
      </div>
      <div className='fade'>

      </div>
    </div>
  )
}

export default Banner
