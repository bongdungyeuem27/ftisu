import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { LANGUAGES } from "../../Redux/constrants/languageConst";
import leader from "./images/leader.jpg"
import nhut from "./images/nhut.jpg"
import quan from "./images/quan.jpg"
import khoa from "./images/khoa.jpg"
import luc from "./images/luc.jpg"
import khanh from "./images/khanh.jpg"
import huong from "./images/huong.jpg"
import hoang from "./images/hoang.jpg"
import huy from "./images/huy.jpg"
import uyen from "./images/uyen.jpg"
import nhat from "./images/nhat.jpg"

function Index(props) {
  const language = useSelector((state) => state.language.language);

  const [keywords, setKeywords] = useState();
  useEffect(() => {
    import(
      `./keyword/${LANGUAGES.find((x) => x.key === language).value}/index.js`
    )
      .then((res) => {
        setKeywords(res.default);
      })
      .catch((rej) => {
        console.log(rej);
        setKeywords(undefined);
      });
  }, [language]);
  return (
    <section id="team" className="team section-bg">
      {/* 1 */}
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>{keywords?._temp_leader}</h2>
          <p>Chủ nhiệm các đề tài nghiên cứu khoa học</p>
        </div>

        <div className="d-flex justify-content-center">
          <div className="col-lg-3 col-md-6 ">
            <div className="member" data-aos="fade-up" data-aos-delay={100}>
              <div className="member-img">
                <img
                  src={leader}
                  className="img-fluid team-img"
                  alt="leader"
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>PGS.TS Nguyễn Đình Thuân</h4>
                <span>Trưởng khoa Hệ thống Thông tin</span>
              </div>
            </div>
          </div>
       
        </div>
      </div>

      {/* 2 */}
      <div className="container mt-4">
        <div className="section-title" data-aos="fade-up">
          <h2>Team Blockchain</h2>
          <p>Nghiên cứu về lĩnh vực Blockchain và xây dựng ứng dụng DApps</p>
        </div>
        <div className="row">
     
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src={nhut}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Nguyễn Minh Nhựt</h4>
                <span>Nghiên cứu viên</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src={quan}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Đặng Minh Quân</h4>
                <span>Sinh viên</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src={khoa}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Lưu Trần Anh Khoa</h4>
                <span>Sinh viên</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src={luc}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Nguyễn Văn Lực</h4>
                <span>Sinh viên</span>
              </div>
            </div>
          </div>

          


     
       
        </div>
      </div>

      {/* 3 */}
      <div className="container mt-4">
        <div className="section-title" data-aos="fade-up">
          <h2>Team nghiên cứu phát triển Web</h2>
          <p>Nghiên cứu các công nghệ Web và xây dựng ứng dụng</p>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src={khanh}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Lê Mai Duy Khánh</h4>
                <span>Sinh viên</span>
              </div>
            </div>
          </div>

          


     
       
        </div>
      </div>

       {/* 4 */}
       <div className="container mt-4">
        <div className="section-title" data-aos="fade-up">
          <h2>Team phân tích dữ liệu</h2>
          <p>Nghiên cứu về dữ liệu và các thuật toán ứng dụng</p>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src={huong}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Nguyễn Thị Viết Hương</h4>
                <span>Sinh viên</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src={hoang}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Nguyễn Bá Hoàng</h4>
                <span>Sinh viên</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src={huy}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Bùi Quốc Huy</h4>
                <span>Sinh viên</span>
              </div>
            </div>
          </div>
          


     
       
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src={uyen}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Đặng Vũ Phương Uyên</h4>
                <span>Sinh viên</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src={nhat}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Võ Hoàng Nhật</h4>
                <span>Sinh viên</span>
              </div>
            </div>
          </div>

          


     
       
        </div>
      </div>
    </section>
  );
}

export default Index;
