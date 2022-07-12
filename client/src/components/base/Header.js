import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import './Header.css'
import logo from './HeaderLogo.png'

function Header() {
    const [error, setError] = useState('');
    const { user, logOut } = useAuth();
    let history = useHistory();
    
    let handleLogOut = async () => {

        if (window.confirm("Are you sure you want to logout ?")) {
            try {
                await logOut();
                history.push("/");
            } catch (err) {
                setError(err.message);
            }
        }
    }

    let logoStyle = {
        maxWidth: '6vw',
        height: '3vh'
    }

    return (
        <div className="navbar d-flex fw-bold customBg1">
            <Link to="/dashboard" className="headerLogo">
                <div className="d-flex align-items-center m-0 p-0">
                    <img src={logo} alt="" className="img-fluid" style={logoStyle}/>
                    <div className="mx-2 d-inline">
                        <span className="timer-responsive">CF</span>
                        <span className="timer-responsive">Knockout</span>
                    </div>
                </div>
            </Link>
            {
                (error) ? <div className="alert alert-danger" role="alert">{error}</div> : ''
            }
            <div className="ms-auto">
                {
                    user ? <button className="btn btn-danger mx-3 text-responsive" onClick={() => handleLogOut()} >LogOut</button> : null
                }
            </div>
        </div>
    )
}

export default Header;