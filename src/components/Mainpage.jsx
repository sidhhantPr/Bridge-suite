import React from "react";

const Mainpage = () => {
  return (
    <div className="w-full h-[70vh] mt-16 bg-cover bg-[url('https://www.bridgesuite.ai/assets/image/footer-top/back-bg.png')] flex flex-col md:flex-row items-center justify-center">
      <div className="text-center md:text-left md:w-1/2 p-4 md:p-8">
        <h2 className="text-4xl font-semibold text-blue-950">
          Automate Complete Customer Lifecycle with
        </h2>
        <h2 className="text-4xl font-bold text-red-500 mt-2">ONE ECOSYSTEM</h2>
        <p className="mt-4">
          <b>MASSAED</b> uses Bridge to manage complex service functions for
          delivering seamless
        </p>
        <p>customer experience in 10+ countries across Asia and Africa</p>
      </div>
      <div className="flex items-center justify-center md:w-1/2 p-4">
        <img
          src="https://www.bridgesuite.ai/assets/image/hero-banner/award.png"
          alt="Award"
          className="w-48 md:w-72"
        />
      </div>
    </div>
  );
};

export default Mainpage;
