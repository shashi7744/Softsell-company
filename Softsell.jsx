import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill,faBriefcase,faCheck,faUserCheck,faHandshake,faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function Softsell() {
  return(
    <div>
        {/* Hero Section  */}
       <section className="hero-section">
        <h3>SOFTSELL COMPANY</h3>
        <h1>Maximize Value from Unused Software Licenses</h1>
        <p>SoftSell helps you sell unused software licenses in three simple steps.</p>
        <button>Sell My Licenses</button>
      </section>

      
           {/* How It Works */}
           <section className="section">
        <h2 className="section-title">How It Works</h2>
        <div className="grid grid-3">
          <div className="box">
           <form>
            <input type="file"/>
           </form>
            <h3>Upload License</h3>
            <p>Submit your unused license securely through our platform.</p>
          </div>
          <div className="box">
          <FontAwesomeIcon icon={faBriefcase} />
            <h3>Get Valuation</h3>
            <p>We evaluate the market value of your license quickly.</p>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faMoneyBill} />
            <h3>Get Paid</h3>
            <p>Receive payment promptly once your license is sold.</p>
          </div>
        </div>
      </section>

          {/* Why Choose Us */}
      <section className="section">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="grid grid-4">
          <div className="box">
          <FontAwesomeIcon icon={faCheck} />
            <p>Trusted by 1,000+ businesses</p>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faUserCheck} />
            <p>Expert license evaluation</p>
          </div>
          <div className="box">
          <FontAwesomeIcon icon={faHandshake} />
            <p>Secure transactions</p>
          </div>
          <div className="box">
          <FontAwesomeIcon icon={faThumbsUp} />
            <p>Fast and simple process</p>
          </div>
        </div>
      </section>


       {/* Testimonials */}
       <section className="section testimonials">
        <h2 className="section-title">Customer Testimonials</h2>
        <div className="grid grid-2">
          <div className="testimonial-card">
            <p>"SoftSell made it easy to recover value from unused software. Super fast and professional."</p>
            <p className="testimonial-name">Jane Doe</p>
            <p className="testimonial-role">CTO, TechNova</p>
          </div>
          <div className="testimonial-card">
            <p>"Highly recommend SoftSell. We turned software we no longer needed into working capital!"</p>
            <p className="testimonial-name">John Smith</p>
            <p className="testimonial-role">IT Manager, InnovateX</p>
          </div>
        </div>
      </section>

           {/* Cantact */}
           <section className="form">
           <form>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
            <label for="license">Company License Type:</label>
            <select id="license" name="license" required >
                <option value="">Select License Type</option>
                <option value="basic">Basic</option>
                <option value="pro">Professional</option>
                <option value="enterprise">Enterprise</option>
            </select>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
           </section>
    </div>
  )
}
export default Softsell