import { format } from "date-fns";
import { deleteBookRoom, updateRoomBooked } from "../../api/bookings";
import { toast } from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import DeleteModal from "../Modal/DeleteModal";

const TableRow = ({ booking }) => {
  const { _id, image, from, to, price, location, title, roomId } =
    booking || {};

  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalHandler = (id) => {
    deleteBookRoom(id)
      .then((res) => {
        if (res.deletedCount > 0) {
          updateRoomBooked(roomId, false)
            .then((res) => {
              //   fetchRooms()
              toast.success("Cancel Your Bookings Successfully");
              closeModal();
            })
            .catch((err) => {
              toast.error(err.message);
            });
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  //   const handleDelete = (id) => {
  //     deleteBookRoom(id)
  //       .then((res) => {
  //         if (res.deletedCount > 0) {
  //           updateRoomBooked(roomId, false)
  //             .then((res) => {
  //               console.log(res);
  //               findBooking();
  //               toast.success("Cancel Your Bookings");
  //             })
  //             .catch((err) => {
  //               toast.error(err.message);
  //             });
  //         }
  //       })
  //       .catch((err) => {
  //         toast.error(err.message);
  //       });
  //   };
  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <img
                  alt="profile"
                  src={image}
                  className="mx-auto object-cover rounded h-10 w-15 "
                />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">{title}</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{location}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">${price}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {format(new Date(booking.from), "P")}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {format(new Date(booking.to), "P")}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span onClick={() => setIsOpen(true)} className="relative">
              Cancel
            </span>
          </span>
        </td>
      </tr>
      <DeleteModal
        modalHandler={modalHandler}
        isOpen={isOpen}
        closeModal={closeModal}
        id={_id}
      ></DeleteModal>
    </>
  );
};

export default TableRow;
