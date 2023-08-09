import Link from "next/link";
import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";
import Circle from "@/public/assets/images/circle.svg";

// TODO: Hover effect for email and telephone

// <div className="container grid md:grid-cols-2 gap-3 lg:gap-10 h-[300px] md:h-[350px] max-w-[1300px]">
//   <div className="hidden rounded md:block bg-contact_us bg-cover bg-center h-full">
//   </div>
//   <div className="bg-dark_beige rounded inline-flex">
//     <div className="my-auto mx-auto md:ml-10">
//       <h2>Contact Us</h2>
//       <p className="text-dark_brown">
//         <a href="mailto:adminics@iinet.net.au" target="_blank" rel="noreferrer">
//           Email: adminics@iinet.net.au
//         </a>
//       </p>
//       <p className="text-dark_brown">
//         <a href="tel:+6141942803">
//           Tel: (07) 4194 2803
//         </a>
//       </p>
//     </div>
//   </div>
// </div>

const HomeContact = () => {
  return (
    <section className="relative lg:py-28">
      <div className="hidden md:block h-[250px] w-[250px] lg:h-[400px] lg:w-[400px] absolute bottom-0 right-[-15px] lg:right-[-30px]">
        <Image src={Circle} fill alt="ics-conferences" />
      </div>
      <div className="container z-10">
        <h2 className="text-dark_brown lg:text-[3rem] lg:mb-2">Contact Us</h2>
        <h3 className="text-light_brown mb-4 lg:text-3xl">
          Indigenous Conference Services
        </h3>
        <div className="text-dark_brown flex items-center md:text-xl lg:text-2xl md:mb-2 lg:mb-3">
          <BiSolidRightArrow className="mr-2" />
          <span>
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
          <span>
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
    </section>
  );
};

export default HomeContact;
