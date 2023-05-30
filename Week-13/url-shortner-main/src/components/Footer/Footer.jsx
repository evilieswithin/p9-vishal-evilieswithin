import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black absolute bottom-0 flex items-center justify-around w-screen h-[200px] ">
      {/* Left */}
      <div className="ml-2">
       <h1 className="text-3xl text-white">Shortly</h1>

        <p className="pt-6 text-lg text-white font-light ml-2">
          Shortly provides detailed, and approximate <br /> information,
          on how your links are performing.
        </p>

        <p className="pt-8 text-base text-white font-light ml-2">
          Shortly PTY LTD 2020. All rights reserved
        </p>
      </div>

      {/* Right */}
      <div className="flex space-x-44 mt-4">
        {/* Company */}

        <ul>
        <h2 className="text-xl font-bold text-white">Features</h2>
          <li className="pt-1 text-lg text-white">Link Sharing</li>
          <li className="pt-1 text-lg text-white">Branded Links</li>
          <li className="pt-1 text-lg text-white">Analytics</li>
        </ul>

        {/* Region */}

        <ul>
          <h3 className="text-xl font-bold text-white">Resources</h3>
          <li className="pt-1 text-lg text-white">Blog</li>
          <li className="pt-1 text-lg text-white">Developers</li>
          <li className="pt-1 text-lg text-white">Support</li>
        </ul>

        {/* Help */}
        <ul>
          <h4 className="text-xl font-bold text-white">Company</h4>
          <li className="pt-1 text-lg text-white">About</li>
          <li className="pt-1 text-lg text-white">Our Team</li>
          <li className="pt-1 text-lg text-white">Careers</li>
          <li className="pt-1 text-lg text-white">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
