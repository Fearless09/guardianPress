import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-info text-white mt-4'>
            <div className="container py-5">
                <div className="row">
                    {/* About US */}
                    <div className="col-md">
                        <h5>About Us</h5>
                        <p>Guardian Press is dedicated to delivering accurate, reliable, and unbiased news coverage. We strive to provide insightful reporting on a wide range of topics to keep our readers informed and engaged. <Link to={'/aboutus'} title='About US' className='text-light'>Click here</Link> to know more about Guardian Press</p>
                    </div>
                    {/* Contact US */}
                    <div className="col-md mt-3 mt-md-0">
                        <h5>Contact Us</h5>
                        <p>We welcome your feedback, questions, and news tips. Feel free to reach out to our team <a href="mailto:guardianpress@gmail.com" title='Email US' className='text-light'>via email</a></p>
                        {/*  or by filling out the <Link title='Contact Form' className='text-light'>contact form</Link> on our website */}
                    </div>
                    {/* Follow US */}
                    <div className="col-md mt-3 mt-md-0">
                        <h5>Follow Us</h5>
                        <p>Connect with us on social media to stay updated with the latest news, articles, and behind-the-scenes glimpses. Follow us on <a href="https://github.com/Fearless09/guardianPress/tree/master" target='_blank' title='Follow US on GitHub' className='text-light'>GitHub</a>, <a href="https://twitter.com/ope_yemi_dev/status/1665259084767981568?s=20" target='_blank' title='Follow US on Twitter' className='text-light'>Twitter</a>, and <a href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7071036966493913088/" target='_blank' title='Follow US on LinkedIn' className='text-light'>LinkedIn</a> to join the conversation.</p>
                    </div>
                </div>
                <div className='text-md-center mt-4 mt-md-2'>
                    <h5>Copyright</h5>
                    <p className='lead mb-0'>&copy; 2023 Guardian Press. All rights reserved. The content and materials on this website are protected by copyright laws. Reproduction, redistribution, or unauthorized use of any content without permission is strictly prohibited.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
