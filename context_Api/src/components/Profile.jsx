import React, {useContext} from 'react';
import UserContext from '../context/User.context';


const Profile = ({data}) => {

    const {user} = useContext(UserContext)

    if(!user) return <div>please login</div>

    return <div>data: {data} welcome {user.username}</div>
};

export default Profile;