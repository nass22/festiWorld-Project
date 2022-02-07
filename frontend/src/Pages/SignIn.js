import BottomNavig from '../component/BottomNavig';
import Header from '../component/Header';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../component/SignIn.css';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



function SignUp() {
  const [username, setUsername] =useState('');
  const [password, setPassword] = useState('');


  return <div className="body">
    <Header />
    <Form className='form'>
      <h3>Sign In</h3>

      <div className="form-group">

        <input value={username} type="text" className="form-control" placeholder="User Name" onChange={ e => setUsername(e.target.value)} />
      </div>

      <div className="form-group">

        <input value={password} type="password" className="form-control" placeholder="Enter password"  onChange={ e => setPassword(e.target.value)}  />
      </div>

      <Button  type="submit" className="btn btn-secondary btn-block">Sign In </Button>

      <div style={{ marginTop: '1rem', display:'inline-block' }}>

        <p> Save password ?  <Checkbox {...label} /> </p>
        <p className="forgot-password text-right">
          Don't have an account yet ? <a className='a' href="/signup">Sign Up</a>
        </p> 

      </div>

    </Form>
    <BottomNavig />

  </div>;
}

export default SignUp;
