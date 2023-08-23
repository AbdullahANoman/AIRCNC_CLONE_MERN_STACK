import React, { useContext, useState } from "react";
import AddRoomForm from "../Forms/AddRoomForm";
import { handleImageUpload } from "../../api/utils";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";
import { addRoom, getRooms } from "../../api/rooms";

const AddRoom = () => {
  const { user } = useContext(AuthContext);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  //handleSubmitButton
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const price = form.price.value;
    const guest = form.total_guest.value;
    const bedRooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;

    const from = dates.startDate;
    const to = dates.endDate;

    const image = form.image.files[0];

    // uploadImage
    handleImageUpload(image)
      .then((res) => {
        const imageUrl = res.data.display_url;
        const allData = {
          location,
          category,
          title,
          price: parseFloat(price),
          guest,
          bedRooms,
          bathrooms,
          description,
          imageUrl,
          to,
          from,
          host: {
            name: user?.displayName,
            photoUrl: user?.photoURL,
            email: user?.email,
          },
        };
        // console.log(allData);
        //postRoom in database
        addRoom(allData)
          .then((res) => {
            if (res?.insertedId) {
              toast.success('Room Added Successfully')

            }
          })
          .catch((err) => toast.error(err.message));
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });


      
    //ImageBB Image Hoisting
    // const formData = new FormData();
    // formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${
    //   import.meta.env.VITE_IMGBB_API_KEY
    // }`;
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // }).then(res=>res.json())
    // .then(data=>{
    //     const imageUrl = data?.data?.display_url;
    //     console.log(
    //         location,
    //         price,
    //         bedRooms,
    //         bathrooms,
    //         description,
    //         title,
    //         imageUrl
    //       );
    //       setLoading(false);
    // })
  };
  getRooms().then(res=>console.log(res)).catch(err=>toast.error(err.message))
  const handleImageChange = (image) => {
    setUploadButtonText(image?.name);
  };

  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };
  return (
    <AddRoomForm
      handleSubmit={handleSubmit}
      loading={loading}
      uploadButtonText={uploadButtonText}
      handleImageChange={handleImageChange}
      dates={dates}
      handleDates={handleDates}
    ></AddRoomForm>
  );
};

export default AddRoom;
