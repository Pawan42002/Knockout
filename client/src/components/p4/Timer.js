import React from 'react'
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios"
import '../p3/Room.css'

export const Timer = ({ duration , roomid}) => {
    const history = useHistory();
    let [[hrs, mins, secs], setTime] = useState(returnTime());
    function returnTime(){
        let currentTime = new Date().getTime();
        var absolute_delta = duration - currentTime;
        let hrs=0,mins=0,secs=0;
        if(absolute_delta >= 0){
            var delta = Math.floor(Math.abs(duration - currentTime) / 1000);

            hrs = Math.floor(delta / 3600) % 24;
            delta -= hrs * 3600;

            mins = Math.floor(delta / 60) % 60;
            delta -= mins * 60;

            secs = delta % 60;
        }
        return [hrs, mins, secs]
    }
    const tick = () => {
            setTime(returnTime)
        }    

    useEffect(() => {
        let timerId;
        if (hrs>0 || mins>0 || secs>0) {
            timerId = setInterval(() => tick(), 1000);
        }
        else{
            if (hrs === 0 && mins === 0 && secs === 0) {
                axios.post("http://localhost:4000/api/round/finished", {
                    roomid
                })
                .then((res) => {
                    history.replace(`/standings/${roomid}`, { params: roomid }
                )})
                .catch(err => console.log(err))
            }
        }

        return () => clearInterval(timerId);
    });

    return (
        <>
            <div className="container bg-warning text-center border border-black border-2 rounded px-0">
                <div className="text-responsive fw-bold border-bottom border-dark bg-info py-1">Round Ends In</div>
                <div className="timer-responsive">
                    {
                        `${hrs} :
                        ${mins} :
                        ${secs}`
                    }
                </div>
            </div>
        </>
    )
}
