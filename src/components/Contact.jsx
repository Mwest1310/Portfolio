import React, { useState, useEffect } from 'react'
// uses web3forms to allow users to contact
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const accessKey = "b1e72f5c-c770-4404-93f7-15ee5b5e6d52";
    //saves the data in the form
    const onSubmit = async (event) => {
        event.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
        const formData = new FormData(event.target);
        formData.append("access_key", "b1e72f5c-c770-4404-93f7-15ee5b5e6d52");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        console.log(json);
        // sends message to the web3forms api, which then sends the message
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: json
              }).then((res) => res.json());
              console.log("Success", res);
              alert('Message Sent!');
        } catch (error) {
            console.error(error);
        }
      };

  return (
    <section id="contact">
        <div className="container">
            <h3>Get in Touch</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required />
                </div>
                <div>
                    <label for="message">Message:</label>
                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" required />
                </div>
                
                <button type="submit">Send Message &rarr;</button>
            </form>
        </div>
        
    </section>
    
  )
}

export default Contact;