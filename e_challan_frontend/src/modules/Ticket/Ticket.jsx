import React from 'react'
import Heading from '../Home/Heading'
import FAQ from './FAQ'

const Ticket = () => {
    return (
        <>
            <section className='vehicleInputSection container'>
                <div className='vehicleInputArea'>
                    <Heading
                        heading1='Please provide the vehicle number plate to check for any speeding tickets online!'
                    />
                    <input autoCapitalize='words' className='vehicleInput'/>
                    <button>Check</button>
                </div>
            </section>
            <section className='FAQSection container'>
                    <Heading
                    heading1="FAQ"
                    heading2="Find answers to frequently asked questions about our online speeding ticket checking and payment service."
                    button1="Contact"
                    className="FAQTitle"
                    />
                <div className='FAQs'>
                    <hr/>
                    <FAQ
                        question="How does it work?"
                        answer="Our online speeding ticket checking and payment service allows you to input your vehicle number plate and quickly access information about any outstanding speeding tickets. You can also conveniently make payments for these tickets online."
                        />
                    <FAQ
                        question="Is it secure?"
                        answer="Yes, we prioritize the security of your personal information. Our website is encrypted to ensure that your data is protected." />
                    <FAQ
                        question="What if I have multiple tickets?"
                        answer="If you have multiple speeding tickets, our service will display all the relevant information for each ticket. You can pay them individually or in a single transaction."
                    />
                    <FAQ
                        question="Can I contest a ticket?"
                        answer="Yes, you can contest a speeding ticket through our website. We provide information on the process and necessary steps to dispute a ticket."
                    />
                    <FAQ
                        question="What payment methods are accepted?"
                        answer="We accept various payment methods, including credit cards, debit cards, and online payment platforms like PayPal."
                    />
                </div>
            </section>
        </>
    )
}

export default Ticket