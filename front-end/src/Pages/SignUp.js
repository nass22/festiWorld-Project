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
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const handleClick = () => {

        navigate('/',{replace: true});
        setLoading(true);
        setIsError(false);
        const data = {
            name: name,
            email: email,
            password: password,
  

        }
        axios.post('http://127.0.0.1:8001/api/register', data).then(res => {
            setData(res.data);
            setName('');
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
            <h3>Sign Up</h3>


            <div className="form-group">

                <input type="text" className="form-control" placeholder="User Name"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </div>

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

            <div className="form-group">

                <input type="password" className="form-control" placeholder="Confirm password"
                    id="confirmPassword"
                    value={confirmPassword}
                />
            </div>

            {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

            <button type="submit" onClick={() => navigate('./', { replace: true })} className="btn btn-secondary btn-block" onClick={handleClick}
          disabled={loading}> {loading ? 'Loading...' : 'Sign Up'}</button>

            <div style={{ marginTop: '1rem' }}>
                <p> Save password ?  <Checkbox {...label} /> </p>
                <p className="forgot-password text-right">Already registered ? <a className='a' href="/signin">Sign In</a></p>
            </div>

        </Form>
        <BottomNavig />

    </div>;
}

export default SignUp;
