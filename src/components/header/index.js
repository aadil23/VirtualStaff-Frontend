import React from 'react';
import virtuallogo from '../../images/homepage/logo.png';
const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="#">
              <img className="img-fluid" src={virtuallogo} alt="logo" />
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
    </div>
  );
};

export default Header;
