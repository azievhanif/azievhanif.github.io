import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center py-4">
          <p className="mb-0">
            &copy; {currentYear} Zyvv. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
