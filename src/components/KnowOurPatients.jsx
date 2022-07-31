import VideoCard from "./VideoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";

const KnowOurPatients = () => {
  const [ScreenSize, setScreenSize] = useState();

  useEffect(() => {
    const screenWidth = () => {
      if (window.innerWidth < 768) {
        setScreenSize(false);
      } else {
        setScreenSize(true);
      }
    };
    window.addEventListener("resize", screenWidth);

    return (_) => {
      window.removeEventListener("resize", screenWidth);
    };
  });

  const persons = [
    {
      name: "Oluwole Seun",
      videoSrc: "",
      details:
        "Meet 14 years old Seun from Lagos. She and others who are fighting Leukemia often need blood trans-fusions while going through chemo treatments.",
      btnDescription: "Watch on Our Youtube",
      youtubeLink: "https://www.youtube.com/embed/JU5ZoGU3wzA",
    },
    {
      name: "Audu Haruna",
      videoSrc: "",
      details:
        "Meet 28 years old Haruna from Kano, who is fighting Cancer often need blood trans-fusions while going through chemo treatments.",
      btnDescription: "Watch on Our Youtube",
      youtubeLink: "https://www.youtube.com/embed/fehAgOqTR44",
    },
  ];
  return (
    <section className="w-full pb-8 md:pb-16 h-auto">
      <h1 className="text-2xl md:text-3xl text-center py-6 px-2 font-bold hidden sm:block">
        GET TO KNOW OUR PATIENTS MORE
      </h1>
      <h1 className="text-2xl md:text-3xl text-center py-6 px-2 font-bold block sm:hidden">
        GET TO KNOW OUR PATIENTS
      </h1>
      {/* The Swiper Component */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={ScreenSize}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full"
      >
        {persons.map((person, index) => (
          <SwiperSlide key={index}>
            <VideoCard person={person} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default KnowOurPatients;
