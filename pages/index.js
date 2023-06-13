import Head from 'next/head'
import { useContext } from 'react';
import { Button, Col, Form, Row,Alert, Container, Card, Spinner} from 'react-bootstrap';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.scss'
import favicon from "../public/assets/img/brand/favicon.ico"
import { useState } from 'react';
import Link from "next/link";
// import Dashboard from "../pages/components/dashboard/dashboard"
import { AuthContext } from '../context/AuthContext';
//Images
import logolight from "../public/assets/img/brand/logo-light.png"
import user from "../public/assets/img/svgs/user.svg"
import logo from "../public/assets/img/brand/logo.png"
import {parseCookies} from 'nookies'

const Home = ()=>{

  const { signIn, signUp } = useContext(AuthContext);

  const [err, setError] = useState("");
  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errLog, setErrLog] = useState(false);
  const [errCad, setErrCad] = useState(false);


  const [data, setData] = useState({
  "email": "",
  "password": "",
  })
  const { email, password, name, empresa } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }
  let navigate = useRouter(); 
  const routeChange = () =>{ 
    let path = `/components/dashboard/dashboard/`; 
    navigate.push(path);
  }

  const Login = async (e) => {
    console.log(data);
    setLoading(true);

    const datanew = {email: email, password: password}
    const res = await signIn(datanew)

    if(res.data.status === 400) {
      setErrLog(true)
      setLoading(false);
    }

  }


  const Cad = async (e) => {
    setLoading(true)
    console.log(data);
    const res = await signUp(data)
    
    console.log("response cadastro", res)


    if(res.data.status === 400) {
      setErrCad(true)
      setLoading(false);
    }

    
  }

  if(register) {
    return (
        <div className={styles.container}>
          <Head>
            <title>Spruha</title>
            <meta name="description" content="Spruha" />
            <link rel="icon" href={favicon.src} />
          </Head>
          <div className="page main-signin-wrapper"
        >
          <Row className="signpages text-center" >
            <Col md={12}>
              <Card>
                <Row className="row-sm">
                  <Col
                    lg={6}
                    xl={5}
                    className="d-none d-lg-block text-center bg-primary details"
                  >
                    <div className="mt-5 pt-4 p-2 pos-absolute">
                      <img
                        src={logolight.src}
                        className="header-brand-img mb-4"
                        alt="logo-light"
                      />
                      <div className="clearfix"></div>
                      <img
                        src={user.src}
                        className="ht-100 mb-0"
                        alt="user"
                      />
                      <h5 className="mt-4 text-white">Create Your Account</h5>
                      <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                        Signup to create, discover and connect with the global
                        community
                      </span>
                    </div>
                  </Col>
                  <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
                    <Container fluid>
                      <Row className="row-sm">

                        {errCad && 
                          <Alert style={{marginTop: 20}} variant="danger">
                            <Button  onClick={() => setErrCad(false)} className="float-end btn-close" variant="default"><span aria-hidden="true">×</span></Button>
                            <strong>Oh snap!</strong> Change a few things up and try submittingagain.
                          </Alert>
                        }

                        <Card.Body className="mt-2 mb-2">
                          <img
                            src={logo.src}
                            className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                            alt="logo"
                          />
                          <img
                            src={logolight.src}
                            className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                            alt="logo"
                          />
                          <div className="clearfix"></div>
                          {err && <Alert variant="danger">{err}</Alert>}
                          <Form>
                            <h5 className="text-start mb-2">
                              SignUp Your Account
                            </h5>
                            <p className="mb-4 text-muted tx-13 ms-0 text-start">
                              SignUp to create, discover and connect with the global
                              community
                            </p>
                            <Form.Group className="text-start form-group" controlId="formEmail">
                              <Form.Label>Empresa</Form.Label>
                              <Form.Control
                                      className="form-control"
                                      placeholder="Enter your Company Name"
                                      name="empresa"
                                      type='text'
                                      value={empresa}
                                      onChange={changeHandler}
                                      required
                                    />
                            </Form.Group>
                            <Form.Group className="text-start form-group" controlId="formEmail">
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                      className="form-control"
                                      placeholder="Enter your name"
                                      name="name"
                                      type='text'
                                      value={name}
                                      onChange={changeHandler}
                                      required
                                    />
                            </Form.Group>
                            <Form.Group className="text-start form-group" controlId="formEmail">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                      className="form-control"
                                      placeholder="Enter your email"
                                      name="email"
                                      type='text'
                                      value={email}
                                      onChange={changeHandler}
                                      required
                                    />
                            </Form.Group>
                            <Form.Group
                              className="text-start form-group"
                              controlId="formpassword"
                            >
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                      className="form-control"
                                      placeholder="Enter your password"
                                      name="password"
                                      type='password'
                                      value={password}
                                      onChange={changeHandler}
                                      required
                                    />
                            </Form.Group>

                            {
                            loading ? 

                              <Button onClick={Cad} className="btn ripple btn-main-primary btn-block mt-2">
                                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"
                                  />
                                  Sign In...
                              </Button>

                              :

                              <Button onClick={Cad} className="btn ripple btn-main-primary btn-block mt-2">
                                Sign In
                              </Button>

                            }


                          </Form>
                          <div className="text-start mt-5 ms-0">
                            <div className="mb-1">
                            </div>
                            <div onClick={()=> setRegister(false)}>
                              Já possui uma conta ? <span style={{cursor: 'pointer'}} className="text-primary pointer"> Faça login </span>
                            </div>
                          </div>
                        </Card.Body>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
        </div>
      )
  } else {
    return (
        <div className={styles.container}>
        <Head>
            <title>Spruha</title>
            <meta name="description" content="Spruha" />
            <link rel="icon" href={favicon.src} />
        </Head>
        <div className="page main-signin-wrapper"
        >
        <Row className="signpages text-center" >
            <Col md={12}>
            <Card>
                <Row className="row-sm">
                <Col
                    lg={6}
                    xl={5}
                    className="d-none d-lg-block text-center bg-primary details"
                >
                    <div className="mt-5 pt-4 p-2 pos-absolute">
                    <img
                        src={logolight.src}
                        className="header-brand-img mb-4"
                        alt="logo-light"
                    />
                    <div className="clearfix"></div>
                    <img
                        src={user.src}
                        className="ht-100 mb-0"
                        alt="user"
                    />
                    <h5 className="mt-4 text-white">Create Your Account</h5>
                    <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                        Signup to create, discover and connect with the global
                        community
                    </span>
                    </div>
                </Col>
                <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
                    <Container fluid>
                    <Row className="row-sm">
                        {errLog && 
                          <Alert style={{marginTop: 20}} variant="danger">
                            <Button  onClick={() => setErrLog(false)} className="float-end btn-close" variant="default"><span aria-hidden="true">×</span></Button>
                            <strong>Oh snap!</strong> Change a few things up and try submittingagain.
                          </Alert>
                        }

                        <Card.Body className="mt-2 mb-2">
                        <img
                            src={logo.src}
                            className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                            alt="logo"
                        />
                        <img
                            src={logolight.src}
                            className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                            alt="logo"
                        />
                        <div className="clearfix"></div>
                        {err && <Alert variant="danger">{err}</Alert>}
                        <Form>
                            <h5 className="text-start mb-2">
                            Signin to Your Account
                            </h5>
                            <p className="mb-4 text-muted tx-13 ms-0 text-start">
                            Signin to create, discover and connect with the global
                            community
                            </p>

                            <Form.Group className="text-start form-group" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                    className="form-control"
                                    placeholder="Enter your email"
                                    name="email"
                                    type='text'
                                    value={email}
                                    onChange={changeHandler}
                                    required
                                    />
                            </Form.Group>
                            <Form.Group
                            className="text-start form-group"
                            controlId="formpassword"
                            >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                    className="form-control"
                                    placeholder="Enter your password"
                                    name="password"
                                    type='password'
                                    value={password}
                                    onChange={changeHandler}
                                    required
                                    />
                            </Form.Group>

                            {
                            loading ? 
                              <Button className="btn ripple btn-main-primary btn-block mt-2">
                                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"
                                  />
                                  Sign Up...
                              </Button>
                              :
                              <Button onClick={Login} className="btn ripple btn-main-primary btn-block mt-2">
                                Sign Up
                              </Button>
                            }

                        </Form>
                        <div className="text-start mt-5 ms-0">
                            <div onClick={()=> setRegister(true)}>
                            Ainda não possui uma conta?
                            <span style={{cursor: 'pointer'}} className="text-primary pointer"> Registre-se </span>
                            </div>
                        </div>
                        </Card.Body>
                    </Row>
                    </Container>
                </Col>
                </Row>
            </Card>
            </Col>
        </Row>
        </div>
        </div>
    )
  }
}
Home.layout = "Authenticationlayout"

export default Home

export async function getServerSideProps(ctx) {
  console.log('serversideprops')

  const {['pdfreader.token']: token} = parseCookies(ctx)


  if(token) {
    return {
      redirect: {
        destination: '/components/dashboard/dashboard/',
        permanent: false
      }
    }
  }


  return {
    props:{}
  }

}