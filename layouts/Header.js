"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = ({ dark }) => {
  const currentPath = usePathname();
  const activeMenuFuntion = (value) =>
    value.some((el) => currentPath.includes(el)) ? "mil-active" : "";
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`mil-top-panel ${dark ? "mil-dark-2" : ""}`}>
      <div className="container">
        <Link href="/" className="mil-logo">
          <img
            src={dark ? "img/logo-light.png" : "img/logo.png"}
            alt="M"
            width={160}
            height={60}
          />
        </Link>
        <nav className={`mil-top-menu ${toggle ? "mil-active" : ""}`}>
          <ul>
            <li className={`${activeMenuFuntion(["/"])}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`${activeMenuFuntion(["about"])}`}>
              <Link href="about">About</Link>
            </li>
            <li className={`${activeMenuFuntion(["services"])}`}>
              <Link href="services">Services</Link>
            </li>
            
            <li className={`${activeMenuFuntion(["contact"])}`}>
              <Link href="contact">Contact</Link>
            </li>
            
          </ul>
        </nav>
        <div className="mil-menu-buttons">
          <Link href="register" className="mil-btn mil-sm">
            Log in
          </Link>
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
