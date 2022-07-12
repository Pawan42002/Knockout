import axios from 'axios';
import {useEffect , useState} from 'react'
import './UserColors.css'
import {socket} from "../../Socket"

export function Problem({ problem, index , colorMap}) {

    const problemName = problem.name;
    const problemRating = problem.rating;
    const problemURL = `https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`
    let roomid = sessionStorage.getItem("roomid");

    const [rowBgColor, setRowBgColor] = useState("light");

    useEffect(() => {
        axios.post("http://localhost:4000/api/checkUserSolved" , {roomid:roomid , problem:problem})
        .then(res => {
            setRowBgColor(colorMap[res.data.userSolved]);
        })
        .catch(err => console.log(err));
    })

    socket.on("userSolved", ({problemIndex, user}) => {
        if(problemIndex === index)
            setRowBgColor(colorMap[user]);
    })

    return (
        <>
            <tr className={"text-responsive"} style={{ backgroundColor: rowBgColor}}>
                <th scope="row">{index+1}</th>  
                <td><a href={problemURL} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}>{problemName}</a></td>
                <td>{problemRating}</td>
            </tr>
        </>
    )
}
