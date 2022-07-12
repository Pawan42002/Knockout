import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Spinner } from './base/Spinner'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    let { user, loading } = useAuth();

    let Comp = (props) => {
        if (loading)
            return <Spinner />
        else
            return user ? <Component {...props} /> : <Redirect to="/" />
    }

    return (
        <Route
            {...rest}
            render={props => {
                return Comp(props);
            }}
        >
        </Route>
    )
}
