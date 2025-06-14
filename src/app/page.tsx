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
      </div>
    </>
  );
}
