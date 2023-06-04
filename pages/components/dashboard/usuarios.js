import React, { useState, useContext, useEffect } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Card, Col, Row, Button, Dropdown, Table, Pagination } from "react-bootstrap";
import user1 from "../../../public/assets/img/users/1.jpg";
import user2 from "../../../public/assets/img/users/2.jpg";
import user3 from "../../../public/assets/img/users/3.jpg";
import user4 from "../../../public/assets/img/users/4.jpg";
import user5 from "../../../public/assets/img/users/5.jpg";
import user6 from "../../../public/assets/img/users/6.jpg";
import user7 from "../../../public/assets/img/users/7.jpg";
import user9 from "../../../public/assets/img/users/9.jpg";
import user12 from "../../../public/assets/img/users/12.jpg";
import user11 from "../../../public/assets/img/users/11.jpg";
import Link from 'next/link';
import Seo from '../../../shared/layout-components/seo/seo';
import { parseCookies } from 'nookies';

import dynamic from 'next/dynamic';
import { GlobalContext } from '../../../context/GlobalState';
import { AuthContext } from '../../../context/AuthContext';
const Userlistdropdown = dynamic(()=>import('../../../shared/data/advanceui/userlistdropdown'), { ssr: false })


let UserlistData = [
	{
	  id: 1,
	  Product1: user1.src,
	  ProductId: "Megan Peters",
	  created: "08/06/2022",
	  status: "Inactive",
	  email: "mila@Kunis.com",
	  information: "danger"
  
	},
	{
	  id: 2,
	  Product1: user2.src,
	  ProductId: "George Clooney",
	  created: "08/06/2022",
	  status: "active",
	  email: "	marlon@brando.com",
	  information: "success"
	},
	{
	  id: 3,
	  Product1: user3.src,
	  ProductId: "Ryan Gossling	",
	  created: "08/06/2022",
	  status: "Banned",
	  email: "jack@nicholson",
	  information: "danger"
	},
	{
	  id: 4,
	  Product1: user4.src,
	  ProductId: "Emma Watson",
	  created: "16/06/2022",
	  status: "Pending",
	  email: "jack@nicholsonm",
	  information: "warning"
  
	},
	{
	  id: 5,
	  Product1: user5.src,
	  ProductId: "Mila Kunis",
	  created: "18/06/2022",
	  status: "active",
	  information: "success",
	  email: "mila@Kunis.com",
	},
  
	{
	  id: 6,
	  Product1: user6.src,
	  ProductId: "	Phil Watsons",
	  created: "22/06/2022",
	  status: "active",
	  email: "	phil@watson.com",
	  information: "success",
	},
	{
	  id: 7,
	  Product1: user7.src,
	  ProductId: "Sonia Robertson",
	  created: "25/06/2022",
	  status: "active",
	  email: "robertson@sonia.com",
	  information: "success"
	},
	{
	  id: 8,
	  Product1: user9.src,
	  ProductId: "Megan Peters",
	  created: "28/06/2022",
	  status: "Banned",
	  email: "amelia23@kunis.com",
	  information: "danger"
	},
	{
	  id: 9,
	  Product1: user11.src,
	  ProductId: "Adam Hamilton",
	  created: "30/06/2022",
	  status: "pending",
	  email: "	morganleah@.com",
	  information: "warning"
  
	},
	{
	  id: 10,
	  Product1: user12.src,
	  ProductId: "Leah Morgan",
	  created: "08/06/2022",
	  status: "active",
	  email: "mila@Kunis.com",
	  information: "success"
  
	}
];

const Userlist = () => {

	const { data } = useContext(AuthContext);


	console.log("data", data)

  return (
    <>
        <Seo title="User List"/>

    <PageHeader title="UserList" item="AdvancedUI" active_item="UserList"/>

    {/* <!--Row--> */}
	<Row className=" row-sm">
        <Col sm={12} md={12} xl={12} lg={12} className="grid-margin">
          <Card className="custom-card">
            <Card.Header className="border-bottom-0 pb-0">
              <div className="d-flex justify-content-between">
                <label className="main-content-label mb-0 pt-1">User Table</label>
                <div className="ms-auto float-end">
                  <Userlistdropdown/>
                </div>
              </div>
              <p className="tx-12 tx-gray-500 mt-0 mb-2">
                Example of Spruha Simple Table. <Link href="#!">Learn more</Link>
              </p>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive border userlist-table">
                <Table responsive className="card-table table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="wd-lg-20p">
                        <span>Id</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Nome</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Email</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Data</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  	{data?.data.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <Link href="#!">{item?.id}</Link>
                        </td>
                        <td>{item?.name}</td>
                        <td>{item?.email}</td>
                        <td>{item?.data}</td>

                      </tr>

                	))}
                    </tbody>

                </Table>
              </div>
              <div className="mt-5">
                <Pagination className="mb-0 justify-content-end">
                  <Pagination.Item>Previous</Pagination.Item>
                  <Pagination.Item className="page-item disabled">
                    {1}
                  </Pagination.Item>
                  <Pagination.Item className="page-item" active>
                    {2}
                  </Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- row closed  --> */}
    </>
  )
}

Userlist.layout = "Contentlayout"

export default Userlist

export async function getServerSideProps(ctx) {

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

