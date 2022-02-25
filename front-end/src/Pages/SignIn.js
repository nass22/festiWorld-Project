import React from 'react';
import { useState } from 'react';
import axios from "axios";
import Header from '../component/Header';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import '../component/SignUp.css';
import Checkbox from '@mui/material/Checkbox';
import Swal from 'sweetalert'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function SignIn() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);


  //form submission
  const handleClick = (event) => {
    navigate('/', { replace: true });
    setLoading(true);
    setIsError(false);
    const data = {
      email: email,
      password: password,
    }

    //call api
    axios.post('http://127.0.0.1:8001/api/login', data).then(res => {
      setData(res.data);
      setEmail('');
      setPassword('');
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }


  






  return <div className="body">
    <Header />
    <Form className='form'>
      <h3>Sign In</h3>



      <div className="form-group">

        <input type="email" className="form-control" placeholder="Enter email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
      </div>

      <div className="form-group">

        <input type="password" className="form-control" placeholder="Enter password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
      </div>



      {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

      <button type="submit" onClick={() => navigate('./', { replace: true })} className="btn btn-secondary btn-block" onClick={handleClick}
        disabled={loading}> {loading ? 'Loading...' : 'Sign In'}</button>

      <div style={{ marginTop: '1rem' }}>
        <p> Save password ?  <Checkbox {...label} /> </p>
        <p className="forgot-password text-right">Don't have an account? <a className='a' href="/signup">Sign Up</a></p>
      </div>

    </Form>

  </div>;
}

export default SignIn;
