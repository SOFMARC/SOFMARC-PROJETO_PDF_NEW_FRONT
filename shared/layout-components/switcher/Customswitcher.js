import React, { Fragment, useEffect } from "react";
import * as Customswitcherdata from "../../../shared/data/switcherdata/Customswitcherdata";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button } from "react-bootstrap";


function Switcher2() {
    function changePrimaryColor() {
        var userColor = document.getElementById("lightPrimaryColorID").value;
        localStorage.setItem("SpruhaprimaryColor", userColor);
        // to store value as opacity 0.95 we use 95
        localStorage.setItem("SpruhaprimaryHoverColor", userColor + 95);
        localStorage.setItem("SpruhaprimaryBorderColor", userColor);
        localStorage.setItem("SpruhaprimaryTransparent", userColor + 20);
        // localStorage.setItem("SpruhaprimaryTransparent", userColor + 20);
        const dynamicPrimaryLight = document.querySelectorAll("input.color-primary-light");
        Customswitcherdata.dynamicLightPrimaryColor(dynamicPrimaryLight, userColor);
        document.getElementById("myonoffswitch1").checked = true;
        // Adding
        document.querySelector("body")?.classList.add("light-theme");
        // Removing
        document.querySelector("body")?.classList.remove("dark-theme");
        localStorage.removeItem("SpruhadarkPrimaryColor");
        localStorage.removeItem("SpruhadarkprimaryTransparent");
        Customswitcherdata.primaryOpacityVaue();
    }
    //ChangeDarkPrimaryColor

    function darkPrimaryColor() {
        var userColor = document.getElementById("darkPrimaryColorID").value;
        localStorage.setItem("SpruhadarkPrimary", userColor);
        localStorage.setItem("SpruhadarkprimaryTransparent", userColor + 20);
        const dynamicPrimaryDark = document.querySelectorAll(
            "input.color-primary-dark"
        );
        Customswitcherdata.dynamicDarkPrimaryColor(dynamicPrimaryDark, userColor);
        document.getElementById("myonoffswitch2").checked = true;
        // Adding
        document.querySelector("body")?.classList.add("dark-theme");
        document.querySelector("body")?.classList.add("dark-theme");
        // Removing
        document.querySelector("body")?.classList.remove("light-theme");
        Customswitcherdata.primaryOpacityVaue();
        localStorage.removeItem("SpruhaprimaryColor");
        localStorage.removeItem("SpruhaprimaryHoverColor");
        localStorage.removeItem("SpruhaprimaryBorderColor");
        localStorage.removeItem("SpruhaprimaryTransparent");
    }

    useEffect(()=>{
        Customswitcherdata.localStorageBackUp()
    })

    Customswitcherdata.primaryOpacityVaue();
    return (
        <Fragment>
            {/* <!-- Switcher --> */}
            <div className="switcher-wrapper">
                <div className="demo_changer">
                    <PerfectScrollbar options={{ suppressScrollX: true }} className="form_holder sidebar-right1">
                        <div className="row">
                            <div className="predefined_styles">
                                <div className="swichermainleft text-center">
                                    <div className="p-3 d-grid gap-2">
                                        <a
                                            href="../../index.html"
                                            className="btn btn-primary rounded-10 mt-0"
                                        >
                                            View Demo
                                        </a>
                                        <a
                                            href="https://themeforest.net/item/sash-nextjs-admin-dashboard-template/43443261?s_rank=1"
                                            className="rounded-10 btn btn-secondary"
                                        >
                                            Buy Now
                                        </a>
                                        <a
                                            href="https://1.envato.market/MGEaN"
                                            className="rounded-10 btn btn-info"
                                        >
                                            Our Portfolio
                                        </a>
                                    </div>
                                </div>
                                <div className="swichermainleft">
                                    <h4>LTR and RTL Versions</h4>
                                    <div className="skin-body">
                                        <div className="switch_section">
                                            <div className="switch-toggle d-flex">
                                                <span className="me-auto">LTR</span>
                                                <p className="onoffswitch2">
                                                    <input
                                                        type="radio"
                                                        name="onoffswitch7"
                                                        id="myonoffswitch19"
                                                        onClick={() => Customswitcherdata.RtltoLtr()}
                                                        className="onoffswitch2-checkbox"
                                                        defaultChecked
                                                    />
                                                    <label
                                                        htmlFor="myonoffswitch19"
                                                        className="onoffswitch2-label"
                                                    ></label>
                                                </p>
                                            </div>
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">RTL</span>
                                                <p className="onoffswitch2">
                                                    <input
                                                        type="radio"
                                                        name="onoffswitch7"
                                                        id="myonoffswitch20"
                                                        onClick={() => Customswitcherdata.LtrtoRtl()}
                                                        className="onoffswitch2-checkbox"
                                                    />
                                                    <label
                                                        htmlFor="myonoffswitch20"
                                                        className="onoffswitch2-label"
                                                    ></label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swichermainleft">
                                    <h4>Light Theme Style</h4>
                                    <div className="skin-body">
                                        <div className="switch_section">
                                            <div className="switch-toggle d-flex">
                                                <span className="me-auto">Light Theme</span>
                                                <p className="onoffswitch2">
                                                    <input
                                                        type="radio"
                                                        name="onoffswitch1"
                                                        id="myonoffswitch1"
                                                        onClick={() => Customswitcherdata.LightTheme()}
                                                        className="onoffswitch2-checkbox"
                                                        defaultChecked
                                                    />
                                                    <label
                                                        htmlFor="myonoffswitch1"
                                                        className="onoffswitch2-label"
                                                    ></label>
                                                </p>
                                            </div>
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">Light Primary</span>
                                                <div className="">
                                                    <input
                                                        className="wd-30 ht-30 input-dark-color-picker color-primary-light"
                                                        defaultValue="#6259ca"
                                                        id="lightPrimaryColorID"
                                                        onInput={(e) => changePrimaryColor(e)}
                                                        type="color"
                                                        data-id="bg-color"
                                                        data-id1="bg-hover"
                                                        data-id2="bg-border"
                                                        data-id3="primary"
                                                        data-id8="transparentcolor"
                                                        name="darkPrimary"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swichermainleft">
                                    <h4>Dark Theme Style</h4>
                                    <div className="skin-body">
                                        <div className="switch_section">
                                            <div className="switch-toggle d-flex">
                                                <span className="me-auto">Dark Theme</span>
                                                <p className="onoffswitch2">
                                                    <input
                                                        type="radio"
                                                        name="onoffswitch1"
                                                        id="myonoffswitch2"
                                                        onClick={() => Customswitcherdata.dark()}
                                                        className="onoffswitch2-checkbox"
                                                    />
                                                    <label
                                                        htmlFor="myonoffswitch2"
                                                        className="onoffswitch2-label"
                                                    ></label>
                                                </p>
                                            </div>
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">Dark Primary</span>
                                                <div className="">
                                                    <input
                                                        className="wd-30 ht-30 input-dark-color-picker color-primary-dark"
                                                        defaultValue="#6259ca"
                                                        id="darkPrimaryColorID"
                                                        onInput={(e) => darkPrimaryColor(e)}
                                                        type="color"
                                                        data-id="bg-color"
                                                        data-id1="bg-hover"
                                                        data-id2="bg-border"
                                                        data-id3="primary"
                                                        data-id8="transparentcolor"
                                                        name="darkPrimary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swichermainleft layout-width-style">
                                    <h4>Layout Width Styles</h4>
                                    <div className="skin-body">
                                        <div className="switch_section">
                                            <div className="switch-toggle d-flex">
                                                <span className="me-auto">Full Width</span>
                                                <p className="onoffswitch2">
                                                    <input
                                                        type="radio"
                                                        name="onoffswitch4"
                                                        id="myonoffswitch9"
                                                        className="onoffswitch2-checkbox"
                                                        defaultChecked
                                                        onClick={() => Customswitcherdata.FullWidth()}
                                                    />
                                                    <label
                                                        htmlFor="myonoffswitch9"
                                                        className="onoffswitch2-label"
                                                    ></label>
                                                </p>
                                            </div>
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">Boxed</span>
                                                <p className="onoffswitch2">
                                                    <input
                                                        type="radio"
                                                        name="onoffswitch4"
                                                        id="myonoffswitch10"
                                                        className="onoffswitch2-checkbox"
                                                        onClick={() => Customswitcherdata.Boxed()}
                                                    />
                                                    <label
                                                        htmlFor="myonoffswitch10"
                                                        className="onoffswitch2-label"
                                                    ></label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swichermainleft">
                                    <h4>Reset All Styles</h4>
                                    <div className="skin-body">
                                        <div className="switch_section my-4">
                                            <Button
                                                variant=""
                                                className="btn btn-danger btn-block"
                                                onClick={() => {
                                                    localStorage.clear();
                                                    document.querySelector("html").style = "";
                                                    Customswitcherdata.primaryOpacityVaue();
                                                    Customswitcherdata.resetData();
                                                }}
                                                type="button"
                                            >
                                                Reset All
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PerfectScrollbar>

                </div>
            </div>

            {/* <!-- End Switcher --> */}
        </Fragment>
    );
}

Switcher2.propTypes = {};

Switcher2.defaultProps = {};

export default Switcher2;
