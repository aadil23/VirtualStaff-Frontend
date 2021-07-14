import React from 'react';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/reset.css';
import '../../css/bootstrap.css';
const EnterPrice = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="#">
              <img className="img-fluid" src="images/homepage/logo.png" alt="logo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon">
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.23926 4.23096H21.5518C21.9833 4.23096 22.333 3.8812 22.333 3.44971V1.49658C22.333 1.06509 21.9833 0.715332 21.5518 0.715332H1.23926C0.807764 0.715332 0.458008 1.06509 0.458008 1.49658V3.44971C0.458008 3.8812 0.807764 4.23096 1.23926 4.23096ZM1.23926 12.0435H21.5518C21.9833 12.0435 22.333 11.6937 22.333 11.2622V9.30908C22.333 8.87759 21.9833 8.52783 21.5518 8.52783H1.23926C0.807764 8.52783 0.458008 8.87759 0.458008 9.30908V11.2622C0.458008 11.6937 0.807764 12.0435 1.23926 12.0435ZM1.23926 19.856H21.5518C21.9833 19.856 22.333 19.5062 22.333 19.0747V17.1216C22.333 16.6901 21.9833 16.3403 21.5518 16.3403H1.23926C0.807764 16.3403 0.458008 16.6901 0.458008 17.1216V19.0747C0.458008 19.5062 0.807764 19.856 1.23926 19.856Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    Find Staff
                    <svg
                      width="13"
                      height="8"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.90068 7.54583L1.11943 2.76458C0.788965 2.43411 0.788965 1.89973 1.11943 1.57278L1.91396 0.778247C2.24443 0.447778 2.77881 0.447778 3.10576 0.778247L6.49482 4.16731L9.88389 0.778247C10.2144 0.447778 10.7487 0.447778 11.0757 0.778247L11.8702 1.57278C12.2007 1.90325 12.2007 2.43762 11.8702 2.76458L7.08897 7.54583C6.76553 7.87629 6.23115 7.87629 5.90068 7.54583Z"
                        fill="#004C70"
                      />
                    </svg>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Link 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    Find Jobs
                    <svg
                      width="13"
                      height="8"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.90068 7.54583L1.11943 2.76458C0.788965 2.43411 0.788965 1.89973 1.11943 1.57278L1.91396 0.778247C2.24443 0.447778 2.77881 0.447778 3.10576 0.778247L6.49482 4.16731L9.88389 0.778247C10.2144 0.447778 10.7487 0.447778 11.0757 0.778247L11.8702 1.57278C12.2007 1.90325 12.2007 2.43762 11.8702 2.76458L7.08897 7.54583C6.76553 7.87629 6.23115 7.87629 5.90068 7.54583Z"
                        fill="#004C70"
                      />
                    </svg>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Link 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    How it works
                    <svg
                      width="13"
                      height="8"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.90068 7.54583L1.11943 2.76458C0.788965 2.43411 0.788965 1.89973 1.11943 1.57278L1.91396 0.778247C2.24443 0.447778 2.77881 0.447778 3.10576 0.778247L6.49482 4.16731L9.88389 0.778247C10.2144 0.447778 10.7487 0.447778 11.0757 0.778247L11.8702 1.57278C12.2007 1.90325 12.2007 2.43762 11.8702 2.76458L7.08897 7.54583C6.76553 7.87629 6.23115 7.87629 5.90068 7.54583Z"
                        fill="#004C70"
                      />
                    </svg>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Link 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Enterprise
                  </a>
                </li>
                <li className="nav-item login-li">
                  <a href="#" className="login-text">
                    Log In
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C5.73478 2 5.48043 2.10536 5.29289 2.29289C5.10536 2.48043 5 2.73478 5 3V6.5H9.25L7.56 4.855C7.47809 4.75935 7.43528 4.63631 7.44014 4.51047C7.44501 4.38464 7.49717 4.26527 7.58622 4.17622C7.67527 4.08717 7.79464 4.035 7.92047 4.03014C8.04631 4.02528 8.16935 4.06809 8.265 4.15L11.16 7.045L8.265 9.94C8.16935 10.0219 8.04631 10.0647 7.92047 10.0599C7.79464 10.055 7.67527 10.0028 7.58622 9.91378C7.49717 9.82473 7.44501 9.70536 7.44014 9.57953C7.43528 9.45369 7.47809 9.33065 7.56 9.235L9.25 7.5H5V15C5 15.2652 5.10536 15.5196 5.29289 15.7071C5.48043 15.8946 5.73478 16 6 16H14C14.2652 16 14.5196 15.8946 14.7071 15.7071C14.8946 15.5196 15 15.2652 15 15V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2Z"
                        fill="white"
                      />
                      <path
                        d="M5 6.5H2C1.86739 6.5 1.74021 6.55268 1.64645 6.64645C1.55268 6.74021 1.5 6.86739 1.5 7C1.5 7.13261 1.55268 7.25979 1.64645 7.35355C1.74021 7.44732 1.86739 7.5 2 7.5H5V6.5Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav-item signup-li">
                  <a href="#" className="signup-text">
                    Sign Up
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11.5C6.00117 10.3761 6.34613 9.27948 6.98856 8.3573C7.63099 7.43513 8.54015 6.73154 9.594 6.341C9.8557 5.76218 9.99397 5.1352 10 4.5C10 2.015 10 0 7 0C4 0 4 2.015 4 4.5C4 6.048 4.898 7.595 6 8.216V9.041C2.608 9.318 0 10.985 0 13H6.208C6.06984 12.512 5.99984 12.0072 6 11.5Z"
                        fill="#0093D1"
                      />
                      <path
                        d="M11.5 7C10.3065 7 9.16193 7.47411 8.31802 8.31802C7.47411 9.16193 7 10.3065 7 11.5C7 12.6935 7.47411 13.8381 8.31802 14.682C9.16193 15.5259 10.3065 16 11.5 16C12.6935 16 13.8381 15.5259 14.682 14.682C15.5259 13.8381 16 12.6935 16 11.5C16 10.3065 15.5259 9.16193 14.682 8.31802C13.8381 7.47411 12.6935 7 11.5 7ZM14 12H12V14H11V12H9V11H11V9H12V11H14V12Z"
                        fill="#0093D1"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className="internal-enterprise-banner-page">
        <div className="internal-enterprise-banner-left">
          <h2>Enterprise Solution</h2>
        </div>
        <div className="internal-enterprise-banner-right">
          <p>
            Build a professional outsourced team in the Philippines using our turnkey outsourcing
            service
          </p>
        </div>
      </section>

      <section className="internal-recruitment-process">
        <div className="container">
          <div className="internal-recruitment-heading">
            <h3>THE RECRUITMENT PROCESS</h3>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xs-4">
              <div className="internal-recruitment-card">
                <div className="internal-recruitment-icon-text">
                  <div className="internal-recruitment-icon">
                    <img src="images/enterprise/call-center-operatordarkblue.png" />
                  </div>
                  <div className="internal-recruitment-text">01</div>
                </div>
                <div className="internal-recruitment-content">
                  <h4>DO I CHOOSE MY OWN VIRTUAL STAFF? </h4>
                  <p>
                    Yes, you do. You always remain in control. We find the best candidates, we
                    preliminary interview them, and then forward to you the resumes, and schedule
                    interviews via video/phone call.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xs-4">
              <div className="internal-recruitment-card">
                <div className="internal-recruitment-icon-text">
                  <div className="internal-recruitment-icon">
                    <img src="images/enterprise/time-leftdarkblue.png" />
                  </div>
                  <div className="internal-recruitment-text">02</div>
                </div>
                <div className="internal-recruitment-content">
                  <h4>HOW LONG DOES THE PROCESS TAKE? </h4>
                  <p>
                    Because this is a professional headhunting service, and we don’t recycle staff
                    from previous clients we worked with, It takes around 10 days from signing the
                    agreement with us to your staff starting work.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xs-4">
              <div className="internal-recruitment-card">
                <div className="internal-recruitment-icon-text">
                  <div className="internal-recruitment-icon">
                    <img src="images/enterprise/human-resourcesdarkblue.png" />
                  </div>
                  <div className="internal-recruitment-text">03</div>
                </div>
                <div className="internal-recruitment-content">
                  <h4>IS THERE A RECRUITMENT FEE? </h4>
                  <p>No. We charge a $0 recruitment fee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="turnkey-section internal-recruitment-process">
        <div className="container">
          <div className="internal-recruitment-heading">
            <h3>
              Our Turnkey System to Professionally Building Your Virtual Team in the Philippines
            </h3>
            <hr />
            <p>
              Hire part-time or full-time staff in the Philippines. We handle the recruitment,
              payroll, legal and compliance. In fact, we handle everything for you!
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xs-4">
              <div className="turnkey-card">
                <div className="turnkey-card-img">
                  <div className="turnkey-card-icon">
                    <img src="images/enterprise/whitehover/recruitment.png" />
                  </div>
                </div>
                <div className="turnkey-card-content">
                  <h4>Recruitment Specialist</h4>
                  <p>
                    Our talent acquisition team will find you the best staff in the Philippines
                    based on what you need.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xs-4">
              <div className="turnkey-card">
                <div className="clientbgsection turnkey-card-img">
                  <div className="turnkey-card-icon">
                    <img src="images/enterprise/whitehover/monitor.png" />
                  </div>
                </div>
                <div className="turnkey-card-content">
                  <h4>Client Success Manager</h4>
                  <p>
                    Have an expert in your corner. You get your own experienced client success
                    manager who is there to help you make outsourcing a success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xs-4">
              <div className="turnkey-card">
                <div className="legalbgsection turnkey-card-img">
                  <div className="turnkey-card-icon">
                    <img src="images/enterprise/whitehover/account.png" />
                  </div>
                </div>
                <div className="turnkey-card-content">
                  <h4>Legal Protections</h4>
                  <p>
                    We onboard the staff with our Philippine company before assigning them to work
                    for you. This means we can provide you with extra legal protection.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xs-4">
              <div className="turnkey-card">
                <div className="simplebgsection turnkey-card-img">
                  <div className="turnkey-card-icon">
                    <img src="images/enterprise/whitehover/contract.png" />
                  </div>
                </div>
                <div className="turnkey-card-content">
                  <h4>Simple Pricing</h4>
                  <p>
                    The amount you pay is inclusive of everything. Staff salary, our management fee,
                    payroll, and all legal compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xs-4">
              <div className="turnkey-card">
                <div className="staffbgsection turnkey-card-img">
                  <div className="turnkey-card-icon">
                    <img src="images/enterprise/whitehover/salary.png" />
                  </div>
                </div>
                <div className="turnkey-card-content">
                  <h4>Staff Monitoring</h4>
                  <p>
                    Your client success manager will track the hours your staff work, and guarantee
                    that you never pay for any time that your staff don’t work.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xs-4">
              <div className="turnkey-card">
                <div className="peacebgsection turnkey-card-img">
                  <div className="turnkey-card-icon">
                    <img src="images/enterprise/whitehover/peace.png" />
                  </div>
                </div>
                <div className="turnkey-card-content">
                  <h4>Peace of Mind</h4>
                  <p>
                    That you have the full weight of virtualstaff.ph behind you to make outsourcing
                    to the Philippines a long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="new-enterprise-privacy-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-6 col-lg-6 col-xs-12">
              <div className="accordion" id="faq">
                <div className="card">
                  <div className="card-header" id="faqhead1">
                    <a
                      href="#"
                      className="btn btn-header-link"
                      data-toggle="collapse"
                      data-target="#faq1"
                      aria-expanded="true"
                      aria-controls="faq1"
                    >
                      What About Privacy Concerns?
                    </a>
                  </div>

                  <div
                    id="faq1"
                    className="collapse show"
                    aria-labelledby="faqhead1"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <p>
                        Yes, you do. You always remain in control. We find the best candidates, we
                        preliminary interview them, and then forward to you the resumes, and
                        schedule interviews via video/phone call.
                      </p>
                      <ul>
                        <li>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                              fill="#0A2855"
                            />
                          </svg>
                          <span>
                            All staff are onboarded with us via our Philippine company. This means,
                            like a local company in your home country, we can enforce contracts and
                            compliance.
                          </span>
                        </li>
                        <li>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                              fill="#0A2855"
                            />
                          </svg>
                          <span>
                            Staff sign an NDA before they begin working for your business.
                          </span>
                        </li>
                        <li>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                              fill="#0A2855"
                            />
                          </svg>
                          <span>
                            You get your own dedicated account manager who’s there to ensure
                            everything goes smoothly from day 1
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqhead2">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq2"
                      aria-expanded="true"
                      aria-controls="faq2"
                    >
                      WHAT IF YOU WANT TO REPLACE YOUR VIRTUAL STAFF?
                    </a>
                  </div>

                  <div id="faq2" className="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        It’s easy. You just inform your account manager and we will find you
                        replacements to choose from.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqhead3">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq3"
                      aria-expanded="true"
                      aria-controls="faq3"
                    >
                      HERE’S HOW WE GUARANTEE YOUR VIRTUAL STAFF ARE WORKING!
                    </a>
                  </div>

                  <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        It’s free. It costs you $0. We do it at no additional cost. You are ONLY
                        ever billed for the hours your virtual staff work.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqhead4">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq4"
                      aria-expanded="true"
                      aria-controls="faq4"
                    >
                      WHO MANAGES YOUR FILIPINO STAFF?!
                    </a>
                  </div>

                  <div id="faq4" className="collapse" aria-labelledby="faqhead4" data-parent="#faq">
                    <div className="card-body">
                      <ul>
                        <li>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                              fill="#0A2855"
                            />
                          </svg>
                          <span>
                            Your staff login through digital biometric entry and exit and exit
                            (start and end of shift)
                          </span>
                        </li>
                        <li>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                              fill="#0A2855"
                            />
                          </svg>
                          <span>
                            Your staff login to time tracker. This is a screen monitoring system
                            that keeps them accountable
                          </span>
                        </li>
                        <li>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                              fill="#0A2855"
                            />
                          </svg>
                          <span>
                            Your staff login to time tracker. This is a screen monitoring system
                            that keeps them accountable
                          </span>
                        </li>{' '}
                        <li>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                              fill="#0A2855"
                            />
                          </svg>
                          <span>
                            We will help you put the right systems in place to maximise additional
                            productivity through accountability measures such as end of day and end
                            of week reports.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqhead5">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq5"
                      aria-expanded="true"
                      aria-controls="faq5"
                    >
                      HOW LONG IS THE CONTRACT?
                    </a>
                  </div>

                  <div id="faq5" className="collapse" aria-labelledby="faqhead5" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        Your agreement with us on a month on month basis as we believe you should
                        always have that flexibility.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqhead5">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq6"
                      aria-expanded="true"
                      aria-controls="faq6"
                    >
                      WHY THE PHILIPPINES
                    </a>
                  </div>

                  <div id="faq6" className="collapse" aria-labelledby="faqhead6" data-parent="#faq">
                    <div className="card-body">
                      <ul>
                        <li>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                              fill="#0A2855"
                            />
                          </svg>
                          <span>Save 70-80% on salary costs</span>
                        </li>
                        <li>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                              fill="#0A2855"
                            />
                          </svg>
                          <span>English is an official language</span>
                        </li>
                        <li>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                              fill="#0A2855"
                            />
                          </svg>
                          <span>Degrees are taught in English</span>
                        </li>{' '}
                        <li>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                              fill="#0A2855"
                            />
                          </svg>
                          <span>Highly educated workforce</span>
                        </li>
                      </ul>
                      <p>
                        Those are just some of the reasons why companies like Slack, Goldman Sachs,
                        Barclays Bank and WhatsApp all outsource to the Philippines.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqhead7">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq7"
                      aria-expanded="true"
                      aria-controls="faq7"
                    >
                      WHAT POSITIONS CAN WE HELP YOU WITH?
                    </a>
                  </div>

                  <div id="faq7" className="collapse" aria-labelledby="faqhead7" data-parent="#faq">
                    <div className="card-body">
                      <div className="custom-bulletin-area">
                        <ul>
                          <li>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                                fill="#0A2855"
                              />
                            </svg>
                            <span>Virtual Assistants</span>
                          </li>
                          <li>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                                fill="#0A2855"
                              />
                            </svg>
                            <span>Customer Support (Live chat, email, tickets)</span>
                          </li>
                          <li>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                                fill="#0A2855"
                              />
                            </svg>
                            <span>Copywriters</span>
                          </li>
                          <li>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                                fill="#0A2855"
                              />
                            </svg>
                            <span>Video Editors</span>
                          </li>
                          <li>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                                fill="#0A2855"
                              />
                            </svg>
                            <span>Graphic Designers</span>
                          </li>
                          <li>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                                fill="#0A2855"
                              />
                            </svg>
                            <span>Front End Developers (WordPress)</span>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                                fill="#0A2855"
                              />
                            </svg>
                            <span>Accountants</span>
                          </li>
                          <li>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                                fill="#0A2855"
                              />
                            </svg>
                            <span>Bookkeepers</span>
                          </li>
                          <li>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                                fill="#0A2855"
                              />
                            </svg>
                            <span>eCommerce assistant</span>
                          </li>
                          <li>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                                fill="#0A2855"
                              />
                            </svg>
                            <span>Data Entry</span>
                          </li>
                          <li>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z"
                                fill="#0A2855"
                              />
                            </svg>
                            <span>Social Media Assistant</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-6 col-lg-6 col-xs-12">
              <div className="privacyimg-area">
                <img className="img-fluid" src="images/enterprise/privacyimage.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-get-started-bg how-get-started">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-xs-6">
              <div className="get-started-img">
                <img src="images/enterprise/how-to-get-started-img.png" />
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-xs-6">
              <div className="get-started-content">
                <h3>How to get started?</h3>
                <ul>
                  <li>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 9.5C0 6.98044 0.986592 4.56408 2.74274 2.78249C4.49888 1.00089 6.88072 0 9.36429 0C11.8478 0 14.2297 1.00089 15.9858 2.78249C17.742 4.56408 18.7286 6.98044 18.7286 9.5C18.7286 12.0196 17.742 14.4359 15.9858 16.2175C14.2297 17.9991 11.8478 19 9.36429 19C6.88072 19 4.49888 17.9991 2.74274 16.2175C0.986592 14.4359 0 12.0196 0 9.5H0ZM8.8299 13.566L14.2212 6.72853L13.2473 5.93813L8.6501 11.7661L5.39383 9.0136L4.59474 9.9864L8.8299 13.5673V13.566Z"
                          fill="#0A2855"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="18.7286" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span>
                      The next step is to simply schedule a day and time to talk to one of our
                      Client Success Managers.
                    </span>
                  </li>
                  <li>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 9.5C0 6.98044 0.986592 4.56408 2.74274 2.78249C4.49888 1.00089 6.88072 0 9.36429 0C11.8478 0 14.2297 1.00089 15.9858 2.78249C17.742 4.56408 18.7286 6.98044 18.7286 9.5C18.7286 12.0196 17.742 14.4359 15.9858 16.2175C14.2297 17.9991 11.8478 19 9.36429 19C6.88072 19 4.49888 17.9991 2.74274 16.2175C0.986592 14.4359 0 12.0196 0 9.5H0ZM8.8299 13.566L14.2212 6.72853L13.2473 5.93813L8.6501 11.7661L5.39383 9.0136L4.59474 9.9864L8.8299 13.5673V13.566Z"
                          fill="#0A2855"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="18.7286" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span>
                      In the call you can ask us questions, we’ll ask you questions, and we’ll walk
                      you through step by step how outsourcing with our virtual staff enterprise
                      service works.
                    </span>
                  </li>
                  <li>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 9.5C0 6.98044 0.986592 4.56408 2.74274 2.78249C4.49888 1.00089 6.88072 0 9.36429 0C11.8478 0 14.2297 1.00089 15.9858 2.78249C17.742 4.56408 18.7286 6.98044 18.7286 9.5C18.7286 12.0196 17.742 14.4359 15.9858 16.2175C14.2297 17.9991 11.8478 19 9.36429 19C6.88072 19 4.49888 17.9991 2.74274 16.2175C0.986592 14.4359 0 12.0196 0 9.5H0ZM8.8299 13.566L14.2212 6.72853L13.2473 5.93813L8.6501 11.7661L5.39383 9.0136L4.59474 9.9864L8.8299 13.5673V13.566Z"
                          fill="#0A2855"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="18.7286" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span>
                      If after the call, you want to move forward and work with us, then great. If
                      not, then that’s fine also. If you’re happy, we’re happy, and it’s really as
                      simple as that.
                    </span>
                  </li>
                  <li>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 9.5C0 6.98044 0.986592 4.56408 2.74274 2.78249C4.49888 1.00089 6.88072 0 9.36429 0C11.8478 0 14.2297 1.00089 15.9858 2.78249C17.742 4.56408 18.7286 6.98044 18.7286 9.5C18.7286 12.0196 17.742 14.4359 15.9858 16.2175C14.2297 17.9991 11.8478 19 9.36429 19C6.88072 19 4.49888 17.9991 2.74274 16.2175C0.986592 14.4359 0 12.0196 0 9.5H0ZM8.8299 13.566L14.2212 6.72853L13.2473 5.93813L8.6501 11.7661L5.39383 9.0136L4.59474 9.9864L8.8299 13.5673V13.566Z"
                          fill="#0A2855"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="18.7286" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span>
                      Please schedule a time to talk below and we look forward to helping you with
                      your outsourcing goals!
                    </span>
                  </li>
                </ul>
                <div className="get-pricing-btn">
                  <a
                    href="https://calendly.com/virtual-staff-philippines/enterprise-virtual-staff"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-area">
            <div className="footer-area-single-section">
              <h5>Employers</h5>
              <span></span>
              <ul>
                <li>
                  <a href="#">How it Works</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Post a Job</a>
                </li>
                <li>
                  <a href="#">Virtual Staff Finder</a>
                </li>
                <li>
                  <a href="#">Verified Workers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Outsourcing Coach</a>
                </li>
              </ul>
            </div>
            <div className="footer-area-single-section">
              <h5>Job Seeker</h5>
              <span></span>
              <ul>
                <li>
                  <a href="#">How it Works</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Post your Resume</a>
                </li>
                <li>
                  <a href="#">Find Online Jobs</a>
                </li>
              </ul>
            </div>
            <div className="footer-area-single-section">
              <h5>Enterprise Virtual Staff</h5>
              <span></span>
              <ul>
                <li>
                  <a href="#">Done For You (Enterprise Solution)</a>
                </li>
                <li>
                  <a href="#">Real Estate Virtual Assistant</a>
                </li>
                <li>
                  <a href="#">Outsourced Accountants</a>
                </li>
              </ul>
            </div>
            <div className="footer-area-single-section">
              <h5>Others</h5>
              <span></span>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Time Tracker</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-area-single-section">
              <h5>Employers</h5>
              <span></span>
              <div className="social-img">
                <img className="img-fluid" src="images/homepage/footer.jpg" alt="footer" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer2-area">
          <div className="container">
            <div className="footer2-area-content">
              <div className="footer2-area-left-text">© 2020 Virtualstaff.ph</div>
              <div className="footer2-area-right">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="white" />
                  <path
                    d="M16.3397 32V20.7385H12V16.6838H16.3397V13.2206C16.3397 10.4992 18.9032 8 24.81 8C27.2016 8 28.97 8.15732 28.97 8.15732L28.8307 11.9437C28.8307 11.9437 27.0271 11.9317 25.059 11.9317C22.9289 11.9317 22.5877 12.6052 22.5877 13.7232V16.6838H29L28.721 20.7385H22.5877V32H16.3397Z"
                    fill="#004C70"
                  />
                </svg>

                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="white" />
                  <path
                    d="M29.4312 23.7813V20.7551H32.4587V18.4863H29.4312V15.4601H27.1625V18.4863H24.1362V20.7551H27.1625V23.7813H29.4312ZM15.065 15.3776C16.4812 15.3776 17.435 15.9826 17.9775 16.4976L20.13 14.4101C18.82 13.1851 17.1112 12.4351 15.065 12.4351C10.8925 12.4338 7.5 15.8238 7.5 20.0001C7.5 24.1763 10.8925 27.5663 15.065 27.5663C19.4312 27.5663 22.33 24.4951 22.33 20.1751C22.33 19.5463 22.25 19.1001 22.1388 18.6251H15.0612V21.4451H19.2262C19.0287 22.6338 17.9625 24.6401 15.065 24.6401C12.5613 24.6401 10.5187 22.5588 10.5187 20.0101C10.5187 17.4576 12.5613 15.3776 15.065 15.3776Z"
                    fill="#004C70"
                  />
                </svg>

                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="white" />
                  <path
                    d="M31.643 12.9371C30.808 13.3071 29.911 13.5571 28.968 13.6701C29.941 13.0879 30.669 12.1715 31.016 11.0921C30.1019 11.6351 29.1014 12.0173 28.058 12.2221C27.3564 11.4729 26.4271 10.9764 25.4143 10.8096C24.4016 10.6427 23.3621 10.8149 22.4572 11.2993C21.5524 11.7838 20.8328 12.5534 20.4102 13.4888C19.9875 14.4241 19.8855 15.4728 20.12 16.4721C18.2677 16.3791 16.4556 15.8976 14.8014 15.059C13.1472 14.2203 11.6879 13.0432 10.518 11.6041C10.118 12.2941 9.88801 13.0941 9.88801 13.9461C9.88757 14.7131 10.0764 15.4683 10.4379 16.1448C10.7993 16.8213 11.3222 17.3981 11.96 17.8241C11.2203 17.8005 10.4969 17.6007 9.85001 17.2411V17.3011C9.84994 18.3768 10.222 19.4195 10.9032 20.2521C11.5843 21.0847 12.5326 21.656 13.587 21.8691C12.9008 22.0548 12.1813 22.0821 11.483 21.9491C11.7805 22.8747 12.36 23.6841 13.1404 24.264C13.9208 24.8439 14.8629 25.1653 15.835 25.1831C14.1848 26.4785 12.1469 27.1812 10.049 27.1781C9.67739 27.1782 9.30609 27.1565 8.93701 27.1131C11.0665 28.4823 13.5454 29.2089 16.077 29.2061C24.647 29.2061 29.332 22.1081 29.332 15.9521C29.332 15.7521 29.327 15.5501 29.318 15.3501C30.2293 14.6911 31.0159 13.875 31.641 12.9401L31.643 12.9371Z"
                    fill="#004C70"
                  />
                </svg>

                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="white" />
                  <g clipPath="url(#clip0)">
                    <path
                      d="M14.54 29.999V16.5051H10.2528V29.999H14.54ZM12.397 14.6616C13.892 14.6616 14.8226 13.6254 14.8226 12.3305C14.7947 11.0064 13.8921 9.99902 12.4254 9.99902C10.9589 9.99902 9.99988 11.0065 9.99988 12.3305C9.99988 13.6255 10.9302 14.6616 12.369 14.6616H12.3969H12.397ZM16.913 29.999H21.2002V22.4633C21.2002 22.06 21.2281 21.6572 21.3413 21.3689C21.6512 20.5631 22.3566 19.7285 23.541 19.7285C25.0923 19.7285 25.713 20.966 25.713 22.78V29.9989H29.9999V22.2616C29.9999 18.1168 27.8848 16.1883 25.0641 16.1883C22.7513 16.1883 21.7358 17.5407 21.1717 18.4618H21.2003V16.5048H16.9131C16.9694 17.771 16.9131 29.9988 16.9131 29.9988L16.913 29.999Z"
                      fill="#004C70"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20" height="20" fill="white" transform="translate(10 10)" />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="white" />
                  <g clipPath="url(#clip0)">
                    <path
                      d="M31.5 14.5071C31.3641 14.0223 31.0994 13.5834 30.734 13.2371C30.3583 12.8801 29.8978 12.6247 29.396 12.4951C27.518 12.0001 19.994 12.0001 19.994 12.0001C16.8573 11.9644 13.7214 12.1214 10.604 12.4701C10.1022 12.6093 9.64257 12.8704 9.26601 13.2301C8.89601 13.5861 8.62801 14.0251 8.48801 14.5061C8.1517 16.3178 7.9883 18.1574 8.00001 20.0001C7.98801 21.8411 8.15101 23.6801 8.48801 25.4941C8.62501 25.9731 8.89201 26.4101 9.26301 26.7631C9.63401 27.1161 10.096 27.3711 10.604 27.5061C12.507 28.0001 19.994 28.0001 19.994 28.0001C23.1347 28.0358 26.2746 27.8789 29.396 27.5301C29.8978 27.4004 30.3583 27.1451 30.734 26.7881C31.104 26.4351 31.367 25.9961 31.499 25.5181C31.8441 23.707 32.0119 21.8667 32 20.0231C32.026 18.1717 31.8584 16.3226 31.5 14.5061V14.5071ZM17.602 23.4241V16.5771L23.862 20.0011L17.602 23.4241Z"
                      fill="#004C70"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnterPrice;
