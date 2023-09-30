import React from 'react';
import { useSearchParams } from 'react-router-dom';

const CategoryBox = ({label,icon : Icon }) => {
    const [params,setParams] = useSearchParams()
    const value = params.get('category')
    // console.log(value)

    const handleCategory = label =>{
        setParams(`category=${label}`)
    }

    console.log(value,label);
    return (
        <div onClick={()=>handleCategory(label)} className={`flex mb-3 flex-col ${value == label && 'border-black border-b-2 w-16 text-black font-extrabold'}  items-center justify-center hover:text-neutral-800 text-neutral-500 gap-2`}>
            <Icon size={26} ></Icon>
            <p className='text-sm font-bold'>{label}</p>
        </div>
    );
};

export default CategoryBox;