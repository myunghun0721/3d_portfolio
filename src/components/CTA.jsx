import React from 'react'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className='cta'>
      <p className='cta-text'>Looking for a software engineer? <br
        className='sm:block hidden' />
        I would love to participate!
      </p>
      <Link to="/contact" className='btn'>
        Contact
      </Link>
    </section>
  )
}

export default CTA
