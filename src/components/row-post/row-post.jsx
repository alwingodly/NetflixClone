import React ,{useEffect , useState} from 'react'
import axios from '../../axios.js'
import {img_URL ,API_KEY} from '../../constants/constant.js'
import YouTube from 'react-youtube'
function Rowpost(props) {
  const[movies , setMovies] = useState([])
  const[urlId,setUrlId] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
     setMovies(response.data.results);
    }).catch(err=>{
      alert('network error',err)
    })
  },[props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = ((id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
   console.log(response.data);
   if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
  }
    })
  })
  return (
    <div className='row'>
      <h2 className='head' >{props.title}</h2>
      <div className='posters'>
     {
      movies.map((obj)=>{
       return <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${img_URL+obj.backdrop_path}`}  alt=''/>
      })
     }

      </div>
      
      { urlId && urlId.length!==0 && <YouTube videoId={urlId.key} opts={opts} />
        }
    </div>
  )
}

export default Rowpost
