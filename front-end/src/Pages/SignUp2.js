import React from 'react';
import { useState } from 'react';
import axios from "axios";
import BottomNavig from '../component/BottomNavig';
import Header from '../component/Header';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import '../component/SignUp.css';
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function SignUp() {
   
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
     
    return <div className="body">
        <Header />
        <Form className='form'>
            <h3>Sign Up</h3>


            <div className="form-group">

                <input type="text" className="form-control" placeholder="User Name"
                    id="name"
                    value={name}
                    onChange={e => onInputChange(e)}  />
            </div>

            <div className="form-group">

                <input type="email" className="form-control" placeholder="Enter email"
                    id="email"
                    value={email}
                    onChange={e => onInputChange(e)} />
            </div>

            <div className="form-group">

                <input type="password" className="form-control" placeholder="Enter password"
                    id="password"
                    value={password}
                    onChange={e => onInputChange(e)}  />
            </div>

           

           

           

            <div style={{ marginTop: '1rem' }}>
                <p> Save password ?  <Checkbox {...label} /> </p>
                <p className="forgot-password text-right">Already registered ? <a className='a' href="/signin">Sign In</a></p>
            </div>

        </Form>
        <BottomNavig />

    </div>;
}

export default SignUp;
