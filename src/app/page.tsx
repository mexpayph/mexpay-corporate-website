"use client";

import Image from 'next/image';
import Script from 'next/script';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // if (typeof window !== "undefined" && (window as any).AOS) {
    //   (window as any).AOS.init({ duration: 1000 });
    // }
  }, []);
  return (
    <>
      {/* Load jQuery first */}
      <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/custom.js" strategy="afterInteractive" />
      <Script src="/assets/js/aos.js" strategy="afterInteractive" />

      {/* Your main content */}
      <div className="site-wrapper">
        <header>
          <nav className="navbar navbar-expand-lg container pt-lg-4 pt-3 pb-lg-4 pb-3">
            <div className="container-fluid justify-content-lg-start justify-content-between">
              {/* <!-- site logo --> */}
              <a className="nav-logo p-0" href="index.html">
                <figure>
                  {/* <Image src="assets/images/logo.svg" alt="logo" 
                    // width={0}
                    // height={0}
                    unoptimized /> */}
                </figure>
              </a>
              {/* <!-- navigation button  --> */}
              <div className="d-flex gap-3 flex-row-reverse">

              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
