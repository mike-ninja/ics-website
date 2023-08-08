import Link from "next/link";
import React from "react";

const HomeContact = () => {
  return (
    <section>
      <div className="container">
        <h2>Contact Us</h2>
        <h3>Indigenous Conference Services</h3>
        <h4>Email: adminics@iinet.net.au</h4>
        <h4>Tel: (07) 4194 2803</h4>
        <Link href="/contact" className="btn btn_primary">
          Enquiry Form
        </Link>
      </div>
    </section>
  );
};

export default HomeContact;
