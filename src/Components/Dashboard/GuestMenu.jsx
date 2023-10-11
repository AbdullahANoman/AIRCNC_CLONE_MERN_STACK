import { NavLink } from "react-router-dom";
import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateToHost } from "../../api/auth";
import HostModal from "../Modal/HostRequestModal";
import { toast } from "react-hot-toast";
const GuestMenu = () => {
  const { role, setRole, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const modalHandler = (email) => {
    updateToHost(email)
      .then((res) => {
        console.log(res);
        toast.success(`${user?.displayName} is Now Host . Please post rooms`);
        setModal(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <NavLink
        to="my-bookings"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <BsFingerprint className="w-5 h-5" />

        <span className="mx-4 font-medium">My Bookings</span>
      </NavLink>

      {!role && (
        <>
          <div
            onClick={() => setIsOpen(true)}
            className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
          >
            <GrUserAdmin className="w-5 h-5" />

            <span className="mx-4 font-medium">Become A Host</span>
          </div>
          <HostModal
            modalHandler={modalHandler}
            closeModal={closeModal}
            isOpen={isOpen}
            email={user?.email}
          />
        </>
      )}
    </>
  );
};

export default GuestMenu;
