import React from 'react'
import DemoClass from '../demo-class/page'
import ContactUsForm from '../contact-us-form/page'
import GetInTouch from '../get-in-touch/page'
import Reviews from '../reviews/page'
import Faq from '../faq/page'

export default function ContactUs() {
  return (
    <div>
        <DemoClass />
        <ContactUsForm/>
        <GetInTouch/>
        <Faq/>
        <Reviews/>
    </div>
  )
}
