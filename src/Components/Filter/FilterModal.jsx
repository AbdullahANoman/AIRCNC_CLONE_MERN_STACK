import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
const FilterModal = ({
  modalHandler,
  closeModal,
  isOpen,
  rooms,
  checkFilterData,
}) => {
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    type: "Any type",
    priceRange: [0, 400],
    bedrooms: [],
    beds: [],
    bathrooms: [],
    propertyType: [],
  });

  const properties = [
    {
      image:
        "https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg",
      name: "House",
    },
    {
      image:
        "https://a0.muscache.com/pictures/21cfc7c9-5457-494d-9779-7b0c21d81a25.jpg",
      name: "Apartment",
    },
    {
      image:
        "https://a0.muscache.com/pictures/6f261426-2e47-4c91-8b1a-7a847da2b21b.jpg",
      name: "Guesthouse",
    },
    {
      image:
        "https://a0.muscache.com/pictures/64b27fed-56a1-4f03-950a-d8da08efb428.jpg",
      name: "Hotel",
    },
  ];

  useEffect(() => {
    const filteredData = rooms?.filter(
      (place) =>
        (filterOptions.type === "Any type" ||
          filterOptions.type === place.type) &&
        place.price >= filterOptions.priceRange[0] &&
        place.price <= filterOptions.priceRange[1] &&
        (filterOptions.bedrooms.length === 0 ||
          filterOptions.bedrooms.includes(place.bedrooms)) &&
        (filterOptions.beds.length === 0 ||
          filterOptions.beds.includes(place.beds)) &&
        (filterOptions.bathrooms.length === 0 ||
          filterOptions.bathrooms.includes(place.bathrooms)) &&
        (filterOptions.propertyType.length === 0 ||
          filterOptions.propertyType.includes(place.propertyType))
    );
    setFilteredRooms(filteredData);
  }, [filterOptions]);

  // console.log(propertyToggle);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 " />
        </Transition.Child>

        <div className="fixed inset-0  ">
          <div className="flex min-h-full items-center justify-center p-4  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[800px]  transform overflow-hidden  rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                <div className="pt-6 px-6">
                  <button
                    type="button"
                    className="absolute font-semibold border-none"
                    onClick={closeModal}
                  >
                    X
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <p className="font-semibold text-center ">Filters</p>
                    <hr className="mt-5" />
                  </Dialog.Title>
                </div>
                {/* type of place  */}
                <div className="max-h-[80vh] overflow-y-auto p-6">
                  <div className="py-6 ">
                    <h1
                      className="text-2xl  text-gray-800"
                      style={{ fontWeight: "500" }}
                    >
                      Type of place
                    </h1>
                    <p className="text-sm ">
                      Search rooms, entire homes, or any type of place.
                    </p>
                    <div>
                      <div className=" flex  mx-10 my-5 rounded-xl border border-gray-200  [&>*:nth-child(3)]:rounded-r-xl [&>*:nth-child(1)]:rounded-l-xl">
                        {["Any type", "Room", "Entire Home"].map((type) => (
                          <button
                            key={type}
                            onClick={() =>
                              setFilterOptions({ ...filterOptions, type: type })
                            }
                            className={`px-5 py-1 border-l hover:border hover:border-black  w-10/12 h-16 ${
                              filterOptions.type === type
                                ? "bg-[#393939] text-white"
                                : "bg-white text-gray-600 hover:border-black"
                            } `}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* price of range  */}
                  <div className="py-7">
                    <h1
                      className="text-2xl text-gray-800 "
                      style={{ fontWeight: "500" }}
                    >
                      Price range
                    </h1>
                    <p className="text-sm">
                      Total prices for 5 nights before taxes
                    </p>
                    <div className="mx-10 mt-3">
                      <input
                        type="range"
                        min={0}
                        max={400}
                        value={filterOptions.priceRange[0]}
                        onChange={(e) =>
                          setFilterOptions({
                            ...filterOptions,
                            priceRange: [
                              e.target.value,
                              filterOptions.priceRange[1],
                            ],
                          })
                        }
                        className="w-full py-0 mt-3 range bg-gray-800"
                      />
                      <div className="flex  max-w-full justify-evenly items-center gap-10 my-3 ">
                        <div className="border border-gray-400 w-[300px] rounded-xl py-3 px-3">
                          <p className="font-thin text-gray-600">Minimum</p>
                          <p className="text-xl ">
                            $ {filterOptions.priceRange[0]}
                          </p>
                        </div>
                        <div>
                          <AiOutlineMinus className="text-gray-500" />
                        </div>
                        <div className="border border-gray-400 w-[300px]  max-w-full rounded-xl py-3 px-3">
                          <p className="font-thin text-gray-600">Maximum</p>
                          <p className="text-xl">
                            $ {filterOptions.priceRange[1]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* Room and places  */}
                  <div>
                    <h1
                      className="text-2xl text-gray-800 pt-4 "
                      style={{ fontWeight: "500" }}
                    >
                      Rooms and beds
                    </h1>

                    {/* bedrooms  */}
                    <p className="text-gray-600  py-2">Bedrooms</p>
                    <div className="flex gap-2  mt-3">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <button
                          key={num}
                          onClick={() =>
                            setFilterOptions({
                              ...filterOptions,
                              bedrooms: [num],
                            })
                          }
                          className={`px-3 py-1 rounded-full w-16 h-10  ${
                            filterOptions.bedrooms.includes(num)
                              ? "bg-[#222222] text-white"
                              : " border hover:border-black text-gray-600"
                          }`}
                        >
                          {num == 8 ? num + "+" : num}
                        </button>
                      ))}
                    </div>
                    {/* beds  */}
                    <p className="text-gray-600  py-2 mt-3">Beds</p>
                    <div className="flex gap-2 mt-3 ">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <button
                          key={num}
                          onClick={() =>
                            setFilterOptions({
                              ...filterOptions,
                              beds: [num],
                            })
                          }
                          className={`px-3 py-1 rounded-full w-16 h-10  ${
                            filterOptions.beds.includes(num)
                              ? "bg-[#222222] text-white"
                              : " border hover:border-black text-gray-600"
                          }`}
                        >
                          {num == 8 ? num + "+" : num}
                        </button>
                      ))}
                    </div>
                    {/* bathrooms  */}
                    <p className="text-gray-600  py-2 mt-3">Bathrooms</p>
                    <div className="flex gap-2 mt-3 ">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <button
                          key={num}
                          onClick={() =>
                            setFilterOptions({
                              ...filterOptions,
                              bathrooms: [num],
                            })
                          }
                          className={`px-3 py-1 rounded-full w-16 h-10  ${
                            filterOptions.bathrooms.includes(num)
                              ? "bg-[#222222] text-white"
                              : " border hover:border-black text-gray-600"
                          }`}
                        >
                          {num == 8 ? num + "+" : num}
                        </button>
                      ))}
                    </div>
                  </div>
                  <hr className="my-10" />
                  {/* propertyType  */}
                  <div>
                    <p
                      className="text-2xl  text-gray-800"
                      style={{ fontWeight: "500" }}
                    >
                      Property type
                    </p>
                    <div className="flex gap-4 my-4">
                      {properties.map((property, index) => (
                        <div
                          key={index}
                          onClick={() =>
                            setFilterOptions({
                              ...filterOptions,
                              propertyType: [property?.name],
                            })
                          }
                          className={`border  w-full h-[150px] ${
                            filterOptions.propertyType.includes(property?.name)
                              ? "border-black border-2 font-semibold "
                              : "bg-white border-gray-300"
                          } px-3 py-4 rounded-2xl `}
                        >
                          <img className="w-8" src={property?.image} alt="" />
                          <p className="mt-10 ">{property?.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex mt-2 items-center  justify-around">
                    <p
                      onClick={() =>
                        setFilterOptions({
                          type: "",
                          priceRange: [0, 400],
                          bedrooms: [],
                          beds: [],
                          bathrooms: [],
                          propertyType: [],
                        })
                      }
                      className="underline font-semibold text-gray-600 hover:text-black cursor-pointer"
                    >
                      Clear all
                    </p>
                    <div className="ml-auto">
                      <button
                        type="button"
                        className="ml-auto px-6 py-3 font-semibold bg-[#333333] text-white hover:bg-black rounded"
                        onClick={() => checkFilterData(filterOptions)}
                      >
                        Show {filteredRooms?.length} places
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FilterModal;
