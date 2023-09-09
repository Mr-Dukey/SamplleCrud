import React, { useEffect, useState } from 'react'
import './ViewUser.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function ViewUser() {

  const navi = useNavigate()
  const [views,setViews] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5050/users')
    .then(items=>setViews(items.data))
    .catch(err=>console.log(err))
  },[])

  function handleDel(id){
    axios.delete('http://localhost:5050/delusers/'+id)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    navi('/Views')
  }
  return (
    <div className='ViewUser'>
      <div className='Views container'>
        <a className='btn btn-success ms-3 p-2' href='create'>Add User +</a>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>Email</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              views.map((user)=>{
                return(
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className='btn btn-danger me-3' onClick={(e)=>handleDel(user._id)}>Delete</button>
                        <Link to={`/edit/${user._id}`} className='btn btn-primary'>Update</Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
