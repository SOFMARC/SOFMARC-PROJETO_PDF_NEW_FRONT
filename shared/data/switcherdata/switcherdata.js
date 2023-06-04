//LTR TO RTL
export const LtrtoRtl = () => {
    document.querySelector("body").classList.add("rtl");
    document.querySelector("html").setAttribute("dir", "rtl");
    document.querySelector("body").classList.remove("ltr");
    localStorage.setItem('SpruhaLtrtoRtl', true)
    localStorage.removeItem('SpruhaRtltoLtr')
  };
  //RTL TO LTR
  export const RtltoLtr = () => {
    document.querySelector("body").classList.add("ltr");
    document.querySelector("html").setAttribute("dir", "ltr");
    document.querySelector("body").classList.remove("rtl");
    localStorage.setItem('SpruhaRtltoLtr', true);
    localStorage.removeItem('SpruhaLtrtoRtl');
  };
  //LIGHTHEADER
  export const Lightheader = () => {
    document.querySelector("body").classList.remove("color-header");
    document.querySelector("body").classList.remove("header-dark");
    document.querySelector("body").classList.add("light-header");
  };
  //COLORHEADER
  export const Colorheader = () => {
    document.querySelector("body").classList.remove("header-dark");
    document.querySelector("body").classList.remove("light-header");
    document.querySelector("body").classList.add("color-header");
  };
  //DARKHEADER
  export const Darkheader = () => {
    document.querySelector("body").classList.remove("color-header");
    document.querySelector("body").classList.remove("light-header");
    document.querySelector("body").classList.add("header-dark");
  };
  //LIGHTMENU
  export const LightMenu = () => {
    document.querySelector("body").classList.remove("color-menu");
    document.querySelector("body").classList.remove("dark-menu");
    document.querySelector("body").classList.add("light-menu");
  };
  //COLORMENU
  export const ColorMenu = () => {
    document.querySelector("body").classList.remove("light-menu");
    document.querySelector("body").classList.remove("dark-menu");
    document.querySelector("body").classList.add("color-menu");
  };
  //DARKMENU
  export const DarkMenu = () => {
    document.querySelector("body").classList.remove("light-menu");
    document.querySelector("body").classList.remove("color-menu");
    document.querySelector("body").classList.add("dark-menu");
  };
  //FULLWIDTH
  export const FullWidth = () => {
    document.querySelector("body").classList.remove("layout-boxed");
    document.querySelector("body").classList.add("layout-fullwidth");
  };
  //BOXED
  export const Boxed = () => {
    document.querySelector("body").classList.remove("layout-fullwidth");
    document.querySelector("body").classList.add("layout-boxed");
  };
  //FIXED
  export const Fixed = () => {
    document.querySelector("body").classList.remove("scrollable-layout");
    document.querySelector("body").classList.add("fixed-layout");
  };
  //SCROLLABLE
  export const Scrollable = () => {
    document.querySelector("body").classList.remove("fixed-layout");
    document.querySelector("body").classList.add("scrollable-layout");
  };
  //VERTICALMENU
  export const VerticalMenu = () => {
    let li = document.querySelectorAll(".menu-icon")
    document.querySelector('body').classList.add('leftmenu', 'main-body');
    document.querySelector('.main-content').classList.add('side-content');
    document.querySelector('.main-header').classList.add('sticky');
    document.querySelectorAll('.main-container').forEach(e => e.classList.add('container-fluid'));
    document.querySelector('.main-menu').classList.add('main-sidebar', 'main-sidebar-sticky', 'side-menu');
    document.querySelector('.main-menu').classList.remove('main-navbar', 'hor-menu');
    document.querySelector('.main-container-1').classList.add('main-sidebar-header');
    document.querySelector('.main-body-1').classList.add('main-sidebar-body');
    document.querySelector('body').classList.remove('horizontalmenu', 'horizontalmenu-hover');
    document.querySelector('.main-header').classList.remove('hor-header');
    document.querySelector('.main-content').classList.remove('hor-content');
    document.querySelectorAll('.main-container').forEach(e => e.classList.remove('container'));
    document.querySelector('.main-container-1').classList.remove('container');
    document.querySelector('.menu-icon').classList.remove('hor-icon');
    li.forEach(e => e.classList.add('sidemenu-icon'));
    localStorage.setItem('Spruhavertical', true)
    localStorage.removeItem('Spruhahorizontal')
    localStorage.removeItem('Spruhahorizontalhover')
  };
  export const Horizontal = () => {
    let li = document.querySelectorAll(".menu-icon");
    if(document.querySelector('.main-container-1')!= null){
      document.querySelector('body').classList.add('horizontalmenu');
      document.querySelector('.main-content').classList.add('hor-content');
      document.querySelector('.main-header').classList.add('hor-header');
      document.querySelector('.main-header').classList.remove('sticky-pin');
      document.querySelector('.main-container-1').classList.add('container');
      document.querySelector('.main-menu').classList.add('main-navbar', 'hor-menu');
      document.querySelectorAll('.main-container').forEach(e => e.classList.add('container'));
      li.forEach(e => e.classList.add('hor-icon'))
      document.querySelector('body').classList.remove('horizontalmenu-hover', 'leftmenu', 'main-body', 'default-menu');
      // document.querySelector('.main-header').classList.remove('sticky');
      document.querySelector('.main-content').classList.remove('side-content');
      document.querySelector('.main-container-1').classList.remove('main-sidebar-header');
      document.querySelector('.main-menu').classList.remove('main-sidebar', 'main-sidebar-sticky', 'side-menu');
      document.querySelector('.main-body-1').classList.remove('main-sidebar-body');
      document.querySelectorAll('.main-container').forEach(e => e.classList.remove('container-fluid'));
      li.forEach(e => e.classList.remove('sidemenu-icon'))
      checkHoriMenu();
      Horizontalmenudefultclose();
      switcherArrowFn();
      localStorage.setItem('Spruhahorizontal', true)
      localStorage.removeItem('Spruhavertical')
      localStorage.removeItem('Spruhahorizontalhover')
    }
  };
  export const HorizontalHoverMenu = () => {
    let li = document.querySelectorAll(".menu-icon")
    document.querySelector('body').classList.add('horizontalmenu', 'horizontalmenu-hover');
    document.querySelector('.main-content').classList.add('hor-content');
    if(document.querySelector('.main-menu') != null){
      document.querySelector('.main-menu').classList.add('main-navbar', 'hor-menu');
      document.querySelector('.main-container-1').classList.add('container');
      document.querySelectorAll('.main-container').forEach(e => e.classList.add('container'));
      li.forEach(e => e.classList.add('hor-icon'))
      document.querySelector('body').classList.remove('leftmenu', 'main-body');
      // document.querySelector('.main-header').classList.remove('sticky');
      document.querySelector('.main-content').classList.remove('side-content');
      document.querySelector('.main-menu').classList.remove('main-sidebar', 'main-sidebar-sticky', 'side-menu');
      document.querySelector('.main-container-1').classList.remove('main-sidebar-header');
      document.querySelector('.main-body-1').classList.remove('main-sidebar-body');
      document.querySelector('body').classList.remove('default-menu');
      document.querySelectorAll('.main-container').forEach(e => e.classList.remove('container-fluid'));
      li.forEach(e => e.classList.remove('sidemenu-icon'))
      checkHoriMenu();
      Horizontalmenudefultclose();
      switcherArrowFn();
      localStorage.setItem('Spruhahorizontalhover', true)
      localStorage.removeItem('Spruhahorizontal')
      localStorage.removeItem('Spruhavertical')
    }
  };
  // Color theme
  export const LightTheme = () => {
    document.querySelector("body").classList.add("light-theme");
    document.querySelector("body").classList.remove("dark-theme");
    document.querySelector("body").classList.remove("dark-menu");
    document.querySelector("body").classList.remove("header-dark");
    document.querySelector("body").classList.remove("color-menu");
    document.querySelector("body").classList.remove("color-header");
    document.querySelector("#myonoffswitch5").checked = true;
    document.querySelector("#myonoffswitch6").checked = true;
    document.querySelector("html").style = "";
    if (typeof window !== "undefined"){
      primaryOpacityVaue();
    }
    // localStorage.clear();
    localStorage.setItem('SpruhaLighttheme', true);
    localStorage.removeItem('Spruhadark')
  };
  export const dark = () => {
    document.querySelector("body").classList.add("dark-theme");
    document.querySelector("body").classList.remove("light-theme");
    document.querySelector("body").classList.remove("light-menu");
    document.querySelector("body").classList.remove("light-header");
    document.querySelector("body").classList.remove("color-menu");
    document.querySelector("body").classList.remove("color-header");
    document.querySelector("#myonoffswitch8").checked = true;
    document.querySelector("#myonoffswitch5").checked = true;
    document.querySelector("html").style = "";
    if (typeof window !== "undefined"){

      primaryOpacityVaue();
    }
    // localStorage.clear();
    localStorage.removeItem('SpruhaLighttheme');
    localStorage.setItem('Spruhadark', true)
  };
  export function checkHoriMenu() {
    let menuWidth = document.querySelector(".hor-menu");
    let menuItems = document.querySelector(".menu-nav");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0]));
    let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
    if (document.querySelector(".main-body")?.classList.contains("ltr")) {
      menuItems.style.marginRight = 0;
    }
    else {
      menuItems.style.marginLeft = 0;
    }
    if (menuItems.scrollWidth - 2 < menuWidth?.offsetWidth - menuContainerWidth) {
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
    if (menuItems.scrollWidth - 2 > menuWidth?.offsetWidth - menuContainerWidth) {
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

  export function handleThemeUpdate(cssVars) {
    const root = document.querySelector(":root");
    const keys = Object.keys(cssVars);
    keys.forEach((key) => {
      root.style.setProperty(key, cssVars[key]);
    });
  }
  // to check the value is hexa or not
  const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

  const getChunksFromString = (st, chunkSize) =>
    st.match(new RegExp(`.{${chunkSize}}`, "g"));
  // convert hex value to 256
  const convertHexUnitTo256 = (hexStr) =>
    parseInt(hexStr.repeat(2 / hexStr.length), 16);
  // get alpha value is equla to 1 if there was no value is asigned to alpha in function
  const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") {
      return a / 255;
    }
    if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
      return 1;
    }
    return alpha;
  };
  // convertion of hex code to rgba code
  export function hexToRgba(hexValue, alpha = 1) {
    if (!isValidHex(hexValue)) {
      return null;
    }
    const chunkSize = Math.floor((hexValue.length - 1) / 3);
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
  }

  export function dynamicLightPrimaryColor(primaryColor, color) {
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
  export function dynamicDarkPrimaryColor(primaryColor, color) {
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
  export function resetData() {
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
    // document.querySelector(".main-header").classList.add("sticky");
    document.querySelector(".main-menu").classList.add("main-sidebar", "main-sidebar-sticky", "side-menu");
    document.querySelector(".main-container-1").classList.add("main-sidebar-header");
    document.querySelector(".main-body-1").classList.add("main-sidebar-body");
    // document.querySelector("body").classList.add("dark-menu")
    // document.querySelector("body").classList.add("light-header")
    document.querySelector("body").classList.remove("rtl");
    document.querySelector("body").classList.remove("light-theme");
    document.querySelector("body").classList.remove("light-menu");
    document.querySelector("body").classList.remove("color-menu");
    document.querySelector("body").classList.remove("horizontalmenu");
    document.querySelector(".main-content").classList.remove("hor-content");
    // document.querySelector(".main-header").classList.remove("hor-header");
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
    li.forEach(e => e.classList.add('sidemenu-icon'))
    if (typeof window !== "undefined"){

      primaryOpacityVaue();
    }
  }
  export function primaryOpacityVaue() {
    let primaryColorVal = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary-bg-color")
        .trim();

    //get variable
    let myVarVal = localStorage.getItem("SpruhaprimaryColor") || localStorage.getItem("SpruhadarkPrimary") || primaryColorVal;

    let colorData05 = hexToRgba(myVarVal || primaryColorVal, 0.05)
    document.querySelector('html').style.setProperty('--primary005', colorData05);

    let colorData1 = hexToRgba(myVarVal || primaryColorVal, 0.2)
    document.querySelector('html').style.setProperty('--primary02', colorData1);

    let colorData2 = hexToRgba(myVarVal || primaryColorVal, 0.3)
    document.querySelector('html').style.setProperty('--primary03', colorData2);

    let colorData5 = hexToRgba(myVarVal || primaryColorVal, 0.5)
    document.querySelector('html').style.setProperty('--primary05', colorData5);

    let colorData3 = hexToRgba(myVarVal || primaryColorVal, 0.7)
    document.querySelector('html').style.setProperty('--primary07', colorData3);

    let colorData4 = hexToRgba(myVarVal || primaryColorVal, 0.8)
    document.querySelector('html').style.setProperty('--primary08', colorData4);

    let colorData6 = hexToRgba(myVarVal || primaryColorVal, 0.1)
    document.querySelector('html').style.setProperty('--primary01', colorData6);

    let colorData9 = hexToRgba(myVarVal || primaryColorVal, 0.9)
    document.querySelector('html').style.setProperty('--primary09', colorData9);
  }
  if (typeof window !== "undefined"){
    primaryOpacityVaue();
  }
  export function localStorageBackUp() {
    let html = document.querySelector("html")?.style;
    let body = document.querySelector("body");
    if (localStorage.getItem("SpruhaprimaryColor") !== null) {
      body?.classList.add("light-theme");
      document.getElementById("myonoffswitch6").checked = true;
      body?.classList.remove("dark-theme");
      html?.setProperty("--primary-bg-color", localStorage.getItem("SpruhaprimaryColor"));
      html?.setProperty("--primary-bg-hover", localStorage.getItem("SpruhaprimaryHoverColor"));
      html?.setProperty("--primary-bg-border", localStorage.getItem("SpruhaprimaryBorderColor"));
    }
    if (localStorage.getItem("SpruhadarkPrimary") !== null) {
      body?.classList.add("dark-theme");
      body?.classList.remove("light-theme");
      html?.setProperty("--primary-bg-color", localStorage.getItem("SpruhadarkPrimary"));
      html?.setProperty("--primary-bg-hover", localStorage.getItem("SpruhadarkPrimary"));
      html?.setProperty("--primary-bg-border", localStorage.getItem("SpruhadarkPrimary"));
    }
    if (localStorage.getItem('Spruhahorizontal')) {
      Horizontal()
      document.querySelector("#myonoffswitch02").checked = true;

    }

    if (localStorage.getItem('Spruhahorizontalhover') !== null) {
      HorizontalHoverMenu()
      document.querySelector("#myonoffswitch03").checked = true;
    }

    if (localStorage.getItem('SpruhaLtrtoRtl')) {
      LtrtoRtl()
      document.querySelector("#myonoffswitch20").checked = true;
    }
    if (localStorage.getItem('Spruhadark') !== null) {
      dark()
      document.querySelector("#myonoffswitch2").checked = true;
    }
  }
  
  //horizontal-arrows
  export function switcherArrowFn() {
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

    let arrowBtnFunction = () => {
      let menuWidth = document.querySelector(".hor-menu");
      let menuItems = document.querySelector(".menu-nav");
      let mainSidemenuWidth = document.querySelector(".main-body-1");
      let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
      let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
      let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0]));
      let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

      if (menuWidth?.offsetWidth - menuContainerWidth > menuItems.scrollWidth) {
        document.querySelector(".slide-left")?.classList.add("d-none");
        document.querySelector(".slide-right")?.classList.add("d-none");
        menuItems.style.marginRight = 0;
        menuItems.style.marginLeft = 0;

      }
      else {
        document.querySelector(".slide-right")?.classList.remove("d-none");
      }

      if (document.querySelector("html")?.getAttribute("dir") === "rtl") {
        if ((Math.abs(marginRightValue) < Math.abs(check)) === false && (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
        ) {
          menuItems.style.marginRight = -check + 'px';
          document.querySelector(".slide-left")?.classList.remove("d-none");
        } else {
          menuItems.style.marginRight = 0;
        }
      } else {
        if (
          (Math.abs(marginLeftValue) < Math.abs(check)) === false &&
          (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
        ) {
          menuItems.style.marginLeft = -check + 'px';
          document.querySelector(".slide-right")?.classList.add("d-none");
        } else {
          menuItems.style.marginLeft = 0;
        }
      }
    }
    // horizontal arrows
    window.addEventListener("resize", arrowBtnFunction);

    window.addEventListener("DOMContentLoaded", arrowBtnFunction)

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
      let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
      let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) + 100;
      let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) + 100;

      if (document.querySelector('html').getAttribute('dir') === "rtl") {
        if (marginRightValue < 0) {
          menuItems.style.marginLeft = "0px";
          menuItems.style.marginRight = Number(menuItems.style.marginRight.split("px")[0]) + 100 + "px";
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
      }
      else {
        if (marginLeftValue < 0) {
          menuItems.style.marginLeft = Number(menuItems.style.marginLeft.split("px")[0]) + 100 + "px";
          if (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth) {
            document.querySelector(".slide-left")?.classList.remove("d-none");
            document.querySelector(".slide-right")?.classList.remove("d-none");
          }
        }
        else {
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
      let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
      let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) - 100;
      let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) - 100;
      let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

      if (document.querySelector('html').getAttribute('dir') === "rtl") {
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
      }
      else {
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

  export const responsiveSidebarclose = () => {
    //leftsidemenu
    document.querySelector(".main-body").classList.remove("sidenav-toggled");
    //rightsidebar
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
    //swichermainright
    document.querySelector(".demo_changer").classList.remove("active");
    document.querySelector(".demo_changer").style.right = "-270px";
  };
  //horizontalmenusticky
  export const horizontalmenusticky = () => {
    // console.log("Working", window.scrollY > 30);
    if (window.scrollY > 30 == true) {
      if(document.body.classList.contains("scrollable-layout")!= true){
        let Scolls = document.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.add("sticky-pin");
        });
      }
    } 
    else {
      if(document.body.classList.contains("scrollable-layout")!= true){
        let Scolls = document.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.remove("sticky-pin");
        });
      }
    }
  };

    if (typeof window !== "undefined"){
      window.addEventListener("scroll", horizontalmenusticky);
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

  export const landingpages = () => {
    if (window.scrollY > 30 && document.querySelector(".landing-page")) {
      let Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.add("sticky-pin");
      });
    } else {
      let Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.remove("sticky-pin");
      });
    }
  };
  // window.addEventListener("scroll", landingpages);