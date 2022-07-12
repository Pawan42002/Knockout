import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const HowToUse = () => {
    return (
        <>
            <div className="d-grid my-2 text-dark mx-auto px-0" style={{ width: "50vw" }}>
                <div className="row border bg-light border-black border-2 rounded p-2 my-2">
                    <div className="col">
                        <strong>LogIn</strong>
                        <ol>
                            <li>
                                SignUp yourself.
                            </li>
                            <li>
                                LogIn directly if already SignedUp.
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row border bg-light border-black border-2 rounded p-2 my-2">
                    <div className="col">
                        <strong>Dashboard</strong>
                        <ol>
                            <li>
                                Validate your CF Handle
                                <ol>
                                    <li>
                                        First Copy the string and paste it in firstName field in CodeForces.
                                    </li>
                                    <li>
                                        To do that , logIn to CodeForces then : Profile {'>'} Settings tab {'>'} Social tab {'>'} First Name field. 
                                    </li>
                                </ol>
                                
                            </li>
                            <li>
                                Now , after Validate yourself
                                <ol>
                                    <li>
                                        Create a room by selecting the room size and then click on 'Create Room' button.
                                    </li>
                                    OR
                                    <li>
                                        Join a existing room , for this you will need a existing room code , paste that code in the text area and click on 'Join Room' button.
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row border bg-light border-black border-2 rounded p-2 my-2">
                    <strong>Room</strong>   
                    <div className="col">
                        <ol>
                            <li>
                                Select number of problems.
                            </li>
                            <li>
                                Select rating range , by doing this you will only get those problem which fall in this region.
                            </li>
                            <li>
                                Select Duration in minutes.
                            </li>
                            <li>
                                Now Click on Generate Problems 
                            </li>
                            <li>
                                Once problems of your choice are generated , you can click on 'Start Contest' to start contest.
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row border bg-light border-black border-2 rounded p-2 my-2">
                    <strong>Round</strong>
                    <div className="col">
                        <ol>
                            <li>
                                There will be a strip of colors indicating a color for each contestant.
                            </li>
                            <li>
                                Below is the table of problems.
                            </li>
                            <li>
                                When a contestant gets a problem before anyone else , it will marked with the respective contestant color.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
