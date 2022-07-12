import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  
import {SignUp} from './components/SignUp';
import {Forget} from './components/Forget';
import Header from '../base/Header';
import {Login} from './components/Login';
export const Page1 = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path = "/signup">
                    <SignUp/>
                </Route>
                <Route exact path={["/login"]}>
                    <Login />
                </Route>
                <Route exact path = "/forget">
                    <Forget/>
                </Route>
            </Switch>
        </Router>
    )
}
