import { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorate.getItem('token')) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to='/login' />;
                }
            }}
        />
    )
}

export default PrivateRoute;