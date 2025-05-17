"use client"
import React from 'react'

function Touch() {
    const handleCopy = () => {
        navigator.clipboard.writeText("+91 97113 78092")
            .then(() => {
                alert("Phone number copied to clipboard!");
            })
            .catch((error) => {
                console.error("Error copying text: ", error);
            });
    }
  return (
    <section className="border-r-3">
        <h1 className="text-5xl font-semibold text-center pb-10">Get in Touch</h1>
        <section className="grid grid-cols-2 gap-15">
            <section>
                <img src="/location.png" alt="Location" className="w-10 pb-2" />
                <h1 className="text-3xl font-semibold pb-2">Address</h1>
                <a href="https://maps.app.goo.gl/tBMyhPz7dQ6sXcGq7" target="_blank">
                    <p className="text-xl font-medium">D-31, 2nd Floor, Veena Enclave Nangloi New Delhi, 110041, West Delhi, India</p>
                </a>
            </section>

            <section>
                <img src="/phone.png" alt="Phone" className="w-10 pb-2"/>
                <h1 className="text-3xl font-semibold pb-2">Phone</h1>
                <section className="flex items-center gap-2">
                    <a href="tel:+919711378092">
                        <p className="text-xl font-medium">+91 97113 78092</p>
                    </a>
                    <img src="/copy.png" className="w-7" onClick={handleCopy}/>
                </section>
            </section>

            <section>
                <img src="/mail.png" alt="Email" className="w-10 pb-2"/>
                <h1 className="text-3xl font-semibold pb-2">Email</h1>
                <a href="mailto:mail.sciencegroup@gmail.com">
                    <p className="text-xl font-medium">mail.sciencegroup@gmail.com</p>
                </a>
            </section>

            <section>
                <img src="/whatsapp.png" alt="WhatsApp" className="w-10 pb-2"/>
                <h1 className="text-3xl font-semibold pb-2">WhatsApp</h1>
                <a href="https://wa.me/919711378092" target="_blank">
                    <button className="text-xl font-medium text-center bg-black text-white px-5 py-3 rounded-xl cursor-pointer">Chat with us</button>
                </a>
            </section>
        </section>
    </section>
  )
}

export default Touch