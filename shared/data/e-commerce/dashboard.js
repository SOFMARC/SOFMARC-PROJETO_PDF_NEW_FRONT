import React, { useState } from 'react'
import { ZoomableGroup, ComposableMap, Geographies, Geography, Graticule, Marker, } from "react-simple-maps";
import * as edashboard from "./edashboard"
import Chart from 'chart.js/auto';
import {Card, Col, ListGroup, ProgressBar, Row, Table, Dropdown } from "react-bootstrap";
import Link from 'next/link';
import { Line } from "react-chartjs-2";

//images 
import user3 from "../../../public/assets/img/users/3.jpg";
import user4 from "../../../public/assets/img/users/4.jpg";
import user5 from "../../../public/assets/img/users/5.jpg";
import user7 from "../../../public/assets/img/users/7.jpg";
import user9 from "../../../public/assets/img/users/9.jpg";
import png14 from "../../../public/assets/img/pngs/14.png";
import png15 from "../../../public/assets/img/pngs/15.png";
import png16 from "../../../public/assets/img/pngs/16.png";
import png17 from "../../../public/assets/img/pngs/17.png";
import png18 from "../../../public/assets/img/pngs/18.png";
import png19 from "../../../public/assets/img/pngs/19.png";
import ReactApexChart from 'react-apexcharts';

const ProductsDetails =
  [
    { Productid: "#C234", Productname: png14.src, Producttext: "Regular Backpack", Productcost: "$14,500", Total: "2,977", Status: "Available", Statustext: "primary", },
    { Productid: "#C389", Productname: png15.src, Producttext: "Women Pink Sandal", Productcost: "$30,000", Total: "678	", Status: "Limited", Statustext: "primary", },
    { Productid: "#C936", Productname: png16.src, Producttext: "Designer Flower Pot", Productcost: "$13,200", Total: "4,922	", Status: "Available", Statustext: "primary", },
    { Productid: "#C493", Productname: png17.src, Producttext: "Plastic Outdoor Chair", Productcost: "$14,500", Total: "1,234", Status: "Limited", Statustext: "primary", }, { Productid: "#C729", Productname: png18.src, Producttext: "Digital Smart Watch", Productcost: "$5,987", Total: "4,789", Status: "NoStock", Statustext: "primary  op-5", },
    { Productid: "#C529", Productname: png19.src, Producttext: "Apple iPhone", Productcost: "$11,987", Total: "938", Status: "Limited", Statustext: "primary", },
  ];
