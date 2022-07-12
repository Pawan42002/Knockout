import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const AntiProtectedRoute = ({ component: Component, ...rest }) => {
    let { user } = useAuth();
    return (
        <Route
            {...rest}
            render={props => {
                return (!user ||  user.email==="") ? <Component {...props} /> : <Redirect to="/dashboard" />
            }}
        >
        </Route>
    )
}
