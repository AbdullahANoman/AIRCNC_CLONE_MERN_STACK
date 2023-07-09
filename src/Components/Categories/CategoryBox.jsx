import React from 'react';

const CategoryBox = ({label,icon : Icon}) => {
    
    return (
        <div className='flex flex-col  items-center justify-center hover:text-neutral-800 text-neutral-500 gap-2'>
            <Icon size={26} ></Icon>
            <p className='text-sm font-bold'>{label}</p>
        </div>
    );
};

export default CategoryBox;