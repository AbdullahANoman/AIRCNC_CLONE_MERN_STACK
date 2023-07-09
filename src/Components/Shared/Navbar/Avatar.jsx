import React, { useContext } from 'react';
import profileImg from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';
const Avatar = () => {
    const {user}  = useContext(AuthContext)
    return (
        <div>
            <img src={user && user.photoURL ? user.photoURL : profileImg} className='rounded-full' height={30} width={30} alt="" />
        </div>
    );
};

export default Avatar;