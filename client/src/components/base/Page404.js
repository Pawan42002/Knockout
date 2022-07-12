import React from 'react'
import { Link } from 'react-router-dom'

export const Page404 = () => {
    return (
        <>
            <div className="page-wrap d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block">404</span>
                            <div className="mb-4 lead">The page you are looking for was not found.</div>
                            <Link className="mx-2 btn btn-outline-primary" to="/dashboard">
                                Back to Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