const Dashboardecommerce = () => {
    const [content, setContent] = useState("");
  return (
    <div>
    <Row className="row-sm">
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-order ">
                <label className="main-content-label mb-3 pt-1">
                  New Users
                </label>
                <h2 className="text-end card-item-icon card-icon">
                  <i className="mdi mdi-account-multiple icon-size float-start text-primary"></i>
                  <span className="font-weight-bold">3,672</span>
                </h2>
                <p className="mb-0 mt-4 text-muted">
                  Monthly users<span className="float-end">50%</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-order">
                <label className="main-content-label mb-3 pt-1">
                  Total tax
                </label>
                <h2 className="text-end">
                  <i className="mdi mdi-cube icon-size float-start text-primary"></i>
                  <span className="font-weight-bold">$89,265</span>
                </h2>
                <p className="mb-0 mt-4 text-muted">
                  Monthly Income<span className="float-end">$7,893</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-order">
                <label className="main-content-label mb-3 pt-1">
                  Total Profit
                </label>
                <h2 className="text-end">
                  <i className="icon-size mdi mdi-poll-box   float-start text-primary"></i>
                  <span className="font-weight-bold">$23,987</span>
                </h2>
                <p className="mb-0 mt-4 text-muted">
                  Monthly Profit<span className="float-end">$4,678</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-order">
                <label className="main-content-label mb-3 pt-1">
                  Total Sales
                </label>
                <h2 className="text-end">
                  <i className="mdi mdi-cart icon-size float-start text-primary"></i>
                  <span className="font-weight-bold">46,486</span>
                </h2>
                <p className="mb-0 mt-4 text-muted">
                  Monthly Sales<span className="float-end">3,756</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col xxl={6} xl={12} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0">
              <label className="main-content-label my-auto pt-2">
                Revenue Overview
              </label>
              <span className="d-block tx-12 mb-0 mt-1 text-muted">
                An Overview. Revenue is the total amount of income generated by
                the sale of goods or services related to the {`company's`} primary
                operations.
              </span>
            </Card.Header>
            <Card.Body>
              <div className="chart-wrapper">
                <Line
                  options={edashboard.Dashboard1}
                  data={edashboard.dashboard1}
                  className="barchart"
                  height="270"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6} md={12} lg={12}>
          <Card className="custom-card">
            <Card.Header className="border-bottom-0 pb-0">
              <label className="main-content-label mb-2 pt-1">
                Recent Orders
              </label>
              <p className="tx-12 mb-0 text-muted">
                An order is an {`investor's`} instructions to a broker or brokerage
                firm to purchase or sell
              </p>
            </Card.Header>
            <Card.Body className="sales-product-info pb-0">
              <div id="recentorders" className="">
                <ReactApexChart
                  options={edashboard.radialbarchart.options}
                  series={edashboard.radialbarchart.series}
                  type="radialBar"
                  height={270}
                />
              </div>
              <div className="row sales-product-infomation pb-0 mb-0 mx-auto wd-100p">
                <div className="col-md-6 col justify-content-center text-center">
                  <p className="mb-0 d-flex justify-content-center ">
                    <span className="legend bg-primary brround"></span>Delivered
                  </p>
                  <h3 className="mb-1 font-weight-bold">5238</h3>
                  <div className="d-flex justify-content-center ">
                    <p className="text-muted ">Last 6 months</p>
                  </div>
                </div>
                <div className="col-md-6 col text-center float-end">
                  <p className="mb-0 d-flex justify-content-center ">
                    <span className="legend bg-light brround"></span>Cancelled
                  </p>
                  <h3 className="mb-1 font-weight-bold">3467</h3>
                  <div className="d-flex justify-content-center ">
                    <p className="text-muted">Last 6 months</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6} md={12} sm={12}>
          <Card className="custom-card">
            <Card.Header className="pb-0 border-bottom-0 ">
              <label className="main-content-label mb-2 pt-1">Tickets</label>
              <p className="tx-12 mb-0 text-muted">
                Sales activities are the tactics that salespeople use to achieve
              </p>
            </Card.Header>
            <Card.Body>
              <ul className="visitor mb-0 d-block users-images list-unstyled list-unstyled-border ht-340">
                <li className="media d-flex mb-3 mt-0 pt-0">
                  <span className="me-3 rounded-circle avatar avatar-md">
                  <img
                    src={user3.src}
                    alt="avatar"
                    className='rounded-circle avatar avatar-md'
                  />
                  </span>
                  <div className="media-body mb-1">
                    <div className="float-end">
                      <small>10-9-2018</small>
                    </div>
                    <h5 className="media-title tx-15 mb-0">Vanessa</h5>
                    <span className="text-muted">sed do eiusmod </span>
                  </div>
                </li>
                <li className="media d-flex mb-3">
                  <div className="me-3 rounded-circle avatar avatar-md">
                  <img
                    src={user5.src}
                    alt="avatar"
                    className='rounded-circle avatar avatar-md'
                  />
                  </div>
                  <div className="media-body mb-1">
                    <div className="float-end">
                      <small>15-9-2018</small>
                    </div>
                    <h5 className="media-title tx-15 mb-0"> Rutherford</h5>
                    <small className="text-muted">sed do eiusmod </small>
                  </div>
                </li>
                <li className="media d-flex mb-3">
                  <div className="me-3 rounded-circle avatar avatar-md">
                  <img
                    src={user7.src}
                    alt="avatar"
                    className='rounded-circle avatar avatar-md'
                  />
                  </div>
                  <div className="media-body mb-1">
                    <div className="float-end">
                      <small>17-9-2018</small>
                    </div>
                    <h5 className="media-title tx-15 mb-0">Elizabeth </h5>
                    <small className="text-muted">sed do eiusmod </small>
                  </div>
                </li>
                <li className="media d-flex mb-3">
                  <div className="me-3 rounded-circle avatar avatar-md">
                  <img
                    src={user4.src}
                    alt="avatar"
                    className='rounded-circle avatar avatar-md'
                  />
                  </div>
                  <div className="media-body mb-1">
                    <div className="float-end">
                      <small>19-9-2018</small>
                    </div>
                    <h5 className="media-title tx-15 mb-0">Anthony</h5>
                    <small className="text-muted">sed do eiusmod </small>
                  </div>
                </li>
                <li className="media d-flex mb-0">
                  <div className="me-3 rounded-circle avatar avatar-md">
                  <img
                    src={user9.src}
                    alt="avatar"
                    className='rounded-circle avatar avatar-md'
                  />
                  </div>
                  <div className="media-body mb-1">
                    <div className="float-end">
                      <small>19-9-2018</small>
                    </div>
                    <h5 className="media-title tx-15 mb-0">Anthony</h5>
                    <small className="text-muted">sed do eiusmod </small>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col xxl={3} xl={6} md={12} lg={6}>
          <Card className="custom-card">
            <Card.Header className="border-bottom-0 pb-1">
              <label className="main-content-label mb-2 pt-1">
                Sales Activity
              </label>
              <p className="tx-12 mb-0 text-muted">
                Sales activities are the tactics that salespeople use to achieve
                their goals and objective
              </p>
            </Card.Header>
            <div className="product-timeline card-body pt-3 mt-1">
              <ul className="timeline-1 mb-0">
                <li className="mt-0">
                  <i className="ti-pie-chart product-icon"></i>
                  <span className="font-weight-semibold mb-4 tx-14 ">
                    Total Products
                  </span>
                  <Link href="#!" className="float-end tx-11 text-muted" >
                    3 days ago
                  </Link>
                  <p className="mb-0 text-muted tx-12">1.3k New Products</p>
                </li>
                <li className="mt-0">
                  <i className="mdi mdi-cart-outline product-icon"></i>
                  <span className="font-weight-semibold mb-4 tx-14 ">
                    Total Sales
                  </span>
                  <Link href="#!" className="float-end tx-11 text-muted" >
                    35 mins ago
                  </Link>
                  <p className="mb-0 text-muted tx-12">1k New Sales</p>
                </li>
                <li className="mt-0">
                  <i className="ti-bar-chart-alt product-icon"></i>
                  <span className="font-weight-semibold mb-4 tx-14 ">
                    Toatal Revenue
                  </span>
                  <Link href="#!" className="float-end tx-11 text-muted" >
                    50 mins ago
                  </Link>
                  <p className="mb-0 text-muted tx-12">23.5K New Revenue</p>
                </li>
                <li className="mt-0">
                  <i className="ti-wallet product-icon"></i>
                  <span className="font-weight-semibold mb-4 tx-14 ">
                    Toatal Profit
                  </span>
                  <Link href="#!" className="float-end tx-11 text-muted" >
                    1 hour ago
                  </Link>
                  <p className="mb-0 text-muted tx-12">3k New profit</p>
                </li>
                <li className="mt-0 mb-0">
                  <i className="si si-eye product-icon"></i>
                  <span className="font-weight-semibold mb-4 tx-14 ">
                    Customer Visits
                  </span>
                  <Link href="#!" className="float-end tx-11 text-muted" >
                    1 day ago
                  </Link>
                  <p className="mb-0 text-muted tx-12">15% increased</p>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col xxl={3} xl={6} md={12} lg={6}>
          <Card className="custom-card">
            <Card.Header className="border-bottom-0 pb-1">
              <label className="main-content-label mb-2 pt-1">
                Top products
              </label>
              <p className="tx-12 mb-0 text-muted">
                Top Trending Products to Sell Online At Your Ecommerce &
                Dropshipping Store.
              </p>
            </Card.Header>
            <Card.Body className="pt-0">
              <ul className="top-selling-products pb-0 mb-0 ps-0">
                <li className="product-item">
                  <div className="product-img">
                    <img src={png14.src} alt="png14" />
                  </div>
                  <div className="product-info">
                    <div className="product-name">College Bag</div>
                    <div className="price">Fashion</div>
                  </div>
                  <div className="product-amount">
                    <div className="product-price">$990.00</div>
                    <div className="items-sold">10 Sold</div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="product-img">
                    <img src={png18.src} alt="png18" />
                  </div>
                  <div className="product-info">
                    <div className="product-name">Smartwatch</div>
                    <div className="price">Electronics</div>
                  </div>
                  <div className="product-amount">
                    <div className="product-price">$990.00</div>
                    <div className="items-sold">10 Sold</div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="product-img">
                    <img src={png17.src} alt="png17" />
                  </div>
                  <div className="product-info">
                    <div className="product-name">Chair</div>
                    <div className="price">Furniture</div>
                  </div>
                  <div className="product-amount">
                    <div className="product-price">$990.00</div>
                    <div className="items-sold">10 Sold</div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="product-img">
                    <img src={png16.src} alt="png16" />
                  </div>
                  <div className="product-info">
                    <div className="product-name">Flowers Pot</div>
                    <div className="price">Gardening</div>
                  </div>
                  <div className="product-amount">
                    <div className="product-price">$990.00</div>
                    <div className="items-sold">10 Sold</div>
                  </div>
                </li>
                <li className="product-item pb-0">
                  <div className="product-img">
                    <img src={png19.src} alt="png19" />
                  </div>
                  <div className="product-info">
                    <div className="product-name">iPhone Mobile</div>
                    <div className="price">Electronics</div>
                  </div>
                  <div className="product-amount">
                    <div className="product-price">$990.00</div>
                    <div className="items-sold">10 Sold</div>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <div className="col-xxl-6 col-xl-12 col-md-12 col-lg-12">
          <Card className="custom-card top-inquiries">
            <Card.Header className=" border-bottom-0">
              <label className="main-content-label mb-2 pt-1">
                Country Wise Sales
              </label>
              <p className="tx-12 mb-0 text-muted">
                The global ecommerce sales in 2020 is expected to reach $4.453
                trillion this marks an increase of <b>22.5 %</b> percent from
                the previous year as the global ecommerce market.
              </p>
            </Card.Header>
            <Card.Body className="pt-0 pb-3 row">
              <Col xl={8} className="col-xl-8">
                <div id="world-map-markers" className="ht-300">
                  <ComposableMap
                    data-tip=""
                    projectionConfig={{ scale: 200 }}
                    className="ht-300 w-100"
                    id="vmap"
                    >
                  <ZoomableGroup>
                      <Graticule stroke="" />
                      <Geographies geography={edashboard.geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                  const { NAME, POP_EST } = geo.properties;
                  setContent(`${NAME} — ${edashboard.rounded(POP_EST)}`);
                }}
                onMouseLeave={() => {
                  setContent("");
                }}
                style={{
                  default: {
                    fill: "#e9e8f4",
                    outline: "none",
                  },
                  hover: {
                    fill: "#6259ca",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
      <Marker coordinates={[-74.006, 40.7128]}>
        <circle r={8} fill="#6259ca" />
      </Marker>
      <Marker coordinates={[-68.1193, -16.4897]}>
        <circle r={8} fill="#6259ca" />
      </Marker>
      <Marker coordinates={[-58.1551, 6.8013]}>
        <circle r={8} fill="#6259ca" />
      </Marker>
      <Marker coordinates={[-68.1193, -16.4897]}>
        <circle r={8} fill="#6259ca" />
      </Marker>
      <Marker coordinates={[-102, 38]}>
        <circle r={8} fill="#6259ca" />
      </Marker>
    </ComposableMap>
                  {content}
                </div>
              </Col>
              <Col xl={4} md={12} className=" mt-xl-4">
                <div className="mb-4 pt-2">
                  <h5 className="mb-2 d-block">
                    <span className="fs-14">Brazil</span>
                    <span className="float-end fs-14">80%</span>
                  </h5>
                  <div className="ht-4 progress-md h-2">
                    <ProgressBar animated now={85} className="ht-4 "></ProgressBar>
                  </div>
                </div>
                <div className="mb-4">
                  <h5 className="mb-2 d-block">
                    <span className="fs-14">Russia</span>
                    <span className="float-end fs-14">72%</span>
                  </h5>
                  <div className="ht-4 progress-md">
                    <ProgressBar animated now={72} className="ht-4"></ProgressBar>
                  </div>
                </div>
                <div className="mb-4">
                  <h5 className="mb-2 d-block">
                    <span className="fs-14">Poland</span>
                    <span className="float-end fs-14">67%</span>
                  </h5>
                  <div className="progress-md  ht-4">
                    <ProgressBar animated now={67} className="ht-4"></ProgressBar>
                  </div>
                </div>
                <div className="mb-4">
                  <h5 className="mb-2 d-block">
                    <span className="fs-14">Canada</span>
                    <span className="float-end fs-14">53%</span>
                  </h5>
                  <div className="progress-md  ht-4">
                    <ProgressBar animated now={53} className="ht-4"></ProgressBar>
                  </div>
                </div>
                <div className="mb-4">
                  <h5 className="mb-2 d-block">
                    <span className="fs-14">India</span>
                    <span className="float-end fs-14">75%</span>
                  </h5>
                  <div className="progress-md  ht-4">
                    <ProgressBar animated now={75} className="ht-4 "></ProgressBar>
                  </div>
                </div>
              </Col>
            </Card.Body>
          </Card>
        </div>
        <Col md={12} xl={8}>
          <Card className=" custom-card overflow-hidden">
            <Card.Header className="border-bottom-0 d-flex">
              <div>
                <label className="main-content-label mb-2 pt-1">
                  Products Details
                </label>
                <p className="tx-12 mb-3 text-muted">
                  The details displayed often include size, color, price,
                  shipping information, reviews, and other relevant information
                  customers may want to know before making a purchase
                </p>
              </div>
              <Dropdown className="card-options float-end">
                <Dropdown.Toggle
                  className="me-0 text-default option-dots"
                  role="button"
                  variant="default"

                >
                  <span className="fe fe-more-vertical tx-17 float-end"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className=" dropdown-menu-end" role="menu" style={{ marginTop: "0px" }}>
                  <Dropdown.Item href="#!">
                    <i className="fe fe-eye me-2"></i>View
                  </Dropdown.Item>
                  <Dropdown.Item href="#!">
                    <i className="fe fe-plus-circle me-2"></i>Add
                  </Dropdown.Item>
                  <Dropdown.Item href="#!">
                    <i className="fe fe-trash-2 me-2"></i>Remove
                  </Dropdown.Item>
                  <Dropdown.Item href="#!">
                    <i className="fe fe-download-cloud me-2"></i>Download
                  </Dropdown.Item>
                  <Dropdown.Item href="#!">
                    <i className="fe fe-settings me-2"></i>More
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header >
            <Card.Body className="pt-0">
              <div className="table-responsive">
                <Table
                  className="table table-vcenter border mb-0 text-nowrap table-product">
                  <thead className="border-bottom">
                    <tr>
                      <th>Product ID</th>
                      <th>Product</th>
                      <th>Product Cost</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ProductsDetails.map((Items, index) => (
                      <tr key={index} data-index={index}>
                        <td>{Items.Productid}</td>
                        <td className="d-flex my-auto">
                          <div className="ht-40 wd-40 me-3">
                          <img
                            src={Items.Productname}
                            alt=""
                          />
                          </div>
                          <span className="my-auto">{Items.Producttext}</span>
                        </td>
                        <td>
                          <b>{Items.Productcost}</b>
                        </td>
                        <td>{Items.Total}</td>
                        <td>
                          <span className={`badge bg-${Items.Statustext}`}>
                            {Items.Status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card >
        </Col >
        <Col xl={4} md={12} sm={12}>
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0">
              <div>
                <label className="main-content-label mb-2 pt-1">
                  Order Activity
                </label>
                <p className="tx-12 mb-3 text-muted">
                  Ordering Activity. means an activity that is authorized to
                  place orders, or establish blanket purchase agreements.
                </p>
              </div>
            </Card.Header>
            <Card.Body className="pt-1">
              <div className="">
                <ListGroup className="projects-list p-0">
                  <ListGroup.Item action
                    className="flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1 font-weight-semibold">
                        Order Picking
                      </h6>
                      <h6 className="mb-0 font-weight-bold tx-15">3,876</h6>
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                      <span className="text-muted">
                        <i className="fe fe-arrow-down text-success "></i> 03%
                        last month
                      </span>
                      <span className="text-muted tx-11">5 days ago</span>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="flex-column align-items-start border-top"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1 font-weight-semibold">Storage</h6>
                      <h6 className="mb-0 font-weight-bold tx-15">2,178</h6>
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                      <span className="text-muted">
                        <i className="fe fe-arrow-down text-danger "></i> 16%
                        last month
                      </span>
                      <span className="text-muted tx-11">2 days ago</span>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="flex-column align-items-start border-top"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1 font-weight-semibold ">Shipping</h6>
                      <h6 className="mb-0 font-weight-bold tx-15">1,367</h6>
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                      <span className="text-muted">
                        <i className="fe fe-arrow-up text-success"></i> 06% last
                        month
                      </span>
                      <span className="text-muted tx-11">1 days ago</span>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="flex-column align-items-start border-top"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1 font-weight-semibold ">Receiving</h6>
                      <h6 className="mb-0 font-weight-bold tx-15">678</h6>
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                      <span className="text-muted">
                        <i className="fe fe-arrow-down text-danger "></i> 25%
                        last month
                      </span>
                      <span className="text-muted tx-11">10 days ago</span>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="flex-column align-items-start border-top"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1 font-weight-semibold">Other</h6>
                      <h6 className="mb-0 font-weight-bold tx-15">5,678</h6>
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                      <span className="text-muted">
                        <i className="fe fe-arrow-up text-success "></i> 16%
                        last month
                      </span>
                      <span className="text-muted tx-11">5 days ago</span>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row >
    </div>
  )
}

export default Dashboardecommerce