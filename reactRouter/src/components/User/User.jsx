import React from 'react';
import { useParams } from 'react-router-dom';

function User(props) {
    const {id} = useParams()
    return (
        <div className='bg-gray-600 tex-white-500 '>
            user: {id}
        </div>
    );
}

export default User;