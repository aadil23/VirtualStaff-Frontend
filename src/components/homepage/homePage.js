import React from 'react';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/reset.css';
import '../../css/bootstrap.css';

const HomePage = () => {
  return (
    <div>
      <section className="new-home-page-banner enterprise-banner homepage-banner">
        <div className="container">
          <div className="banner-text">
            <h2>The Philippines Outsourcing Marketplace</h2>
            <div className="banner-text-button">
              <button className="primary-yellow-filled-btn">Find Staff button</button>
              <button className="primary-yellow-outline-btn">Find Jobs Button</button>
            </div>
          </div>
        </div>
      </section>
      <section className="new-homepage-section2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-6 col-lg-6 col-xs-6">
              <div className="new-homepage-section2-card-section">
                <div className="new-homepage-section2-card-icon">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="35" fill="#004C70" />
                    <path
                      d="M39.0006 39.1815C38.5855 39.6113 38.0889 39.9541 37.5399 40.19C36.9909 40.4258 36.4004 40.5499 35.8029 40.5551C35.2054 40.5603 34.6128 40.4465 34.0598 40.2202C33.5068 39.9939 33.0043 39.6598 32.5818 39.2373C32.1593 38.8148 31.8252 38.3123 31.5989 37.7593C31.3726 37.2063 31.2588 36.6137 31.264 36.0162C31.2692 35.4187 31.3933 34.8282 31.6291 34.2792C31.865 33.7302 32.2078 33.2336 32.6376 32.8185C33.4863 31.9988 34.623 31.5452 35.8029 31.5555C36.9828 31.5657 38.1114 32.039 38.9458 32.8733C39.7801 33.7077 40.2534 34.8363 40.2636 36.0162C40.2739 37.1961 39.8203 38.3328 39.0006 39.1815Z"
                      fill="#F4D00C"
                    />
                    <path
                      d="M22.625 18C21.7299 18 20.8714 18.3556 20.2385 18.9885C19.6056 19.6214 19.25 20.4799 19.25 21.375V24.75H18.125C17.8266 24.75 17.5405 24.8685 17.3295 25.0795C17.1185 25.2905 17 25.5766 17 25.875C17 26.1734 17.1185 26.4595 17.3295 26.6705C17.5405 26.8815 17.8266 27 18.125 27H19.25V34.875H18.125C17.8266 34.875 17.5405 34.9935 17.3295 35.2045C17.1185 35.4155 17 35.7016 17 36C17 36.2984 17.1185 36.5845 17.3295 36.7955C17.5405 37.0065 17.8266 37.125 18.125 37.125H19.25V45H18.125C17.8266 45 17.5405 45.1185 17.3295 45.3295C17.1185 45.5405 17 45.8266 17 46.125C17 46.4234 17.1185 46.7095 17.3295 46.9205C17.5405 47.1315 17.8266 47.25 18.125 47.25H19.25V50.625C19.25 51.5201 19.6056 52.3786 20.2385 53.0115C20.8714 53.6444 21.7299 54 22.625 54H49.625C50.5201 54 51.3786 53.6444 52.0115 53.0115C52.6444 52.3786 53 51.5201 53 50.625V21.375C53 20.4799 52.6444 19.6214 52.0115 18.9885C51.3786 18.3556 50.5201 18 49.625 18H22.625ZM29.456 28.044L31.9085 30.4965C33.0512 29.6855 34.4178 29.2499 35.819 29.2499C37.2202 29.2499 38.5868 29.6855 39.7295 30.4965L42.182 28.044C42.3932 27.8331 42.6796 27.7147 42.9782 27.7149C43.2767 27.7151 43.5629 27.8339 43.7739 28.0451C43.9848 28.2564 44.1032 28.5428 44.103 28.8413C44.1028 29.1398 43.984 29.4261 43.7728 29.637L41.3202 32.0895C42.9853 34.4228 42.9853 37.5795 41.3202 39.9105L43.7728 42.363C43.984 42.5739 44.1028 42.8602 44.103 43.1587C44.1032 43.4572 43.9848 43.7436 43.7739 43.9549C43.5629 44.1661 43.2767 44.2849 42.9782 44.2851C42.6796 44.2853 42.3932 44.1669 42.182 43.956L39.7295 41.5035C38.5869 42.3148 37.2203 42.7506 35.819 42.7506C34.4177 42.7506 33.0511 42.3148 31.9085 41.5035L29.456 43.956C29.3514 44.0606 29.2272 44.1436 29.0906 44.2002C28.9539 44.2568 28.8074 44.2859 28.6595 44.2859C28.5116 44.2859 28.3651 44.2568 28.2284 44.2002C28.0918 44.1436 27.9676 44.0606 27.863 43.956C27.7584 43.8514 27.6754 43.7272 27.6188 43.5906C27.5622 43.4539 27.5331 43.3074 27.5331 43.1595C27.5331 43.0116 27.5622 42.8651 27.6188 42.7284C27.6754 42.5918 27.7584 42.4676 27.863 42.363L30.3155 39.9105C29.5045 38.7678 29.0689 37.4012 29.0689 36C29.0689 34.5988 29.5045 33.2322 30.3155 32.0895L27.863 29.637C27.6518 29.4258 27.5331 29.1392 27.5331 28.8405C27.5331 28.5418 27.6518 28.2552 27.863 28.044C28.0742 27.8328 28.3608 27.7141 28.6595 27.7141C28.9582 27.7141 29.2448 27.8328 29.456 28.044ZM48.5 32.625V39.375C48.5 39.6734 48.3815 39.9595 48.1705 40.1705C47.9595 40.3815 47.6734 40.5 47.375 40.5C47.0766 40.5 46.7905 40.3815 46.5795 40.1705C46.3685 39.9595 46.25 39.6734 46.25 39.375V32.625C46.25 32.3266 46.3685 32.0405 46.5795 31.8295C46.7905 31.6185 47.0766 31.5 47.375 31.5C47.6734 31.5 47.9595 31.6185 48.1705 31.8295C48.3815 32.0405 48.5 32.3266 48.5 32.625Z"
                      fill="#F4D00C"
                    />
                  </svg>
                </div>
                <div className="new-homepage-section2-card">
                  <p>
                    {' '}
                    The <span>SAFEST</span> place to hire virtual staff in the Philippines. Only
                    release salary after your staff completes the agreed hours worked.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-6 col-lg-6 col-xs-6">
              <div className="new-homepage-section2-card-section">
                <div className="new-homepage-section2-card-icon">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <circle cx="35" cy="35" r="35" fill="#004C70" />
                    <path
                      d="M37.625 21C39.9566 21.0001 42.2556 21.5482 44.3364 22.6003C46.4172 23.6523 48.2215 25.1788 49.6038 27.0565C50.9861 28.9342 51.9076 31.1105 52.294 33.4099C52.6804 35.7093 52.5209 38.0673 51.8283 40.2937C51.1356 42.5201 49.9293 44.5524 48.3067 46.2268C46.6841 47.9012 44.6906 49.1707 42.487 49.9329C40.2835 50.695 37.9316 50.9285 35.6213 50.6145C33.3109 50.3004 31.1067 49.4477 29.1865 48.125H17.066C16.7335 48.1249 16.4134 47.9986 16.1704 47.7715C15.9274 47.5445 15.7796 47.2337 15.757 46.902C15.7343 46.5702 15.8384 46.2422 16.0483 45.9842C16.2581 45.7263 16.5581 45.5576 16.8875 45.5123L17.066 45.5L26.285 45.5018C25.597 44.693 24.9974 43.813 24.4965 42.8768L20.5573 42.875C20.2247 42.8749 19.9046 42.7486 19.6616 42.5215C19.4186 42.2945 19.2709 41.9837 19.2482 41.652C19.2255 41.3202 19.3297 40.9922 19.5395 40.7342C19.7494 40.4763 20.0493 40.3076 20.3788 40.2623L20.5573 40.25L23.4045 40.2518C22.9693 38.8336 22.7487 37.3584 22.75 35.875C22.75 32.2035 24.08 28.8435 26.2833 26.25H18.8125C18.48 26.2499 18.1599 26.1236 17.9169 25.8966C17.6739 25.6695 17.5261 25.3587 17.5035 25.027C17.4808 24.6952 17.5849 24.3672 17.7948 24.1092C18.0046 23.8513 18.3046 23.6826 18.634 23.6373L18.8125 23.625H29.1848C31.6652 21.911 34.6099 20.9952 37.625 21ZM39.6445 39.753C39.0408 40.068 38.353 40.2465 37.625 40.2465C36.904 40.2465 36.225 40.0715 35.6248 39.7635L33.7068 41.6815C34.8268 42.4393 36.176 42.8838 37.6303 42.8838C39.0898 42.8838 40.4443 42.4375 41.566 41.6745L39.6445 39.753ZM30.6285 35.8803C30.6285 37.3433 31.0765 38.703 31.8448 39.8265L33.7575 37.9173C33.4236 37.2877 33.2494 36.5858 33.25 35.8733C33.25 35.1435 33.4303 34.4558 33.747 33.852L31.8378 31.9445C31.0472 33.1052 30.6257 34.4777 30.6285 35.882V35.8803ZM43.4315 31.9568L41.5153 33.873C41.8233 34.4715 41.9983 35.1523 41.9983 35.8733C41.9983 36.603 41.8198 37.2908 41.503 37.8945L43.4245 39.816C44.1875 38.6943 44.632 37.3398 44.632 35.8803C44.632 34.4278 44.1893 33.075 43.4315 31.9568ZM37.625 34.125C37.3888 34.1144 37.153 34.1518 36.9317 34.2349C36.7104 34.318 36.5082 34.4451 36.3373 34.6085C36.1665 34.7718 36.0305 34.9681 35.9376 35.1855C35.8447 35.4029 35.7968 35.6369 35.7968 35.8733C35.7968 36.1097 35.8447 36.3436 35.9376 36.561C36.0305 36.7784 36.1665 36.9747 36.3373 37.1381C36.5082 37.3014 36.7104 37.4285 36.9317 37.5116C37.153 37.5947 37.3888 37.6321 37.625 37.6215C38.0751 37.6014 38.5002 37.4084 38.8116 37.0827C39.123 36.7571 39.2968 36.3238 39.2968 35.8733C39.2968 35.4227 39.123 34.9895 38.8116 34.6638C38.5002 34.3381 38.0751 34.1451 37.625 34.125ZM37.6303 28.8785C36.1708 28.8785 34.8163 29.3248 33.6928 30.0878L35.6003 31.9953C36.2058 31.6803 36.8953 31.5 37.625 31.5C38.3618 31.5 39.0565 31.682 39.6655 32.004L41.5765 30.0948C40.4141 29.3 39.0383 28.876 37.6303 28.8785Z"
                      fill="#F4D00C"
                    />
                  </svg>
                </div>
                <div className="new-homepage-section2-card">
                  <p>
                    {' '}
                    The <span>FASTEST</span> way to hire a virtual assistant in the Philippines.
                    Within minutes you could potentially hire part-time or full&apos;-time staff
                    because we&apos;ve removed all the barriers!{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-6 col-lg-6 col-xs-6">
              <div className="new-homepage-section2-card-section">
                <div className="new-homepage-section2-card-icon">
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#004C70" />
                    <rect x="17" y="17" width="36" height="36" fill="url(#pattern0)" />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use transform="scale(0.02)" />
                      </pattern>
                      <image
                        id="image0"
                        width="50"
                        height="50"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM1RTZDODQ4RDk3MDExRUI5REYwQzU1NEE4Njg5ODQ0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM1RTZDODQ5RDk3MDExRUI5REYwQzU1NEE4Njg5ODQ0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzVFNkM4NDZEOTcwMTFFQjlERjBDNTU0QTg2ODk4NDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzVFNkM4NDdEOTcwMTFFQjlERjBDNTU0QTg2ODk4NDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz61R6vTAAAEPklEQVR42txaWUhVQRi+1yxaqCTSkDKihwrcomzRKGkR2qwejKIXH4KKgiR6yQcfDIKeotUiiAokpIWIQqFSyqAMKY0Kgoh2KksqbHmwun1//gemuefcMzNn7sId+BjOnbkz882/zD//OeFIJBJKh5IZdIDvD0aKj3eBP0Cp6v9HFPelBhGpzE6WRDJCaVIyNVSoHdVwYDnUocdwvhygBfgGlCdLIkOBmUArSOUYkmgFZvBYXhuWBRwBngG9QDMwyyaRlcAjoMCAjEOigMeo9CBB/W4BW4HJwBhgGdCOthIrRFidFhuQkUnQGD0eJJx+j4FiJtLIEqyPNUlY9xyRJuyUPBXtJg24QPiN+pR4kSD3K435r59jh2gjMr3AJ/yWbc1rCZK5B/yWmudLJKj84r4qkviPBJeJXH+xfo7wRCUuB6JbKdVRO5EEk2zkx5ZUPUdUSFB7PrfXpSIR0vXrTOIJUCGRcGv/mmpEsnmnC3mRC7HI9xIJz/ZUIRIXElHGjoHCqGqBjewtPrN+XgOaMOhzmzYhejEF7xVSOkeYRAOwxaMvudrzwC5M8MIjjNcm4XeOmMRaB5jET2AVMASYAFQBzUQaWEcTYeLqVJGEG5ENXJMaXcFg/cBb4AKwgmOfJtpE4BQWUGMhPBHbqXwAck30VlStClSXgGHAMQrcQCDichJvQnWUb4K0sPYAMdZlDkbFQhpRhrm7jSSCP5IkVvNApGINbDfyqX4c1V52FGeAUaaBoiN9oEgIEGkj9xhLRNhxX8mgD5G4DdA94SBQY0Ai6s6uGiAqnSMqkkEfCgQ3c0C4DZhuQsKlOAFiXxBjj0Wm1qVPF6pDwCBgX1ASUoA4Ds9ngXxj1ZIGX4PqIvAKmOSiYlmongJjgXfscbRIOKqFsQIZvl+IQrbymkU+x2URdEfYzY+5hupkxfB9b4jYKVKbHaQ+WPhOl/bBqG6wF6vUJeGVoNM1fJWg8RzXVW7uGKUfmMcSM00TBTZ8FSIdsdQrHsXE8DMURB/hYJHK2gSF+yf4ZhjipCDN2xkrJaR6H/FTL9vFy/DrA6WDePEvgTx2h3c0w3htY9c1/AzFyZKhXmLJ80sJ6Vx1E61e4vXXNyWkQ6SDT3janbkJ9F5tQthTZyP3m1D10k0J6WZRHCLrDV8t6EqikCVR7pdN0SXSwXlciqva4kHG9A6vRYTVi95XPOQD66bpHVtDnZTCHpNs/EeOcInMNFaBXEskjJJzxplG22SCklA+2TUWsIgvWNbSqHGViCSZJWyUJJmrfOXVSd5peae4EOES9W5RkYzonbpMM4w2ibiRoaTdlBj9p3Ifx8UuDULCJhGRTBcvlBIG+0MDr95GM8pCAznmbu5zP6gkrBi7RxhPF6HDQHWMjaJ060lgO0j8sLGL8SDilCImQ85gPP/2hg+80+y6rX0dFE6X77XS5uugvwIMACvKI8RJ77ctAAAAAElFTkSuQmCC"
                      />
                    </defs>
                  </svg>
                </div>
                <div className="new-homepage-section2-card">
                  <p>
                    {' '}
                    The <span>EASIEST</span> way to outsource to the Philippines. Find, Hire,
                    Manage, Track, and Pay your virtual staff in the Philippines - all in one simple
                    dashboard!{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-6 col-lg-6 col-xs-6">
              <div className="new-homepage-section2-card-section">
                <div className="new-homepage-section2-card-icon">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="35" fill="#004C70" />
                    <path
                      d="M51.875 46.25C51.875 49.3438 49.3438 51.875 46.25 51.875H23.75C20.6562 51.875 18.125 49.3438 18.125 46.25V23.75C18.125 20.6562 20.6562 18.125 23.75 18.125H46.25C49.3438 18.125 51.875 20.6562 51.875 23.75V46.25Z"
                      fill="#F4D00C"
                    />
                    <path
                      d="M36.125 40.0625H40.625V38.375H37.7563V35.8438H40.625V34.1562H37.7563V31.625H40.625V29.9375H36.125V40.0625Z"
                      fill="white"
                    />
                    <path
                      d="M47.375 31.625V29.9375H42.875V40.0625H47.375V38.375H44.5063V35.8438H47.375V34.1562H44.5063V31.625H47.375Z"
                      fill="white"
                    />
                    <path
                      d="M30.4437 40.0625V35.8438H31.0625L32.4688 40.0625H34.1562L32.6937 35.6187C33.7062 35.1687 34.4375 34.1 34.4375 32.8625C34.4375 31.2313 33.2 29.9375 31.625 29.9375H28.8125V40.0625H30.4437ZM30.4437 31.625H31.625C32.3 31.625 32.8063 32.1875 32.8063 32.8625C32.8063 33.5375 32.2438 34.1 31.625 34.1H30.4437V31.625Z"
                      fill="white"
                    />
                    <path
                      d="M24.2562 40.0625V35.8438H27.125V34.1562H24.2562V31.625H27.125V29.9375H22.625V40.0625H24.2562Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="new-homepage-section2-card">
                  <p>
                    {' '}
                    <span>FREE</span> for employers.{' '}
                    <span>NO SUBSRIPTION FEES TO CONTACT WORKERS</span>. The amount you agree with
                    your virtual staff is the amount you pay.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="find-talented-filipano">
        <div className="container">
          <h3 className="common-heading">Find talented Filipino workers</h3>
          <hr className="common-border" />
          <p>
            Instead of “typical freelancers”, hire part-time or full-time staff in the Philippines
            using the Virtual Staff all in one platform!
          </p>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xs-12">
              <div className="find-talented-filipano-card">
                <h4>Post a Job</h4>
                <div className="find-talented-filipano-card-icon">
                  <svg
                    width="134"
                    height="91"
                    viewBox="0 0 134 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7891 38.444C-11.8466 60.7882 4.70836 85.1779 16.0161 91H134V68.7345C134 40.9076 110.961 27.2764 97.3708 22.7202C46.3048 5.60017 83.3173 54.0087 12.7891 38.444Z"
                      fill="#88D1F4"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M73.4 13.2H70.1V62.7H73.4C77.03 62.7 80 59.73 80 56.1V19.8C80 16.17 77.03 13.2 73.4 13.2ZM14 19.8V56.1C14 59.73 16.9667 62.7 20.6 62.7H23.9V13.2H20.6C16.9667 13.2 14 16.17 14 19.8ZM58.55 6.28979C56.3027 5.24699 52.3163 3.29999 46.9373 3.29999C41.5484 3.29999 37.6973 5.24699 35.45 6.28979V13.2H27.2V62.7H66.8V13.2H58.55V6.28979ZM53.6 13.2H40.4V8.79119C42.1622 8.03219 43.9574 7.25669 46.9373 7.25669C49.9139 7.25669 51.8411 8.02889 53.6 8.79119V13.2Z"
                      fill="#F4D00C"
                    />
                  </svg>
                </div>
                <hr className="find-talented-filipano-line" />
                <p>Create your free job post and start receiving applicants within hours.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xs-12">
              <div className="find-talented-filipano-card">
                <h4>Hire Virtual Staff</h4>
                <div className="find-talented-filipano-card-icon">
                  <svg
                    width="134"
                    height="100"
                    viewBox="0 0 134 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7891 47.444C-11.8466 69.7882 4.70836 94.1779 16.0161 100H134V77.7345C134 49.9076 110.961 36.2764 97.3708 31.7202C46.3048 14.6002 83.3173 63.0087 12.7891 47.444Z"
                      fill="#88D1F4"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M44 33C54.4156 33 62.8571 25.6137 62.8571 16.5C62.8571 7.38633 54.4156 0 44 0C33.5844 0 25.1429 7.38633 25.1429 16.5C25.1429 25.6137 33.5844 33 44 33ZM58.1134 37.2023L51.0714 61.875L46.3571 44.3438L51.0714 37.125H36.9286L41.6429 44.3438L36.9286 61.875L29.8866 37.2023C19.3826 37.6406 11 45.1559 11 54.45V59.8125C11 63.2285 14.1674 66 18.0714 66H69.9286C73.8326 66 77 63.2285 77 59.8125V54.45C77 45.1559 68.6174 37.6406 58.1134 37.2023Z"
                      fill="#F4D00C"
                    />
                  </svg>
                </div>
                <hr className="find-talented-filipano-line" />
                <p>Review applicants profiles and resumes.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xs-12">
              <div className="find-talented-filipano-card">
                <h4>Manage Your Staff</h4>
                <div className="find-talented-filipano-card-icon">
                  <svg
                    width="134"
                    height="109"
                    viewBox="0 0 134 109"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7891 56.444C-11.8466 78.7882 4.70836 103.178 16.0161 109H134V86.7345C134 58.9076 110.961 45.2764 97.3708 40.7202C46.3048 23.6002 83.3173 72.0087 12.7891 56.444Z"
                      fill="#88D1F4"
                      fillOpacity="0.2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M59.2712 19.375C56.1865 19.374 53.1691 20.2772 50.5922 21.9728C48.0152 23.6684 45.9918 26.0821 44.772 28.9154C43.5522 31.7487 43.1895 34.8774 43.7289 37.9146C44.2683 40.9519 45.686 43.7644 47.8067 46.0045C43.3968 48.4433 39.8806 52.2262 37.7703 56.8024C35.6599 61.3786 35.0656 66.5091 36.074 71.4465C36.2551 72.3383 36.7389 73.1401 37.4435 73.716C38.1481 74.2919 39.0302 74.6065 39.9402 74.6065H78.6023C79.5123 74.6065 80.3943 74.2919 81.0989 73.716C81.8035 73.1401 82.2874 72.3383 82.4685 71.4465C83.4777 66.5085 82.8839 61.3772 80.7735 56.8002C78.6631 52.2231 75.1464 48.4395 70.7357 46.0005C72.8552 43.7603 74.2717 40.9481 74.8104 37.9115C75.349 34.875 74.986 31.7471 73.7664 28.9146C72.5468 26.0821 70.5239 23.669 67.9478 21.9736C65.3716 20.2782 62.3552 19.3748 59.2712 19.375ZM77.3556 42.1738C78.405 40.0592 78.9968 37.6764 78.9968 35.1554C78.9968 32.6345 78.405 30.2517 77.3556 28.1371C78.2827 26.8896 79.4464 25.8368 80.7804 25.0391C82.1143 24.2413 83.5924 23.714 85.1301 23.4875C86.6678 23.2609 88.235 23.3394 89.7424 23.7185C91.2497 24.0976 92.6677 24.7699 93.9152 25.697C95.1627 26.6241 96.2154 27.7879 97.0132 29.1218C97.811 30.4558 98.3383 31.9338 98.5648 33.4715C98.7914 35.0092 98.7129 36.5765 98.3338 38.0838C97.9547 39.5912 97.2824 41.0091 96.3552 42.2566C98.3151 43.7265 99.9058 45.6326 101.001 47.8238C102.097 50.015 102.667 52.4312 102.667 54.881V58.8261C102.667 59.8724 102.252 60.8759 101.512 61.6157C100.772 62.3556 99.7686 62.7712 98.7223 62.7712H86.5595C85.9647 59.2637 84.5876 55.9352 82.5305 53.0326C80.4735 50.13 77.7892 47.7279 74.6769 46.0045C75.6986 44.9252 76.5632 43.7074 77.2451 42.3868C77.3027 42.343 77.3605 42.2996 77.4187 42.2566L77.3556 42.1738ZM43.8616 46.0005C42.8415 44.9222 41.9783 43.7057 41.2973 42.3868C41.2397 42.343 41.1819 42.2996 41.1237 42.2566L41.1868 42.1738C40.1035 39.9931 39.5417 37.5904 39.5457 35.1554C39.5457 32.6345 40.1374 30.2517 41.1868 28.1371C40.2597 26.8896 39.096 25.8368 37.762 25.0391C36.4281 24.2413 34.9501 23.714 33.4124 23.4875C31.8747 23.2609 30.3074 23.3394 28.8001 23.7185C27.2927 24.0976 25.8748 24.7699 24.6272 25.697C23.3797 26.6241 22.327 27.7879 21.5292 29.1218C20.7314 30.4558 20.2042 31.9338 19.9776 33.4715C19.751 35.0092 19.8295 36.5765 20.2087 38.0838C20.5878 39.5912 21.2601 41.0091 22.1872 42.2566C19.4945 44.2705 17.5167 47.0928 16.5428 50.3111C15.5689 53.5295 15.6501 56.9749 16.7745 60.1438C17.0467 60.9119 17.5501 61.5769 18.2156 62.0474C18.881 62.5179 19.6758 62.7707 20.4908 62.7712H31.9789C32.5734 59.2641 33.9498 55.9357 36.0062 53.0332C38.0626 50.1306 40.7461 47.7283 43.8577 46.0045L43.8616 46.0005Z"
                      fill="#F4D00C"
                    />
                  </svg>
                </div>
                <hr className="find-talented-filipano-line" />
                <p>
                  You can use VirtualStaff.ph to assign tasks, communicate, and track the hours your
                  staff work
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xs-12">
              <div className="find-talented-filipano-card">
                <h4>Make Secure Payments</h4>
                <div className="find-talented-filipano-card-icon">
                  <svg
                    width="134"
                    height="100"
                    viewBox="0 0 134 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7891 47.444C-11.8466 69.7882 4.70836 94.1779 16.0161 100H134V77.7345C134 49.9076 110.961 36.2764 97.3708 31.7202C46.3048 14.6002 83.3173 63.0087 12.7891 47.444Z"
                      fill="#88D1F4"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M68.25 38.5V16.5C68.25 13.475 65.775 11 62.75 11H24.25C21.225 11 18.75 13.475 18.75 16.5V38.5C18.75 41.525 21.225 44 24.25 44H62.75C65.775 44 68.25 41.525 68.25 38.5ZM43.5 35.75C38.935 35.75 35.25 32.065 35.25 27.5C35.25 22.935 38.935 19.25 43.5 19.25C48.065 19.25 51.75 22.935 51.75 27.5C51.75 32.065 48.065 35.75 43.5 35.75ZM79.25 19.25V49.5C79.25 52.525 76.775 55 73.75 55H27V49.5H73.75V19.25H79.25Z"
                      fill="#F4D00C"
                    />
                  </svg>
                </div>
                <hr className="find-talented-filipano-line" />
                <p>Choose if you would like to pay your staff Weekly, bi-weekly or monthly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="most-recent-section">
        <div className="container">
          <h3 className="common-heading">MOST RECENT VERIFIED JOBSEEKERS</h3>
          <hr className="common-border" />

          <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-l-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-r-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-l-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-r-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-l-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-r-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-l-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-r-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-l-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-r-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-l-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-r-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-l-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-r-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-l-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-r-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-l-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-xl-6">
                    <div className="margin-r-80 home-page-carousel-card">
                      <div className="home-page-carousel-card-left">
                        <img src="images/homepage/verified-person-img.jpg" />
                        <div className="part-time-text">PARTTIME</div>
                      </div>
                      <div className="home-page-carousel-card-right">
                        <h4>Virtual Assistant</h4>
                        <hr className="find-talented-filipano-line" />
                        <div className="years-of-exp-text">
                          Years of Experience: <span>7 years</span>
                        </div>
                        <div className="price-text">
                          <sup>$</sup>
                          <label>500</label>
                          <span>/month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <svg
                width="25"
                height="49"
                viewBox="0 0 25 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.09571 22.8731L16.377 9.85745C17.2949 8.95784 18.7793 8.95784 19.6875 9.85745L21.8945 12.0203C22.8125 12.9199 22.8125 14.3746 21.8945 15.2647L12.4902 24.5L21.9043 33.7258C22.8223 34.6254 22.8223 36.0801 21.9043 36.9701L19.6973 39.1426C18.7793 40.0422 17.2949 40.0422 16.3867 39.1426L3.10547 26.127C2.17774 25.2274 2.17774 23.7727 3.09571 22.8731Z"
                  fill="#004C70"
                />
              </svg>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <svg
                width="25"
                height="49"
                viewBox="0 0 25 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9043 22.8731L8.62304 9.85745C7.70507 8.95784 6.2207 8.95784 5.31249 9.85745L3.10546 12.0203C2.18749 12.9199 2.18749 14.3746 3.10546 15.2647L12.5098 24.5L3.0957 33.7258C2.17773 34.6254 2.17773 36.0801 3.0957 36.9701L5.30273 39.1426C6.2207 40.0422 7.70507 40.0422 8.61328 39.1426L21.8945 26.127C22.8223 25.2274 22.8223 23.7727 21.9043 22.8731Z"
                  fill="#004C70"
                />
              </svg>
            </a>
          </div>
          <div className="browse-btn-section">
            <button className="commonbtn2">BROWSE ALL</button>
          </div>
        </div>
      </section>
      <section className="pay-your-staff-section">
        <div className="heading-bg">
          <h3 className="common-heading">Pay Your Staff, Choose From Two Easy Options: </h3>
        </div>
        <div className="full-bg">
          <div className="full-bg-left">
            <h3 className="common-heading">FIXED PRICE </h3>
            <hr className="common-border" />
            <ul className="common-bulletin">
              <li>
                <span>
                  <svg
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                      fill="#F4D00C"
                    />
                  </svg>
                </span>
                <label>
                  Don’t like to pay your staff by the hour? Why not set a fixed salary/fee?{' '}
                </label>
              </li>
              <li>
                <span>
                  <svg
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                      fill="#F4D00C"
                    />
                  </svg>
                </span>
                <label>
                  For example, you could hire someone and instead of paying them based on the hours
                  they work, you could pay them a fixed salary/fee, to complete an agreed upon
                  number of deliverables.{' '}
                </label>
              </li>
              <li>
                <span>
                  <svg
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                      fill="#F4D00C"
                    />
                  </svg>
                </span>
                <label>
                  (You can decide for yourself what works best as you remain in complete control).{' '}
                </label>
              </li>
            </ul>
            <div className="bottom-img">
              <img src="images/homepage/pay-your-staff-left.png" />
            </div>
          </div>
          <div className="full-bg-right">
            <h3 className="common-heading">HOURLY</h3>
            <hr className="common-border" />
            <ul className="common-bulletin">
              <li>
                <span>
                  <svg
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                      fill="#F4D00C"
                    />
                  </svg>
                </span>
                <label>
                  Track progress with ease and pay your Virtual Staff by the hour using our Tim
                  Tracker software. If you hire multiple Staff for your business, you&apos;ll
                  receive a breakdown of each worker&apos;s hourly rate and time tracked.
                </label>
              </li>
              <li>
                <span>
                  <svg
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                      fill="#F4D00C"
                    />
                  </svg>
                </span>
                <label>
                  (Example: $5/hour x 40 hours worked (full-time) = $200 salary to pay.)
                </label>
              </li>
            </ul>
            <div className="bottom-img">
              <img src="images/homepage/pay-your-staff-right.png" />
            </div>
          </div>
        </div>
        <div className="pay-your-staff-section-bg">
          <div className="container">
            <div className="pay-your-staff-bg-card">
              <div className="pay-your-staff-bg-card-content">
                <h3 className="common-heading">FIXED PRICE </h3>
                <hr className="common-border" />
                <ul className="common-bulletin">
                  <li>
                    <span>
                      <svg
                        width="21"
                        height="16"
                        viewBox="0 0 21 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                          fill="#F4D00C"
                        />
                      </svg>
                    </span>
                    <label>
                      Don’t like to pay your staff by the hour? Why not set a fixed salary/fee?{' '}
                    </label>
                  </li>
                  <li>
                    <span>
                      <svg
                        width="21"
                        height="16"
                        viewBox="0 0 21 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                          fill="#F4D00C"
                        />
                      </svg>
                    </span>
                    <label>
                      For example, you could hire someone and instead of paying them based on the
                      hours they work, you could pay them a fixed salary/fee, to complete an agreed
                      upon number of deliverables.{' '}
                    </label>
                  </li>
                  <li>
                    <span>
                      <svg
                        width="21"
                        height="16"
                        viewBox="0 0 21 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                          fill="#F4D00C"
                        />
                      </svg>
                    </span>
                    <label>
                      (You can decide for yourself what works best as you remain in complete
                      control).{' '}
                    </label>
                  </li>
                </ul>
              </div>
              <div className="pay-your-staff-bg-card-content2">
                <img className="img-fluid" src="images/homepage/fixedprice.jpg" />
              </div>
            </div>
            <div className="pay-your-staff-bg-card">
              <div className="pay-your-staff-bg-card-content">
                <h3 className="common-heading">HOURLY </h3>
                <hr className="common-border" />
                <ul className="common-bulletin">
                  <li>
                    <span>
                      <svg
                        width="21"
                        height="16"
                        viewBox="0 0 21 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                          fill="#F4D00C"
                        />
                      </svg>
                    </span>
                    <label>
                      Track progress with ease and pay your Virtual Staff by the hour using our Time
                      Tracker software. If you hire multiple Staff for your business, you&apos;ll
                      receive a breakdown of each worker&apos;s hourly rate and time tracked.
                    </label>
                  </li>
                  <li>
                    <span>
                      <svg
                        width="21"
                        height="16"
                        viewBox="0 0 21 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                          fill="#F4D00C"
                        />
                      </svg>
                    </span>
                    <label>
                      (Example: $5/hour x 40 hours worked (full-time) = $200 salary to pay.)
                    </label>
                  </li>
                </ul>
              </div>
              <div className="pay-your-staff-bg-card-content2">
                <img className="img-fluid" src="images/homepage/hourlyprice.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hire-a-pro-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xl-6 col-lg-6 col-xs-12">
              <h3 className="common-heading">Hire a pro for any skill</h3>
              <hr className="common-border" />
              <div className="hire-a-pro-list">
                <p>Development & IT</p>
                <p>Design & Creative</p>
                <p>Sales & Marketing</p>
                <p>Writing & Translation</p>
                <p>Admin & Customer Support</p>
                <p>Finance & Accounting</p>
                <p>See all specializations</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xl-6 col-lg-6 col-xs-12">
              <div className="hire-a-pro-list-slider">
                <div id="demo1" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="images/homepage/hirebanner.jpg" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/homepage/hirebanner.jpg" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/homepage/hirebanner.jpg" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/homepage/hirebanner.jpg" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/homepage/hirebanner.jpg" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/homepage/hirebanner.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hire-a-pro-list-slider-list">
                <div className="hire-a-pro-list-slider-list-single">2 D Animation</div>
                <div className="hire-a-pro-list-slider-list-single">3 D Animation</div>
                <div className="hire-a-pro-list-slider-list-single">AR VR Design</div>
                <div className="hire-a-pro-list-slider-list-single">Acting</div>
                <div className="hire-a-pro-list-slider-list-single">Art Department</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
