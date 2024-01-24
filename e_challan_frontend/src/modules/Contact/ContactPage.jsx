import React from 'react'
import Heading from '../Home/Heading'

const ContactPage = () => {
    return (
        <section className='ContactSection container'>
            <div>
                <Heading
                    heading1="Get In Touch"
                    heading2="Need Help with Ticket Checking and Payment"
                />
            </div>
            <div className='pointers'>
                <ol>
                    <li><h3>Email</h3></li>
                    <li><h4>Contact Support Team Today</h4></li>
                    <li><h4>support@TicketTracer</h4></li>
                </ol>
                <ol>
                    <li><h3>Phone</h3></li>
                    <li><h4>We're Here to Assist You</h4></li>
                    <li><h4>+91 999 888 7777</h4></li>
                </ol>
                <ol>
                    <li><h3>Office</h3></li>
                    <li><h4>123, New Delhi</h4></li>
                    <li><h4>{"Get Directions>"}</h4></li>
                </ol>
            </div>

        </section>
    )
}

export default ContactPage