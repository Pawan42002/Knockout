import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="d-flex container-fluid pos text-light bg-dark copyright px-sm-3 px-2">
        <span className="me-auto">Copyright © {new Date().getFullYear()}</span>
        <div className="">
          <div className="copyright-menu">
            <ul className="p-0">
              <li></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
