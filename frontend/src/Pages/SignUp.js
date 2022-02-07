import BottomNavig from '../component/BottomNavig';
import Header from '../component/Header';
import React from 'react';
import { Form } from 'react-bootstrap';
import '../component/SignUp.css';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function SignUp() {
    return <div className="body">
        <Header />
        <Form className='form'>
            <h3>Sign Up</h3>


            <div className="form-group">

                <input type="text" className="form-control" placeholder="User Name" />
            </div>

            <div className="form-group">

                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">

                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">

                <input type="password" className="form-control" placeholder="Confirm password" />
            </div>

            <button type="submit" className="btn btn-secondary btn-block">Sign Up</button>

            <div style={{ marginTop: '1rem' }}>
                <p> Save password ?  <Checkbox {...label} /> </p>
                <p className="forgot-password text-right">Already registered ? <a className='a' href="/signin">Sign In</a></p>
            </div>

        </Form>
        <BottomNavig />

    </div>;
}

export default SignUp;
