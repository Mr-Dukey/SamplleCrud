import './EditUser.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';


export default function EditUser() {
  
  const {id} = useParams()
  const [Name,setName] = useState("");
  const [Age,setAge] = useState("");
  const [Email,setEmail] = useState("");
  const navi = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:5050/users/'+id)
    .then(items=>{console.log(items.data)
      setName(items.data.name);
      setAge(items.data.age);
      setEmail(items.data.email);
  })
    .catch(err=>console.log(err))
  },[])

  function update(e){
    e.preventDefault();
    axios.put('http://localhost:5050/editusers/'+id,{
      name:Name,age:Age,email:Email
    })
    navi('/views')
  }
  return (
    <div className='userEdit'>
      <div className='userEditForm contsiner-sm'>
        <h2>Edit User</h2>
        <form className='form'>
          <div className='row mt-3 mx-3'>
            <div className='col'>
              <label className='form-label'>Name</label>
              <input className='form-control' value={Name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='Name' required />
            </div>
          </div>
          <div className='row mt-3 mx-3'>
            <div className='col'>
              <label className='form-label'>Age</label>
              <input className='form-control' value={Age} onChange={(e)=>setAge(e.target.value)} type='number' placeholder='Age' required />
            </div>
          </div>
          <div className='row mt-3 mx-3'>
            <div className='col'>
              <label className='form-label'>Email</label>
              <input className='form-control' value={Email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' required />
            </div>
          </div>
        </form>
        <div className='row mt-5  float-end me-3'>
            <div className='col'>
              <a className='btn btn-danger' href='/view'>Cancel</a>
            </div>
            <div className='col'>
              <button className='btn btn-success' onClick={update}>Submit</button>
            </div>
          </div>
      </div>
    </div>
  )
}
