import {useState} from 'react';
import RegisterForm from './Register'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import {Wrapper, Form, Input, Button} from '../styles/LoginStyles'

function Login (props) {
    const [state, setState] = useState ({
        credentials: {email: '', password: ''}
    })

    const handleChange = e => {
        setState ({
            credentials: {
                ...state.credentials, 
                [e.target.name]: e.target.value
            }
        });
    };

    const login = e => {
        e.preventDefault();

        axiosWithAuth()
        .post('/login', state.credentials)
        .then(res => {
            console.log('hello', res.data)
            localStorage.setItem('token', res.data.token);
            props.history.push('./dashboard');
        })
        .catch(err => console.log(err));
    };

    return (
        <>
        <Wrapper>
            <Form onSubmit={login}>
                <Input
                    type='type'
                    name='email'
                    placeholder='email'
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
                <Button>Log In</Button>
                    
            </Form>
        </Wrapper>
        <RegisterForm />
        </>
    )
}

export default Login;