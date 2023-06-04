import React, { useEffect } from 'react'
// import * as Switcherdata from "../../../shared/data/switcherdata/switcherdata"
import { Breadcrumb, Button, Col, Card, Row, } from "react-bootstrap";
import * as Switcherdata from "../switcherdata"
import { useRouter } from 'next/router'
import {connect} from "react-redux"
import { SwitcherAction } from '../../../redux/actions';

const SwitchercomponentPage = ({ SwitcherAction }) => {
    const router = useRouter()
    useEffect(() => {
        Switcherdata.localStorageBackUp();
      }, [router.pathname])
      //ChangerPrimaryColor
      function changePrimaryColor() {
        var userColor = document.getElementById("lightPrimaryColorID").value;
        const dynamicPrimaryLight = document.querySelectorAll("input.color-primary-light");
        Switcherdata.dynamicLightPrimaryColor(dynamicPrimaryLight, userColor);
        document.getElementById("myonoffswitch1").checked = true;
        // Adding
        document.querySelector("body")?.classList.add("light-theme");
        // Removing
        document.querySelector("body")?.classList.remove("dark-theme");
    
        localStorage.setItem("SpruhaprimaryColor", userColor);
        // to store value as opacity 0.95 we use 95
        localStorage.setItem("SpruhaprimaryHoverColor", userColor + 95);
        localStorage.setItem("SpruhaprimaryBorderColor", userColor);
        localStorage.setItem("SpruhaprimaryTransparent", userColor + 20);
        localStorage.setItem('SpruhaLighttheme', true);
        localStorage.removeItem('Spruhadark')
        localStorage.removeItem("SpruhadarkPrimary")
        localStorage.removeItem("SpruhadarkprimaryTransparent");
    
        Switcherdata.primaryOpacityVaue();
      }
      //ChangeDarkPrimaryColor
    
      function darkPrimaryColor() {
        var userColor = document.getElementById("darkPrimaryColorID").value;
        const dynamicPrimaryDark = document.querySelectorAll(
          "input.color-primary-dark"
        );
        Switcherdata.dynamicDarkPrimaryColor(dynamicPrimaryDark, userColor);
        document.getElementById("myonoffswitch2").checked = true;
        // Adding
        document.querySelector("body")?.classList.add("dark-theme");
        document.querySelector("body")?.classList.add("dark-theme");
        // Removing
        document.querySelector("body")?.classList.remove("light-theme");
        Switcherdata.primaryOpacityVaue();
        localStorage.setItem("SpruhadarkPrimary", userColor);
        localStorage.setItem("SpruhadarkprimaryTransparent", userColor + 20);
        localStorage.setItem('Spruhadark', true)
        localStorage.removeItem('SpruhaLighttheme');
        localStorage.removeItem("SpruhaprimaryColor");
        localStorage.removeItem("SpruhaprimaryHoverColor");
        localStorage.removeItem("SpruhaprimaryBorderColor");
        localStorage.removeItem("SpruhaprimaryTransparent");
      }
    
      // Removing
      document.querySelector("body")?.classList.remove("light-mode");
      document.querySelector("body")?.classList.remove("dark-mode");
      document.querySelector("body")?.classList.remove("bg-img1");
      document.querySelector("body")?.classList.remove("bg-img2");
      document.querySelector("body")?.classList.remove("bg-img3");
      document.querySelector("body")?.classList.remove("bg-img4");
    
      localStorage.removeItem("primaryColor");
      localStorage.removeItem("primaryHoverColor");
      localStorage.removeItem("primaryBorderColor");
      localStorage.removeItem("darkPrimaryColor");
      localStorage.removeItem("BgImage");
    
      Switcherdata.primaryOpacityVaue();
    
    
  return (
    <div>

                    <div className="container">
        <Row className=" row-sm">
          <Col lg={6} className="m-auto">
            <Card className="custom-card sidebar-right1 switcher-2">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3 tx-semibold">
                    LTR and RTL Styles
                  </h6>
                </div>
                <div className="switch_section px-0">
                  <div className="switch-toggle d-flex">
                    <span className="me-auto">LTR</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch7"
                        id="myonoffswitch19"
                        onClick={() => Switcherdata.RtltoLtr()}
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
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch7"
                        id="myonoffswitch20"
                        onClick={() => Switcherdata.LtrtoRtl()}
                        className="onoffswitch2-checkbox"
                      />
                      <label
                        htmlFor="myonoffswitch20"
                        className="onoffswitch2-label"
                      ></label>
                    </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3 tx-semibold">
                    Navigation Styles
                  </h6>
                </div>
                <div className="switch_section px-0">
                  <div className="switch-toggle d-flex">
                    <span className="me-auto">Vertical Menu</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch01"
                        id="myonoffswitch01"
                        className="onoffswitch2-checkbox"
                        onClick={() => {Switcherdata.VerticalMenu(), router.push("#")}}
                        defaultChecked
                      />
                      <label
                        htmlFor="myonoffswitch01"
                        className="onoffswitch2-label"
                      ></label>
                    </p>
                  </div>
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto">Horizontal Click Menu</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch01"
                        id="myonoffswitch02"
                        className="onoffswitch2-checkbox"
                        onClick={() => {Switcherdata.Horizontal(), router.push("#")}}
                      />
                      <label
                        htmlFor="myonoffswitch02"
                        className="onoffswitch2-label"
                      ></label>
                    </p>
                  </div>
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto">Horizontal Hover Menu</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch01"
                        id="myonoffswitch03"
                        className="onoffswitch2-checkbox"
                        onClick={() => {Switcherdata.HorizontalHoverMenu(), router.push("#")}}
                      />
                      <label
                        htmlFor="myonoffswitch03"
                        className="onoffswitch2-label"
                      ></label>
                    </p>
                  </div>
                </div>
              </Card.Body>

              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3 tx-semibold">
                    Light Theme Style
                  </h6>
                </div>
                <div className="switch_section px-0">
                  <div className="switch-toggle d-flex">
                    <span className="me-auto">Light Theme</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch1"
                        id="myonoffswitch1"
                        onClick={() => Switcherdata.LightTheme()}
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
                    <span className="me-auto my-auto">Light Primary</span>
                    <input
                      className="wd-30 ht-30 input-color-picker color-primary-light"
                      defaultValue="#4d65d9"
                      id="lightPrimaryColorID"
                      onInput={(e) => changePrimaryColor(e)}
                      type="color"
                      data-id="bg-color"
                      data-id1="bg-hover"
                      data-id2="bg-border"
                      data-id7="transparentcolor"
                      name="lightPrimary"
                    />
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3 tx-semibold">
                    Dark Theme Style
                  </h6>
                </div>
                <div className="switch_section px-0">
                  <div className="switch-toggle d-flex">
                    <span className="me-auto">Dark Theme</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch1"
                        id="myonoffswitch2"
                        onClick={() => Switcherdata.dark()}
                        className="onoffswitch2-checkbox"
                      />
                      <label
                        htmlFor="myonoffswitch2"
                        className="onoffswitch2-label"
                      ></label>
                    </p>
                  </div>
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto my-auto">Dark Primary</span>
                    <input
                      className="wd-30 ht-30 input-dark-color-picker color-primary-dark"
                      defaultValue="#4d65d9"
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
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3 tx-semibold">
                    Menu Styles
                  </h6>
                </div>
                <div className="switch_section px-0">
                  <div className="switch-toggle lightMenu d-flex">
                    <span className="me-auto">Light Menu</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch2"
                        id="myonoffswitch3"
                        onClick={() => Switcherdata.LightMenu()}
                        className="onoffswitch2-checkbox"
                        
                      />
                      <label
                        htmlFor="myonoffswitch3"
                        className="onoffswitch2-label"
                      ></label>
                    </p>
                  </div>
                  <div className="switch-toggle colorMenu d-flex mt-2">
                    <span className="me-auto">Color Menu</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch2"
                        id="myonoffswitch4"
                        onClick={() => Switcherdata.ColorMenu()}
                        className="onoffswitch2-checkbox"
                      />
                      <label
                        htmlFor="myonoffswitch4"
                        className="onoffswitch2-label"
                      ></label>
                    </p>
                  </div>
                  <div className="switch-toggle darkMenu d-flex mt-2">
                    <span className="me-auto">Dark Menu</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch2"
                        id="myonoffswitch5"
                        onClick={() => Switcherdata.DarkMenu()}
                        className="onoffswitch2-checkbox"
                        defaultChecked
                      />
                      <label
                        htmlFor="myonoffswitch5"
                        className="onoffswitch2-label mb-0"
                      ></label>
                    </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3 tx-semibold">
                    Header Styles
                  </h6>
                </div>
                <div className="switch_section px-0">
                  <div className="switch-toggle lightHeader d-flex">
                    <span className="me-auto">Light Header</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch3"
                        onClick={() => Switcherdata.Lightheader()}
                        id="myonoffswitch6"
                        className="onoffswitch2-checkbox"
                        defaultChecked
                      />
                      <label
                        htmlFor="myonoffswitch6"
                        className="onoffswitch2-label"
                      ></label>
                    </p>
                  </div>
                  <div className="switch-toggle  colorHeader d-flex mt-2">
                    <span className="me-auto">Color Header</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch3"
                        id="myonoffswitch7"
                        onClick={() => Switcherdata.Colorheader()}
                        className="onoffswitch2-checkbox"
                      />
                      <label
                        htmlFor="myonoffswitch7"
                        className="onoffswitch2-label"
                      ></label>
                    </p>
                  </div>
                  <div className="switch-toggle darkHeader d-flex mt-2">
                    <span className="me-auto">Dark Header</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch3"
                        id="myonoffswitch8"
                        onClick={() => Switcherdata.Darkheader()}
                        className="onoffswitch2-checkbox"
                      />
                      <label
                        htmlFor="myonoffswitch8"
                        className="onoffswitch2-label mb-0"
                      ></label>
                    </p>
                  </div>
                </div>
              </Card.Body>
              <div className="card-body layout-width-style">
                <div>
                  <h6 className="main-content-label mb-3 tx-semibold">
                    Layout Width Styles
                  </h6>
                </div>
                <div className="switch_section px-0">
                  <div className="switch-toggle d-flex">
                    <span className="me-auto">Full Width</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch4"
                        id="myonoffswitch9"
                        onClick={() => Switcherdata.FullWidth()}
                        className="onoffswitch2-checkbox"
                        defaultChecked
                      />
                      <label
                        htmlFor="myonoffswitch9"
                        className="onoffswitch2-label"
                      ></label>
                    </p>
                  </div>
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto">Boxed</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch4"
                        id="myonoffswitch10"
                        className="onoffswitch2-checkbox"
                        onClick={() => Switcherdata.Boxed()}
                      />
                      <label
                        htmlFor="myonoffswitch10"
                        className="onoffswitch2-label mb-0"
                      ></label>
                    </p>
                  </div>
                </div>
              </div>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3 tx-semibold">
                    Layout Positions
                  </h6>
                </div>
                <div className="switch_section px-0">
                  <div className="switch-toggle d-flex">
                    <span className="me-auto">Fixed</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch5"
                        id="myonoffswitch11"
                        className="onoffswitch2-checkbox"
                        onClick={() => Switcherdata.Fixed()}
                        defaultChecked
                      />
                      <label
                        htmlFor="myonoffswitch11"
                        className="onoffswitch2-label"
                      ></label>
                    </p>
                  </div>
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto">Scrollable</span>
                    <p className="onoffswitch2 my-0">
                      <input
                        type="radio"
                        name="onoffswitch5"
                        id="myonoffswitch12"
                        onClick={() => Switcherdata.Scrollable()}
                        className="onoffswitch2-checkbox"
                      />
                      <label
                        htmlFor="myonoffswitch12"
                        className="onoffswitch2-label mb-0"
                      ></label>
                    </p>
                  </div>
                </div>
              </Card.Body>

              <Card.Body>
                <div className="switch_section text-center px-0">
                  <div className="btn-list">
                    <Button variant="" className="btn btn-success w-lg">
                      Save Settings
                    </Button>
                    <Button
                      variant=""
                      className="btn btn-danger w-lg"
                      onClick={() => {
                        SwitcherAction("resetAll")
                      }}
                    >
                      Reset All
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
                    {/* <!--End Row--> */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  local_Products : state
})
export default connect(mapStateToProps,{SwitcherAction})(SwitchercomponentPage)