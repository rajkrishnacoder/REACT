import React from 'react';
import getTest from "../../context/test"

function Home() {
   const {username} = getTest()
    return (
        <div>
            <h1>hello this is home page</h1>
            <p>{username}</p>
        </div>
    );
}

export default Home;