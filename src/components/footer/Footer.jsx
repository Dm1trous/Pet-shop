import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import soc1 from '../../assets/soc1.svg'
import soc2 from '../../assets/soc2.svg'
import soc3 from '../../assets/soc3.svg'
import soc4 from '../../assets/soc4.svg'
import soc5 from '../../assets/soc5.svg'
import send from '../../assets/send.svg'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

function Footer() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gtlaklq', 'template_clho3aj', form.current, 'MjTZ4fnFOyiG8IgGf')
        e.target.reset()
    };
  return (
    <div className='container'>
        <footer className='footer'>
            <div className='footer-block'>
                <a href="#"><img src={logo} alt="лого" /></a>
                <p className='footer-text'>Subscribe to our newsletter to get updates about our grand offers.</p>
                <div className='socs'>
                    <a href="#"><img src={soc1} alt="соц" className='footer-img'/></a>
                    <a href="#"><img src={soc2} alt="соц" className='footer-img'/></a>
                    <a href="#"><img src={soc3} alt="соц" className='footer-img'/></a>
                    <a href="#"><img src={soc4} alt="соц" className='footer-img'/></a>
                    <a href="#"><img src={soc5} alt="соц" className='footer-img'/></a>
                </div>
            </div>
            <div className='footer-block'>
                <p className='footer-title'>Ouick Links</p>
                <ul className='footer-link'>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About Us</li></a>
                    <a href="#"><li>Offers</li></a>
                    <a href="#"><li>Services</li></a>
                    <a href="#"><li>Contact Us</li></a>
                </ul>
            </div>
            <div className='footer-block'>
            <p className='footer-title'>Help Centre</p>
                <ul className='footer-link'>
                    <a href="#"><li>Payments</li></a>
                    <a href="#"><li>Shipping</li></a>
                    <a href="#"><li>Product Returns</li></a>
                    <a href="#"><li>FAQs</li></a>
                    <a href="#"><li>Checkout</li></a>
                </ul>
            </div>
            <div className='footer-block'>
            <p className='footer-title'>Our Newsletter</p>
            <p className='footer-text'>Subscribe to our newsletter to get updates about our grand offers.</p>
            <form action="#" id='footer-form' className='footer-form' ref={form} onSubmit={sendEmail}>
            <input type="email" name='email' className='footer-input' placeholder='Enter your email-address' required/>
            <button type='submit' className='footer-btn'><img src={send} alt="отправить" /></button>
            </form>
            </div>
        </footer>
        <div className='under-footer'>
            <p className='under-footer-text'>©2025 Waggy. All rights reserved.</p>
            <p className='under-footer-text'>Template design by: EETK</p>
        </div>
    </div>
  )
}

export default Footer