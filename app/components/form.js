"use client"
import React, {useRef} from 'react'

function Form() {
    const formRef = useRef(null);
  return (
    <section>
        <form className="pl-10" ref={formRef} onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted successfully!");
            formRef.current.reset();
        }}>
            <label className="text-3xl font-semibold pb-2">Name</label>
            <input type="text" placeholder="Name" required className="border-2 border-black rounded-lg p-2 mb-4 w-full"/>
            <label className="text-3xl font-semibold pb-2">Email</label>
            <input type="email" placeholder="Email" required className="border-2 border-black rounded-lg p-2 mb-4 w-full"/>
            <label className="text-3xl font-semibold pb-2">Message</label>
            <textarea placeholder="Message" required className="border-2 border-black rounded-lg p-2 mb-4 w-full h-40"></textarea>
            <button type="submit" className="text-3xl font-semibold text-center bg-black text-white py-3 rounded-xl w-full cursor-pointer">Send</button>
        </form>
    </section>
  )
}

export default Form