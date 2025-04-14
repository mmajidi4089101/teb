import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "flowbite-react";
import myimage from "../assets/nima.jpg";
import myimage56 from "../assets/ali.jpg";
import image3314 from "../assets/reza.jpg";
import imghospital from "../assets/Untitled.png";
import doctor from "../assets/doctor-stethoscope (1).png";
import doctor3 from "../assets/Untitled 23.png";
import svg from "../assets/download.png";

export const Home = () => {
  const { t } = useTranslation("nav");

  return (
    <div className="px-4 py-8">
      {/* عنوان */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mb-8">
        {/* {t("home")} */}
      </h1>

      {/* اسلایدر */}
      <div className="w-full h-[500px] mb-25">
        <Carousel pauseOnHover>
          <img src={myimage} alt="slider1" className="w-full h-full object-cover" />
          <img src={myimage56} alt="slider2" className="w-full h-full object-cover" />
          <img src={image3314} alt="slider3" className="w-full h-full object-cover" />
        </Carousel>
      </div>

      {/* بخش تصاویر کنار هم */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-95">
        <img
          src={imghospital}
          alt="hospital"
          className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72"
        />
        <img
          src={doctor}
          alt="doctor"
          className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72"
        />
        <img
          src={doctor3}
          alt="doctor"
          className="sm:w-48 md:w-60 lg:w-72 xl:w-80"
        />
      </div>

      {/* اضافه کردن نوشته‌ها زیر عکس‌ها */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 mt-8">
        {/* نوشته "بهترین مراکز درمانی" */}
        <h1 className="animate-fadeIn text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 m-6 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out p-4 rounded-lg">
          {t("best_health_centers")}
        </h1>

        {/* نوشته "افراد متخصص" */}
        <h1 className="animate-fadeInDelay text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 m-6 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out p-4 rounded-lg">
          {t("specialized_experts")}
        </h1>

        {/* نوشته "بهترین تجهیزات پزشکی" */}
        <h1 className="animate-fadeInDelay text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 m-6 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out p-4 rounded-lg">
          {t("best_medical_equipment")}
        </h1>
      </div><br></br><br></br> <br /><br /><br /><br /><br /><br /><br /><br />

      {/* ردیف SVG ها */}
      <div className="flex justify-center gap-15 mt-8 ">
        {/* SVG 1 */}
        <svg
  xmlns={svg}
  className="h-60 w-90 animate-bounce text-orange-500"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path
    fillRule="evenodd"
    d="M12 2a1 1 0 011 1v14.586l5.707-5.707a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L11 17.586V3a1 1 0 011-1z"
    clipRule="evenodd"
  />
</svg>

        
        {/* SVG 2 */}
        <svg
  xmlns={svg}
  className="h-60 w-90 animate-bounce text-orange-500"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path
    fillRule="evenodd"
    d="M12 2a1 1 0 011 1v14.586l5.707-5.707a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L11 17.586V3a1 1 0 011-1z"
    clipRule="evenodd"
  />
</svg>

        {/* <svg
          xmlns={svg}
          className="h-60 w-90 animate-bounce text-orange-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 3a1 1 0 011 1v12a1 1 0 01-2 0V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M3 9a1 1 0 011 1v6a1 1 0 01-2 0V10a1 1 0 011-1z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M15 9a1 1 0 011 1v6a1 1 0 01-2 0V10a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg> */}
      </div>
    </div>
  );
};
