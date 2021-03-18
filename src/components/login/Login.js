import React, {useState} from 'react';
// import {useHistory} from 'react-router'
// import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
import { Wrapper, Form, Input, Button} from './LoginStyles.js';
import axios from 'axios'
import {Link} from 'react-router-dom'


function Login() {
  // const history = useHistory();
    const [state, setState] = useState ({
        credentials : {
            email: '',
            password: ''
        }
    });

    const handleChange = e => {
        setState({
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    const login = e => {
        e.preventDefault();
        
        axios
            .post('/login', state.credentials)
            .then(res => {
                console.log('hello',res.data)
                localStorage.setItem(res.data);
                // history.push('/dashboard');
            })
            .catch(err => console.log(err));
    };

        return (
            <>
            <Wrapper>
            
                <Form onSubmit={login}>
                
                    <Input
                    type="text"
                    name="email"
                    placeholder="email"
                    autoComplete='email'
                    value={state.credentials.email}
                    onChange={handleChange}
                    />

                    <Input
                    type='password'
                    name='password'
                    placeholder='password'
                    autoComplete='current-password'
                    value={state.credentials.password}
                    onChange={handleChange}
                    />
                    <Button><Link to='/dashboard'>Log In</Link></Button>
                </Form>
            </Wrapper>
            </>
        )
    }

export default Login;