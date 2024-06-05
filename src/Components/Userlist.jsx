import React from 'react'
import './userlist.css'
const Userlist = ({item}) => {
  return (
    <div>
      <div className="container " >
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <div className="card-title d-flex align-items-center justify-content-center">
                            <h1 className='text-center mx-auto'>User:{item.login.username}</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="partleft col">
                        <div className="card-subtitle">
                            <h3> {item.name.title} {item.name.first} {item.name.last} </h3>
                            <p>Email:{item.email}</p>
                        </div>
                        <div className="card-text">
                            <p>Age:{item.dob.age}</p>
                            <p>Nationality: {item.country}</p>
                            <p>Phone No: {item.phone} </p>
                        </div>
                    </div>
                    <div className="partright col mx-auto">
                       <img src= {item.picture.medium} alt="user image" />
                        <p>Address:</p>
                        <p>{item.location.street.number}{item.location.street.name}</p>
                        <p>{item.location.state}, {item.location.country}</p>
             
                    </div>
            
        </div>
        </div>
      </div>
   </div>
   </div>
  )
}

export default Userlist
