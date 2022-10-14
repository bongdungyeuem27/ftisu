import React, { useState, useRef, useEffect, memo } from "react";
import "./mydropdown.css";
import $ from "jquery";

export default memo(function Index(props) {
    // Quy định sẽ show
  const [isShown, setIsShown] = useState(false);
  // Phát hiện sự thay đổi của props.elementref
  const [ref, setRef] = useState();
  // kích thước của buttom cha
  const dimensionsRef = useRef();
  //ref của menu dropdown
  const [tippyboxRef, setTippyboxRef] = useState();
  // Lần đầu render ra để lấy kích thước menu
  const [firstTime, setFirstTime] = useState(true);
  // di chuyển chuột khắp màn hình và lấy element để so sánh ra ngoài hay vào trong
  const mouseRef = useRef();
  // chiều rộng của menu dropdown
  const tippyboxWidth = useRef();

  // Chuột hover
  const handleMouseover = (e) => {
    if (
      (props.elementref.current &&
        props.elementref.current.contains(e.target)) ||
      (tippyboxRef && tippyboxRef.contains(e.target))
    ) {
      if (isShown === false) {
        setIsShown(true);
      }
    }
  };

  // khởi tạo các giá trị ban đầu và hover cho buttom cha
  useEffect(() => {
    setRef(props.elementref);
    dimensionsRef.current = props.elementref.current.getBoundingClientRect();
    props.elementref.current.addEventListener("mouseover", handleMouseover);
    return () => {
      if (!props.elementref.current) return;
      props.elementref.current.removeEventListener(
        "mouseover",
        handleMouseover
      );
    };
  }, [props.elementref]);

  // Phát hiện chuột di chuyển ra ngoài vùng hover
  const handleMousemove = (e) => {
    mouseRef.current = document.elementFromPoint(e.clientX, e.clientY);
    if (!props.elementref) return;
    if (!tippyboxRef) return;
    if (
      !props.elementref.current.contains(mouseRef.current) &&
      !tippyboxRef.contains(mouseRef.current)
    ) {
      if (isShown) {
        setIsShown(false);
      }
    }
  };

  // khởi tạo hover cho menu dropdown
  useEffect(() => {
    if (tippyboxRef && tippyboxRef) {
      tippyboxRef.addEventListener("mouseover", handleMouseover);
      document.addEventListener("mousemove", handleMousemove, {
        passive: true,
      });

      return () => {
        tippyboxRef.removeEventListener("mouseover", handleMouseover);
        document.removeEventListener("mousemove", handleMousemove);
      };
    }
  }, [tippyboxRef]);

  // Khởi tạo các giá trị khi lần đầu render là lấy kích thước menu
  useEffect(() => {
    if (tippyboxWidth.current === undefined) {
      var table = $("#aaa").children("#tippy-14");
      var tableWidth = table.outerWidth();
      tippyboxWidth.current = tableWidth;
    }

    if (tippyboxRef && firstTime) {
      setFirstTime(false);
      return;
    }
  }, [tippyboxRef]);

  return (
    <div className="aaa" id="aaa">
      {/* {console.log("test", firstTime, isShown, tippyboxRef)} */}
      {ref && ref.current && (firstTime || isShown) && (
        <div
          data-tippy-root
          id="tippy-14"
          className="tippy-dropdown"
          style={{
            zIndex: 9999,
            visibility: firstTime ? "hidden" : "visible",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            transform: firstTime
              ? "translate3d(0px, 0px, 0px)"
              : `translate3d(${
                  window.scrollX +
                  ((dimensionsRef?.current?.left +
                    dimensionsRef?.current?.right) /
                    2 -
                    tippyboxWidth.current / 2)
                }px, ${
                  window.scrollY + dimensionsRef?.current?.bottom
                }px, 0px)`,
          }}
          ref={(ref) => {
            setTippyboxRef(ref);
          }}
        >
          <div
            className="tippy-box"
            data-state="visible"
            tabIndex={-1}
            data-theme="cmc"
            data-animation="fade"
            role="tooltip"
            data-placement="bottom"
            style={{ maxWidth: "350px", transitionDuration: "300ms" }}
          >
            <div
              className="tippy-content"
              data-state="visible"
              style={{ transitionDuration: "300ms" }}
            >
              <div>
                <ul>
                  <li>
                    <a
                      name="Trình duyệt"
                      className="dropdownItem"
                      lang="vi"
                      rel="nofollow noopener"
                      href="https://thecelo.com/"
                      target="_blank"
                    >
                      thecelo.com
                      <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      name="Trình duyệt"
                      className="dropdownItem"
                      lang="vi"
                      rel="nofollow noopener"
                      href="https://explorer.celo.org/blocks"
                      target="_blank"
                    >
                      explorer.celo.org
                      <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      name="Trình duyệt"
                      className="dropdownItem"
                      lang="vi"
                      rel="nofollow noopener"
                      href="https://stats.celo.org/"
                      target="_blank"
                    >
                      stats.celo.org
                      <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="tippy-arrow"
              style={{
                position: "absolute",
                left: "0px",
                transform: firstTime
                  ? "translate3d(0px, 0px, 0px)"
                  : `translate3d(${tippyboxWidth.current / 2}px, 0px, 0px)`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
});
