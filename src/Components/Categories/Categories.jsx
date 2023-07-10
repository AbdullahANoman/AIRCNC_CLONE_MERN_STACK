import React from "react";
import Container from "../Shared/Container/Container";
import { categories } from "./Categoriesdata";
import CategoryBox from "./CategoryBox";
import Rooms from "../Rooms/Rooms";
const Categories = () => {
  return <Container>
    <div className="flex flex-row justify-between gap-5 overflow-x-auto cursor-pointer">
        {
            categories.map((item,index)=>(
               <CategoryBox label={item?.label} icon={item?.icon} key={index}></CategoryBox>
            ))
        }
    </div>
   
  </Container>;
};

export default Categories;
