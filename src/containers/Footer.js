import React from "react";

export const Footer = () => {
  return (
    <div className="footer p-1 text-light bg-primary border">
      <div className="d-flex container-fluid justify-content-between">
        <div className="d-flex justify-content-between">
          <span>Copyright 2023</span>
          <div className="vr mx-2"></div>
          <span>Feedback</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Privacy</span>
          <div className="vr mx-2"></div>
          <span>© 2023, Siksha</span>
          <div className="vr mx-2"></div>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};
