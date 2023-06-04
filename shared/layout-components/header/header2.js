import React, { Fragment } from "react";
import { Dropdown, Container, Form, Nav, Navbar } from "react-bootstrap";
// import { Link,useNavigate } from "react-router-dom";
import Link from "next/link";
import { useRouter } from 'next/router'
// import { auth } from "../../Firebase/firebase";
const Searchable = dynamic(() => import('react-searchable-dropdown'), { ssr: false });


import logo from "../../../public/assets/img/brand/logo.png"
import logolight from "../../../public/assets/img/brand/logo-light.png"
import frenchflag from "../../../public/assets/img/flags/french_flag.jpg"
import germanyflag from "../../../public/assets/img/flags/germany_flag.jpg"
import italyflag from "../../../public/assets/img/flags/italy_flag.jpg"
import russiaflag from "../../../public/assets/img/flags/russia_flag.jpg"
import spainflag from "../../../public/assets/img/flags/spain_flag.jpg"
import users1 from "../../../public/assets/img/users/1.jpg"
import users2 from "../../../public/assets/img/users/2.jpg"
import users3 from "../../../public/assets/img/users/3.jpg"
import users5 from "../../../public/assets/img/users/5.jpg"
import dynamic from "next/dynamic";

// FuScreen-start
function Fullscreen() {
  if (
    (document.fullScreenElement && document.fullScreenElement === null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}
// FullScreen-end
function Header2() {

  let navigate = useRouter(); 
  const routeChange = () =>{ 
    let path = navigate.pathname; 
    // navigate(path);
  }


  const openCloseSidebar = () => {
    document.querySelector(".header-settings").classList.toggle("show");
    document.querySelector(".sidebar-right").classList.toggle("sidebar-open");
  };
  const openheadersidebar = () => {
    document.querySelector(".main-body").classList.toggle("main-sidebar-hide");
  };
  // this is for the onmenu in 320 screen
  function Menuscreen() {
    document.querySelector(".leftmenu").classList.toggle("main-sidebar-show");
  }

  const headerToggleButton = () => {
    let body = document.querySelector("body")
    let innerWidth = window.innerWidth
    if (body !== !body) {
      if (innerWidth >= 992) {
        document.querySelector('body')?.classList.toggle('main-sidebar-hide');
        document.querySelector('body')?.classList.remove('main-sidebar-show');
      }
      else if (document.body.classList.contains('horizontalmenu')) {
        document.querySelector('body')?.classList.toggle('main-navbar-show');
        document.querySelector('body')?.classList.remove('main-sidebar-show');
        document.querySelector('body')?.classList.remove('main-sidebar-hide');
      }
      else {
        document.querySelector('body')?.classList.toggle('main-sidebar-show');
        document.querySelector('body')?.classList.remove('main-sidebar-hide');
      }
    }
  }

  const Darkmode = () => {
    if(document.querySelector(".main-body ")){
      document.querySelector(".main-body ").classList.toggle("dark-theme");
    }
    if(document.body.classList.contains("dark-theme")){
      localStorage.setItem("Spruhadark",true)
    }
    else{
      localStorage.removeItem("Spruhadark")
    }
  }
  return (
    <Fragment>
      <Navbar expand="lg" className="main-header side-header sticky">
        <Container fluid className="main-container">
          <div className="main-header-left">
            
              <a id="mainSidebarToggle" onClick={() => {
                headerToggleButton()
              }} className="main-header-menu-icon">
              <span></span>
              </a>
            
            <div className="hor-logo">
              <Link className="main-logo" href={`/components/dashboard/dashboard`}>
                <img src={logo.src} className="header-brand-img desktop-logo" alt="logo" />
                <img src={logolight.src} className="header-brand-img desktop-logo-dark"
                  alt="logo" />
              </Link>
            </div>
          </div>
          <div className="main-header-center">
            <div className="responsive-logo">
              <Link href={`/components/dashboard/dashboard`}>
                <img
                  src={logo.src}
                  className="mobile-logo"
                  alt="logo"
                />
              </Link>
              <Link href={`/components/dashboard/dashboard`}>
                <img
                  src={logolight.src}
                  className="mobile-logo-dark"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="input-group">
            <Searchable className="form-control select2"
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={[
          {
            value: "",
            label: "All categories"

          },
          {
            value: "it projects",
            label: "IT Projects"
          },
          {
            value: "business case",
            label: "Business Case"
          },
          {
            value: "microsoft project",
            label: "Microsoft Project"
          },
          {
            value: "risk ]management",
            label: "Risk Management"
          },
          {
            value: "popular",
            label: "Popular"
          },
          {
            value: "team building",
            label: "Team Building"
          },
        ]}
        onSelect={(value) => {
          console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
              <input
                type="search"
                className="form-control rounded-0"
                placeholder="Search for anything..."
              />
              <button className="btn search-btn">
                <i className="fe fe-search"></i>
              </button>
            </div>
          </div>
          <div className="main-header-right">
            <Navbar.Toggle
              aria-controls="navbarSupportedContent-4"
              className="navresponsive-toggler"
            >
              <i className="fe fe-more-vertical header-icons navbar-toggler-icon"></i>
            </Navbar.Toggle>
            <div className="navbar navbar-expand-lg nav nav-item navbar-nav-right responsive-navbar navbar-dark">
              <Navbar.Collapse
                className="collapse navbar-collapse"
                id="navbarSupportedContent-4"
              >
                <div className="d-flex order-lg-2 align-items-center ms-auto">
                  {/* <Dropdown className="header-search">
                    <Nav.Link className=" icon header-search" variant="default">
                      <i className="fe fe-search header-icons"></i>
                    </Nav.Link>
                    <Dropdown.Menu style={{ margin: "0px" }}>
                      <Form className="main-form-search p-2">
                        <div className="input-group">
                          <div className="input-group-btn search-panel">
                            <Form.Select className="select2">
                              <option label="All categories">
                                All categories
                              </option>
                              <option value="IT Projects">IT Projects</option>
                              <option value="Business Case">
                                Business Case
                              </option>
                              <option value="Microsoft Project">
                                Microsoft Project
                              </option>
                              <option value="Risk Management">
                                Risk Management
                              </option>
                              <option value="Team Building">
                                Team Building
                              </option>
                            </Form.Select>
                          </div>
                          <input
                            type="search"
                            className="form-control"
                            placeholder="Search for anything..."
                          />
                          <button className="btn search-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-search"
                            >
                              <circle cx="11" cy="11" r="8"></circle>
                              <line
                                x1="21"
                                y1="21"
                                x2="16.65"
                                y2="16.65"
                              ></line>
                            </svg>
                          </button>
                        </div>
                      </Form>
                    </Dropdown.Menu>
                  </Dropdown> */}
                  <div className="dropdown d-flex main-header-theme">
                    <Link href="#!" className="nav-link icon layout-setting" onClick={() => Darkmode()} >
                      <span className="dark-layout">
                        <i className="fe fe-sun header-icons"></i>
                      </span>
                      <span className="light-layout">
                        <i className="fe fe-moon header-icons"></i>
                      </span>
                    </Link>
                  </div>
                  <Dropdown className=" main-header-notification flag-dropdown">
                    <Dropdown.Toggle
                      className="nav-link icon country-Flag "
                      variant="default"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <circle cx="256" cy="256" r="256" fill="#f0f0f0" />
                        <g fill="#0052b4">
                          <path d="M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z" />
                        </g>
                        <g fill="#d80027">
                          <path d="M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z" />
                          <path d="M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803v31.482z" />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item className="d-flex ">
                        <span className="avatar  me-3 align-self-center bg-transparent">
                          <img
                            src={frenchflag.src}
                            alt="img"
                          />
                        </span>
                        <div className="d-flex">
                          <span className="mt-2">French</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar  me-3 align-self-center bg-transparent">
                          <img
                            src={germanyflag.src}
                            alt="img"
                          />
                        </span>
                        <div className="d-flex">
                          <span className="mt-2">Germany</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar me-3 align-self-center bg-transparent">
                          <img
                            src={italyflag.src}
                            alt="img"
                          />
                        </span>
                        <div className="d-flex">
                          <span className="mt-2">Italy</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar me-3 align-self-center bg-transparent">
                          <img
                            src={russiaflag.src}
                            alt="img"
                          />
                        </span>
                        <div className="d-flex">
                          <span className="mt-2">Russia</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar  me-3 align-self-center bg-transparent">
                          <img
                            src={spainflag.src}
                            alt="img"
                          />
                        </span>
                        <div className="d-flex">
                          <span className="mt-2">spain</span>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="d-md-flex">
                    <div
                      className="nav-link icon full-screen-link"
                      onClick={Fullscreen}
                    >
                      <i className="fe fe-maximize fullscreen-button fullscreen header-icons"></i>
                      <i className="fe fe-minimize fullscreen-button exit-fullscreen header-icons"></i>
                    </div>
                  </div>
                  <div className="main-header-notification">
                    <Link
                     href={`/components/advancedui/chat`}
                     className="icon nav-link"
                    >
                      <i className="fe fe-message-square header-icons"></i>
                      <span className="badge bg-success nav-link-badge">6</span>
                    </Link>
                  </div>
                  <Dropdown className="main-profile-menu">
                    <Dropdown.Toggle className="d-flex" variant="default">
                      <span className="main-img-user">
                        <img
                          alt="avatar"
                          src={users1.src}
                        />
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ margin: "0px" }}>
                      <div className="header-navheading">
                        <h6 className="main-notification-title">
                          Sonia Taylor
                        </h6>
                        <p className="main-notification-text">Web Designer</p>
                      </div>
                      <Dropdown.Item
                        className="border-top"
                        href={`${process.env.PUBLIC_URL}/pages/profile`}
                      >
                        <i className="fe fe-user"></i> My Profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        href={`${process.env.PUBLIC_URL}/pages/profile`}
                      //  href="profile.html"
                      >
                        <i className="fe fe-edit"></i> Edit Profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        href={`${process.env.PUBLIC_URL}/pages/profile`}
                      >
                        <i className="fe fe-settings"></i> Account Settings
                      </Dropdown.Item>
                      <Dropdown.Item
                        //  href="profile.html"
                        href={`${process.env.PUBLIC_URL}/pages/profile`}
                      >
                        <i className="fe fe-settings"></i> Support
                      </Dropdown.Item>
                      <Dropdown.Item
                        //  href="profile.html"
                        href={`${process.env.PUBLIC_URL}/pages/profile`}
                      >
                        <i className="fe fe-compass"></i> Activity
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {auth.signOut();routeChange()}} >
                        <i className="fe fe-power"></i> Sign Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="d-md-flex header-settings">
                    <Link href="#!" className="nav-link icon" onClick={() => openCloseSidebar()}
                    >
                      <i className="fe fe-align-right header-icons"></i>
                    </Link>
                  </div>
                </div>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
}

Header2.propTypes = {};

Header2.defaultProps = {};

export default Header2;
