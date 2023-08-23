import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { updateToHost } from '../../api/auth';

const Update = () => {
    const {user} = useContext(AuthContext)
    const makeHost = user =>{
        updateToHost(user)
    }
    return (
        <div className='flex justify-center h-[100vh] items-center'>
            <p onClick={()=>makeHost(user)} className='px-4 py-2 cursor-pointer bg-yellow-300 text-black font-semibold rounded-xl'>Make Host {user?.displayName}</p>
        </div>
    );
};

export default Update;