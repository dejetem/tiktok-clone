import React,{useEffect, useState} from "react";
import './App.css';
import Video from "./Video";
import axios from './axios.js'

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    async function fetchPosts () {
      const response = await axios.get('/v2/posts')
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, [])
  return (
    <div className="app">
       <div className="app_videos">
          {videos.map(({url,_id,channel,desc,messages,song,likes,shares}) => (
            <Video 
              key={_id}
              url ={url}
              channel={channel}
              desc={desc}
              song={song}
              likes={likes}
              shares={shares} 
              messages={messages}/>
          ))}
       </div>
    </div>
  );
}

export default App;
