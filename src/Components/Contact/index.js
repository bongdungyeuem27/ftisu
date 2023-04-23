import React from "react";

export default function Index() {
  return (
    <section id="contact" className="contact section-bg mt-3">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Liên hệ</h2>
        </div>
        <div className="row">
          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="contact-about">
              <h3>Khoa Hệ thống Thông tin</h3>
              <h5 className="justify-center">Nhóm nghiên cứu Khoa học FTISU</h5>
              <p>
                Nhóm xây dựng và phát triển các thuật toán ứng dụng của Machine
                Learning và Blockchain vào các lĩnh vực trong cuộc sống.
              </p>
              <div className="social-links">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="info">
              <div>
                <i className="ri-map-pin-line" />
                <p>
                  Khoa Hệ thống Thông tin
                  <br />
                  Trường Đại học Công nghệ thông tin, ĐHQG HCM
                </p>
              </div>
              <div>
                <i className="ri-mail-send-line" />
                <p>minhnhut.devcntt@gmail.com</p>
              </div>
              <div>
                <i className="ri-phone-line" />
                <p>+84 362117972</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
