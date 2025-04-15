import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "flowbite-react";
import myimage from "../assets/nima.jpg";
import myimage56 from "../assets/ali.jpg";
import image3314 from "../assets/reza.jpg";
import imghospital from "../assets/Untitled.png";
import doctor from "../assets/doctor-stethoscope (1).png";
import doctor3 from "../assets/Untitled 23.png";

export const Home = () => {
  const { t } = useTranslation("nav");

  return (
    <div className="px-4 py-8">
      {/* عنوان */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mb-8">
      </h1>

      {/* اسلایدر */}
      <div className="w-full h-[500px] mb-20">
        <Carousel pauseOnHover>
          <img
            src={myimage}
            alt="slider1"
            className="w-full h-full object-cover"
          />
          <img
            src={myimage56}
            alt="slider2"
            className="w-full h-full object-cover"
          />
          <img
            src={image3314}
            alt="slider3"
            className="w-full h-full object-cover"
          />
        </Carousel>
      </div>

      {/* تصاویر همیشه در یک ردیف */}
      <div className="flex flex-row justify-center items-center gap-6 overflow-x-auto flex-nowrap px-2">
        <img
          src={imghospital}
          alt="hospital"
          className="w-36 sm:w-44 md:w-48 lg:w-52 xl:w-56 flex-shrink-0"
        />
        <img
          src={doctor}
          alt="doctor"
          className="w-36 sm:w-44 md:w-48 lg:w-52 xl:w-56 flex-shrink-0"
        />
        <img
          src={doctor3}
          alt="doctor3"
          className="w-36 sm:w-44 md:w-48 lg:w-52 xl:w-56 flex-shrink-0"
        />
      </div>

      {/* نوشته‌ها در یک ردیف, فونت کوچکتر */}
      <div className="flex flex-row justify-center items-center gap-4 flex-nowrap mt-8 overflow-x-auto px-2">
        <h1 className="text-nowrap text-base sm:text-lg font-semibold text-center bg-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out px-4 py-2 rounded-lg">
          {t("best_health_centers")}
        </h1>

        <h1 className="text-nowrap text-base sm:text-lg font-semibold text-center bg-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out px-4 py-2 rounded-lg">
          {t("specialized_experts")}
        </h1>

        <h1 className="text-nowrap text-base sm:text-lg font-semibold text-center bg-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out px-4 py-2 rounded-lg">
          {t("best_medical_equipment")}
        </h1>
      </div>

      {/* فاصله پایین */}
      <div className="my-20" />

      {/* فلش ← دایره خدمات ما ← فلش */}
      <div className="flex justify-center items-center gap-16 mt-8 flex-wrap">
        {/* فلش چپ */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 animate-bounce text-orange-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 2a1 1 0 011 1v14.586l5.707-5.707a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L11 17.586V3a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>

        {/* دایره با نوشته خدمات ما */}
        <svg
          width="180"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse"
        >
          <circle
            cx="90"
            cy="90"
            r="80"
            fill="#F97316"
            stroke="#EA580C"
            strokeWidth="4"
          />
          <text
            x="90"
            y="100"
            fontFamily="Tahoma"
            fontSize="18"
            fill="white"
            textAnchor="middle"
          >
            {t("ourServices")}
          </text>
        </svg>

        {/* فلش راست */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 animate-bounce text-orange-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 2a1 1 0 011 1v14.586l5.707-5.707a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L11 17.586V3a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* کادر تصویر و متن زیر دایره */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="flex flex-wrap justify-center gap-4">
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description"
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>{t("notify_when_new_component")}</p>
            </figcaption>
          </figure>

          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description"
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>{t("notify_when_new_component")}</p>
            </figcaption>
          </figure>

          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description"
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>{t("notify_when_new_component")}</p>
            </figcaption>
          </figure>

          {/* افزودن تصویر چهارم */}
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description"
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>{t("notify_when_new_component")}</p>
            </figcaption>
          </figure>

          {/* افزودن تصویر پنجم */}
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description"
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>{t("notify_when_new_component")}</p>
            </figcaption>
          </figure>

          {/* افزودن تصویر ششم */}
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description"
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>{t("notify_when_new_component")}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
