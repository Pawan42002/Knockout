import React from 'react';
import { UserColorDisplay } from "./UserColorDisplay";
import './UserColors.css'

export const UserColors = ({ colorMap }) => {
    return (
        <div className="p-0 m-0 pt-3">
            <div className="container w-50 p-2 mb-3 d-flex py-2 flex-wrap text-center border border-black rounded align-items-center text-light">
                {
                    Object.keys(colorMap).map((key, idx) => {
                        return <UserColorDisplay user={key} col={colorMap[key]} key={idx}/>
                    })
                }
            </div>
        </div>
    )
}
