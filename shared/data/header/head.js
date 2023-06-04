import Link from 'next/link';
import React from 'react'
import { Dropdown, Container, Form, Nav, Navbar, InputGroup, } from "react-bootstrap";
import Selectoptions from './headerdata';
import frenchflag from "../../../public/assets/img/flags/french_flag.jpg"
import germanyflag from "../../../public/assets/img/flags/germany_flag.jpg"
import italyflag from "../../../public/assets/img/flags/italy_flag.jpg"
import russiaflag from "../../../public/assets/img/flags/russia_flag.jpg"
import spainflag from "../../../public/assets/img/flags/spain_flag.jpg"
import users1 from "../../../public/assets/img/users/1.jpg"
import users2 from "../../../public/assets/img/users/2.jpg"
import users3 from "../../../public/assets/img/users/3.jpg"
import users5 from "../../../public/assets/img/users/5.jpg"
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const HeadDropDown = () => {


  const { user, signOut } = useContext(AuthContext);


    function exit(){
      signOut();
      window.location.reload();
    }

    function Fullscreen() {
        if (
          (document.fullScreenElement && document.fullScreenElement === null) ||
          (!document.mozFullScreen && !document.webkitIsFullScreen)
        ) {
          if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
          }
          else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          }
          else if
            (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(
              Element.ALLOW_KEYBOARD_INPUT
            );
          }
        }
        else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if
            (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if
            (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        }
      }

      const Darkmode = () => {
        document.querySelector("body").classList.toggle("dark-theme");
        document.querySelector("#myonoffswitch2").checked = true
        if(document.body.classList.contains("dark-theme")){
          localStorage.setItem("Spruhadark",true)
        }
        else{
          localStorage.removeItem("Spruhadark")
        }
      }

      const openCloseSidebar1 = () => {
        document.querySelector(".header-settings").classList.toggle("show");
        document.querySelector(".sidebar-right").classList.toggle("sidebar-open");
      };

  return (
        <div className="d-flex order-lg-2 align-items-center ms-auto">
          {/* <Dropdown className="header-search">
            <Dropdown.Toggle variant="default" className="px-0">
              <i className="fe fe-search header-icons fs-18 px-2 lh-5" ></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-2">
              <div className="mb-1">
              <Selectoptions />
              </div>
              <InputGroup className="">
                <Form.Control type="search" className="form-control rounded-0" placeholder="Search for anything..." onChange={(ele=>{myfunction(ele.target.value); setInputValue(ele.target.value)})} onClick={()=>{setShow1(true)}} />
                <InputGroup.Text className="btn search-btn ms-auto d-flex">
                  <i className="fe fe-search"></i>
                </InputGroup.Text>
              </InputGroup>
            </Dropdown.Menu> 
          </Dropdown> */}
          <Dropdown className="dropdown d-flex main-header-theme">
            <Nav.Link className="nav-link icon layout-setting" onClick={() => Darkmode()}>
              <span className="dark-layout">
                <i className="fe fe-sun header-icons"></i>
              </span>
              <span className="light-layout">
                <i className="fe fe-moon header-icons"></i>
              </span>
            </Nav.Link>
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

          <Dropdown className="main-profile-menu">
            <Dropdown.Toggle className="d-flex p-0" variant="default">
              <span className="main-img-user mx-1">
                <img
                  alt="avatar"
                  src={users1.src}
                />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ margin: "0px" }}>
              <div className="header-navheading">
                <h6 className="main-notification-title">
                  {user?.name}
                </h6>
                <p className="main-notification-text">
                  {user?.email}
                </p>
              </div>
              
              
              <Dropdown.Item  onClick={()=> exit()}>
              <div>
                <i className="fe fe-power"></i> Sign Out
              </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
  )
}

export default HeadDropDown