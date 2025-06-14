"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({ duration: 1000 });
    }
  }, []);
  return (
    <>
      {/* Your main content */}
      <div className="site-wrapper">
        <header>
          <nav className="navbar navbar-expand-lg container pt-lg-4 pt-3 pb-lg-4 pb-3">
            <div className="container-fluid justify-content-lg-start justify-content-between">
              {/* <!-- site logo --> */}
              <a className="nav-logo p-0" href="index.html">
                <figure>
                  <img src="assets/images/logo.svg" alt="logo" />
                </figure>
              </a>
              {/* <!-- navigation button  --> */}
              <div className="d-flex gap-3 flex-row-reverse">
                <button className="open-aside" type="button">
                  <i className="fa-solid fa-bars"></i>
                </button>
                {/* <!-- navigation bar manu  --> */}
                <div className="d-flex justify-content-between gap-xl-4 gap-lg-3 w-100 align-items-center">
                  <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul
                      className="navbar-nav d-flex justify-content-center align-items-center gap-lg-4 gap-md-3 gap-sm-2 gap-2 mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" href="index.html">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="About.html">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="Services.html">Services</a>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link d-flex align-item-center gap-1">Pages<i
                            className="fa-sharp fa-solid fa-sort-down"></i></a>
                        <ul className="dropdown-menu" suppressHydrationWarning>
                          <li><a className="dropdown-item" href="Pricing.html">Pricing</a></li>
                          <li>
                            <a className="dropdown-item" href="Testimonials.html">Testimonials</a>
                          </li>
                          <li><a className="dropdown-item" href="Team.html">Team</a></li>
                          <li><a className="dropdown-item" href="Blogs.html">Blogs</a></li>
                          <li>
                            <a className="dropdown-item" href="BlogDetails.html">Blog Details</a>
                          </li>
                          <li><a className="dropdown-item" href="Error.html">404</a></li>
                          <li>
                            <a className="dropdown-item" href="ComingSoon.html">Coming Soon</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="Contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="search SearchModal">
                    <a href="#">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover1 down-btn" id="getStartedAnchor">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="modal searchModal">
            <button className="close-btn d-flex" >&times;</button>
            <div className="position-relative d-flex align-items-center justify-content-center ">
              <input type="text" placeholder="Search..." name="search" />
              <button className="search-btn">
                <img src="assets/images/icons/search.svg" alt="search" />
              </button>
            </div>
          </div>
          {/* <!--===== aside navigation slidebar =====--> */}
          <aside>
            <div id="mySidenav" className="right-sidbar">
              <div className="side-nav-logo d-flex justify-content-between align-items-center ps-2 pe-1 nav-logo">
                <figure className="navbar-brand">
                  <a href="index.html">
                    <img src="assets/images/logo.svg" alt="Logo" />
                  </a>
                </figure>
                <button className="fa-solid fa-xmark" ></button>
              </div>
              <ul className="pt-4">
                <li className="nav-item active">
                  <a aria-current="page" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a href="About.html">About</a>
                </li>
                <li className="nav-item">
                  <a href="Services.html">Services</a>
                </li>
                <li className="nav-item">
                  <a href="Contact.html">Contact</a>
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-center justify-content-between" id="slid-btn">
                    <button className="a-slid page-btn">Pages</button>
                    <i className="fa-solid fa-caret-down pe-2"></i>
                  </div>
                  <ul id="slid-drop">
                    <li><a href="Pricing.html">Pricing</a></li>
                    <li>
                      <a href="Testimonials.html">Testimonials</a>
                    </li>
                    <li><a href="Team.html">Team</a></li>
                    <li><a href="Blogs.html">Blogs</a></li>
                    <li>
                      <a href="BlogDetails.html">Blog Details</a>
                    </li>
                    <li><a href="Error.html">404</a></li>
                    <li>
                      <a href="ComingSoon.html">Coming Soon</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </aside>
        </header>
        
        {/* <!-- ======== End of 1.1. Header section ======== -->
        <!-- ======== 1.2. Hero section ========  --> */}
        <section className="Hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex flex-column" data-aos="fade-up">
                  <div>
                    <h1>More Than <span>A Wallet</span></h1>
                    <h1>A Financial Revolution</h1>
                    <p>MEXPay is the next-generation financial app designed to give you complete control over your money. Send, receive, and manage your funds with ease—securely and seamlessly.</p>
                    <p>Sign up now and experience financial freedom like never before.</p>
                    <div className="my-lg-2 my-md-3">
                      <a href="About.html" className="hover2">
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="mt-1">
                    <h5>Over <span className="number" data-final-value="5000"></span>+ Reviews</h5>
                    <div className="d-flex">
                      <figure><img src="assets/images/index/reviewImg_1.webp" alt="reviewImg_1" /></figure>
                      <figure><img src="assets/images/index/reviewImg_2.webp" alt="reviewImg_2" /></figure>
                      <figure><img src="assets/images/index/reviewImg_3.webp" alt="reviewImg_3" /></figure>
                      <div className="rounded-circle d-flex justify-content-center align-items-center position-relative">
                        <h5 className="p-0 ps-1"><span className="number" data-final-value="5"></span>K+</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative d-flex flex-lg-row flex-column h-100">
                  <div className="d-flex flex-lg-column align-items-end w-100" data-aos="fade-down">
                    <div className="pe-lg-3">
                      <h2><span className="number" data-final-value="93"></span>k+</h2>
                      <p>Satisfied user</p>
                    </div>
                    <div className="pe-lg-1">
                      <h2><span className="number" data-final-value="4.9"></span>/5</h2>
                      <p>Client Rating</p>
                    </div>
                    <div className="pe-lg-3">
                      <h2><span className="number" data-final-value="99"></span>%</h2>
                      <p>Secure Payments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======== End of 1.2. Hero section ========  -->
        <!-- ======== 1.3. Partners section ======== --> */}
        <section className="Partners">
          <div className="container">
            <div className="d-flex gap-3 align-items-center">
              <hr className="flex-grow-1" />
              <h5>Our Solution Partners</h5>
              <hr className="flex-grow-1" />
            </div>
          </div>
          <div className="PartnersSlider" data-aos="zoom-in" suppressHydrationWarning>
            <div suppressHydrationWarning>
              <a href="#" suppressHydrationWarning>
                <img src="assets/images/icons/partnerlogo1.svg" alt="partner1" />
              </a>
            </div>
            <div suppressHydrationWarning>
              <a href="#">
                <img src="assets/images/icons/partnerlogo2.svg" alt="partner2" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="assets/images/icons/partnerlogo3.svg" alt="partner3" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="assets/images/icons/partnerlogo4.svg" alt="partner4" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="assets/images/icons/partnerlogo1.svg" alt="partner5" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="assets/images/icons/partnerlogo3.svg" alt="partner6" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="assets/images/icons/partnerlogo4.svg" alt="partner7" />
              </a>
            </div>
          </div>
        </section>
        {/* <!-- ======== End of 1.3. Partners section ======== -->
        <!-- ======== 1.4. Services section ======== --> */}
        <section className="Services">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex flex-wrap pt-lg-0 pt-5">
                  <div className="d-flex align-items-center gap-3" data-aos="flip-left">
                    <figure>
                      <img src="assets/images/icons/person.svg" alt="icon1" />
                    </figure>
                    <div className="d-flex flex-column gap-2">
                      <h5>Secure Digital Wallet</h5>
                      <p>Store, send, and receive funds in one place</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3" data-aos="flip-left">
                    <figure>
                      <img src="assets/images/icons/transaction.svg" alt="icon2" />
                    </figure>
                    <div className="d-flex flex-column gap-2">
                      <h5>Seamless Transactions</h5>
                      <p>Pay bills, transfer money, and cash in easily</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3" data-aos="flip-left">
                    <figure>
                      <img src="assets/images/icons/investment.svg" alt="icon3" />
                    </figure>
                    <div className="d-flex flex-column gap-2">
                      <h5>Crypto-Ready</h5>
                      <p>Manage digital assets alongside traditional money</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3" data-aos="flip-left">
                    <figure>
                      <img src="assets/images/icons/card.svg" alt="icon4" />
                    </figure>
                    <div className="d-flex flex-column gap-2">
                      <h5>User-Centric Security</h5>
                      <p>Multi-factor authentication (MFA) and biometric login</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex flex-column h-100 position-relative" data-aos="fade-up">
                  <h2>
                    Powering Your Financial <span>Freedom</span>
                  </h2>
                  <p className="py-4 flex-grow-1">MEXPay is built for your financial freedom. With seamless transactions, top-tier security, and crypto-ready features, we empower you to take full control of your money—anytime, anywhere. </p>
                  <div>
                    <a href="Services.html" className="hover2">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======== End of 1.4. Services section ======== -->
        <!-- ========  1.5. Registration section ========  --> */}
        <section className="Registration">
          <div className="container">
            <div className="row gy-lg-0 gy-md-5 gy-4">
              <div className="col-lg-6">
                <div className="mt-md-4" data-aos="fade-up">
                  <h2>Simple & Secure <span>Registration Process</span></h2>
                  <p>Getting started with MEXPay is quick and easy. Follow these steps to verify your account and unlock full access to your digital wallet.
                  </p>
                  <div className="d-flex gap-sm-5  gap-4 flex-sm-row flex-column">
                    <ul className="d-flex flex-column">
                      <li>
                        <h6>Sign Up & Provide Basic Information                    </h6>
                      </li>
                      <li>
                        <h6>Upload a Valid ID</h6>
                      </li>
                      <li>
                        <h6>Register anywhere, anytime</h6>
                      </li>
                    </ul>
                    <ul className="d-flex flex-column">
                      <li>
                        <h6>Complete Facial Verification
                        </h6>
                      </li>
                      <li>
                        <h6>Confirm Your Phone Number
                        </h6>
                      </li>
                      <li>
                        <h6>Enjoy Full Access
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex  align-items-center gap-md-4 gap-3">
                    <div>
                      <a href="Contact.html" className="hover1">Register Now</a>
                    </div>
                    <div>
                      <a href="Contact.html" className="hover2">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex justify-content-lg-start justify-content-center">
                  <figure className="position-relative" data-aos="zoom-in-up" data-aos-delay="200">
                    <img className="w-100" src="assets/images/index/registration_mobile.webp" alt="registration_mobile"
                      data-aos="fade-up" />
                  </figure>
                  <div className="d-flex flex-column gap-lg-4 gap-3 ps-lg-4 ps-3 pt-lg-2">
                    <div className="d-flex flex-column gap-lg-3" data-aos="flip-left">
                      <figure className="d-flex justify-content-center align-items-center">
                        <img src="assets/images/icons/income_icon.svg" alt="income_icon" />
                      </figure>
                      <div>
                        <p className="p-0">Incomes</p>
                        <p className="pt-1">$<span className="number" data-final-value="2750.50"></span></p>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-lg-3" data-aos="flip-left">
                      <figure className="d-flex justify-content-center align-items-center"><img
                          src="assets/images/icons/icon_expenses.svg" alt="icon_expenses" /></figure>
                      <div>
                        <p className="p-0">Expenses</p>
                        <p className="pt-1">$<span className="number" data-final-value="1240.75"></span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======== End of 1.5. Registration section ========  -->
        <!-- ======== 1.6. Download section ========  --> */}
        <section className="Download">
          <div className="container">
            <div className="row flex-md-row flex-column-reverse">
              <div className="col-lg-5 col-md-5">
                <figure className="d-flex h-100 position-relative" data-aos="zoom-in-up">
                  <img src="assets/images/index/download_Img.webp" alt="download_Img" />
                </figure>
              </div>
              <div className="col-lg-7 col-md-7">
                <div
                  className="d-flex flex-column h-100 justify-content-md-center justify-content-end text-md-start text-center"
                  data-aos="fade-up">
                  <h2>MEXPay: The Smarter Way to <span>Manage Your Money</span></h2>
                  <p>MEXPay is your all-in-one financial companion, offering seamless transactions, secure digital wallets, and effortless bill payments. Enjoy fast and secure money transfers, cash-ins, and cryptocurrency transactions—all from one powerful app.

                    Download the app now and take control of your financial freedom!
                    </p>
                  <div className="d-flex gap-lg-4 gap-md-3 align-items-center">
                    <h5>DOWNLOAD THE APP</h5>
                    <div className="d-flex gap-lg-3 gap-md-3">
                      <a href="#">
                        <div className="d-flex gap-lg-3 gap-2 justify-content-center align-items-center">
                          <figure><img src="assets/images/icons/apple.svg" alt="apple" /></figure>
                          <div>
                            <p>Download on the </p>
                            <h6>App Store</h6>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="d-flex gap-lg-3 gap-2 justify-content-center align-items-center">
                          <figure><img src="assets/images/icons/playstore.svg" alt="playstore" /></figure>
                          <div>
                            <p>GET IT ON</p>
                            <h6>Google Play</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======== End of 1.6. Download section ========  -->
        <!-- ======== 1.7. Benefits section ======== --> */}
        <section className="Benefits">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div
                  className="d-flex flex-column h-100 gap-md-5 gap-4 justify-content-between justify-content-xl-start pb-lg-0 pb-5"
                  data-aos="fade-up">
                  <h2>You Can Send Money On Your <span>Finger Tips</span></h2>
                  <div className="d-flex gap-0 position-relative">
                    <div className="d-flex flex-column gap-5">
                      <div className="d-flex flex-column gap-3">
                        <h5>John Smith Sending</h5>
                        <div className="d-flex gap-4 align-items-center">
                          <figure>
                            <img src="assets/images/index/sender.webp" alt="sender" />
                          </figure>
                          <p>$<span className="number" data-final-value="466.53"></span></p>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-3">
                        <h5>William Recieving</h5>
                        <div className="d-flex gap-4 align-items-center">
                          <figure>
                            <img src="assets/images/index/reciever.webp" alt="reciever" />
                          </figure>
                          <p>$<span className="number" data-final-value="466.53"></span></p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column py-4">
                      <figure>
                        <img src="assets/images/icons/flag1.svg" alt="flag" />
                      </figure>
                      <figure className="d-flex align-items-center justify-content-center">
                        <img src="assets/images/icons/telegram.png" alt="telegram" />
                      </figure>
                      <figure>
                        <img src="assets/images/icons/flag2.svg" alt="flag" />
                      </figure>
                    </div>
                    <div className="position-absolute p-4 d-flex align-items-center gap-3">
                      <div>
                        <figure>
                          <i className="fa-solid fa-check"></i>
                        </figure>
                      </div>
                      <p>Your Payment has been successful</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <figure className="position-relative pt-5 pt-lg-0" data-aos="zoom-in-up">
                  <img className="w-100" src="assets/images/index/benefitsMobile.webp" alt="mobile" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======== End of 1.7. Benefits section ======== -->
        <!-- ======== 1.8. Testimonials section ======== --> */}
        <section className="Testimonials">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="d-flex flex-column gap-4 h-100 justify-content-center position-relative" data-aos="fade-up">
                  <h2>What Customers say About Us</h2>
                  <p>Lorem ipsum dolor sit amet consectetur. Scelerisque tincidunt nibh molestie nisi egestas
                    nulla massa.
                    Scelerisque ipsum sem sed nisi molestie tortor tincidunt.</p>
                  <div className="d-flex flex-row">
                    <div className="d-flex flex-column">
                      <h3><span className="number" data-final-value="93"></span>k+</h3>
                      <p>Satisfied user</p>
                    </div>
                    <div className="d-flex flex-column">
                      <h3><span className="number" data-final-value="4.9"></span>/5</h3>
                      <p>Client Rating</p>
                    </div>
                    <div className="d-flex flex-column">
                      <h3><span className="number" data-final-value="100"></span>k+</h3>
                      <p>App Download</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="d-flex flex-column ps-lg-5 justify-content-between pt-5 pt-md-0">
                  <div className="d-flex gap-4 align-items-center position-relative" data-aos="fade-up">
                    <figure className="position-absolute">
                      <img src="assets/images/icons/comma.svg" alt="comma" />
                    </figure>
                    <figure>
                      <img src="assets/images/index/testimonial_1.webp" alt="john" />
                    </figure>
                    <div className="d-flex flex-column gap-1">
                      <div>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="py-md-1">
                        <h6>John Smith</h6>
                        <p>Designer</p>
                      </div>
                      <p className="p-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.</p>
                    </div>
                  </div>
                  <div className="d-flex gap-4 align-items-center position-relative" data-aos="fade-up">
                    <figure className="position-absolute">
                      <img src="assets/images/icons/comma.svg" alt="comma" />
                    </figure>
                    <figure>
                      <img src="assets/images/index/reciever.webp" alt="william" />
                    </figure>
                    <div className="d-flex flex-column gap-1">
                      <div>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="py-md-1">
                        <h6>William John</h6>
                        <p>Developer</p>
                      </div>
                      <p className="p-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.</p>
                    </div>
                  </div>
                  <div className="d-flex gap-4 align-items-center position-relative" data-aos="fade-up">
                    <figure className="position-absolute">
                      <img src="assets/images/icons/comma.svg" alt="comma" />
                    </figure>
                    <figure>
                      <img src="assets/images/index/testimonial_3.webp" alt="Anna" />
                    </figure>
                    <div className="d-flex flex-column gap-1">
                      <div>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="py-1">
                        <h6>Anna Williams</h6>
                        <p>Freelancer</p>
                      </div>
                      <p className="p-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======== End of 1.8. Testimonials section ======== -->
        <!-- ======== 1.9. Pricing section ======== */}
        <section className="FAQs">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-7">
                <div data-aos="fade-up">
                  <h2>Frequently Asked <span>Questions</span></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has
                    been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply
                    dummy
                    text.</p>
                  <div>
                    <div className="accordion accordion-flush d-flex flex-column" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <figure className="position-relative pt-md-0 pt-5" data-aos="zoom-in">
                  <img src="assets/images/index/faqsGirl.webp" alt="faqs" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======== End of 1.11. FAQs section ======== -->
        <!-- ======== 1.12. Footer section ======== --> */}
        <footer>
          <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center gap-lg-5 gap-md-4">
              <h2>Get Latest Updates</h2>
              <form className="d-flex justify-content-center align-items-center gap-lg-4 w-100">
                <input type="email" placeholder="Enter Your Email" required name="footerEmail" />
                <button type="submit" className="hover1">Subscribe</button>
              </form>
              <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <img src="assets/images/icons/Confirmation_1.gif" alt="submitIcon" />
                    <div>
                      <h4>Response Submitted</h4>
                      <h6>Your details have been successfully submitted. Thanks</h6>
                    </div>
                    <button type="button" className="hover1 m-auto" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between w-100">
              <div className="z-1 d-flex align-items-md-start align-items-center text-md-start text-center flex-column">
                <figure>
                  <a href="index.html">
                    <img src="assets/images/logo.svg" alt="logo" />
                  </a>
                </figure>
                <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum </p>
                <div className="d-flex gap-lg-4 gap-md-3 flex-row">
                  <a href="#">
                    <figure className="d-flex justify-content-center align-items-center">
                      <i className="fa-brands fa-facebook-f"></i>
                    </figure>
                  </a>
                  <a href="#">
                    <figure className="d-flex justify-content-center align-items-center">
                      <i className="fa-brands fa-twitter"></i>
                    </figure>
                  </a>
                  <a href="#">
                    <figure className="d-flex justify-content-center align-items-center"><i className="fa-brands fa-instagram"></i>
                    </figure>
                  </a>
                  <a href="#">
                    <figure className="d-flex justify-content-center align-items-center"><i className="fa-brands fa-linkedin"></i>
                    </figure>
                  </a>
                </div>
              </div>
              <div
                className="d-flex flex-column gap-lg-4 d-flex align-items-md-start align-items-center text-md-start text-center ms-0">
                <h5>Contact US</h5>
                <ul>
                  <li><a href="#">120 Genève NR21, West Lancashire, England</a></li>
                  <li>
                    Need help? Call us
                    <a href="#">
                      <span className="d-block">(+122) 34 5678 9100</span></a>
                  </li>
                  <li><a href="#">support@example.com</a></li>
                </ul>
              </div>
              <div
                className="d-flex gap-md-3 flex-column p-0 d-flex align-items-md-start align-items-center text-md-start text-center">
                <h5>DOWNLOAD THE APP</h5>
                <p>We suggest connecting to the apps you use for work</p>
                <div className="d-flex gap-lg-3 gap-md-3">
                  <a href="#">
                    <div className="d-flex gap-lg-3 gap-2 justify-content-center align-items-center">
                      <figure><img src="assets/images/icons/apple.svg" alt="apple" /></figure>
                      <div>
                        <p>Download on the </p>
                        <h6>App Store</h6>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="d-flex gap-lg-3 gap-2 justify-content-center align-items-center">
                      <figure><img src="assets/images/icons/playstore.svg" alt="playstore" /></figure>
                      <div>
                        <p>GET IT ON</p>
                        <h6>Google Play</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-100 text-center py-lg-4 py-3">
              <p>Copyright &copy; <span id="year"></span> MEXPay - A Financial Revolution. All Rights Reserved.</p>
            </div>
          </div>
          {/* <!-- scroll to top  --> */}
          <div className="scrollToTop">
            <div className="arrowUp">
              <i className="fa-solid fa-arrow-up"></i>
            </div>
            <div className="water">
              {/* <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
                <use xlink:href="#wave"></use>
              </svg>
              <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
                <use xlink:href="#wave"></use>
              </svg>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 560 20" style="display: none;">
                <symbol id="wave">
                  <path
                    d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z">
                  </path>
                  <path
                    d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z">
                  </path>
                  <path
                    d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z">
                  </path>
                  <path
                    d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z">
                  </path>
                </symbol>
              </svg> */}
            </div>
          </div>
        </footer>
        {/* <!-- ======== End of 1.12. Footer section ======== --> */}
      </div>
    </>
  );
}
