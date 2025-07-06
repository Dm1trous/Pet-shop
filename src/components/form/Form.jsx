import React from 'react'
import './form.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Form = () => {
        const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gtlaklq', 'template_clho3aj', form.current, 'MjTZ4fnFOyiG8IgGf')
        e.target.reset()
    };

  return (
    <div className='container container-form'>
        <div className='form-column'>
            <h2 className='form-title'>Get <span className='form-title2'>20% Off</span> On First Purchase</h2>
            <form action="#" className='forma' id='forma' ref={form} onSubmit={sendEmail}>
                <input type="email" name='email' className='form-input' placeholder='Your Email Address' required/>
                <input type="text" name='name' className='form-input' placeholder='Your Full Name' required/>
                <input type="text" name='message' className='form-input' placeholder='Message' required/>
                <button type='submit' className='forma-btn'>SEND MESSAGE</button>
            </form>
        </div>
    </div>
  )
}

export default Form