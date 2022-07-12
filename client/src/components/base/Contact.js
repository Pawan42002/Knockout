import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export const Contact = () => {
    return (
        <>
            <div className="conatiner d-flex align-items-center justify-content-center mt-3 flex-wrap">
                <Link className="mx-1 btn btn-outline-primary" to="/login">
                    Back to LogIn
                </Link>
            </div>
            <div className="conatiner d-flex align-items-center justify-content-center mt-2 flex-wrap">
                <div class="card m-2" style={{ width: "20rem"}}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <h5 class="card-title">LinkedIn : <a href="" target="_blank">ManjunathVasam</a></h5>
                        <h5 class="card-title">GitHub : <a href="https://github.com/Manjunath0408" target="_blank">ManjunathVasam</a></h5>
                    </div>
                </div>
                <div class="card m-2">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Email : saketthota98@gmail.com</h5>
                        <h5 class="card-title">LinkedIn : <a href="https://www.linkedin.com/in/saket-thota-163227192/" target="_blank">SaketThota</a></h5>
                        <h5 class="card-title">GitHub : <a href="https://github.com/SaketThota" target="_blank">SaketThota</a></h5>
                    </div>
                </div>
            </div>
            
        </>
    )
}
