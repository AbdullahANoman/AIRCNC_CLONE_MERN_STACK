import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckOutForm.css";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import { updateRoomBooked } from "../../api/bookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
const CheckoutForm = ({ closeModal, bookingInfo }) => {
  const { user } = useContext(AuthContext);
  const [payProcess, setPayProcess] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (bookingInfo?.price) {
      axiosSecure
        .post(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
          price: bookingInfo?.price,
        })
        .then((data) => {
          setClientSecret(data?.data?.clientSecret);
        });
    }
  }, [bookingInfo, axiosSecure]);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setPayProcess(true);
    console.log(payProcess);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Unknown",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("[error]", confirmError);
      setCardError(confirmError.message);
    } else {
      console.log("[paymentIntent]", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        // payment info save in db
        const paymentInfo = {
          ...bookingInfo,
          transactionId: paymentIntent.id,
          date: new Date(),
        };

        axiosSecure
          .post(`${import.meta.env.VITE_API_URL}/bookings`, paymentInfo)
          .then((res) => {
            console.log(res.data);
            if (res?.data?.insertedId) {
              updateRoomBooked(bookingInfo?.roomId, true)
                .then((res) => {
                  const text = `Booking Success Transaction Id ${paymentIntent.id}`;
                  toast.success(text);
                  navigate("/dashboard/my-bookings");
                  closeModal();
                  setPayProcess(false);
                })
                .catch((error) => {
                  toast.error(error.message);
                  setPayProcess(false);
                });
            }
          })
          .catch((error) => {
            toast.error(error.message);
            setPayProcess(false);
          });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      {cardError && <p className="text-sm text-red-500">{cardError}</p>}
      <div className="flex mt-2 justify-around">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          disabled={!stripe || payProcess}
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          //   onClick={modalHandler}
        >
          {payProcess ? (
            <FaSpinner className="animate-spin" size={20} />
          ) : (
            `Pay ${bookingInfo.price}$`
          )}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
