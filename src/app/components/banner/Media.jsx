import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import Link from 'next/link';



const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              {/* <FaFacebookF /> */}
              <Link href="https://www.facebook.com/surajrandharioffecial/" target="_blank"><FaFacebookF /></Link>
            </span>
            <span className="bannerIcon">
              {/* <FaInstagram /> */}
              <Link href="https://www.instagram.com/suraj_randhari_/" target="_blank"><FaInstagram /></Link>

            </span>
            <span className="bannerIcon">
              {/* <FaLinkedinIn /> */}
              <Link href="https://www.linkedin.com/in/suraj-randhari/" target="_blank"><FaLinkedinIn /></Link>

            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media   