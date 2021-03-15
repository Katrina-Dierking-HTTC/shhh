import {useState} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
// import {withRouter} from 'react-router-dom'
import {Wrapper, Form, Input, Button} from '../styles/RegStyles'

function RegisterForm (props) {
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
        .post('/register, state.credentials')
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token);
            props.history.push('./login');
            setState({credentials : {
                name: '',
                email: '',
                password: ''
            }});
        })
        .catch(err => console.log(err));
    };

        return (
            <Wrapper>
                <Form onSubmit = {login}>
                    <Input
                        type='text'
                        name='name'
                        value={state.credentials.name}
                        onChange={handleChange}
                        placeholder='name'
                    />

                    <Input
                        type='email'
                        name='email'
                        value={state.credentials.email}
                        onChange={handleChange}
                        placeholder='email'
                    />

                    <Input
                        type='password'
                        name='password'
                        value={state.credentials.password}
                        onChange={handleChange}
                        placeholder='password'
                    />
                    <Button type='submit'>Register</Button>
                </Form>
            </Wrapper>
        );
    }

export default RegisterForm
