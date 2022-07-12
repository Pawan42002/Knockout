import React from 'react'
import logo from './HeaderLogo.png'

export const Spinner = () => {
    return (
        <>
            <div className="container text-center" style={{ marginTop: '1vh' }}>
                <img src={logo} className="rounded img-thumbnail" alt="..."></img>
                <h1>
                    Loading...
                </h1>
                <div className="spinner-grow spinner-border-sm text-secondary mx-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow spinner-border-sm text-dark mx-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow spinner-border-sm text-secondary mx-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}
