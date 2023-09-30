import React from "react";
import Categories from "../Components/Categories/Categories";
import Rooms from "../Components/Rooms/Rooms";
import Filter from "../Components/Filter/Filter";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-10 md:col-span-11">
          <Categories></Categories>
        </div>
        <div className="col-span-1 flex ">
          <Filter />
        </div>
      </div>
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
