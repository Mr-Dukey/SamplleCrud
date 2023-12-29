import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Login() {
    const [views, setViews] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navi = useNavigate();

    // console.log((views.name));

    async function  login() {
        await axios.post('http://localhost:5050/login', {
            name: username, age: password
        },[])
        .then(res=>setViews(res.data))
        .catch((err)=>console.log(err))
       
        
            // console.log(views.name);
            // console.log(views.age);
            // console.log(username);
            // console.log(password);
        if(username !== views.name && password !== views.age){
            alert
            ("not correct");
        }
        else{
            navi('/view')
            alert("correct");
        }
        // console.log("clicked");
    }

    return (
        <div className="login">
            <div className="login-box bg-light container-sm">
                <div className="logbox-head">
                    <h4>Login</h4>
                </div>
                <div className="loginp">
                    <div className="row">
                        <div className="col">
                            <label for="" className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="" className="form-label">Password</label>
                            <input type="number" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <button className="btn btn-danger" onClick={login}>Login</button>
                </div>
                <div className="alacc">
                    <p>Have Account <a href="/create">SignUP</a> </p>
                </div>
            </div>
            <div className="comp">
                login from computer
            </div>
        </div>
    )
}
