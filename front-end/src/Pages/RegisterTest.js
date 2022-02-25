import React from 'react';
import '../component/SignUp.css';
import { NavLink } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import BottomNavig from '../component/BottomNavig';
import Header from '../component/Header';
import { Button, TextField, Typography } from '@mui/material';
 
const Signup=()=>{
 
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}
 
    const[errors,setErrors] = useState('');
    const [user, setUser] = useState({
        name: "",
        email: "",
        password:""
      });
      
      const {name, email,password} = user;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
 
   async function  signup()
       {
        let result = await axios.post("http://127.0.0.1:8001/api/register",user);
        setErrors('Registration Successful')
        setUser({name:"",email:"",password:""}) // To Clear all fields
 
        }  
     
    return(
        <div className="body">
             <Header />
            <Form className='form'>
            <h3>Sign Up</h3>

            <div className='form-group'>
                <input label='Name' name="name" value={name} onChange={e => onInputChange(e)} placeholder='Enter Name' type='text' fullWidth required/>
            </div>

             <div className="form-group">
                <input label='Email'  name="email" value={email}  onChange={e => onInputChange(e)} placeholder='Enter Email' type='text' fullWidth required/>
            </div>

            <div className="form-group">
                <input label='Password'  name="password" value={password}  onChange={e => onInputChange(e)} placeholder='Enter password' type='text' fullWidth required/>
            </div>
             

                <Button type='submit' onClick={signup} color='primary' variant="contained" style={btnstyle} fullWidth>Singup</Button>
              
                <Typography>Click Here for
                   <NavLink to="/">
                       <span style={{marginLeft:"4px"}}>Login</span>
                  </NavLink>
                </Typography>

            </Form>
            <BottomNavig />
            </div>
   
    )
}
 
export default Signup