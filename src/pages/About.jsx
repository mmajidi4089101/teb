import React from 'react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation('nav');

  return (
    <div className="flex flex-wrap justify-between gap-8">
      {/* فرم سمت راست */}
      <form className="max-w-sm mx-auto flex-1">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
          <input type="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
        </div>
        <div className="mb-5">
          <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User family</label>
          <input type="password" id="repeat-password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            با شما تماس خواهیم گرفت
          </label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Register new account
        </button>
      </form>




      <div className="flex-1 text-right mt-8">
        <p><strong>{t("Expertise and experience")}</strong> {t("The doctors and medical staff of this clinic are experienced and professional specialists in various medical fields. This feature makes patients feel safe and confident.")}</p>
        <p><strong>{t("Advanced features:")}</strong>{t("Imam Mujtaba (AS) Clinic is equipped with the best and most modern medical equipment used to diagnose and treat diseases. This equipment helps doctors to diagnose and treat diseases more accurately and quickly.")}</p>
        <p><strong>{t("Various services")}</strong>{t("clinic provides")}</p>
        <p><strong>{t("accessibility3")} </strong> {t("features of this clinic")}</p>
        <p><strong>{t("Calm and friendly environment:")}</strong> {t("patients feel ")}</p>
        <p><strong>  {t("Special services")}</strong>{t("provides medical services  ")} </p>
        

        <div class="flex flex-nowrap gap-4 overflow-x-auto">
  <figure class="relative w-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 flex-shrink-0">
    <a href="#">
      <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
    </a>
    <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Do you want to get notified when a new component is added to Flowbite?</p>
    </figcaption>
  </figure>
  <figure class="relative w-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 flex-shrink-0">
    <a href="#">
      <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
    </a>
    <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Do you want to get notified when a new component is added to Flowbite?</p>
    </figcaption>
  </figure>

  <figure class="relative w-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 flex-shrink-0">
    <a href="#">
      <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
    </a>
    <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Do you want to get notified when a new component is added to Flowbite?</p>
    </figcaption>
  </figure>
</div>



      </div>
      








      <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
  <a href="#">
    <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description"/>
  </a>
  <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Do you want to get notified when a new component is added to Flowbite?</p>
  </figcaption>
</figure>









    </div>
    
  );
};
