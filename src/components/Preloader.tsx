'use client';
import { useEffect } from 'react';

export default function Preloader() {
  useEffect(() => {
    // add the class
    document.body.classList.add('preloader-active');

    function removePreloader() {
      // … your existing removal code (fade-out, hide, AOS.init, etc.)
      document.body.classList.remove('preloader-active');
    }

    window.addEventListener('load', removePreloader);
    return () => {
      window.removeEventListener('load', removePreloader);
    };
  }, []);

  return null; // this component doesn’t render any DOM itself
}
