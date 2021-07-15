import React from 'react';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/reset.css';
import '../../css/bootstrap.css';
const ContactUs = () => {
  return (
    <div>
      <section className="contactbg privacypagebg aboutuspagebg internal-enterprise-banner-page">
        <div className="banner-text">
          <h2>CONTACT US</h2>
          <p>
            Remember any questions, tips or advice you need. Take advantage of our various free
            customer focused options:
          </p>
        </div>
      </section>
      <section className="contactmaincard">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
              <div className="contactus-left-card">
                <form>
                  <div className="contactus-left-card-input form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" name="name" />
                  </div>
                  <div className="contactus-left-card-input form-group">
                    <label>Email</label>
                    <input className="form-control" type="text" name="email" />
                  </div>
                  <div className="contactus-left-card-input form-group">
                    <label>Subject</label>
                    <input className="form-control" type="text" name="subject" />
                  </div>
                  <div className="contactus-left-card-input form-group">
                    <label>Message</label>
                    <textarea name="" id="" className="form-control" rows="5"></textarea>
                  </div>
                  <div className="custom-submit form-group">
                    <button className="primary-yellow-filled-btn">send Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
              <div className="contactus-right-card">
                <div className="contactus-right-card-icon">
                  <i className="fas fa-lightbulb"></i>
                  <span>
                    {' '}
                    advantage of all the free tips and advise in our{' '}
                    <a href="https://www.virtualstaff.ph/blog/">Philippines outsourcing training</a>
                  </span>
                </div>
                <div className="contactus-right-card-icon">
                  <i className="fas fa-envelope"></i>
                  <span>
                    Email us at <a href="mailto:support@virtualstaff.ph">support@virtualstaff.ph</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
