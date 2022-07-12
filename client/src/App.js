import { useEffect } from "react";
import Header from "./components/base/Header";
import { Footer } from "./components/base/Footer";
import { Login } from "./components/p1/components/Login";
import { SignUp } from "./components/p1/components/SignUp";
import { Forget } from "./components/p1/components/Forget";
import { Dashboard } from "./components/p2/Dashboard";
import { Room } from "./components/p3/Room"
import { Page4 } from "./components/p4/Page4"
import { Page404 } from "./components/base/Page404";
import { socket } from "./Socket";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AntiProtectedRoute } from "./components/AntiProtectedRoute";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Standings } from "./components/p4/Standings";

function App() {


    useEffect(() => {
        var stored_roomid = sessionStorage.getItem("roomid");
        var stored_userid = sessionStorage.getItem("userid");

        if (stored_roomid && stored_userid) {
            var joiningData = {
                userid: stored_userid,
                roomid: stored_roomid,
                refresh: true
            }
            socket.emit("joinRoom", joiningData);
        }
    }, [])

    return (
        <>
            <AuthProvider>
            <Router>
                <Header />
                <Switch>
                    <AntiProtectedRoute exact path={["/", "/login"]} component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/forgot">
                        <Forget />
                    </Route>
                    <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                    <ProtectedRoute exact path="/room/:roomid" component={Room} />
                    <ProtectedRoute exact path="/round/:roomid" component={Page4} />
                    <ProtectedRoute exact path="/standings/:roomid" component={Standings} />
                    <Route path="*" component={Page404} />
                </Switch>
                <Footer />    
            </Router>
            </AuthProvider>
        </>
    );
}

export default App;
