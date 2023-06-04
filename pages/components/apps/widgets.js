import React from 'react'
import user3 from "../../../public/assets/img/users/3.jpg";
import user4 from "../../../public/assets/img/users/4.jpg";
import user5 from "../../../public/assets/img/users/5.jpg";
import user6 from "../../../public/assets/img/users/6.jpg";
import user7 from "../../../public/assets/img/users/7.jpg";
import user8 from "../../../public/assets/img/users/8.jpg";

import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { ProgressBar, Badge, Breadcrumb, Button, Row, Col, Card, Table, ListGroup } from "react-bootstrap";
import Link from "next/link"
import {parseCookies} from 'nookies'

import Seo from '../../../shared/layout-components/seo/seo';
const Visitors = [
	{
	  VisitorsId: user3.src,
	  VisitorsName: "Socrates Itumay",
	  Visitorsrole: "Web Developer",
	  Visitorsfollow: "Follow",
	  Visitorsfollowtext: "secondary",
	  VisitorBtn: "btn",
	},
	{
	  VisitorsId: user4.src,
	  VisitorsName: "Socrates Itumay",
	  Visitorsrole: "Web Developer",
	  Visitorsfollow: "Follow",
	  Visitorsfollowtext: "info",
	  VisitorBtn: "btn",
	},
	{
	  VisitorsId: user5.src,
	  VisitorsName: "Mariane Galeon",
	  Visitorsrole: "Administrator",
	  Visitorsfollow: "Follow",
	  Visitorsfollowtext: "primary",
	  VisitorBtn: "btn",
	},
	{
	  VisitorsId: user6.src,
	  VisitorsName: "Steven Watson",
	  Visitorsrole: "Founder",
	  Visitorsfollow: "Follow",
	  Visitorsfollowtext: "success",
	  VisitorBtn: "btn",
	},
	{
	  VisitorsId: user7.src,
	  VisitorsName: "Sonia Fraser",
	  Visitorsrole: "App Developer",
	  Visitorsfollow: "Follow",
	  Visitorsfollowtext: "warning",
	  VisitorBtn: "btn",
	},
	{
	  VisitorsId: user3.src,
	  VisitorsName: "Socrates Itumay",
	  Visitorsrole: "Web Developer",
	  Visitorsfollow: "Follow",
	  Visitorsfollowtext: "primary",
	  VisitorBtn: "btn",
	},
  ];
