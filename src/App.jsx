import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import axios from 'axios'
import Userlist from './Components/Userlist'

const App = () => {
  const[data,setData]=useState([])

  
    useEffect(()=>{
      axios.get('https://randomuser.me/api/?results=50')
      .then(response=>{
        const userdata=response.data.results
        console.log(userdata)
        setData(userdata)

      })
      .catch(error=>{
        console.log(error)
      })
    },[])
  
  return (
    <div>
      <Header title={"User Data"}/>
      <div>
      {
        data.map((item,index)=>(
          <Userlist key={index}item={item}/>
        ))
      }
      </div>
    </div>
  )
}

export default App
