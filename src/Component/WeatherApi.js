import axios from 'axios'
import React,{useState,useEffect} from 'react'


function WeatherApi() {

    const[post,setPost] = useState({});
    const [post1,setPost1] = useState({})
    const[climate,setClimate] =useState({})
    const[id,setId] = useState("chennai");

    useEffect(()=>
    {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=23cc9753908f660aea8acbf796c64133`)
        .then(response => {
            console.log(response)
            setPost(response.data)
            setPost1(response.data.main)
            setClimate(response.data.weather[0])
        })
        .catch(error => {   
            console.log(error)
        })

    },[id])

    return (
        
        <div className="weatherContainer">
            <h3>Weather API Call</h3>
            <br></br>
                <div className="inputField">
                    <input type="text" value={id} onChange={e=>setId(e.target.value)} placeholder="Enter The Location"/>
                </div>
            <div className="weatherDetails">
            <h1>{post.name}</h1>

            <div className="temp">
            <h2>{Math.round(post1.temp_min -273.15)}<sup>&deg;C</sup></h2><small>Min</small>
            <h2>{Math.round(post1.temp_max -273.15)}<sup>&deg;C</sup></h2><small>Max</small>
            </div>
                  <div>
                    <img src={`http://openweathermap.org/img/wn/${climate.icon}@2x.png`} alt="weatherIcon"/>
                <h4>{climate.main}</h4>
                  </div>
            </div>
            </div>
         
           
    
    )
}

export default WeatherApi
