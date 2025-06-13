"use client";
import Banner from "@/components/Banner";
import { CallToAction1 } from "@/components/CallToAction";
import { Testimonials2 } from "@/components/Testimonials";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout>
      {/* banner */}
      <Banner />
      {/* banner end */}
      {/* brands */}
      <div className="mil-brands mil-p-160-160">
        <div className="container">
          <h5 className="mil-text-center mil-soft mil-mb-60 mil-up">
            Join over 7,000 satisfied customers who enjoy our service!
          </h5>
          <div className="row justify-content-center">
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/1.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/2.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/3.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2">
              <div className="mil-brand mil-text-center">
                <img src="img/brands/4.svg" alt="brand" className="mil-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* brands end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">Our essence, your experience</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                MEXPay is the next-generation financial app designed to give you complete control over your money. Send, receive, and manage your funds with ease—securely and seamlessly. 
                <br />
                Sign up now and experience financial freedom like never before.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Seamless Transactions</h5>
                    <p className="mil-text-m mil-soft">
                      Pay bills, transfer money, and cash in easily.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Fast & Easy Sign-Up</h5>
                    <p className="mil-text-m mil-soft">
                      Get started in minutes with your phone or email
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame">
                <img src="img/home-2/2.png" alt="image" className="mil-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-visible mil-illustration-fix mil-p-160-0">
            <div className="row align-items-end">
              <div className="mil-text-center">
                <h2 className="mil-mb-30 mil-up">
                  Secure Digital Wallet
                </h2>
                <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                  Store, send, and receive funds in one place
                </p>
              </div>
            </div>
            <div className="mil-illustration-absolute mil-up">
              <img src="img/home-2/3.png" alt="illustration" />
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* icon boxes */}
      <div className="icon-boxes mil-p-160-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/1.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">Crypto-Ready</h5>
                <p className="mil-text-s mil-soft mil-up">
                  Manage digital assets alongside traditional money
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/2.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">User-Centric Security</h5>
                <p className="mil-text-s mil-soft mil-up">
                  Multi-factor authentication (MFA) and biometric login
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/3.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">Access Exclusive Benefits</h5>
                <p className="mil-text-s mil-soft mil-up">
                  From special offers to added security, every transaction is
                  not just a purchase, but an open door to a range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* icon boxes end */}
      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row align-items-end">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Why Choose MEXPay?
                </h2>
              </div>
              <div className="col-xl-4 mil-mb-80 mil-up">
                <Link
                  href="register"
                  className="mil-btn mil-m mil-add-arrow mil-adaptive-right"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Fast & Convenient</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Make instant transfers and experience <br />
                    No more long waits; transactions happen instantly
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Secure & Reliable</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Your money is safe with top-tier encryption and fraud protection
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Future-Ready</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    From fiat to crypto, we help you stay ahead
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* features */}
      <div className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Security & Privacy First
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Multi-Factor Authentication (MFA) for added protection.{" "}
                <br />
                Passkeys & Biometrics for frictionless, secure login
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-60">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Regulated KYC Compliance to keep your account safet</h5>
                    <p className="mil-text-m mil-soft">
                      MEXPay monitors the devices connected to your <br />
                      account. If we detect activity from a new device or <br />
                      an unusual change, we will notify you.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mil-up">
                <Link
                  href="/about"
                  className="mil-btn mil-button-transform mil-m mil-add-arrow"
                >
                  More Information
                </Link>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <img
                src="img/home-2/4.png"
                alt="image"
                className="mil-up"
                style={{ width: "115%" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Real-Time Financial Overview
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                View Your Balance Anytime – Check wallet funds instantly <br />
                Track Transactions – Get a detailed history of your payments and receipts
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Security in real time</h5>
                    <p className="mil-text-m mil-soft">
                      Notifications allow you to take immediate action in <br />
                      case of unauthorized transactions or unusual activities.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Notification History</h5>
                    <p className="mil-text-m mil-soft">
                      Keep track of your financial activity and the response to
                      alert. <br />
                      Your security is our priority, are always one step
                      forward.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <img
                src="img/home-2/5.png"
                alt="image"
                className="mil-up"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* testimonials */}
      <div className="mil-testimonials mil-p-0-160">
        <div className="container">
          <Testimonials2 />
        </div>
      </div>
      {/* testimonials end */}
      {/* call to action */}
      <CallToAction1 />
    </PlaxLayout>
  );
};
export default page;
