import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(props) {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((res)=> res.json())
    //     .then((res)=> setData(res))

    // }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white'>
           github name: {data?.name}
           <img src={data?.avatar_url} alt="Git picture" width={300}/>
        </div>
    );
}

export default Github;


export const githubInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/rajkrishnacoder")
    return response.json()
}