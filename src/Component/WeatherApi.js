import axios from 'axios'
import React,{useState,useEffect} from 'react'

function WeatherApi() {

    const[post,setPost] = useState({});
    const[id,setId] = useState();

    useEffect(()=>
    {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error => {   
            console.log(error)
        })
    },[id])

    return (
        
        <div className="api-container">
            <h1>Dummy API Call</h1>
            <br/>
            <input type="text" placeholder="Enter Any Number" value={id} onChange={e=>setId(e.target.value)}/>
           <div className="api-c">
               {
                 id ?  <h2>{post.title}</h2> : <h2>Dummy Text Will Appear Here</h2>
               }
              
           </div>
        </div>
    )
}

export default WeatherApi
