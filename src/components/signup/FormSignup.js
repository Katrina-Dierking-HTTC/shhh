import React from 'react'
import { Link} from 'react-router-dom'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'
// import Login from '../login/Login'

const FormSignup = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);
    return (
        <div className="form-content-right">
            <form className = "form" onSubmit={handleSubmit} noValidate> 
            <h1>Register today!</h1>
            {/* <h3>Create an account by filling out the information below.</h3> */}
            <div className = 'form-inputs'>
                <label htmlFor='username' 
                className='form-label'>
                Username
                </label>
                <input className='form-input'
                    id='username'
                    type='text' 
                    name='username'
                    placeholder = "enter username"
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username && <p> {errors.username}</p>}
            </div>

            <div className = 'form-inputs'>
                <label htmlFor='email' 
                className='form-label'>
                Email  
                </label>
                <input className='form-input'
                    id='email'
                    type='email' 
                    name='email'
                    placeholder = "enter your email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p> {errors.email}</p>}
            </div>

            <div className = 'form-inputs'>
                <label htmlFor='password' 
                className='form-label'>
                Password  
                </label>
                <input className='form-input'
                    id='password'
                    type='password' 
                    name='password'
                    placeholder = "Enter your password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p> {errors.password}</p>}
            </div>

            <div className = 'form-inputs'>
                <label htmlFor='password2' 
                className='form-label'>
                Confirm Password
                </label>
                <input className='form-input'
                    id='password2'
                    type='password' 
                    name='password2'
                    placeholder = "enter your password2"
                    value={values.password2}
                    onChange={handleChange}
                />
                {errors.password2 && <p> {errors.password2}</p>}
            </div>
            <button className = 'form-input-btn'
                type='submit'>Register</button>
            <span className = 'form-input-login'>Already have an account? Login <Link to= "/login">here</Link></span>

            </form>
        </div>
    );
}

export default FormSignup