const Widgets = () => {
  return (
    <>
    <Seo title="Widgets"/>

    <PageHeader title="Widgets" item="Home" active_item="Widgets"/>

    
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={6} md={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <p className="mb-1 tx-inverse">Number Of Sales</p>
              <div>
                <h4 className="dash-25 mb-2">568</h4>
              </div>
              <div className="expansion-value d-flex tx-inverse">
                <strong>
                  <i className="fas fa-caret-down me-1 text-danger"></i> 0.5%
                </strong>
                <strong className="ms-auto">
                  <i className="fas fa-caret-up me-1 text-success"></i>0.7%
                </strong>
              </div>
              <div className="progress">
                <ProgressBar
                  now={70}
                  className="xs wd-100p"
                  role="progressbar"
                ></ProgressBar>
              </div>
              <div className="expansion-label d-flex text-muted">
                <span>Target</span>
                <span className="ms-auto">Last Month</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <p className="mb-1 tx-inverse">New Revenue</p>
              <div>
                <h4 className="dash-25 mb-2">$12,897</h4>
              </div>
              <div className="expansion-value d-flex tx-inverse">
                <strong>
                  <i className="fas fa-caret-up me-1 text-success"></i> 0.72%
                </strong>
                <strong className="ms-auto">
                  <i className="fas fa-caret-down me-1 text-danger"></i>0.43%
                </strong>
              </div>
              <div className="progress">
                <ProgressBar
                  now={60}
                  className="xs  wd-100p"
                  variant="secondary"
                  role="progressbar"
                ></ProgressBar>
              </div>
              <div className="expansion-label d-flex text-muted">
                <span>Target</span>
                <span className="ms-auto">Last Month</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <p className="mb-1 tx-inverse">Total Cost</p>
              <div>
                <h4 className="dash-25 mb-2">$11,234</h4>
              </div>
              <div className="expansion-value d-flex tx-inverse">
                <strong>
                  <i className="fas fa-caret-down me-1 text-danger"></i> 1.4%
                </strong>
                <strong className="ms-auto">
                  <i className="fas fa-caret-down me-1 text-danger"></i>1.44%
                </strong>
              </div>
              <div className="progress">
                <ProgressBar
                  now={50}
                  className="xs wd-100p "
                  variant="success"
                  role="progressbar"
                ></ProgressBar>
              </div>
              <div className="expansion-label d-flex text-muted">
                <span>Target</span>
                <span className="ms-auto">Last Month</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <p className="mb-1 tx-inverse">Profit By Sale</p>
              <div>
                <h4 className="dash-25 mb-2">$789</h4>
              </div>
              <div className="expansion-value d-flex tx-inverse">
                <strong>
                  <i className="fas fa-caret-down me-1 text-danger"></i> 0.4%
                </strong>
                <strong className="ms-auto">
                  <i className="fas fa-caret-up me-1 text-success"></i>0.9%
                </strong>
              </div>
              <div className="progress">
                <ProgressBar
                  now={40}
                  className="xs wd-100p "
                  role="progressbar"
                  variant="info"
                ></ProgressBar>
              </div>
              <div className="expansion-label d-flex text-muted">
                <span>Target</span>
                <span className="ms-auto">Last Month</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <div className="icon-service bg-primary-transparent rounded-circle text-primary">
                <i className="fe fe-user"></i>
              </div>
              <p className="mb-1 text-muted">Total Users</p>
              <h3 className="mb-0">34,789</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <div className="icon-service bg-secondary-transparent rounded-circle text-secondary">
                <i className="fe fe-trending-up"></i>
              </div>
              <p className="mb-1 text-muted">Total Sales</p>
              <h3 className="mb-0">98,674</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <div className="icon-service bg-info-transparent rounded-circle text-info">
                <i className="fe fe-dollar-sign"></i>
              </div>
              <p className="mb-1 text-muted">Total Profits</p>
              <h3 className="mb-0">
                <span>$</span>45,078
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <div className="icon-service bg-success-transparent rounded-circle text-success">
                <i className="fe fe-shopping-cart"></i>
              </div>
              <p className="mb-1 text-muted">Total Orders</p>
              <h3 className="mb-0">35,897</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col md={12} className="col-md-12">
          <Card className="custom-card">
            <Row className="row-sm">
              <Col xl={3} lg={6} sm={6} className="pe-0 ps-0 border-end">
                <Card.Body className="text-center">
                  <h6 className="mb-0">Gross profit Margin</h6>
                  <h2 className="mb-1 mt-2 number-font">
                    <span className="counter">77</span>%
                  </h2>
                  <p className="mb-0 text-muted">
                    <span className="mb-0 text-danger fs-13 mx-2">
                      <i className="fe fe-arrow-down"></i> 1.68%
                    </span>
                    for Last month
                  </p>
                </Card.Body>
              </Col>
              <Col xl={3} lg={6} sm={6} className="pe-0 ps-0 border-end">
                <Card.Body className="text-center">
                  <h6 className="mb-0">Opex Ratio</h6>
                  <h2 className="mb-1 mt-2 number-font">
                    <span className="counter">60</span>%
                  </h2>
                  <p className="mb-0 text-muted">
                    <span className="mb-0 text-success fs-13 mx-2">
                      <i className="fe fe-arrow-up"></i> 0.27%
                    </span>
                    for Last month
                  </p>
                </Card.Body>
              </Col>
              <Col xl={3} lg={6} sm={6} className="pe-0 ps-0 border-end">
                <Card.Body className="text-center">
                  <h6 className="mb-0">Operating Profit Margin</h6>
                  <h2 className="mb-1 mt-2 number-font">
                    <span className="counter">57</span>%
                  </h2>
                  <p className="mb-0 text-muted">
                    <span className="mb-0 text-danger fs-13 mx-2">
                      <i className="fe fe-arrow-down"></i> 0.87%
                    </span>
                    for Last month
                  </p>
                </Card.Body>
              </Col>
              <Col xl={3} lg={6} sm={6} className="pe-0 ps-0">
                <Card.Body className="text-center">
                  <h6 className="mb-0">Net Profit Margin</h6>
                  <h2 className="mb-1 mt-2 number-font">
                    <span className="counter">35</span>%
                  </h2>
                  <p className="mb-0 text-muted">
                    <span className="mb-0 text-success fs-13 mx-2">
                      <i className="fe fe-arrow-up"></i> 22%
                    </span>
                    for Last month
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
				<div className="rounded-circle">
                <img alt="avatar" src={user5.src} />
				</div>
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Reynante</h5>
                <p className="mb-1 tx-inverse">Web Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
				<div className="rounded-circle">
                <img alt="avatar" src={user4.src} />
				</div>
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Joyce Chua</h5>
                <p className="mb-1 tx-inverse">Team Leader</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
				<div className="rounded-circle">
                <img alt="avatar"  src={user6.src} />
				</div>
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Owen Bongcaras</h5>
                <p className="mb-1 tx-inverse">Web Designer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link className="btn ripple btn-primary mt-3" href="#!" >
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
				<div className="rounded-circle">
                <img alt="avatar" src={user7.src} />
				</div>
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Mariane Galeon</h5>
                <p className="mb-1 tx-inverse">Php Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link className="btn ripple btn-primary mt-3" href="#!" >
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={12} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6>Click Through Conversions</h6>
                <h6>
                  <span className="fs-30 me-2">14,678</span>
                  <Badge bg="success">1.5%</Badge>
                </h6>
                <span className="text-muted">
                  The number of clicks to the ad that consist of a single
                  impression.
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6>View Through Conversions</h6>
                <h6>
                  <span className="fs-30 me-2">2,971</span>
                  <Badge bg="danger">0.55%</Badge>
                </h6>
                <span className="text-muted">
                  Estimated daily unique views through conversions per visitor
                  on the ads.
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6>Total Conversions</h6>
                <h6>
                  <span className="fs-30 me-2">1,896</span>
                  <Badge bg="success">1.8%</Badge>
                </h6>
                <span className="text-muted">
                  Estimated total conversions on ads per impressions to the ads.
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row --> */}

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
                <p className="mb-0 text-muted">
                  Monthly users<span className="float-end">50%</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-widget">
                <label className="main-content-label mb-3 pt-1">
                  Total tax
                </label>
                <h2 className="text-end">
                  <i className="mdi mdi-cube icon-size float-start text-primary"></i>
                  <span className="font-weight-bold">$89,265</span>
                </h2>
                <p className="mb-0 text-muted">
                  Monthly Income<span className="float-end">$7,893</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-widget">
                <label className="main-content-label mb-3 pt-1">
                  Total Profit
                </label>
                <h2 className="text-end">
                  <i className="icon-size mdi mdi-poll-box   float-start text-primary"></i>
                  <span className="font-weight-bold">$23,987</span>
                </h2>
                <p className="mb-0 text-muted">
                  Monthly Profit<span className="float-end">$4,678</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-widget">
                <label className="main-content-label mb-3 pt-1">
                  Total Sales
                </label>
                <h2 className="text-end">
                  <i className="mdi mdi-cart icon-size float-start text-primary"></i>
                  <span className="font-weight-bold">46,486</span>
                </h2>
                <p className="mb-0 text-muted">
                  Monthly Sales<span className="float-end">3,756</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={12} md={4}>
          <Card className="custom-card">
            <div className="card-header border-bottom-0 custom-card-header">
              <h6 className="main-content-label mb-0">Projects Overview</h6>
            </div>
            <Card.Body>
              <div className="border">
                <div className="p-3">
                  <h6>HTML Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>35%</span>
                    </div>
                    <div className="progress">
                      <ProgressBar
                        now={35}
                        className="xs wd-100p"
                        role="progressbar"
                      ></ProgressBar>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>Wordpress Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>50%</span>
                    </div>
                    <div className="progress progress-bar-xs">
                      <ProgressBar
                        now={50}
                        className="xs wd-100p "
                        variant="success"
                        role="progressbar"
                      ></ProgressBar>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>Angular Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>40%</span>
                    </div>
                    <div className="progress progress-bar-xs">
                      <ProgressBar
                        now={40}
                        className="xs wd-100p "
                        variant="info"
                        role="progressbar"
                      ></ProgressBar>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-top">
                  <h6>React Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>30%</span>
                    </div>
                    <div className="progress progress-bar-xs">
                      <ProgressBar
                        now={30}
                        className="xs wd-100p "
                        variant="warning"
                        role="progressbar"
                      ></ProgressBar>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={8} >
          <Row className="row-sm">
            <Col sm={12} md={6}>
              <Card className="card custom-card our-team">
                <Card.Body>
                  <div className="picture avatar-lg online text-center">
					<div className="rounded-circle">
                    <img alt="avatar" src={user5.src} />
					</div>
                  </div>
                  <div className="text-center mt-3">
                    <h5 className="pro-user-username text-dark mt-2 mb-0">
                      Mariane Galeon
                    </h5>
                    <p className="pro-user-desc text-muted mb-1">
                      Web Developer
                    </p>
                    <p className="user-info-rating">
                      <Link href="#!">
                        <i className="fa fa-star text-warning"> </i>
                      </Link>
                      <Link href="#!">
                        <i className="fa fa-star text-warning"> </i>
                      </Link>
                      <Link href="#!">
                        <i className="fa fa-star text-warning"> </i>
                      </Link>
                      <Link href="#!">
                        <i className="fa fa-star text-warning"> </i>
                      </Link>
                      <Link href="#!">
                        <i className="far fa-star text-warning"> </i>
                      </Link>
                    </p>
                  </div>
                  <div className="contact-info mb-0 text-center">
                    <Link className="contact-icon border text-primary me-2" href="#!" >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="contact-icon border text-primary me-2" href="#!" >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="contact-icon border text-primary me-2" href="#!" >
                      <i className="fab fa-google"></i>
                    </Link>
                    <Link className="contact-icon border text-primary me-2" href="#!" >
                      <i className="fab fa-dribbble"></i>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6}>
              <Card className="custom-card our-team">
                <Card.Body>
                  <div className="picture avatar-lg online text-center">
					<div className="rounded-circle" >
                    <img alt="avatar" src={user6.src} />
					</div>
                  </div>
                  <div className="text-center mt-3">
                    <h5 className="pro-user-username text-dark mt-2 mb-0">
                      Joyce Chua
                    </h5>
                    <p className="pro-user-desc text-muted mb-1">
                      App Developer
                    </p>
                    <p className="user-info-rating">
                      <Link href="#!">
                        <i className="fa fa-star text-warning"> </i>
                      </Link>
                      <Link href="#!">
                        <i className="fa fa-star text-warning"> </i>
                      </Link>
                      <Link href="#!">
                        <i className="fa fa-star text-warning"> </i>
                      </Link>
                      <Link href="#!">
                        <i className="fa fa-star text-warning"> </i>
                      </Link>
                      <Link href="#!">
                        <i className="far fa-star text-warning"> </i>
                      </Link>
                    </p>
                  </div>
                  <div className="contact-info mb-0 text-center">
                    <Link className="contact-icon border text-primary me-2" href="#!" >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="contact-icon border text-primary me-2" href="#!" >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="contact-icon border text-primary me-2" href="#!" >
                      <i className="fab fa-google"></i>
                    </Link>
                    <Link className="contact-icon border text-primary me-2" href="#!" >
                      <i className="fab fa-dribbble"></i>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="row-sm">
            <Col lg={12}>
              <Card className="custom-card">
                <Row className="row-sm">
                  <Col sm={6} lg={6} className="border-end">
                    <Card.Body className="iconfont text-center">
                      <h6 className="">Total Cost Reduction</h6>
                      <h2 className="mt-1">$23,567</h2>
                      <p className="text-muted">
                        <span className="text-purple">
                          <i className="fa fa-arrow-up text-success me-1"> </i>
                          23%
                        </span>
                        in this year
                      </p>
                      <div className="progress progress-sm mb-0">
                        <ProgressBar
                          className=" wd-100p"
                          striped
                          variant="success"
                          now={60}
                        ></ProgressBar>
                      </div>
                    </Card.Body>
                  </Col>
                  <Col sm={6} lg={6}>
                    <Card.Body className="iconfont text-center">
                      <h6>Total Cost Savings</h6>
                      <h2 className="mt-1">15.2%</h2>
                      <p className="text-muted">
                        <span>
                          <i className="fa fa-arrow-down text-danger me-1"> </i>
                          12%
                        </span>
                        in this year
                      </p>
                      <div className="progress progress-sm mb-0">
                        <ProgressBar
                          className=" wd-100p"
                          striped
                          variant="danger"
                          now={80}
                        ></ProgressBar>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!--End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} xl={4}>
          <Card className=" custom-card">
            <Card.Body >
              <div className="card-block">
                <div className="row align-items-center justify-content-center">
                  <div className="col-auto user-lock">
					        <span className="img-fluid rounded-circle">
                  <img className="img-fluid rounded-circle" src={user8.src} alt="avatar" />
                  </span>
                  </div>
                  <div className="col">
                    <h5>Joyce Chua</h5>
                    <span>UX Designer</span>
                  </div>
                </div>
                <ul className="task-list">
                  <li>
                    <i className="task-icon bg-primary"></i>
                    <h6>
                      Task Finished
                      <span className="float-end text-muted fs-11">
                        29 Oct 2020
                      </span>
                    </h6>
                    <p className="text-muted fs-12">
                      Adam Berry finished task on
                      <Link href="#!" className="font-weight-semibold"> Project Management </Link>
                    </p>
                  </li>
                  <li>
                    <i className="task-icon bg-secondary"></i>
                    <h6>
                      New Comment
                      <span className="float-end text-muted fs-11">
                        25 Oct 2020
                      </span>
                    </h6>
                    <p className="text-muted fs-12">
                      Victoria commented on Project
                      <Link href="#!" className="font-weight-semibold"> AngularJS Template </Link>
                    </p>
                  </li>
                  <li>
                    <i className="task-icon bg-secondary"></i>
                    <h6>
                      New Comment
                      <span className="float-end text-muted fs-11">
                        25 Oct 2020
                      </span>
                    </h6>
                    <p className="text-muted fs-12">
                      Victoria commented on Project
                      <Link href="#!" className="font-weight-semibold"> AngularJS Template </Link>
                    </p>
                  </li>
                  <li>
                    <i className="task-icon bg-danger"></i>
                    <h6>
                      Task Overdue
                      <span className="float-end text-muted fs-11">
                        14 Oct 2020
                      </span>
                    </h6>
                    <p className="text-muted mb-0 fs-12">
                      Petey Cruiser finished task
                      <Link href="#!" className="font-weight-semibold"> Integrated management </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={12} xl={4} >
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0 pb-0 d-flex ps-3 ms-1">
              <div>
                <label className="main-content-label mb-2">
                  Top Ongoing Projects
                </label>
                <span className="d-block tx-12 mb-2 text-muted">
                  Projects where development work is on completion
                </span>
              </div>
            </Card.Header>
            <Card.Body className="pt-2 mt-0">
              <ListGroup className="projects-list">
                <ListGroup.Item action href="#!"
                  className="flex-column align-items-start p-3"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-semibold ">PSD Projects</h6>
                    <small className="text-danger">
                      <i className="fa fa-caret-down me-1"></i>5 days ago
                    </small>
                  </div>
                  <p className="mb-0 text-muted mb-0 tx-12">
                    Started:17-02-2020
                  </p>
                  <small className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
                  </small>
                </ListGroup.Item>
                <ListGroup.Item action href="#!"
                  className="flex-column align-items-start p-3"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-semibold">
                      Wordpress Projects
                    </h6>
                    <small className="text-success">
                      <i className="fa fa-caret-up me-1"></i>2 days ago
                    </small>
                  </div>
                  <p className="mb-0 text-muted mb-0 tx-12">
                    Started:15-02-2020
                  </p>
                  <small className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit..
                  </small>
                </ListGroup.Item>
                <ListGroup.Item action href="#
                "
                  className="flex-column align-items-start p-3"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-semibold">
                      HTML &amp; CSS3 Projects
                    </h6>
                    <small className="text-danger">
                      <i className="fa fa-caret-down me-1"></i>1 days ago
                    </small>
                  </div>
                  <p className="mb-0 text-muted mb-0 tx-12">
                    Started:26-02-2020
                  </p>
                  <small className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit..
                  </small>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={12} xl={4} >
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0 custom-card-header">
              <h6 className="main-content-label mb-0">Visitors</h6>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table className="table table-bordered mg-b-0" responsive>
                  <tbody>
                    {Visitors.map((items, index) => (
                      <tr key={index} data-index={index}>
                        <td className="bd-t-0 bd-l-0">
                          <div className="main-img-user">
                            <img alt="avatar" src={items.VisitorsId} />
                          </div>
                        </td>
                        <td className="bd-t-0 bd-l-0">
                          <h6 className="mg-b-0">{items.VisitorsName}</h6>
                          <small className="tx-11 tx-gray-500">
                            {items.Visitorsrole}
                          </small>
                        </td>
                        <td className="bd-t-0 bd-l-0">
                          <Link href="#!"
                            className={`${items.VisitorBtn} ripple btn-${items.Visitorsfollowtext} btn-sm`}
                          >
                            {items.Visitorsfollow}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row --> */}
    </>
  )
}
Widgets.layout = "Contentlayout"

export default Widgets

export async function getServerSideProps(ctx) {
  console.log('serversideprops')

  const {['pdfreader.token']: token} = parseCookies(ctx)


  if(!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props:{}
  }

}