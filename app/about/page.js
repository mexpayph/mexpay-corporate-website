import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
const page = () => {
  return (
    <PlaxLayout bg={false}>
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div className="mil-text-m mil-mb-20">About us</div>
                <h1 className="mil-mb-60">
                  Your Money, Your Freedom
                </h1>
                <ul className="mil-breadcrumbs mil-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="about">About us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Our Vision
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                At MEXPay, we believe in financial freedom for everyone. Our goal is to simplify payments, money transfers, and digital asset management so you can focus on what truly matters.
              </p>
              <ul className="mil-list-2 mil-type-2">
              </ul>
              <h2 className="mil-mb-30 mil-up">
                Our Mission
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                At MEXPay, we believe in financial freedom for everyone. Our goal is to simplify payments, money transfers, and digital asset management so you can focus on what truly matters.
              </p>
              <ul className="mil-list-2 mil-type-2">
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/1.png"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* facts */}
      <div className="mil-facts mil-p-0-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={7}>
                  7
                </span>
                <span className="mil-pale">M</span>
              </p>
              <h5>Registered Users</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number="1.6">
                  1.6
                </span>
                <span className="mil-pale">M</span>
              </p>
              <h5>Regular Users</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={170}>
                  170
                </span>
                <span className="mil-pale">+</span>
              </p>
              <h5>Countries with our coverage</h5>
            </div>
          </div>
        </div>
      </div>
      {/* facts end */}
      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Our Strengths: The Trust <br />
                  Base of our users
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Connected Global Network</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Discover how our global network, spanning more than 170
                    countries, facilitates international transactions and
                    connects people around the world.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Robust Security</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Learn about the security standards that are at the heart of
                    MEXPay, guaranteeing the protection of our users' financial
                    and personal information.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Continuous Innovation</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Explore how constant innovation drives our growth, allowing
                    us to offer advanced and accessible financial solutions.
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
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Our Values are foundations of Trust
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Our values, from transparency to accountability, are the
                foundation of our organizational culture and reflect our
                unwavering.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Absolute Transparency:</h5>
                    <p className="mil-text-m mil-soft">
                      Discover how transparency is ingrained in our culture,
                      providing our users with clarity and confidence in every
                      transaction.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Commitment to Safety:</h5>
                    <p className="mil-text-m mil-soft">
                      Explore our unwavering commitment to security, ensuring
                      every transaction is conducted with the highest standards
                      of protection.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/2.png"
                  alt="image"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* team */}
      
      {/* team */}
      {/* quote */}
      <div className="mil-quote mil-p-160-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="mil-mb-30">
                "At MEXPay, transparency is not just a promise; It is the
                cornerstone of our relationship with you. We believe that trust
                is built with clear policies and coherent actions."
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60">- MEXPay Team</p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">Privacy policies</h5>
                        <p className="mil-text-m mil-soft">
                          Your privacy is our priority. We never share your
                          information with third parties without your express
                          consent.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">Data protection</h5>
                        <p className="mil-text-m mil-soft">
                          We are committed to protecting your personal and
                          financial data with the highest security measures
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* quote end */}
      {/* call to action */}
      <CallToAction2 />
      {/* call to action end */}
    </PlaxLayout>
  );
};
export default page;
