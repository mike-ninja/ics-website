import Link from 'next/link'
import React from 'react'

const HomeContact = () => {
  return (
    <section>
      <div className='container'>
        <h2>Contact Us</h2>
        <h3>Indigenous Conference Services</h3>
        <Link href='/contact' className='btn'>
          Enquiry Form
        </Link>
      </div>
    </section>
  )
}

export default HomeContact
