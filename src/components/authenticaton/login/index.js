import React from 'react';

const login = () => {
  return (
    <div>
      <section className="loginbg contactbg privacypagebg aboutuspagebg internal-enterprise-banner-page">
        <div className="banner-text">
          <h2>LOGIN</h2>
          <p>
            Remember any questions, tips or advice you need. Take advantage of our various free
            customer focused options:
          </p>
        </div>
      </section>
      <section className="login-page-card contactmaincard">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="contactus-left-card">
                <div className="login-user-icon">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5003 17.0833C22.4666 17.0833 23.917 15.6347 23.917 13.6667C23.917 11.6987 22.4666 10.25 20.5003 10.25C18.5357 10.25 17.0837 11.6987 17.0837 13.6667C17.0837 15.6347 18.5357 17.0833 20.5003 17.0833ZM20.5003 18.7917C16.7266 18.7917 13.667 21.5455 13.667 24.9417V25.6011H27.3337V24.9417C27.3337 21.5455 24.274 18.7917 20.5003 18.7917Z"
                      fill="#004C70"
                    />
                    <path
                      d="M32.4583 3.4165H8.54167C6.65737 3.4165 5.125 4.94888 5.125 6.83317V29.0415C5.125 30.9258 6.65737 32.4582 8.54167 32.4582H15.375L20.5 37.5832L25.625 32.4582H32.4583C34.3426 32.4582 35.875 30.9258 35.875 29.0415V6.83317C35.875 4.94888 34.3426 3.4165 32.4583 3.4165ZM23.9167 29.0415L20.5 32.4582L17.0833 29.0415H8.54167V6.83317H32.4583L32.4618 29.0415H23.9167Z"
                      fill="#004C70"
                    />
                  </svg>
                  <div className="login-heading">User Details</div>
                </div>
                <form>
                  <div className="contactus-left-card-input form-group">
                    <label>Email</label>
                    <input className="form-control" type="text" name="name" />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5 0C21.163 0 21.7989 0.263392 22.2678 0.732233C22.7366 1.20107 23 1.83696 23 2.5V3C23.2652 3 23.5196 3.10536 23.7071 3.29289C23.8946 3.48043 24 3.73478 24 4V8C24 8.26522 23.8946 8.51957 23.7071 8.70711C23.5196 8.89464 23.2652 9 23 9H18C17.7348 9 17.4804 8.89464 17.2929 8.70711C17.1054 8.51957 17 8.26522 17 8V4C17 3.73478 17.1054 3.48043 17.2929 3.29289C17.4804 3.10536 17.7348 3 18 3V2.5C18 1.83696 18.2634 1.20107 18.7322 0.732233C19.2011 0.263392 19.837 0 20.5 0V0ZM12 11L4 6V8L12 13L16.18 10.39C16.69 10.77 17.32 11 18 11H22V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H15V8C15 8.36 15.06 8.7 15.18 9L12 11ZM20.5 1C20.1022 1 19.7206 1.15804 19.4393 1.43934C19.158 1.72064 19 2.10218 19 2.5V3H22V2.5C22 2.10218 21.842 1.72064 21.5607 1.43934C21.2794 1.15804 20.8978 1 20.5 1Z"
                        fill="#004C70"
                      ></path>
                    </svg>
                  </div>
                  <div className="contactus-left-card-input form-group">
                    <label>Password</label>
                    <input className="form-control" type="text" name="email" />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path d="M17.6 17.6H16V16H17.6V17.6Z" fill="#004C70"></path>
                        <path d="M12.7998 17.6H14.3998V16H12.7998V17.6Z" fill="#004C70"></path>
                        <path d="M20.8002 17.6H19.2002V16H20.8002V17.6Z" fill="#004C70"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.8 9.6V5.6C4.8 4.8646 4.94485 4.1364 5.22627 3.45697C5.5077 2.77755 5.92019 2.16021 6.4402 1.6402C6.96021 1.12019 7.57755 0.707701 8.25697 0.426275C8.9364 0.144848 9.6646 0 10.4 0C11.1354 0 11.8636 0.144848 12.543 0.426275C13.2225 0.707701 13.8398 1.12019 14.3598 1.6402C14.8798 2.16021 15.2923 2.77755 15.5737 3.45697C15.8552 4.1364 16 4.8646 16 5.6V9.6H18.4C19.0365 9.6 19.647 9.85286 20.0971 10.3029C20.5471 10.753 20.8 11.3635 20.8 12V12.88C21.7042 13.0636 22.5172 13.5542 23.1011 14.2686C23.685 14.983 24.004 15.8773 24.004 16.8C24.004 17.7227 23.685 18.617 23.1011 19.3314C22.5172 20.0458 21.7042 20.5364 20.8 20.72V21.6C20.8 22.2365 20.5471 22.847 20.0971 23.2971C19.647 23.7471 19.0365 24 18.4 24H2.4C1.76348 24 1.15303 23.7471 0.702944 23.2971C0.252856 22.847 0 22.2365 0 21.6L0 12C0 11.3635 0.252856 10.753 0.702944 10.3029C1.15303 9.85286 1.76348 9.6 2.4 9.6H4.8ZM6.4 5.6C6.4 4.53913 6.82143 3.52172 7.57157 2.77157C8.32172 2.02143 9.33913 1.6 10.4 1.6C11.4609 1.6 12.4783 2.02143 13.2284 2.77157C13.9786 3.52172 14.4 4.53913 14.4 5.6V9.6H6.4V5.6ZM13.6 14.4C12.9635 14.4 12.353 14.6529 11.9029 15.1029C11.4529 15.553 11.2 16.1635 11.2 16.8C11.2 17.4365 11.4529 18.047 11.9029 18.4971C12.353 18.9471 12.9635 19.2 13.6 19.2H20C20.6365 19.2 21.247 18.9471 21.6971 18.4971C22.1471 18.047 22.4 17.4365 22.4 16.8C22.4 16.1635 22.1471 15.553 21.6971 15.1029C21.247 14.6529 20.6365 14.4 20 14.4H13.6Z"
                          fill="#004C70"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="forgot-pwd-section contactus-left-card-input form-group">
                    <a href="#">Forgot Password ?</a>
                  </div>
                  <div className="custom-login-btn custom-submit form-group">
                    <button className="primary-yellow-filled-btn">Login</button>
                  </div>
                  <div className="register-text-section forgot-pwd-section contactus-left-card-input form-group">
                    Don&apos;t have an account yet?
                    <a href="#">REGISTER NOW</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
