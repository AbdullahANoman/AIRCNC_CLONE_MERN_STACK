import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import HostModal from "../../Modal/HostRequestModal";
import { checkHost, updateToHost } from "../../../api/auth";
import { toast } from "react-hot-toast";

const MenuDropdown = () => {
  const { user, logOut, role, setRole } = useContext(AuthContext);
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
    setModal(false);
  };

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {!role && (
          <div className="hidden md:block text-sm font-semibold py-3 px-8 rounded-full hover:bg-neutral-100 transition cursor-pointer">
            <button
              className=""
              disabled={!user}
              onClick={() => setModal(true)}
            >
              AirCNC your home
            </button>
          </div>
        )}
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            {user ? (
              <>
                <Link to="/dashboard">
                  <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
                    Dashboard
                  </div>
                </Link>
                <div
                  onClick={() => {
                    logOut();
                    setRole(null);
                  }}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      <HostModal
        email={user?.email}
        closeModal={closeModal}
        modalHandler={modalHandler}
        isOpen={modal}
      ></HostModal>
    </div>
  );
};

export default MenuDropdown;
