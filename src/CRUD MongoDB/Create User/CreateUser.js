import React,{Component} from 'react'
import './CreateUser.css'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {

  const navi = useNavigate();

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [img,setimg] = useState("")

  // function uploadpic(image){
  //     setimg({...img,name:image.originalname,path:image.path})
  // }
  function Reg(e) {
    e.preventDefault();
    axios.post('http://localhost:5050/createusers', {
      name: Name, age: Age, email: Email,fileName:img,path:img
    })
      .catch(err => console.log(err))
    setName(" ");
    setAge(" ");
    setEmail(" ");
    setimg(" ")
    navi('/Views')
  }

  return (
    
    <div className='userAdd'>
      <div className='userAddForm container-md'>
        <h2>Add User</h2>
        <form className='form'>
          <div className='row mt-3 mx-3'>
            <div className='col'>
              <label className='form-label'>Name</label>
              <input className='form-control' accept='.jpeg' type='text' placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} required />
            </div>
          </div>
          <div className='row mt-3 mx-3'>
            <div className='col'>
              <label className='form-label'>Age</label>
              <input className='form-control' type='number' placeholder='Age' value={Age} onChange={(e) => setAge(e.target.value)} required />
            </div>
          </div>
          <div className='row mt-3 mx-3'>
            <div className='col'>
              <label className='form-label'>Email</label>
              <input className='form-control' type='email' placeholder='Email' value={Email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          {/* <div className='row my-4 mx-3'>
            <div className='col'>
              <label className='form-label'>Password</label>
              <input className='form-control' type='text' placeholder='Email' value={Email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div> */}
          <div className='row my-4 mx-3'>
            <div className='col'>
              <label className='form-label'>Iamge</label>
              <input className='form-control' type='file' onChange={(e) => 
              setimg(e.target.files)
              } required />
            </div>
          </div>
          <div className='row mt-4  float-end me-3'>
            <div className='col'>
              <a className='btn btn-danger' href='/CRUDRead'>Cancel</a>
            </div>
            <div className='col'>
              <button className='btn btn-success' onClick={Reg} href='/view'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
