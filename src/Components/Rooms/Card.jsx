import HeartButton from "../Button/HeartButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Card = ({ room }) => {
  const {_id, imageUrl, location,image1,image2,price } = room;
  return (
    <Link to={`/rooms/${_id}`}> 
      <div className="col-span-1 cursor-pointer group">
        <div className="flex flex-col gap-2 w-full">
          <div
            className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
          >
            <Swiper
              grabCursor={true}
              effect={"creative"}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-20%", 0, -1],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[Autoplay, EffectCreative]}
              className="mySwiper3 w-full h-full"
            >
              <SwiperSlide className="w-full h-full">
                <img
                  className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
                  src={imageUrl}
                  alt="Room"
                />
                <div
                  className="
            absolute
            top-3
            right-3
          "
                >
                  <HeartButton />
                </div>
              </SwiperSlide>
              {image1 && (
                <SwiperSlide>
                  <img
                    className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
                    src={image1}
                    alt="Room"
                  />
                  <div
                    className="
              absolute
              top-3
              right-3
            "
                  >
                    <HeartButton />
                  </div>
                </SwiperSlide>
              )}
              {image2 && (
                <SwiperSlide>
                  <img
                    className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
                    src={image2}
                    alt="Room"
                  />
                  <div
                    className="
              absolute
              top-3
              right-3
            "
                  >
                    <HeartButton />
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
          <div className="font-semibold text-lg">{location}</div>
          <div className="font-light text-neutral-500">
            5 nights . June 19 - 26
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">$ {price}</div>
            <div className="font-light">night</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
