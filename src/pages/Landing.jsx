import React from 'react'
import { useNavigate } from 'react-router-dom';

const Landing = () => {

    const navigate = useNavigate()
    return (
        <div>
            <h1>Landing page</h1>
            <br />
            
            <button
                onClick={() => navigate('/login')}
            >Login</button>
        </div>
    )
}

export default Landing;