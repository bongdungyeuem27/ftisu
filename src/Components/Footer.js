import React from "react";

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className=" text-lg-left text-center">
              <div className="copyright">
                © Copyright <strong>FTISU</strong>. All Rights Reserved
              </div>
              <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/vesperr-free-bootstrap-template/ */}
                Designed by <a href="https://ftisu.vn/">FTISU</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </div>
  );
}
