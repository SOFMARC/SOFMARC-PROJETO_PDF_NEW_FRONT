import React, { Fragment, useEffect } from "react";
import * as Switcherdata from "../../../shared/data/switcherdata/switcherdata";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button, Dropdown, Modal} from "react-bootstrap";
import Link from "next/link"
import {connect} from "react-redux"
import {useRouter} from "next/router"
import { SwitcherAction,changePrimaryColor,darkPrimaryColor } from "../../redux/actions";
import { useState } from "react";

//Images
import free from "../../../public/assets/switcher/img/free.png"
import img16 from "../../../public/assets/switcher/img/16.jpg"
import img14 from "../../../public/assets/switcher/img/14.jpg"
import img15 from "../../../public/assets/switcher/img/15.jpg"
import moneybag from "../../../public/assets/switcher/img/money-bag.png"



function Switcher({SwitcherAction,changePrimaryColor,darkPrimaryColor}) {
  const router = useRouter()
  const [Basic, setShow1] = useState(false);
  useEffect(() => {
    Switcherdata.localStorageBackUp();
  }, [])
  return (
    <Fragment>
      <div className="switcher-wrapper">
        <div className="demo_changer"  >
          <PerfectScrollbar options={{ suppressScrollX: true }} className="form_holder sidebar-right1">
            <div className="row">
              <div className="predefined_styles">
                <div className="swichermainleft text-center">
                  <div className="p-3 d-grid gap-2">
                    <Link href="https://nextjs.spruko.com/spruha/" className="btn btn-primary rounded-10 mt-0">View Demo</Link>
                    <Link href="#!" className="rounded-10 btn btn-secondary" onClick={() => setShow1(!Basic)}>Buy Now</Link>
                    
                    {/* <!-- buynow modal --> */}
                    <Modal className='buynow buynow-btn' size='lg' show={Basic}>
                        <Modal.Body className='p-0 overflow-hidden'>
                          <div className="modal-content-demo cover-image py-5" style={{ backgroundImage: `url(${img16.src})` }}>
                            <div className="row justify-content-center py-4 px-0 mx-3  Licenses-img">
                              <h3 className=" text-center mb-4 text-white" style={{ zIndex: 1 }}>Licenses</h3>
                              <button aria-label="Close" onClick={() => setShow1(!Basic)} className="btn-close" data-bs-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
                              <div className="col-sm-10 col-md-8 col-xl-5 col-lg-5">
                                <div className="card  border-0 regular-license">
                                  <div className="card-body imag-list cover-image" style={{ backgroundImage: `url(${img14.src})` }}>
                                    <div className="text-white">
                                      <img src={free.src} alt="" className="w-55 free-img" />
                                      <div className="text-center">
                                        <div className="tx-26"><span className="font-weight-medium ">Regular</span> Licenses</div>
                                        <p className="fw-semi-bold mb-sm-2 mb-0">You <span className="text-success font-weight-semibold">{`can't`} charge </span> from your <br /><span className="op-8">End Product  End Users</span> </p>
                                        <Dropdown>
                                          <Dropdown.Toggle className='btn w-lg mt-1' variant="info" id="dropdown-basic">Buy Now</Dropdown.Toggle>
                                          <Dropdown.Menu className='py-0' style={{ marginTop: '0px' }}>
                                            <Dropdown.Item className='border-bottom px-3' target="_blank" href="https://1.envato.market/Vy1YaO">
                                              <div><p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">6 months support</span></div></Dropdown.Item>
                                            <Dropdown.Item className='px-3' target="_blank" href="https://1.envato.market/ORjnjN">
                                              <div><p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">12 months support</span></div></Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-10 col-md-8 col-xl-5 col-lg-5">
                                <div className="card border-0 ">
                                  <div className='imag-list card-body cover-image' style={{ backgroundImage: `url(${img15.src})` }}>
                                    <div className="text-white">
                                      <img src={moneybag.src} alt="" className="w-55 free-img" />
                                      <div className="text-center">
                                        <div className="tx-26"><span className="font-weight-medium ">Extended</span> Licenses</div>
                                        <p className="fw-semi-bold mb-sm-2 mb-0">You  <span className="text-warning font-weight-semibold">can charge</span> from your  <br /><span className="op-8">End Product  End Users</span></p>
                                        <Dropdown>
                                          <Dropdown.Toggle className='btn w-lg mt-1' variant="info" id="dropdown-basic">Buy Now</Dropdown.Toggle>
                                          <Dropdown.Menu className='py-0' style={{ marginTop: '0px' }}>
                                            <Dropdown.Item className='border-bottom px-3' target="_blank" href="https://1.envato.market/n1mEkA">
                                              <div>
                                                <p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">6 months support</span>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item className='px-3' target="_blank" href="https://1.envato.market/3PGjGB">
                                              <div>
                                                <p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">12 months support</span>
                                              </div>
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="license-view" style={{ zIndex: 1 }}>
                                <a href="https://spruko.com/licenses" target="_blank" className="modal-title text-center mb-3 tx-14 text-white" rel="noreferrer">View license details</a>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                      {/* <!-- End buynow modal --> */}
                    
                    <Link href="https://themeforest.net/user/spruko/portfolio" className="rounded-10 btn btn-info">Our Portfolio</Link>
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
                            onClick={() => SwitcherAction("LTR")}
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
                            onClick={() => SwitcherAction("RTL")}
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
                  <h4>Navigation Style</h4>
                  <div className="skin-body">
                    <div className="switch_section">
                      <div className="switch-toggle d-flex">
                        <span className="me-auto">Vertical Menu</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch01"
                            id="myonoffswitch01"
                            className="onoffswitch2-checkbox"
                            onClick={() => {SwitcherAction("VerticalMenu"), router.push("#")}}
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
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch01"
                            id="myonoffswitch02"
                            onClick={() =>{ SwitcherAction("Horizontal"), router.push("#")}}
                            className="onoffswitch2-checkbox"
                          />
                          <label
                            htmlFor="myonoffswitch02"
                            className="onoffswitch2-label"
                          ></label>
                        </p>
                      </div>
                      <div className="switch-toggle d-flex mt-2">
                        <span className="me-auto">Horizontal Hover Menu</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch01"
                            id="myonoffswitch03"
                            className="onoffswitch2-checkbox"
                            onClick={() => {SwitcherAction("HorizontalHoverMenu"), router.push("#")}}
                          />
                          <label
                            htmlFor="myonoffswitch03"
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
                            onClick={() => SwitcherAction("LightTheme")}
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
                            onChange={(ele)=>{changePrimaryColor(ele.target.value)}}
                            // onInput={(e) => changePrimaryColor(e)}
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
                            onClick={() => SwitcherAction("dark")}
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
                            onChange={(ele)=>{darkPrimaryColor(ele.target.value)}}
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
                  <h4>Menu Styles</h4>
                  <div className="skin-body">
                    <div className="switch_section">
                      <div className="switch-toggle lightMenu d-flex">
                        <span className="me-auto">Light Menu</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch2"
                            id="myonoffswitch3"
                            className="onoffswitch2-checkbox"
                            onClick={() => SwitcherAction("LightMenu")}

                          />
                          <label
                            htmlFor="myonoffswitch3"
                            className="onoffswitch2-label"
                          ></label>
                        </p>
                      </div>
                      <div className="switch-toggle colorMenu d-flex mt-2">
                        <span className="me-auto">Color Menu</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch2"
                            id="myonoffswitch4"
                            className="onoffswitch2-checkbox"
                            onClick={() => SwitcherAction("ColorMenu")}
                          />
                          <label
                            htmlFor="myonoffswitch4"
                            className="onoffswitch2-label"
                          ></label>
                        </p>
                      </div>
                      <div className="switch-toggle darkMenu d-flex mt-2">
                        <span className="me-auto">Dark Menu</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch2"
                            id="myonoffswitch5"
                            className="onoffswitch2-checkbox"
                            onClick={() => SwitcherAction("DarkMenu")}
                            defaultChecked
                          />
                          <label
                            htmlFor="myonoffswitch5"
                            className="onoffswitch2-label"
                          ></label>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swichermainleft">
                  <h4>Header Styles</h4>
                  <div className="skin-body">
                    <div className="switch_section">
                      <div className="switch-toggle lightHeader d-flex">
                        <span className="me-auto">Light Header</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch3"
                            id="myonoffswitch6"
                            onClick={() => SwitcherAction("Lightheader")}
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
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch3"
                            id="myonoffswitch7"
                            onClick={() => SwitcherAction("Colorheader")}
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
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch3"
                            id="myonoffswitch8"
                            className="onoffswitch2-checkbox"
                            onClick={() => SwitcherAction("Darkheader")}
                          />
                          <label
                            htmlFor="myonoffswitch8"
                            className="onoffswitch2-label"
                          ></label>
                        </p>
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
                            onClick={() => SwitcherAction("FullWidth")}
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
                            onClick={() => SwitcherAction("Boxed")}
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
                  <h4>Layout Positions</h4>
                  <div className="skin-body">
                    <div className="switch_section">
                      <div className="switch-toggle d-flex">
                        <span className="me-auto">Fixed</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch5"
                            id="myonoffswitch11"
                            className="onoffswitch2-checkbox"
                            defaultChecked
                            onClick={() => SwitcherAction("Fixed")}
                          />
                          <label
                            htmlFor="myonoffswitch11"
                            className="onoffswitch2-label"
                          ></label>
                        </p>
                      </div>
                      <div className="switch-toggle d-flex mt-2">
                        <span className="me-auto">Scrollable</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch5"
                            id="myonoffswitch12"
                            className="onoffswitch2-checkbox"
                            onClick={() => SwitcherAction("Scrollable")}

                          />
                          <label
                            htmlFor="myonoffswitch12"
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
                    <Link href={"#"}>
                      <Button
                        variant=""
                        className="btn btn-danger btn-block"
                        onClick={() => {
                          SwitcherAction("resetAll")
                          // router.reload()
                        }}
                        type="button"
                      >
                        
                        Reset All
                      </Button>
                      </Link>
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

Switcher.propTypes = {};

Switcher.defaultProps = {};

const mapStateToProps = (state) => ({
  local_Products : state
})
export default connect(mapStateToProps,{SwitcherAction,changePrimaryColor,darkPrimaryColor})(Switcher);
