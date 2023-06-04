import { Productdata } from "../data/e-commerce/productdata";

export default function reducer(state = Productdata, action) {
  const { type, payload } = action;
  const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);
  let data = [];
  const getChunksFromString = (st, chunkSize) =>
    st.match(new RegExp(`.{${chunkSize}}`, "g"));
  const convertHexUnitTo256 = (hexStr) =>
    parseInt(hexStr.repeat(2 / hexStr.length), 16);
  const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") {
      return a / 255;
    }
    if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
      return 1;
    }
    return alpha;
  };
  function checkHoriMenu() {
    let menuWidth = document.querySelector(".hor-menu");
    let menuItems = document.querySelector(".menu-nav");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth =
      menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(
      Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])
    );
    let marginRightValue = Math.ceil(
      Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
    );
    let check =
      menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
    if (document.querySelector(".main-body")?.classList.contains("ltr")) {
      menuItems.style.marginRight = 0;
    } else {
      menuItems.style.marginLeft = 0;
    }
    if (
      menuItems.scrollWidth - 2 <
      menuWidth?.offsetWidth - menuContainerWidth
    ) {
      document.querySelector(".slide-left")?.classList.add("d-none");
      document.querySelector(".slide-right")?.classList.add("d-none");
      document.querySelector(".slide-leftRTL")?.classList.add("d-none");
      document.querySelector(".slide-rightRTL")?.classList.add("d-none");
    } else if (marginLeftValue !== 0 || marginRightValue !== 0) {
      document.querySelector(".slide-right")?.classList.remove("d-none");
      document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
    } else if (marginLeftValue !== -check || marginRightValue !== -check) {
      document.querySelector(".slide-left")?.classList.remove("d-none");
      document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
    }
    if (
      menuItems.scrollWidth - 2 >
      menuWidth?.offsetWidth - menuContainerWidth
    ) {
      document.querySelector(".slide-left")?.classList.remove("d-none");
      document.querySelector(".slide-right")?.classList.remove("d-none");
      document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
      document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
    }
    if (marginLeftValue === 0 || marginRightValue === 0) {
      document.querySelector(".slide-left")?.classList.add("d-none");
      document.querySelector(".slide-leftRTL")?.classList.add("d-none");
    }
    if (marginLeftValue !== 0 || marginRightValue !== 0) {
      document.querySelector(".slide-left")?.classList.remove("d-none");
      document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
    }
  }
  function Horizontalmenudefultclose() {
    let slide = document.querySelectorAll(".nav-item ");
    let sideMenuitem = document.querySelectorAll(".nav-sub-item");
    let slideMenu = document.querySelectorAll(".nav-sub");
    slide.forEach((element) => {
      if (element.classList.contains("active", "show") === true) {
        element.classList.remove("active", "show");
      }
    });
    sideMenuitem.forEach((element) => {
      if (element.classList.contains("active", "show") === true) {
        element.classList.remove("active", "show");
      }
    });
    slideMenu.forEach((element) => {
      if (element.classList.contains("open") === true) {
        element.classList.remove("open");
      }
      if (element) {
        element.style.display = "none";
      }
    });
  }
  function switcherArrowFn() {
    let slideLeft = document.querySelector(".slide-left");
    let slideRight = document.querySelector(".slide-right");
    // used to remove is-expanded class and remove class on clicking arrow buttons
    function slideClick() {
      let slide = document.querySelectorAll(".slide");
      let sideMenuitem = document.querySelectorAll(".slide-menu__item");
      let slideMenu = document.querySelectorAll(".slide-menu");
      slide.forEach((element, _index) => {
        if (element.classList.contains("is-expanded") === true) {
          element.classList.remove("is-expanded");
        }
      });
      sideMenuitem.forEach((element, _index) => {
        if (element.classList.contains("active") === true) {
          element.classList.remove("active");
        }
      });
      slideMenu.forEach((element, _index) => {
        if (element) {
          element.style.display = "none";
        }
      });
    }
    // horizontal arrows
    window.addEventListener("resize", () => {
      let menuWidth = document.querySelector(".hor-menu");
      let menuItems = document.querySelector(".menu-nav");
      let mainSidemenuWidth = document.querySelector(".main-body-1");
      let menuContainerWidth =
        menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
      let marginLeftValue = Math.ceil(
        Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])
      );
      let marginRightValue = Math.ceil(
        Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
      );
      let check =
        menuItems.scrollWidth +
        (0 - menuWidth?.offsetWidth) +
        menuContainerWidth;

      if (menuWidth?.offsetWidth - menuContainerWidth > menuItems.scrollWidth) {
        document.querySelector(".slide-left")?.classList.add("d-none");
        document.querySelector(".slide-right")?.classList.add("d-none");
        menuItems.style.marginRight = 0;
        menuItems.style.marginLeft = 0;
      } else {
        document.querySelector(".slide-right")?.classList.remove("d-none");
      }

      if (document.querySelector("html")?.getAttribute("dir") === "rtl") {
        if (
          Math.abs(marginRightValue) < Math.abs(check) === false &&
          menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth
        ) {
          menuItems.style.marginRight = -check + "px";
          document.querySelector(".slide-left")?.classList.remove("d-none");
        } else {
          menuItems.style.marginRight = 0;
        }
      } else {
        if (
          Math.abs(marginLeftValue) < Math.abs(check) === false &&
          menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth
        ) {
          menuItems.style.marginLeft = -check + "px";
          document.querySelector(".slide-right")?.classList.add("d-none");
        } else {
          menuItems.style.marginLeft = 0;
        }
      }
    });

    if (
      !document.querySelector("body").classList.contains("login-img") &&
      !document.querySelector("body").classList.contains("error-bg")
    ) {
      checkHoriMenu();
    }

    slideLeft.addEventListener("click", () => {
      slideClick();
      let menuWidth = document.querySelector(".hor-menu");
      let menuItems = document.querySelector(".menu-nav");
      let mainSidemenuWidth = document.querySelector(".main-body-1");
      let menuContainerWidth =
        menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
      let marginLeftValue =
        Math.ceil(
          Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])
        ) + 100;
      let marginRightValue =
        Math.ceil(
          Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
        ) + 100;

      if (document.querySelector("html").getAttribute("dir") === "rtl") {
        if (marginRightValue < 0) {
          menuItems.style.marginLeft = "0px";
          menuItems.style.marginRight =
            Number(menuItems.style.marginRight.split("px")[0]) + 100 + "px";
          document.querySelector(".slide-right")?.classList.remove("d-none");
          document.querySelector(".slide-left")?.classList.remove("d-none");
        } else {
          document.querySelector(".slide-left")?.classList.add("d-none");
        }

        if (marginRightValue >= 0) {
          menuItems.style.marginLeft = "0px";
          menuItems.style.marginRight = "0px";
        }
        // to remove dropdown when clicking arrows in horizontal menu
        let subNavSub = document.querySelectorAll(".sub-nav-sub");
        subNavSub.forEach((e) => {
          e.style.display = "";
        });
        let subNav = document.querySelectorAll(".nav-sub");
        subNav.forEach((e) => {
          e.style.display = "";
        });
      } else {
        if (marginLeftValue < 0) {
          menuItems.style.marginLeft =
            Number(menuItems.style.marginLeft.split("px")[0]) + 100 + "px";
          if (
            menuWidth?.offsetWidth - menuContainerWidth <
            menuItems.scrollWidth
          ) {
            document.querySelector(".slide-left")?.classList.remove("d-none");
            document.querySelector(".slide-right")?.classList.remove("d-none");
          }
        } else {
          document.querySelector(".slide-left")?.classList.add("d-none");
        }

        if (marginLeftValue >= 0) {
          menuItems.style.marginLeft = "0px";
          if (menuWidth?.offsetWidth < menuItems.scrollWidth) {
            document.querySelector(".slide-left")?.classList.add("d-none");
          }
        }

        // to remove dropdown when clicking arrows in horizontal menu
        let subNavSub = document.querySelectorAll(".sub-nav-sub");
        subNavSub.forEach((e) => {
          e.style.display = "";
        });
        let subNav = document.querySelectorAll(".nav-sub");
        subNav.forEach((e) => {
          e.style.display = "";
        });
      }
    });
    slideRight.addEventListener("click", () => {
      slideClick();
      let menuWidth = document.querySelector(".hor-menu");
      let menuItems = document.querySelector(".menu-nav");
      let mainSidemenuWidth = document.querySelector(".main-body-1");
      let menuContainerWidth =
        menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
      let marginLeftValue =
        Math.ceil(
          Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])
        ) - 100;
      let marginRightValue =
        Math.ceil(
          Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
        ) - 100;
      let check =
        menuItems.scrollWidth +
        (0 - menuWidth?.offsetWidth) +
        menuContainerWidth;

      if (document.querySelector("html").getAttribute("dir") === "rtl") {
        if (marginRightValue > -check) {
          menuItems.style.marginLeft = "0px";
          menuItems.style.marginRight =
            Number(menuItems.style.marginRight.split("px")[0]) - 100 + "px";
        } else {
          menuItems.style.marginLeft = "0px";
          menuItems.style.marginRight = -check + "px";
          document.querySelector(".slide-right")?.classList.add("d-none");
          document.querySelector(".slide-left")?.classList.remove("d-none");
        }

        if (marginRightValue !== 0) {
          document.querySelector(".slide-left")?.classList.remove("d-none");
        }
        // to remove dropdown when clicking arrows in horizontal menu
        let subNavSub = document.querySelectorAll(".sub-nav-sub");
        subNavSub.forEach((e) => {
          e.style.display = "";
        });
        let subNav = document.querySelectorAll(".nav-sub");
        subNav.forEach((e) => {
          e.style.display = "";
        });
      } else {
        if (marginLeftValue > -check) {
          // menuItems.style.marginRight = 0;
          menuItems.style.marginLeft =
            Number(menuItems.style.marginLeft.split("px")[0]) - 100 + "px";
        } else {
          // menuItems.style.marginRight = 0;
          menuItems.style.marginLeft = -check + "px";
          document.querySelector(".slide-right")?.classList.add("d-none");
        }
        if (marginLeftValue !== 0) {
          document.querySelector(".slide-left")?.classList.remove("d-none");
        }
        // to remove dropdown when clicking arrows in horizontal menu
        let subNavSub = document.querySelectorAll(".sub-nav-sub");
        subNavSub.forEach((e) => {
          e.style.display = "";
        });
        let subNav = document.querySelectorAll(".nav-sub");
        subNav.forEach((e) => {
          e.style.display = "";
        });
        //
      }
    });
  }
  function primaryOpacityVaue() {
    let primaryColorVal = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary-bg-color")
      .trim();
    //get variable
    let myVarVal =
      localStorage.getItem("SpruhaprimaryColor") ||
      localStorage.getItem("SpruhadarkPrimary") ||
      primaryColorVal;

    let colorData05 = hexToRgba(myVarVal || primaryColorVal, 0.05);
    document
      .querySelector("html")
      .style.setProperty("--primary005", colorData05);

    let colorData1 = hexToRgba(myVarVal || primaryColorVal, 0.2);
    document.querySelector("html").style.setProperty("--primary02", colorData1);

    let colorData2 = hexToRgba(myVarVal || primaryColorVal, 0.3);
    document.querySelector("html").style.setProperty("--primary03", colorData2);

    let colorData5 = hexToRgba(myVarVal || primaryColorVal, 0.5);
    document.querySelector("html").style.setProperty("--primary05", colorData5);

    let colorData3 = hexToRgba(myVarVal || primaryColorVal, 0.7);
    document.querySelector("html").style.setProperty("--primary07", colorData3);

    let colorData4 = hexToRgba(myVarVal || primaryColorVal, 0.8);
    document.querySelector("html").style.setProperty("--primary08", colorData4);

    let colorData6 = hexToRgba(myVarVal || primaryColorVal, 0.1);
    document.querySelector("html").style.setProperty("--primary01", colorData6);

    let colorData9 = hexToRgba(myVarVal || primaryColorVal, 0.9);
    document.querySelector("html").style.setProperty("--primary09", colorData9);
  }
  function hexToRgba(hexValue, alpha = 1) {
    if (!isValidHex(hexValue)) {
      return null;
    }
    const chunkSize = Math.floor((hexValue.length - 1) / 3);
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
  }
  function handleThemeUpdate(cssVars) {
    const root = document.querySelector(":root");
    const keys = Object.keys(cssVars);
    keys.forEach((key) => {
      root.style.setProperty(key, cssVars[key]);
    });
  }
  function resetData() {
    let li = document.querySelectorAll(".menu-icon");
  document.querySelector("#myonoffswitch19").checked = true; //LTR
  document.querySelector("#myonoffswitch01").checked = true; //VERTICALMENU
  document.querySelector("#myonoffswitch1").checked = true;  //LIGHT THEME
  document.querySelector("#myonoffswitch5").checked = true; //DARK MENU
  document.querySelector("#myonoffswitch6").checked = true; //LIGHT HEADER
  document.querySelector("#myonoffswitch9").checked = true; //FULL WIDTH
  document.querySelector("#myonoffswitch11").checked = true; //FIXED LAYOUTPOSTION
  document.querySelector("body").classList.remove("dark-theme");
  let mainContainer = document.querySelectorAll(".main-container");
  mainContainer.forEach(e => {
    e.classList.remove("container");
    e.classList.add("container-fluid");
  })
  document.querySelector("body").classList.add("leftmenu");
  document.querySelector("body").classList.add("main-body");
  document.querySelector(".main-content").classList.add("side-content");
  document.querySelector(".main-header").classList.add("sticky");
  document.querySelector(".main-menu").classList.add("main-sidebar", "main-sidebar-sticky", "side-menu");
  document.querySelector(".main-container-1").classList.add("main-sidebar-header");
  document.querySelector(".main-body-1").classList.add("main-sidebar-body");
  document.querySelector("body").classList.add("dark-menu")
  document.querySelector("body").classList.remove("rtl");
  document.querySelector("body").classList.remove("light-theme");
  document.querySelector("body").classList.remove("light-menu");
  document.querySelector("body").classList.remove("color-menu");
  document.querySelector("body").classList.remove("horizontalmenu");
  document.querySelector(".main-content").classList.remove("hor-content");
  document.querySelector(".main-header").classList.remove("hor-header");
  document.querySelector(".main-container-1").classList.remove("container");
  document.querySelector(".main-menu").classList.remove("main-navbar", "hor-menu");
  document.querySelector("body").classList.remove("color-menu");
  document.querySelector("body").classList.remove("header-dark");
  document.querySelector("body").classList.remove("color-header");
  document.querySelector("body").classList.remove("layout-boxed");
  document.querySelector("body").classList.remove("icontext-menu");
  document.querySelector("body").classList.remove("icon-overlay");
  document.querySelector("body").classList.remove("closed-leftmenu");
  document.querySelector("body").classList.remove("hover-submenu");
  document.querySelector("body").classList.remove("hover-submenu1");
  document.querySelector("body").classList.remove("sidenav-toggled");
  document.querySelector("body").classList.remove("scrollable-layout");
  document.querySelector("body").classList.remove("horizontalmenu-hover");
  li.forEach(e => e.classList.add('sidemenu-icon'))

  primaryOpacityVaue();
  }
  function dynamicLightPrimaryColor(primaryColor, color) {
    primaryColor.forEach((item) => {
      const cssPropName = `--primary-${item.getAttribute("data-id")}`;
      const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
      const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
      handleThemeUpdate({
        [cssPropName]: hexToRgba(color),
        [cssPropName1]: hexToRgba(color, 0.9),
        [cssPropName2]: hexToRgba(color),
      });
    });
  }
  function dynamicDarkPrimaryColor(primaryColor, color) {
    primaryColor.forEach((item) => {
      const cssPropName = `--primary-${item.getAttribute("data-id")}`;
      const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
      const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
      handleThemeUpdate({
        [cssPropName]: hexToRgba(color),
        [cssPropName1]: hexToRgba(color, 0.9),
        [cssPropName2]: hexToRgba(color),
      });
    });
  }
  switch (type) {
    case "ADD_TO_CART":
      state = Productdata.filter((ele) => {
        return ele.id == payload;
      });
      for (let i of state) {
        data.push(data + state);
      }
      console.log(data);
      return state;
      break;
    case "LTR":
      document.querySelector("body").classList.add("ltr");
      document.querySelector("body").classList.remove("rtl");
      localStorage.setItem("SpruhaRtltoLtr", true);
      localStorage.removeItem("SpruhaLtrtoRtl");
      break;
    case "RTL":
      document.querySelector("body").classList.add("rtl");
      document.querySelector("body").classList.remove("ltr");
      localStorage.setItem("SpruhaLtrtoRtl", true);
      localStorage.removeItem("SpruhaRtltoLtr");
      break;
    case "RTL":
      document.querySelector("body").classList.add("rtl");
      document.querySelector("body").classList.remove("ltr");
      localStorage.setItem("SpruhaLtrtoRtl", true);
      localStorage.removeItem("SpruhaRtltoLtr");
      break;
    case "VerticalMenu":
      document.querySelector("body").classList.add("leftmenu", "main-body");
      document.querySelector(".main-content").classList.add("side-content");
      // document.querySelector('.main-header').classList.add('sticky');
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.add("container-fluid"));
      document
        .querySelector(".main-menu")
        .classList.add("main-sidebar", "main-sidebar-sticky", "side-menu");
      document
        .querySelector(".main-menu")
        .classList.remove("main-navbar", "hor-menu");
      document
        .querySelector(".main-container-1")
        .classList.add("main-sidebar-header");
      document.querySelector(".main-body-1").classList.add("main-sidebar-body");
      document
        .querySelector("body")
        .classList.remove("horizontalmenu", "horizontalmenu-hover");
      // document.querySelector('.main-header').classList.remove('hor-header');
      document.querySelector(".main-content").classList.remove("hor-content");
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.remove("container"));
      document.querySelector(".main-container-1").classList.remove("container");
      document.querySelector(".menu-icon").classList.remove("hor-icon");
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.add("sidemenu-icon"));
      localStorage.setItem("Spruhavertical", true);
      localStorage.removeItem("Spruhahorizontal");
      localStorage.removeItem("Spruhahorizontalhover");
      break;
    case "Horizontal":
      document.querySelector("body").classList.add("horizontalmenu");
      document.querySelector(".main-content").classList.add("hor-content");
      // document.querySelector('.main-header').classList.add('hor-header');
      // document.querySelector('.main-header').classList.remove('sticky-pin');
      document.querySelector(".main-container-1").classList.add("container");
      document
        .querySelector(".main-menu")
        .classList.add("main-navbar", "hor-menu");
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
      // document.querySelector('.main-header').classList.remove('sticky');
      document.querySelector(".main-content").classList.remove("side-content");
      document
        .querySelector(".main-container-1")
        .classList.remove("main-sidebar-header");
      document
        .querySelector(".main-menu")
        .classList.remove("main-sidebar", "main-sidebar-sticky", "side-menu");
      document
        .querySelector(".main-body-1")
        .classList.remove("main-sidebar-body");
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.remove("container-fluid"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.remove("sidemenu-icon"));
      checkHoriMenu();
      Horizontalmenudefultclose();
      switcherArrowFn();
      localStorage.setItem("Spruhahorizontal", true);
      localStorage.removeItem("Spruhavertical");
      localStorage.removeItem("Spruhahorizontalhover");
      break;
    case "HorizontalHoverMenu":
      document
        .querySelector("body")
        .classList.add("horizontalmenu", "horizontalmenu-hover");
      document.querySelector(".main-content").classList.add("hor-content");
      // document.querySelector('.main-header').classList.add('hor-header');
      // document.querySelector('.main-header').classList.remove('sticky-pin');
      document
        .querySelector(".main-menu")
        .classList.add("main-navbar", "hor-menu");
      document.querySelector(".main-container-1").classList.add("container");
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.add("container"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.add("hor-icon"));
      document.querySelector("body").classList.remove("leftmenu", "main-body");
      // document.querySelector('.main-header').classList.remove('sticky');
      document.querySelector(".main-content").classList.remove("side-content");
      document
        .querySelector(".main-menu")
        .classList.remove("main-sidebar", "main-sidebar-sticky", "side-menu");
      document
        .querySelector(".main-container-1")
        .classList.remove("main-sidebar-header");
      document
        .querySelector(".main-body-1")
        .classList.remove("main-sidebar-body");
      document.querySelector("body").classList.remove("default-menu");
      document
        .querySelectorAll(".main-container")
        .forEach((e) => e.classList.remove("container-fluid"));
      document
        .querySelectorAll(".menu-icon")
        .forEach((e) => e.classList.remove("sidemenu-icon"));
      checkHoriMenu();
      Horizontalmenudefultclose();
      switcherArrowFn();
      localStorage.setItem("Spruhahorizontalhover", true);
      localStorage.removeItem("Spruhahorizontal");
      localStorage.removeItem("Spruhavertical");
      break;
    case "LightTheme":
      document.querySelector("body").classList.add("light-theme");
      document.querySelector("body").classList.remove("dark-theme");
      document.querySelector("body").classList.remove("dark-menu");
      document.querySelector("body").classList.remove("header-dark");
      document.querySelector("body").classList.remove("color-menu");
      document.querySelector("body").classList.remove("color-header");
      document.querySelector("#myonoffswitch5").checked = true;
      document.querySelector("#myonoffswitch6").checked = true;
      document.querySelector("#myonoffswitch3").checked = true;
      document.querySelector("html").style = "";
      primaryOpacityVaue();
      // localStorage.clear();
      localStorage.setItem("SpruhaLighttheme", true);
      localStorage.removeItem("Spruhadark");
      break;
    case "dark":
      document.querySelector("body").classList.add("dark-theme");
      document.querySelector("body").classList.remove("light-theme");
      document.querySelector("body").classList.remove("light-menu");
      document.querySelector("body").classList.remove("light-header");
      document.querySelector("body").classList.remove("color-menu");
      document.querySelector("body").classList.remove("color-header");
      document.querySelector("#myonoffswitch8").checked = true;
      document.querySelector("#myonoffswitch5").checked = true;
      document.querySelector("html").style = "";
      primaryOpacityVaue();
      // localStorage.clear();
      localStorage.removeItem("SpruhaLighttheme");
      localStorage.setItem("Spruhadark", true);
      break;
    case "LightMenu":
      document.querySelector("body").classList.remove("color-menu");
      document.querySelector("body").classList.remove("dark-menu");
      document.querySelector("body").classList.add("light-menu");
      break;
    case "ColorMenu":
      document.querySelector("body").classList.remove("light-menu");
      document.querySelector("body").classList.remove("dark-menu");
      document.querySelector("body").classList.add("color-menu");
      break;
    case "DarkMenu":
      document.querySelector("body").classList.remove("light-menu");
      document.querySelector("body").classList.remove("color-menu");
      document.querySelector("body").classList.add("dark-menu");
      break;
    case "Lightheader":
      document.querySelector("body").classList.remove("color-header");
      document.querySelector("body").classList.remove("header-dark");
      document.querySelector("body").classList.add("light-header");
      break;
    case "Colorheader":
      document.querySelector("body").classList.remove("header-dark");
      document.querySelector("body").classList.remove("light-header");
      document.querySelector("body").classList.add("color-header");
      break;
    case "Darkheader":
      document.querySelector("body").classList.remove("color-header");
      document.querySelector("body").classList.remove("light-header");
      document.querySelector("body").classList.add("header-dark");
      break;
    case "FullWidth":
      document.querySelector("body").classList.remove("layout-boxed");
      document.querySelector("body").classList.add("layout-fullwidth");
      break;
    case "Boxed":
      document.querySelector("body").classList.remove("layout-fullwidth");
      document.querySelector("body").classList.add("layout-boxed");
      break;
    case "Fixed":
      document.querySelector("body").classList.remove("scrollable-layout");
      document.querySelector("body").classList.add("fixed-layout");
      break;
    case "Scrollable":
      document.querySelector("body").classList.remove("fixed-layout");
      document.querySelector("body").classList.add("scrollable-layout");
      break;
    case "resetAll":
      localStorage.clear();
      primaryOpacityVaue();
      resetData();
      document.querySelector("html").style = "";
      document.querySelector("#myonoffswitch3").checked = true;
      break;
    case "lightPrimaryColor":
      var userColor = document.getElementById("lightPrimaryColorID").value;
      localStorage.setItem("SpruhaprimaryColor", userColor);
      // to store value as opacity 0.95 we use 95
      localStorage.setItem("SpruhaprimaryHoverColor", userColor + 95);
      localStorage.setItem("SpruhaprimaryBorderColor", userColor);
      localStorage.setItem("SpruhaprimaryTransparent", userColor + 20);
      // localStorage.setItem("SpruhaprimaryTransparent", userColor + 20);
      const dynamicPrimaryLight = document.querySelectorAll(
        "input.color-primary-light"
      );
      dynamicLightPrimaryColor(dynamicPrimaryLight, userColor);
      document.getElementById("myonoffswitch1").checked = true;
      // Adding
      document.querySelector("body")?.classList.add("light-theme");
      // Removing
      document.querySelector("body")?.classList.remove("dark-theme");
      localStorage.removeItem("SpruhadarkPrimaryColor");
      localStorage.removeItem("SpruhadarkprimaryTransparent");
      primaryOpacityVaue();
      break;
    case "darkPrimaryColor":
      var userColor = document.getElementById("darkPrimaryColorID").value;
      localStorage.setItem("SpruhadarkPrimary", userColor);
      localStorage.setItem("SpruhadarkprimaryTransparent", userColor + 20);
      const dynamicPrimaryDark = document.querySelectorAll(
        "input.color-primary-dark"
      );
      dynamicDarkPrimaryColor(dynamicPrimaryDark, userColor);
      document.getElementById("myonoffswitch2").checked = true;
      // Adding
      document.querySelector("body")?.classList.add("dark-theme");
      document.querySelector("body")?.classList.add("dark-theme");
      // Removing
      document.querySelector("body")?.classList.remove("light-theme");
      primaryOpacityVaue();

      localStorage.removeItem("SpruhaprimaryColor");
      localStorage.removeItem("SpruhaprimaryHoverColor");
      localStorage.removeItem("SpruhaprimaryBorderColor");
      localStorage.removeItem("SpruhaprimaryTransparent");
      break;
    default:
      return state;
  }
}
