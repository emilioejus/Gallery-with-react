import React from "react";
import { Link } from 'react-router-dom';

const NotFound = ()=> {

    return (
        <>
            <h1>Esta direción no éxiste</h1>

            <Link to="/">Volver a Home</Link>            
        </>
    )
}

export default NotFound;