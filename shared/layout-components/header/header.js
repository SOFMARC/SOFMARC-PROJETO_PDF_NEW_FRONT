import React, { Fragment, useState } from "react";
import { Dropdown, Container, Form, Nav, Navbar, InputGroup, } from "react-bootstrap";
import Link  from "next/link";
import {MENUITEMS} from "../sidebar/nav"
import Selectoptions from "../../../shared/data/header/headerdata";
// FuScreen-start

//Images

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
// import HeadDropDown from "../../data/header/head";
import dynamic from "next/dynamic";

const HeadDropDown = dynamic(
  () => import('../../data/header/head'),
  { ssr: false }
)



// FullScreen-end
function Header() {
  const openCloseSidebar1 = () => {
    document.querySelector(".header-settings").classList.toggle("show");
    document.querySelector(".sidebar-right").classList.toggle("sidebar-open");
  };
//  headerToggleButton

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


  function Swicherbutton() {
    document.querySelector(".demo_changer").classList.toggle("active");
    document.querySelector(".demo_changer").style.right = "0px";
  }
  const Darkmode = () => {
    document.querySelector("body").classList.toggle("dark-theme");
    document.querySelector("#myonoffswitch2").checked = true
  }

  const [show1, setShow1] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [show2, setShow2] = useState(false);
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [searchval, setsearchval] = useState("Type something");
  const [NavData, setNavData] = useState([]);



  let myfunction = (inputvalue) => {
    // console.log(inputvalue);
    document.querySelector(".search-result")?.classList.remove("d-none")
    // console.log('ok');
    
    let i =[]
    let allElement2 = [];
    
    MENUITEMS.map(mainlevel => {
      if (mainlevel.Items) {
        setShow1(true)
        mainlevel.Items.map(sublevel => {
          // console.log("sublevel --- ", sublevel)
          if (sublevel.children) {
            sublevel.children.map(sublevel1 => {
              // console.log("sublevel1 --- ", sublevel1)
              i.push(sublevel1)
              if (sublevel1.children) {
                sublevel1.children.map(sublevel2 => {
                  // console.log("sublevel2 --- ", sublevel2)
                i.push(sublevel2)
                  return sublevel2;
                })
              }
              return sublevel1;
            })
          }
          return sublevel;
        })
      }
      return mainlevel;
    }
    )
    for (let allElement of i){
      if(allElement.title.toLowerCase().includes(inputvalue.toLowerCase())){
        if(allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())){
          setShow2(true)
          allElement2.push(allElement)
        }
        }
      }       
      if(!allElement2.length || inputvalue === ""){
        if(inputvalue === ""){
          setShow2(false);
          setsearchval("Type something")
          setsearchcolor('text-dark')
        }
        if(!allElement2.length){
          setShow2(false);
          setsearchcolor('text-danger')
          setsearchval("There is no component with this name")
        }
      }
      setNavData(allElement2)
      
  }
  return (
    <Fragment>
      <Navbar expand="lg" className="main-header side-header sticky"
      // style={{ marginBottom: "-64px" }}
      >
        <Container fluid className="main-container container-fluid">
          <div className="main-header-left">
            <a className="main-header-menu-icon" id="mainSidebarToggle" onClick={() => headerToggleButton()}>
              <span></span>
            </a>
            <div className="hor-logo">
              <Link className="main-logo" href="/components/dashboard/dashboard">
                <img src={logo.src} className="header-brand-img desktop-logo" alt="logo" />
                <img src={logolight.src} className="header-brand-img desktop-logo-dark" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="main-header-center">
            <div className="responsive-logo">
              <Link href="/components/dashboard/dashboard">
                <img src={logo.src} className="mobile-logo" alt="logo" />
              </Link>
              <Link href="/components/dashboard/dashboard">
                <img src={logolight.src} className="mobile-logo-dark" alt="logo" />
              </Link>
            </div>
            {/* <InputGroup>
              <Selectoptions />
              <Form.Control type="search" className="rounded-0" value={InputValue} onChange={(ele=>{myfunction(ele.target.value); setInputValue(ele.target.value)})} placeholder="Search for anything..." />
              <InputGroup.Text className="btn search-btn">
                <i className="fe fe-search"></i>
              </InputGroup.Text>
            </InputGroup> */}
            {show1 ?
                <div className="card search-result p-absolute w-40  border mt-1">
                <div className="card-header">
                <h4 className="card-title me-2 text-break">Search result of {InputValue}</h4>
                </div>
                <ul className='mt-2'>
                    {show2 ?
                  NavData.map((e) => 
                  <li  key={Math.random()} className="">
                    <Link href={`${e.path}/`}  className='search-result-item' onClick={()=>{setShow1(false),setInputValue("")}} >{e.title}</Link>
                  </li>
                    )
                    :<b className={`${searchcolor} `}>{searchval}</b>}
                </ul>
                 
                 </div>
                : ""}
          </div>
          <div className="main-header-right">
            <Navbar.Toggle aria-controls="navbarSupportedContent-4" className="navresponsive-toggler" >
              <i className="fe fe-more-vertical header-icons navbar-toggler-icon"></i>
            </Navbar.Toggle>
            <div className="navbar navbar-expand-lg nav nav-item navbar-nav-right responsive-navbar navbar-dark">
              <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent-4">
                <HeadDropDown/>
              </Navbar.Collapse>
              {/* <div className="d-flex header-setting-icon demo-icon fa-spin">
                <Nav.Link className="nav-link icon" onClick={Swicherbutton}>
                  <i className="fe fe-settings settings-icon "></i>
                </Nav.Link>
              </div> */}
            </div>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
