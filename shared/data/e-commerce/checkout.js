import React, { Fragment } from "react";
import StepZilla from "react-stepzilla";
import png19 from "../../../public/assets/img/pngs/19.png";
import png16 from "../../../public/assets/img/pngs/16.png";
import { Button, Col, Form, FormGroup, Nav, Row, Tab } from "react-bootstrap";
import dynamic from 'next/dynamic';
const Searchable = dynamic(() => import('react-searchable-dropdown'), { ssr: false });
import pngs19 from "../../../public/assets/img/pngs/19.png"
import pngs16 from "../../../public/assets/img/pngs/16.png"

import Link from "next/link"


const Signin = () => {
    return (
        <Fragment>
            <div>
                <section className="pt-3">
                    <form>
                        <h5 className="text-start mb-2">
                            Signin to Your Account
                        </h5>
                        <p className="mb-4 text-muted tx-13 ms-0 text-start">
                            Signin to create, discover and connect with the global
                            community
                        </p>
                        <FormGroup className="form-group text-start">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                placeholder="Enter your email"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup className="form-group text-start">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                placeholder="Enter your password"
                                type="password"
                            />
                        </FormGroup>
                        <button className="btn ripple btn-main-primary btn-block mb-3">
                            Sign In
                        </button>
                    </form>
                </section>
            </div>
        </Fragment>
    )
}
const Billing = () => {
    return (
        <Fragment>
            <div>

                <section className="pt-3">
                    <Form className="needs-validation">
                        <h5 className="text-start mb-2">Billing Information</h5>
                        <p className="mb-4 text-muted tx-13 ms-0 text-start">
                            Lorem Ipsum has been the {"industry's"} standard dummy
                            text ever since
                        </p>
                        <Row>
                            <div className="col-md-6 mb-3">
                                <Form.Label htmlFor="firstName">First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="firstName"
                                    placeholder=""
                                    defaultValue=""
                                    required=""
                                />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <Form.Label htmlFor="lastName">Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="lastName"
                                    placeholder=""
                                    defaultValue=""
                                    required=""
                                />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <Col md={12} className="mb-3">
                                <Form.Label htmlFor="address">Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="address"
                                    placeholder="1234 Main St"
                                    required=""
                                />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="mb-3">
                                <Form.Label htmlFor="address2">
                                    Address 2
                                    <span className="text-muted">(Optional)</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    id="address2"
                                    placeholder="Apartment or suite"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="mb-3">
                                <Form.Label htmlFor="mobile">Mobile Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="mobile"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} className="mb-3">
                                <Form.Label htmlFor="country">Country</Form.Label>
                                <Country />
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </Col>
                            <div className="col-md-4 mb-3">
                                <Form.Label htmlFor="state">State</Form.Label>
                                <State />
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <Form.Label htmlFor="zip">Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="zip"
                                    placeholder=""
                                    required=""
                                />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </Row>
                        <hr className="mb-4" />
                        <button
                            className="btn btn-primary btn-lg btn-block mb-3"
                            type="submit"
                        >
                            Continue to checkout
                        </button>
                    </Form>
                </section></div>
        </Fragment>
    )
}
const Country = () => {
    return (
        <div >
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
                        value: "USA",
                        label: "USA"
                    },
                    {
                        value: "India",
                        label: "India"
                    },
                ]}
                onSelect={(value) => {
                    console.log(value);
                }}
                listMaxHeight={140} //by default 140
            />
        </div>
    );
}
const State = () => {
    return (
        <div >
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
                        value: "California",
                        label: "California"
                    },
                    {
                        value: "Telangana",
                        label: "Telangana"
                    },
                ]}
                onSelect={(value) => {
                    console.log(value);
                }}
                listMaxHeight={140} //by default 140
            />
        </div>
    );
}
const Order = () => {
    return (
        <Fragment>

            <div>
                <section className="pt-3">
                    <h5 className="text-start mb-2">Your Order</h5>
                    <p className="mb-4 text-muted tx-13 ms-0 text-start">
                        Lorem Ipsum has been the {"industry's"} standard dummy text
                        ever since
                    </p>
                    <div className="product">
                        <div className="item">
                            <div className="left">
                                <Link className="thumb" href="#!">
                                    <img src={pngs19.src} alt="" />
                                </Link>
                                <div className="purchase">
                                    <h6>
                                        <Link href="#!">Mobile Phone Mi</Link>
                                    </h6>
                                    <span>x1</span>
                                </div>
                            </div>
                            <span className="price">$290</span>
                        </div>
                        <div className="item">
                            <div className="left">
                                <Link className="thumb" href="#!">
                                    <img src={pngs16.src} alt="" />
                                </Link>
                                <div className="purchase">
                                    <h6>
                                        <Link href="#!">Flowerpot</Link>
                                    </h6>
                                    <span>1</span>
                                </div>
                            </div>
                            <span className="price">$124</span>
                        </div>
                    </div>
                    <div className="checkout">
                        <div className="subtotal">
                            <span className="heading">Subtotal</span>
                            <span className="total tx-20 font-weight-bold">
                                $364
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>

    )
}
const PaymentDetails = () => {
    return (
        <Fragment>
            <div>
                <section className="pt-3">
                    <div className="card-pay">
                        <h5 className="text-start mb-2">Payments</h5>
                        <p className="mb-4 text-muted tx-13 ms-0 text-start">Lorem Ipsum has been the {"industry's"} standard dummy text ever since</p>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="tab20" className="card-pay">
                            <Nav variant="pills" className="tabs-menu nav">
                                <Nav.Item>

                                    <Nav.Link eventKey="tab20"><i className="fa fa-credit-card"></i> Credit Card</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>

                                    <Nav.Link eventKey="tab21"><i className="fab fa-paypal"></i>  Paypal</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>

                                    <Nav.Link eventKey="tab22"><i className="fa fa-university"></i>  Bank Transfer</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className="tab-content">
                                <Tab.Pane className="tab-pane px-0 py-2 br-3 mb-4" eventKey="tab20">
                                    <FormGroup className="form-group mt-4">
                                        <Form.Label className="form-label">CardHolder Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                    </FormGroup>
                                    <FormGroup className="form-group ">
                                        <Form.Label className="form-label">Card number</Form.Label>
                                        <div className="input-group">
                                            <Form.Control type="text" placeholder="Search for..." />
                                            <span className="">
                                                <button className="btn btn-secondary box-shadow-0" type="button"><i className="fab fa-cc-visa"></i> &nbsp; <i className="fab fa-cc-amex"></i> &nbsp;
                                                    <i className="fab fa-cc-mastercard"></i></button>
                                            </span>
                                        </div>
                                    </FormGroup>
                                    <Row className="row">
                                        <div className="col-sm-8">
                                            <FormGroup className="form-group">
                                                <Form.Label className="form-label">Expiration</Form.Label>
                                                <div className="input-group">
                                                    <Form.Control type="number" placeholder="MM" name="Month" />
                                                    <Form.Control type="number" placeholder="YY" name="Year" />
                                                </div>
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-4">
                                            <FormGroup className="form-group">
                                                <Form.Label className="form-label">CVV <i className="fa fa-question-circle"></i></Form.Label>
                                                <Form.Control type="number" required="" />
                                            </FormGroup>
                                        </div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className="tab-pane px-0" eventKey="tab21">
                                    <p className="mt-4">Paypal is easiest way to pay online</p>
                                    <p>
                                        <Button href="#!" className="btn btn-primary">
                                            <i className="fab fa-paypal"></i> Log    in my Paypal</Button>
                                    </p>
                                    <p className=""><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                </Tab.Pane>
                                <Tab.Pane className="tab-pane px-0" eventKey="tab22">
                                    <p className="mt-4">Bank account details</p>
                                    <dl className="card-text">
                                        <dt>BANK: </dt>
                                        <dd> THE UNION BANK 0456</dd>
                                    </dl>
                                    <dl className="card-text">
                                        <dt>Account number: </dt>
                                        <dd> 67542897653214</dd>
                                    </dl>
                                    <dl className="card-text">
                                        <dt>IBAN: </dt>
                                        <dd>543218769</dd>
                                    </dl>
                                    <p className=""><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                </Tab.Pane>
                            </div>
                        </Tab.Container>
                    </div>

                </section>
            </div>
        </Fragment>
    )
}
const Finished = () => {
    return (
        <Fragment>
            <div>
                <section className="text-center pt-3">
                    <div>
                        <h5 className="text-center mb-4">
                            Your order Confirmed!
                        </h5>
                    </div>
                    <svg
                        className="wd-80 ht-80 mx-auto justify-content-center mb-3 text-center"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 130.2 130.2"
                    >
                        <circle
                            className="path circle"
                            fill="none"
                            stroke="#73AF55"
                            strokeWidth="6"
                            strokeMiterlimit="10"
                            cx="65.1"
                            cy="65.1"
                            r="62.1"
                        />
                        <polyline
                            className="path check"
                            fill="none"
                            stroke="#73AF55"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="100.2,40.2 51.5,88.8 29.8,67.5 "
                        />
                    </svg>
                    <p className="success px-5">
                        Order placed successfully. Your order will be dispacted
                        soon. meanwhile you can track your order in my order
                        section.
                    </p>
                </section>
            </div>
        </Fragment>)
}

const stepswizard =
    [
        { name: 'Sigin', component: <Signin /> },
        { name: 'Billing', component: <Billing /> },
        { name: 'Order', component: <Order /> },
        { name: 'Payment', component: <PaymentDetails /> },
        { name: 'Finish', component: <Finished /> },


    ]
const AccordionWizardForm = () => {
    return (
        <div className='step-progress'>

            <StepZilla steps={stepswizard} />

        </div>
    );
}
export default AccordionWizardForm