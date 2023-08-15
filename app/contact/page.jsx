"use client";

import ContactHeader from "@/components/contact/ContactHeader";
import { useRef, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
import emailjs from "emailjs-com";
import ContactUs from "@/public/assets/images/contact-us.jpg";

const page = () => {
  const [nofication, setNotification] = useState("");

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const response = await emailjs
      .sendForm(
        "service_9nsf9ub",
        "template_ox9shz8",
        form.current,
        "lFxIqWEbYuroL6TBH",
      );
    if (response.status === 200) {
      setNotification("Email Recieved!");
    } else {
      setNotification("Error occurred. Try again!");
    }
    setTimeout(() => {
      setNotification("");
    }, 3000);
    e.target.reset();
  };

  return (
    <>
      <ContactHeader />
      <section id="contact">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-12">
            <div>
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
            </div>
            <div>
              <h2 className="text-dark_brown">Enquiry Form</h2>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="grid grid-cols-1 md:grid-cols-2 gap-1"
              >
                <div className="grid grid-cols-1 gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    require="true"
                    className="bg-transparent_orange text-white placeholder-white p-2 rounded"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    require="true"
                    className="bg-transparent_orange text-white placeholder-white p-2 rounded"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Email Subject"
                    require="false"
                    className="bg-transparent_orange text-white placeholder-white p-2 rounded"
                  />
                </div>
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your Message"
                  require="true"
                  className="bg-transparent_orange text-white placeholder-white p-2 rounded"
                >
                </textarea>
                <button type="submit" className="btn btn_primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="relative">
            <Image
              src={ContactUs}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
        <h3>{nofication}</h3>
      </section>
    </>
  );
};

export default page;
