
import React, { useEffect } from "react";

export default function Layout({ children, currentPageName }) {
  useEffect(() => {
    document.documentElement.lang = 'nl';
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@400;500;700&display=swap');

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 280px;
        }

        body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
        }

        .skip-link {
          position: absolute;
          top: -100px;
          left: 0;
          background: #ca8a04; /* Gold color */
          color: white;
          padding: 1rem;
          z-index: 9999;
          transition: top 0.3s ease-in-out;
          font-weight: bold;
          border-bottom-right-radius: 0.5rem;
        }
        .skip-link:focus {
          top: 0;
        }
      `}</style>
      <a href="#main-content" className="skip-link">
        Spring naar hoofdinhoud
      </a>
      <div className="min-h-screen">
        {children}
      </div>
    </>
  );
}
