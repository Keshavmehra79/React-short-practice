import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
    const nav = useNavigate();
    const { username } = useParams();
    return (
        <div>
            <h1>Hello,{username}</h1>
            <h1>This is Profile page</h1>


            <button onClick={() => nav(-1)}>go back</button>
        </div>

    )
}

export default Profile