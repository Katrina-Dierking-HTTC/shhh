import React from 'react'
import {Link} from 'react-router-dom'

const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <div className = 'form-success'>
                Thank you for registering.
                <br />
                <span className = 'form-input-login'>Welcome to the club. You may now <Link to= "/dashboard">Check out your dashboard</Link> to get started.</span>

            </div>
        </div>
    )
}

export default FormSuccess
