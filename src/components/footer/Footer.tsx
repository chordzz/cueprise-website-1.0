import React from "react";

import CuepriseLogoWhite from "../../assets/logos/cueprise-logo-white.svg";

export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="py-20 px-40 bg-[#2E213D] min-h-[425px] flex items-center justify-between bg-footerBgLine bg-contain bg-left-bottom"
    >
      <div className="">
        <img
          src={CuepriseLogoWhite}
          alt="a logo description of the cueprise franchise"
          className="mb-8"
        />
        <p className="text-[#F7795B] text-[32px] mb-8">
          Want to give us a shot?
        </p>
        <span className="text-white text-[17px] opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </span>
        <button className="btn-dark block mt-12">Get started</button>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-[#F7795B] text-[17px]">Navigation</span>
        <span className="text-[15px] text-white">Benefits & Pricing</span>
        <span className="text-[15px] text-white">Features</span>
        <span className="text-[15px] text-white">Contacts</span>
      </div>
    </footer>
  );
};
