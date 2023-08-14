import Link from "next/link";
import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";
import Circle from "@/public/assets/images/circle.svg";

const FooterContact = () => {
  return (
    <section className="relative lg:py-28">
      <div className="hidden md:block h-[250px] w-[250px] lg:h-[450px] lg:w-[450px] absolute bottom-0 right-0">
        <Image src={Circle} width={450} height={450} alt="ics-conferences" />
      </div>
      <div className="container">
        <h2 className="text-dark_brown">Contact Us</h2>
        <h3 className="text-light_brown mb-4 lg:text-3xl">
          Indigenous Conference Services
        </h3>
        <div className="text-dark_brown flex items-center md:text-xl lg:text-2xl md:mb-2 lg:mb-3">
          <BiSolidRightArrow className="mr-2" />
          <span className="transition-all hover:scale-105">
            Email:&nbsp;
            <a
              href="mailto:adminics@iinet.net.au"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >
              adminics@iinet.net.au
            </a>
          </span>
        </div>
        <div className="text-dark_brown flex items-center md:text-xl lg:text-2xl md:mb-2 lg:mb-3">
          <BiSolidRightArrow className="mr-2" />
          <span className="transition-all hover:scale-105">
            Tel:&nbsp;
            <a href="tel:+6141942803" className="font-bold">
              (07) 4194 2803
            </a>
          </span>
        </div>
        <Link href="/contact" className="btn btn_primary text-center">
          Enquiry Form
        </Link>
      </div>
      <small className="text-metal_gray italic absolute bottom-0 left-1/2 translate-x-[-50%] text-center">
        © Indigenous Conference Services 2023
      </small>
    </section>
  );
};

export default FooterContact;
