import React, { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import Card from "./Card";
import Loader from "../Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const value = params.get("category");
  console.log(value);

  
  useEffect(() => {
    setLoading(true);
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if(value){
            const filteredRooms = data.filter(room=> room?.category == value )
            setLoading(false)
            setRooms(filteredRooms)
        }
        else{
            setLoading(false);
            setRooms(data);
        }
        
      });
  }, [value]);

  console.log(rooms);
  return (
    <Container>
      {rooms.length == 0 && (
        <Heading className="" title={'No Rooms Available In This Category !'} subtitle={'Please Select Another Category'} center={'true'}></Heading>
        // <div className="grid justify-center mt-12">
        //   <p className="font-bold text-xl">No Rooms Available In This Category !</p>
        //   <p className="text-gray-400 mx-auto">Please Select Another Category </p>
        // </div>
      )}
      {loading && <Loader></Loader>}
     
        <div className="pt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {rooms.map((room, index) => (
            <Card room={room} key={index}></Card>
          ))}
        </div>
     
    </Container>
  );
};

export default Rooms;
