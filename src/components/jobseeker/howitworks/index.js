import React from 'react';

const howItWorks = () => {
  return (
    <div>
      <section className="how-it-works-jobseeker-banner">
        <div className="container">
          <div className="banner-text">
            <h2>The Easiest Place To Find Online Jobs In The Philippines</h2>
            <p>See How Easy It Is To Work Online With A Home Based Job In The Philippines</p>
          </div>
        </div>
      </section>
      <section className="find-talented-filipano">
        <div className="container">
          <h3 className="common-heading">HOW IT WORKS?</h3>
          {/* <hr className="common-border"> */}
          <p>3 SIMPLE STEPS</p>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xl-4 col-lg-4 col-xs-12">
              <div className="how-it-works-jobseeker-card">
                <div className="how-it-works-jobseeker-card-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="how-it-works-jobseeker-card-text">Create a Free Account</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xl-4 col-lg-4 col-xs-12">
              <div className="how-it-works-jobseeker-card">
                <div className="how-it-works-jobseeker-card-icon">
                  <i className="fas fa-search"></i>
                </div>
                <div className="how-it-works-jobseeker-card-text">Search & Apply a Job</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xl-4 col-lg-4 col-xs-12">
              <div className="how-it-works-jobseeker-card">
                <div className="how-it-works-jobseeker-card-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="how-it-works-jobseeker-card-text">Talk and Get Hired</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container">
          <h3 className="common-heading">Frequently Asked Questions </h3>
          {/* <hr className="common-border"> */}
          <div className="accordion" id="faq">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
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
                      {' '}
                      How Do I Get an Online Job?
                    </a>
                  </div>

                  <div id="faq1" className="collapse" aria-labelledby="faqhead1" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        You create your jobseeker account, make an awesome profile (make sure to add
                        in all your skills, experience and qualifications), and then simply apply
                        for jobs that are posted on the virtualstaff.ph platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
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
                      How Do I Get Paid?
                    </a>
                  </div>

                  <div id="faq2" className="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        Getting paid is easy. Employers will pay you through the safe and protected
                        VirtualStaff.ph payment system, and the salary will go to your bank account
                        minus the virtualstaff.ph 15% platform fee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
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
                      Are You Sure I Qualify?
                    </a>
                  </div>

                  <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        Yes. As long as you are 18+ and a resident or citizen of the Philippines
                        because our platform is specifically for people from the Philippines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
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
                      {' '}
                      What Happens If I Lie On My Profile?
                    </a>
                  </div>

                  <div id="faq4" className="collapse" aria-labelledby="faqhead4" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        We have real human people working at VirtualStaff.ph. Once you get caught
                        lying on your profile, you risk being banned permanently from using our
                        Philippines online jobs platform. Please make sure you keep your integrity
                        and only post information that is true.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
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
                      {' '}
                      Why Are Some Jobs Deactivated?
                    </a>
                  </div>

                  <div id="faq5" className="collapse" aria-labelledby="faqhead5" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        This means the job position has already been filled and is no longer
                        available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-header" id="faqhead6">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq6"
                      aria-expanded="true"
                      aria-controls="faq6"
                    >
                      {' '}
                      How Do I Know This Is Legit?
                    </a>
                  </div>

                  <div id="faq6" className="collapse" aria-labelledby="faqhead6" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        VirtualStaff.ph is the safest home based jobs platform in the Philippines
                        with over 200,000 people using our website. VirtualStaff.ph requires
                        employers/clients to deposit part of your salary in advance, meaning you get
                        salary protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
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
                      {' '}
                      Do I Need To Submit Identification?
                    </a>
                  </div>

                  <div id="faq7" className="collapse" aria-labelledby="faqhead7" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        {' '}
                        Yes. In order to keep our platform safe and secure, we require users to
                        submit a government issued ID to prove their name and address.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-header" id="faqhead8">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq8"
                      aria-expanded="true"
                      aria-controls="faq8"
                    >
                      {' '}
                      Is Facebook Connect Required?
                    </a>
                  </div>

                  <div id="faq8" className="collapse" aria-labelledby="faqhead8" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        It’s optional. However I strongly suggest you use it. The alternative is
                        signing up through your Google account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-header" id="faqhead9">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq9"
                      aria-expanded="true"
                      aria-controls="faq9"
                    >
                      {' '}
                      Do I Need To Be A College Graduate To Get An Online Job?
                    </a>
                  </div>

                  <div id="faq9" className="collapse" aria-labelledby="faqhead9" data-parent="#faq">
                    <div className="card-body">
                      <p>
                        No, you just need to have accumulated enough skill to be able to work
                        online. We welcome all applicants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-header" id="faqhead10">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq10"
                      aria-expanded="true"
                      aria-controls="faq10"
                    >
                      {' '}
                      Can I Really Work Online From My Home?
                    </a>
                  </div>

                  <div
                    id="faq10"
                    className="collapse"
                    aria-labelledby="faqhead10"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <p>
                        Yes. It’s just like having a regular office based job, except you’ll be
                        working from your home instead!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-header" id="faqhead11">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq11"
                      aria-expanded="true"
                      aria-controls="faq11"
                    >
                      {' '}
                      How Do I Get Employed?{' '}
                    </a>
                  </div>

                  <div
                    id="faq11"
                    className="collapse"
                    aria-labelledby="faqhead11"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <p>
                        To get an online job, you need to sign up for a free VirtualStaff.ph
                        account. Please provide as much information as possible including skills,
                        experience, work history (if you have any), hobbies, interests etc. The more
                        information you provide, the more chances you have of getting hired by an
                        employer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-header" id="faqhead13">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq13"
                      aria-expanded="true"
                      aria-controls="faq13"
                    >
                      {' '}
                      How long does it take to get hired?
                    </a>
                  </div>

                  <div
                    id="faq13"
                    className="collapse"
                    aria-labelledby="faqhead13"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <p>
                        It depends. Some people might get hired in less than 24 hours, while others
                        might take weeks. It is entirely up to you and the clients. There is of
                        course no guarantee that you will get hired.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-header" id="faqhead14">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq14"
                      aria-expanded="true"
                      aria-controls="faq14"
                    >
                      {' '}
                      What kind of online work will I be doing?
                    </a>
                  </div>

                  <div
                    id="faq14"
                    className="collapse"
                    aria-labelledby="faqhead14"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <p>
                        Any job you could get locally in an office, is the type of job you could
                        potentially get working online.
                      </p>
                      <p>
                        You could potentially get hired as an accountant, virtual assistant, digital
                        marketer, data entry, content writer, web developer… the opportunities are
                        endless!{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-header" id="faqhead15">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq15"
                      aria-expanded="true"
                      aria-controls="faq15"
                    >
                      {' '}
                      Can I create a profile and apply for online jobs while also working a regular
                      office job?
                    </a>
                  </div>

                  <div
                    id="faq15"
                    className="collapse"
                    aria-labelledby="faqhead15"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <p>
                        Yes, there is nothing stopping you working two jobs. However, the important
                        thing is to treat your online job the same as you would treat a local job.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default howItWorks;
