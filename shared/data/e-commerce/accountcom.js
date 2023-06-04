import React from 'react'
import { Row, Col, Tab, Nav, Breadcrumb, Card, Button, ListGroup, Form, Table } from "react-bootstrap";
import dynamic from 'next/dynamic';
const Searchable = dynamic(()=>import('react-searchable-dropdown'), { ssr: false })
import Link from "next/link"


//Images
import png14 from "../../../public/assets/img/pngs/14.png";
import png15 from "../../../public/assets/img/pngs/15.png";
import png16 from "../../../public/assets/img/pngs/16.png";
import png17 from "../../../public/assets/img/pngs/17.png";
import png19 from "../../../public/assets/img/pngs/19.png";
import user1 from "../../../public/assets/img/users/1.jpg";
import { AllOrder } from '../../../shared/data/e-commerce/account';


const Accountcom = () => {
    const Countryoptions= [

        {
          value: "india",
          label: "India"
        },
        {
          value: "usa",
          label: "USA"
        },
        {
          value: "uk",
          label: "UK"
        },
        {
          value: "uae",
          label: "UAE"
        },
      ]
    const Languageoptions=[
      
        {
          value: "english",
          label: "English"
        },
        {
          value: "english(united state)",
          label: "English (United State)"
        },
        {
          value: "engish UK",
          label: "Emglish UK"
        },
        {
          value: "arabic",
          label: "Arabic"
        },
      ]
  return (
    <div>
    {/* <!-- Row --> */}
    <Tab.Container defaultActiveKey="orders">
        <Row className="row row-sm">
          <Col xl={3} lg={12} md={12} >
            <Card className=" custom-card">
              <Card.Header>
                <h3 className="main-content-Form.Label">My Account</h3>
              </Card.Header>
              <Card.Body className=" text-center item-user">
                <div className="profile-pic">
                  <div className="profile-pic-img">
                    <span
                      className="bg-success dots"
                      title="online"
                    ></span>
                    <img src={user1.src} className="rounded-circle" alt="user" />
                  </div>
                  <div className="text-dark">
                    <h5 className="mt-3 mb-0 font-weight-semibold">
                      Sonia Taylor
                    </h5>
                  </div>
                </div>
              </Card.Body>
              <Nav variant="pills" className="item1-links flex-column mb-0">
                <Nav.Item as="li">
                  <Nav.Link eventKey="orders" role="tablist">
                    <i className="ti-user icon1"></i> My orders
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="myaddress">
                    <i className="ti-save-alt icon1"></i> My Address
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="trackorder">
                    <i className="ti-truck icon1"></i> Track Order
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="whishlist">
                    <i className="ti-heart icon1"></i> Wishlist
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="wallet">
                    <i className="ti-wallet icon1"></i> Wallet
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="profile">
                    <i className="ti-credit-card icon1"></i> My Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href={`${process.env.PUBLIC_URL}/custompages/signup`} >
                    <i className="ti-power-off icon1"></i> Logout
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </Col>
          <Col xl={9} lg={12} md={12}>
            <Card className="custom-card">
              <Card.Body>
                <Tab.Content className="tab-content">
                  <Tab.Pane
                    eventKey="orders"
                    className="tab-pane "
                    id="orders"
                    role="tabpanel"
                  >
                    <div className="d-flex mb-4">
                      <Form.Label className="main-content-Form.Label my-auto">
                        All orders
                      </Form.Label>
                      <h6 className="mb-0 ms-auto">
                        <Button
                          variant="success" className="float-end">
                          <i className=""></i>Invoice
                        </Button>
                      </h6>
                    </div>
                    <div className="table-responsive">
                      <Table className="table border text-md-nowrap text-nowrap">
                        <thead className="border-bottom">
                          <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Products</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th className="text-end">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {AllOrder.map((list, index) => (
                            <tr
                              className="border-bottom"
                              key={index}
                              data-index={index}
                            >
                              <th scope="row">{list.Id}</th>
                              <td>
                                <img
                                  src={list.Catlog}
                                  className="img-sm product-image border"
                                  alt="product-img"
                                />
                              </td>
                              <td>{list.Product}</td>
                              <td>{list.Quatity}</td>
                              <td>{list.Price}</td>
                              <td className="text-end">{list.Total}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="myaddress"
                    className="tab-pane "
                    id="myaddres"
                    role="tabpanel"
                  >
                    <Button
                      variant="variant"
                      type="button"
                      className="btn btn-round btn-success mb-3"
                    >
                      <i className="fe fe-plus-circle  me-2"></i>Add New Address
                    </Button>
                    <Row className="row">
                      <Col lg={12} xl={6}>
                        <Card className="card custom-card border mb-xl-0">
                          <Card.Header className=" pb-3">
                            <h6 className="mb-0">
                              <i className="ti-home me-2 d-inline-block"></i>Default Address
                            </h6>
                          </Card.Header>
                          <Card.Body>
                            <p>+91 08023310451</p>
                            <p>
                              3-15/10/403 Newark, Street no 5, Next To Pizza
                              Hut, Bangalore, Karnataka, 560003, India.
                            </p>
                            <p className="mb-0">soniataylor344@example.com</p>
                          </Card.Body>
                          <Card.Footer>
                            <Row className="row">
                              <div className="col-6">
                                <Button
                                  variant="primary"
                                  type="button"
                                  className="btn btn-block  mb-1"
                                >
                                  <i className="ti ti-pencil"></i>
                                </Button>
                              </div>
                              <div className="col-6">
                                <Button
                                  variant="outline-primary"
                                  type="button"
                                  className="btn btn-block  mb-1"
                                >
                                  <i className="ti ti-trash"></i>
                                </Button>
                              </div>
                            </Row>
                          </Card.Footer>
                        </Card>
                      </Col>
                      <Col lg={12} xl={6}>
                        <Card className="custom-card border mb-0">
                          <Card.Header className=" pb-3">
                            <h6 className="mb-0">
                              <i className="ti-home me-2 d-inline-block"></i>Office Address
                            </h6>
                          </Card.Header>
                          <Card.Body>
                            <p>+91 02228346362</p>
                            <p>
                              2-15A-12 , Steriling Chambers, S Radhakrishnana
                              Marg, J B Nagar, Andheri (west), Mumbai ,
                              Maharashtra
                            </p>
                            <p className="mb-0">john54@gmail.com</p>
                          </Card.Body>
                          <Card.Footer>
                            <Row className="row">
                              <div className="col-6">
                                <Button
                                  variant="primary"
                                  type="button"
                                  className="btn btn-block  mb-1"
                                >
                                  <i className="ti ti-pencil"></i>
                                </Button>
                              </div>
                              <div className="col-6">
                                <Button
                                  variant="outline-primary"
                                  type="button"
                                  className="btn btn-block btn-outline-primary mb-1"
                                >
                                  <i className="ti ti-trash"></i>
                                </Button>
                              </div>
                            </Row>
                          </Card.Footer>
                        </Card>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="trackorder"
                    className="tab-pane "
                    id="trackorder"
                    role="tabpanel"
                  >
                    <h6 className="mb-4">
                      ORDER ID: <b>OD45345345435</b>
                    </h6>
                    <div className="card">
                      <div className="card-body row">
                        <div className="col-sm-12 col-md-3 mb-3 mb-md-0">
                          <strong>Estimated Delivery time:</strong> <br />
                          29 Dec 2020
                        </div>
                        <div className="col-sm-12 col-md-3 mb-3 mb-md-0">
                          <strong>Shipping BY:</strong> <br /> BLUEDART, |
                          <i className="fa fa-phone mx-2"></i> +1598675986
                        </div>
                        <div className="col-sm-12 col-md-3 mb-3 mb-md-">
                          <strong>Status:</strong> <br /> Picked by the courier
                        </div>
                        <div className="col-sm-12 col-md-3">
                          <strong>Tracking #:</strong> <br /> BD045903594656
                        </div>
                      </div>
                    </div>
                    <div className="track mb-5">
                      <div className="step active">
                        <span className="icon">
                          <i className="fa fa-check"></i>
                        </span>
                        <span className="text d-none d-md-block">
                          Order confirmed
                        </span>
                      </div>
                      <div className="step active">
                        <span className="icon">
                          <i className="fa fa-user"></i>
                        </span>
                        <span className="text d-none d-md-block">
                          Picked by courier
                        </span>
                      </div>
                      <div className="step">
                        <span className="icon">
                          <i className="fa fa-truck"></i>
                        </span>
                        <span className="text d-none d-md-block">

                          On the way
                        </span>
                      </div>
                      <div className="step">
                        <span className="icon">

                          <i className="fa fa-cube"></i>
                        </span>
                        <span className="text d-none d-md-block">
                          Ready For pickup
                        </span>
                      </div>
                    </div>
                    <br />
                    <div className="row mt-3">
                      <div className="col-xl-4">
                        <figure className="itemside mb-3">
                          <div className="aside">
                            <img
                              src={png19.src}
                              className="img-sm product-image border"
                              alt="product-img"
                            />
                          </div>
                          <figcaption className="info align-self-center">
                            <p className="title mb-1">
                              Apple iPhone(Black, 128 GB) <br /> 8GB RAM
                            </p>
                            <span className="text-muted">$950 </span>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-4">
                        <figure className="itemside mb-3">
                          <div className="aside">
                            <img
                              src={png16.src}
                              className="img-sm product-image border"
                              alt="product-img"
                            />
                          </div>
                          <figcaption className="info align-self-center">
                            <p className="title mb-1">
                              Designer Hand Decorative <br /> flower Pot
                            </p>
                            <span className="text-muted">$850 </span>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-4">
                        <figure className="itemside mb-3">
                          <div className="aside">
                            <img
                              src={png14.src}
                              className="img-sm product-image border"
                              alt="product-img"
                            />
                          </div>
                          <figcaption className="info align-self-center">
                            <p className="title mb-1">
                              Regular waterproof <br />
                              (24 L) Backpack
                            </p>
                            <span className="text-muted">$650 </span>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="whishlist"
                    className="tab-pane "
                    id="whishlist"
                    role="tabpanel"
                  >
                    <div className="d-flex mb-4">
                      <Form.Label className="main-content-Form.Label my-auto">
                        Wishlist
                      </Form.Label>
                    </div>
                    <div className="table-responsive">
                      <Table className="table border text-nowrap">
                        <thead className="border-bottom">
                          <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>
                              <img
                                src={png14.src}
                                className="img-sm product-image border"
                                alt="product-img"
                              />
                            </td>
                            <td>Regular waterproof (24 L) Backpack</td>
                            <td>
                             1
                            </td>
                            <td>$10</td>
                            <td>$500</td>
                            <td>
                              <Button
                                variant="primary"
                                type="button"
                                className=" mb-1 me-1"
                              >
                                <i className="ti-shopping-cart me-2 d-inline-block"></i>Move to
                                cart
                              </Button>
                              <Button
                                variant="danger"
                                type="button"
                                className="mb-1"
                              >
                                <i className="ti-trash me-2 d-inline-block"></i>Remove
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>
                              <img
                                src={png16.src}
                                className="img-sm product-image border"
                                alt="product-img"
                              />
                            </td>
                            <td>Designer Hand Decorative flower Pot</td>
                            <td>
                              3
                            </td>
                            <td>$20</td>
                            <td>$200</td>
                            <td>
                              <Button
                                variant="primary"
                                type="button"
                                className=" mb-1 me-1"
                              >
                                <i className="ti-shopping-cart me-2 d-inline-block"></i>Move to
                                cart
                              </Button>
                              <Button
                                variant="danger"
                                type="button"
                                className="mb-1"
                              >
                                <i className="ti-trash me-2 d-inline-block"></i>Remove
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>
                              <img
                                src={png19.src}
                                className="img-sm product-image border"
                                alt="product-img"
                              />
                            </td>
                            <td>Apple iPhone(Black, 128 GB) 8GB RAM</td>
                            <td>
                              2
                            </td>
                            <td>$30</td>
                            <td>$300</td>
                            <td>
                              <Button
                                variant="primary"
                                type="button"
                                className=" mb-1 me-1"
                              >
                                <i className="ti-shopping-cart me-2 d-inline-block"></i>Move to
                                cart
                              </Button>
                              <Button
                                variant="danger"
                                type="button"
                                className="mb-1"
                              >
                                <i className="ti-trash me-2 d-inline-block"></i>Remove
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="wallet" role="tabpanel">
                    <div className="border p-4 text-center">
                      <span className="text-uppercase tx-14 mt-4 text-muted">
                        Available
                      </span>
                      <h1 className="my-3">$245465</h1>
                      <Link href="#!" className="btn btn-primary">
                        <i className="fe fe-plus me-2"></i>Add Money
                      </Link>
                    </div>
                    <ListGroup className="tx-13">
                      <ListGroup.Item className="border-top-0 pd-x-0 d-sm-flex justify-content-between">
                        <div className="d-sm-flex">
                          <span className="crypto-icon bg-primary-transparent me-3">
                            <i className="fe fe-arrow-down-left text-primary"></i>
                          </span>
                          <span className="my-auto font-weight-semibold tx-15">
                            Received
                          </span>
                        </div>
                        <span className="font-weight-semibold my-auto text-success tx-15">
                          +0.00004564
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item className="pd-x-0 d-sm-flex justify-content-between">
                        <div className="d-sm-flex">
                          <span className="crypto-icon bg-primary-transparent me-3">
                            <i className="fe fe-arrow-up-right text-primary"></i>
                          </span>
                          <span className="my-auto font-weight-semibold tx-15">
                            Sent
                          </span>
                        </div>
                        <span className="font-weight-semibold my-auto text-danger tx-15">
                          -0.03445436
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item className="pd-x-0 d-sm-flex justify-content-between">
                        <div className="d-sm-flex">
                          <span className="crypto-icon bg-primary-transparent me-3">
                            <i className="fe fe-arrow-down-left text-primary"></i>
                          </span>
                          <span className="my-auto font-weight-semibold tx-15">
                            Received
                          </span>
                        </div>
                        <span className="font-weight-semibold my-auto text-success tx-15">
                          +4.2543
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item className="pd-x-0 d-sm-flex justify-content-between">
                        <div className="d-sm-flex">
                          <span className="crypto-icon bg-primary-transparent me-3">
                            <i className="fe fe-arrow-up-right text-primary"></i>
                          </span>
                          <span className="my-auto font-weight-semibold tx-15">
                            Sent
                          </span>
                        </div>
                        <span className="font-weight-semibold my-auto text-danger tx-15">
                          +0.00255423
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item className="pd-x-0 d-sm-flex justify-content-between">
                        <div className="d-sm-flex">
                          <span className="crypto-icon bg-primary-transparent me-3">
                            <i className="fe fe-arrow-down-left text-primary"></i>
                          </span>
                          <span className="my-auto font-weight-semibold tx-15">
                            Received
                          </span>
                        </div>
                        <span className="font-weight-semibold my-auto text-success tx-15">
                          -0.02434525
                        </span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="profile" role="tabpanel">
                    <div className="d-flex align-items-start pb-3 border-bottom">
                      <img
                        src={user1.src}
                        className="img rounded-circle avatar-xl"
                        alt="user1"
                      />
                      <div className="ps-sm-4 ps-2" id="img-section">
                        <b>Profile Photo</b>
                        <p className="mb-1">
                          Accepted file type .png. Less than 1MB
                        </p>

                        <Button
                          variant="default" className="btn button border btn-sm">
                          <b>Upload</b>
                        </Button>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="row py-2">
                        <div className="col-md-6 pb-3">
                          <Form.Label id="firstname">First Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Steve"
                          />
                        </div>
                        <div className="col-md-6 pb-3">
                          <Form.Label id="last-name">Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Smith"
                          />
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col-md-6 pb-3">
                          <Form.Label id="emailid">Email Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="steve_@email.com"
                          />
                        </div>
                        <div className="col-md-6 pb-3">
                          <Form.Label id="phoneno">Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="+1 213-548-6015"
                          />
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col-md-6 pb-3">
                          <Form.Label htmlFor="country">Country</Form.Label>
                          <Searchable className="form-control"
        value="test"
        placeholder="india" // by default "Search"
       options={Countryoptions}
        onSelect={(value) => {
          console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
                        </div>
                        <div className="col-md-6 pb-3" id="lang">
                          <Form.Label htmlFor="language">Language</Form.Label>
                          <div className="arrow">
                          <Searchable className="form-control select2"
        value="test"
        placeholder="English" // by default "Search"
        options={Languageoptions}
        onSelect={(value) => {
          console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default Accountcom