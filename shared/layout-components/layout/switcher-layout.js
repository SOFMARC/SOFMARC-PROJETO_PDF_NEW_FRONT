import React, { useEffect } from 'react'
// import Header2 from '../header/header2'
const Sidebar = dynamic(()=>import('../sidebar/sidebar'), { ssr: false })
import dynamic from 'next/dynamic';
import Footer from '../footer/footer';
import TabToTop from '../tab-to-top/tab-to-top';
import { Provider } from 'react-redux';
import store from "../../../shared/redux/store"
import Rightside from '../right-sidebar/right-sidebar';

const Header2 = dynamic(()=>import('../header/header2'), { ssr: false })


const Switcherlayout = ({ children }) => {

  const Add = () => {
    document.querySelector("body").classList.remove("error-1");
    document
      .querySelector("body")
      .classList.remove(
        "app",
        "sidebar-mini",
        "ltr",
        "landing-page",
        "horizontalmenu"
      );
    document.querySelector("body").classList.add("main-body", "leftmenu");
    document.body.classList.add("ltr", "main-body", "leftmenu");
  };

  useEffect(()=>{
    Add()
    document.body.classList.add("ltr", "main-body", "leftmenu")


    if (localStorage.getItem("Spruhahorizontal")) {
      document.querySelector("body").classList.add("horizontalmenu");
      document.querySelector(".main-content").classList.add("hor-content");
      if (document.querySelector("main-container-1") != null) {
        document.querySelector(".main-container-1").classList.add("container");
        document
          .querySelector(".main-menu")
          .classList.add("main-navbar", "hor-menu");
        document
          .querySelector(".main-container-1")
          .classList.remove("main-sidebar-header");
        document
          .querySelector(".main-menu")
          .classList.remove("main-sidebar", "main-sidebar-sticky", "side-menu");
        document
          .querySelector(".main-body-1")
          .classList.remove("main-sidebar-body");
      }
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.add("container"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.add("hor-icon"));
      document
        .querySelector("body")
        .classList.remove(
          "horizontalmenu-hover",
          "leftmenu",
          "main-body",
          "default-menu"
        );
      document.querySelector(".main-content").classList.remove("side-content");
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.remove("container-fluid"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.remove("sidemenu-icon"));
    }

    if (localStorage.getItem("Spruhahorizontalhover")) {
      document
        .querySelector("body")
        .classList.add("horizontalmenu", "horizontalmenu-hover");
      document.querySelector(".main-content").classList.add("hor-content");
      if(document.querySelector(".main-menu")!=null){
          document.querySelector(".main-menu").classList.add("main-navbar", "hor-menu");
          document.querySelector(".main-container-1").classList.add("container");
          document
            .querySelector(".main-menu")
            .classList.remove("main-sidebar", "main-sidebar-sticky", "side-menu");
            document
              .querySelector(".main-container-1")
              .classList.remove("main-sidebar-header");
              document
                .querySelector(".main-body-1")
                .classList.remove("main-sidebar-body");
      }
      document.querySelectorAll(".main-container").forEach((e) => e.classList.add("container"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.add("hor-icon"));
      document.querySelector("body").classList.remove("leftmenu", "main-body");
      // document.querySelector('.main-header').classList.remove('sticky');
      document.querySelector(".main-content").classList.remove("side-content");
      document.querySelector("body").classList.remove("default-menu");
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.remove("container-fluid"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.remove("sidemenu-icon"));
    //    
    }


  })

  return (
    <Provider store={store}>
    <div className="horizontalMenucontainer">
        <div className="page">

          <Header2 />
          <Sidebar />
          <div className="main-content side-content">
            <div className="main-container container-fluid" >
              <div className="inner-body" >
              { children }
              </div>
            </div>
          </div>
          <Rightside />
        </div>
        <TabToTop />
        {/* <Switcher /> */}
        <Footer />
      </div>
      </Provider>

  )
}

export default Switcherlayout