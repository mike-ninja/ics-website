import Link from "next/link";
import Image from "next/image";
// import ContactImage from "@/public/assets/images/contact-us.jpg";

const HomeContact = () => {
  return (
    <section>
      <div className="container grid md:grid-cols-2 gap-3 h-[300px] md:h-[350px]">
        <div className="hidden rounded md:block bg-contact_us bg-cover bg-center h-full">
        </div>
        <div className="bg-dark_beige rounded inline-flex">
          <div className="my-auto mx-auto md:ml-10 grid gap-1 uppercase">
            <h2>Contact Us</h2>
            <div className="h-[2px] w-16 bg-dark_brown mb-2"></div>
            <p className="text-dark_brown">
              <a href="mailto:adminics@iinet.net.au" target="_blank" rel="noreferrer">
                Email: adminics@iinet.net.au
              </a>
            </p>
            <p className="text-dark_brown">
              <a href="tel:+6141942803">
                Tel: (07) 4194 2803
              </a>
            </p>
            <Link href="/contact" className="btn btn_primary text-center">
              Enquiry Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
