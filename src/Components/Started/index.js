import React, {useState, useRef, useEffect} from "react";
import "./started.css";

export default function Index() {
  const [windowSize, setWindowSize] = useState(window.screen.width);
  useEffect(() => {
    
    const resize = ()=>{
      // setWindowSize(document.body.offsetWidth)
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <section
      id="getstarted"
      className="row dark-scheme"
      style={{
        position: "relative",
        boxSizing: "border-box",
        paddingLeft: "98px",
        paddingRight: "98px",
        minHeight: "100%",
        backgroundPosition: "center",
        background:
          "url(https://www.similarweb.com/scripts/lite-app/1ee9c600ff1eef56e24f.png)",
        color: "#fff",
        backgroundSize: '100%',
      }}
    >
      {/* {console.log(window.screen.width)} */}
      <div className="col-sm-6">
        <div className="wpb_wrapper">
          <div className="wpb_single_image wpb_content_element vc_align_center">
            <figure className="wpb_wrapper vc_figure">
              <div className="vc_single_image-wrapper   vc_box_border_grey">
                <img
                  width={300}
                  height={284}
                  src="https://trendsy.tech/wp-content/uploads/2022/05/cube3d-300x284.png"
                  className="vc_single_image-img attachment-medium"
                  alt=""
                  loading="lazy"
                  title="cube3d"
                  srcSet="https://trendsy.tech/wp-content/uploads/2022/05/cube3d-300x284.png 300w, https://trendsy.tech/wp-content/uploads/2022/05/cube3d-70x66.png 70w, https://trendsy.tech/wp-content/uploads/2022/05/cube3d.png 512w"
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
            </figure>
          </div>
          <div className="wpb_text_column wpb_content_element ">
            <div className="wpb_wrapper">
              <h5
                className="vc_custom_heading top-header-piece"
                style={{ textAlign: "center" }}
              >
                <span style={{ color: "#ffffff" }}>
                  <span style={{ color: "#04d98b" }}>AUTHENTICATE</span> &amp;
                  DIGITIZE PHYSICAL PRODUCTS{" "}
                </span>
              </h5>
            </div>
          </div>
          <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_shadow vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text">
            <span className="vc_sep_holder vc_sep_holder_l">
              <span
                style={{ borderColor: "#04d98b" }}
                className="vc_sep_line"
              />
            </span>
            <span className="vc_sep_holder vc_sep_holder_r">
              <span
                style={{ borderColor: "#04d98b" }}
                className="vc_sep_line"
              />
            </span>
          </div>
          <div className="wpb_text_column wpb_content_element ">
            <div className="wpb_wrapper">
              <h5 style={{ textAlign: "center" }}>
                <span style={{ color: "#ffffff" }}>
                  <span style={{ color: "#04d98b" }}>CREATE</span> YOUR OWN
                  <br />
                  NFT COLLECTIONS
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="wpb_wrapper">
          <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_appear appear wpb_start_animation animated">
            <figure className="wpb_wrapper vc_figure">
              <div className="vc_single_image-wrapper vc_box_shadow_border_circle  vc_box_border_grey">
                <img
                  className="vc_single_image-img "
                  src="https://trendsy.tech/wp-content/uploads/2022/06/crisp-1003x1003.jpg"
                  width={1003}
                  height={1003}
                  style={{ borderRadius: "50%" }}
                  alt="crisp"
                  title="crisp"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
