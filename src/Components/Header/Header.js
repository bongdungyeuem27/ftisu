import React, { useState, useRef, useEffect, lazy } from "react";
import logoname from "../../common/images/logoname176.png";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SelectCurrency from "./SelectCurrency";
import ShowLanguage from "./ShowLanguage";
import { LANGUAGES } from "../../Redux/constrants/languageConst";

// var showMenu = (temps, params) => {
//   return temps.map((value, key) => {
//     return (
//       <li key={key}>
//         <Link to={value.to}>{value.name}</Link>
//         {params === value.to && (
//           <i className="fas fa-circle dot-circle-active"></i>
//         )}
//       </li>
//     );
//   });
// };

var MenuLink = ({ lable, to, activeOnlyWhenExact, location }) => {
  const match = location.pathname === to;
  return (
    <li>
      <Link to={to} className={match ? "active" : ""}>
        {lable}
      </Link>
    </li>
  );
};

var showMenu = (temps, location) => {
  var result = null;
  result = temps?.map((value, key) => {
    return (
      <MenuLink
        key={key}
        lable={value.name}
        to={value.to}
        activeOnlyWhenExact={value.exact}
        list={value.list}
        location={location}
      ></MenuLink>
    );
  });
  return result;
};

export default function Header() {
  const location = useLocation();

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
  // Kich ra ngoai se tat list
  const wrapperRef = useRef(null);

  const [currencyToggle, setCurrencyToggle] = useState(false);
  const menuRight = useRef(null);
  const menuRightCloseBtn = useRef(null);
  const [languageToggle, setLanguageToggle] = useState(false);
  const menuToggle = () => {
    menuRight.current.classList.toggle("navbar-mobile");
    menuRightCloseBtn.current.classList.toggle("bi-x");
    menuRightCloseBtn.current.classList.toggle("bi-list");
  };

  return (
    <div>
      <SelectCurrency toggle={currencyToggle}></SelectCurrency>
      <ShowLanguage toggle={languageToggle}></ShowLanguage>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to = "/">
              <img style={{ width: "100%" }} alt="Inixtas" src={logoname}></img>
            </Link>
          </div>
          <nav id="navbar" className="navbar" ref={menuRight}>
            <ul ref={wrapperRef}>
              {showMenu(keywords?._menus, location)}
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setLanguageToggle(!languageToggle);
                }}
              >
                <a className="" href={() => false}>
                  {LANGUAGES.find((x) => x.key === language).name}
                  <span className="sc-1b4wplq-0 ifkbzu">
                    <i className="fa fa-angle-down"></i>
                  </span>
                </a>{" "}
              </li>

              <li
                style={{ cursor: "pointer" }}
                onClick={() => setCurrencyToggle(!currencyToggle)}
              >
                <a className="" href={() => false}>
                  USD
                  <span className="sc-1b4wplq-0 ifkbzu">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li>
                <a className="" href={() => false}>
                  {" "}
                </a>
              </li>
              <li>
                <a className="getstarted scrollto btn btn-warning" href="#about">
                  <i
                    style={{ paddingRight: "10px" }}
                    className="fa-thin fa-user"
                  ></i>
                  {keywords?._account}
                </a>
              </li>
            </ul>
            <i
              className="bi bi-list mobile-nav-toggle"
              onClick={menuToggle}
              ref={menuRightCloseBtn}
            />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </div>
  );
}
