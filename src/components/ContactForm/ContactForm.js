import React, { useState } from 'react';
import "./../../App.css";
import linkedin from './../img/instagram_logo_icon.png';
import instagram from './../img/instagram_logo_icon.png';
import twitter from './../img/twitter_logo_icon.png';
import { Toaster, toast } from 'sonner';

export default function ContactForm() {

    const [nameValue , setName] = useState('');
    const [emailValue , setEmail] = useState('');
    const [messageValue , setMessage] = useState('');

    const links = (e)=>{
        e.preventDefault();
        if (e.currentTarget.id === 'LinkedIn') {
            window.location.href = 'https://www.linkedin.com/in/arjun-r-634413236/';
        }
        else if (e.currentTarget.id === 'Instagram') {
            window.location.href = 'https://www.instagram.com/rgowdaarjun/';
        }
        else if (e.currentTarget.id === 'twitter') {
            window.location.href = 'https://twitter.com/ArjunRGowda6';
        }
    }

    const sendForm = async (e)=>{
        e.preventDefault();
        let name = nameValue;
        let email = emailValue;
        let message = messageValue;

        const response = await fetch('https://portfolio-server-ngoy.onrender.com/api/contactForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        });

        if (response.status === 200) {
            // The user is authenticated.
            toast.success('Form sent successfully.');
        } else {
            // The user is not authenticated.
        }
    }

  return (
    <div>
      <div id="spyContact" className='default-margin-x-y d-flex justify-content-center align-items-center flex-column'>
                <h1 className='fw-bold mb-4'>Contact Us</h1>
                <div
                    className='width-100 cardBorder  d-flex justify-content-between align-items-center flex-sm-row flex-column rounded-3 p-4'>
                    <form className='width-100 mx-2'>
                        <div className="mb-3">
                            <label htmlFor="InputName" className="form-label fw-bold">Name</label>
                            <input type="name" value={nameValue} onChange={(e)=> setName(e.target.value)} className="form-control" id="InputName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                            <input type="email" value={emailValue} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Message</label>
                            <textarea className="form-control" value={messageValue} onChange={(e)=> setMessage(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" onClick={sendForm} className="btn-for-projects">Submit</button>
                    </form>
                    <div id='forHeight'
                        className='width-50 d-flex justify-content-sm-start justify-content-end align-items-center flex-column mx-2'>
                        <h3>Contact Info</h3>
                        <div
                            className='width-100 default-border contactInfo d-felx justify-content-center align-items-center flex-column p-4 rounded-3'>
                            <h5 className='text-center'>Arjun R</h5>
                            <li className='pb-2 text-center'>
                                <a href="/">rarjun7019@gmail.com</a>
                            </li>
                            <li className='pb-2 text-center'>
                                <a href="/">+91 7019629505</a>
                            </li>
                        </div>
                        <div className='width-100 d-flex justify-content-around align-items-center flex-row p-4'>
                            <div onClick={links} id="LinkedIn" className='links-contact default-border rounded-3 p-2'>
                                <img src={linkedin} alt="LinkedIn" />
                            </div>
                            <div onClick={links} id="Instagram" className='links-contact default-border rounded-3 p-2'>
                                <img src={instagram} alt="Instagram" />
                            </div>
                            <div onClick={links} id="twitter" className='links-contact default-border rounded-3 p-2'>
                                <img src={twitter} alt="twitter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-right" />
    </div>
  )
}
