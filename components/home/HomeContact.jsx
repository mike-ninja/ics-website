import Link from "next/link";

// TODO: Hover effect for email and telephone 

const HomeContact = () => {
  return (
    <section>
      <div className="container grid md:grid-cols-2 gap-3 lg:gap-10 h-[300px] md:h-[350px] max-w-[1300px]">
        <div className="hidden rounded md:block bg-contact_us bg-cover bg-center h-full">
        </div>
        <div className="bg-dark_beige rounded inline-flex">
          <div className="my-auto mx-auto md:ml-10">
            <h2>Contact Us</h2>
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
