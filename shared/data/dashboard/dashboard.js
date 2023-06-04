import { CircularProgress } from '@mui/material';
import React,{useContext, useState,useEffect} from 'react'
import { Card, Col, Container, Dropdown, Row, Table, Badge , ProgressBar, Modal} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

//Images
import user1 from "../../../public/assets/img/users/1.jpg";
import user2 from "../../../public/assets/img/users/2.jpg";
import user3 from "../../../public/assets/img/users/3.jpg";
import user4 from "../../../public/assets/img/users/4.jpg";
import user5 from "../../../public/assets/img/users/5.jpg";
import user6 from "../../../public/assets/img/users/6.jpg";
import user7 from "../../../public/assets/img/users/7.jpg";
import user8 from "../../../public/assets/img/users/8.jpg";
import user10 from "../../../public/assets/img/users/10.jpg";
import user11 from "../../../public/assets/img/users/11.jpg";
import user12 from "../../../public/assets/img/users/12.jpg";

import { GlobalContext } from '../../../context/GlobalState';
import { AuthContext } from '../../../context/AuthContext';

const Dashboardshare = () => {

	const { listaIds, cleanList } = useContext(GlobalContext);

	const { uploads, get_uploads_user, get_uploads_logs } = useContext(AuthContext);

	const [arraysJuntos, setArraysJuntos] = useState(null);

	const [arrLogs, serArrLogs] = useState(null);

	const [show, setShow] = useState(false);

	function handleClose() {
		setShow(false)
	}


	const finalizados = uploads?.uploads ? uploads?.uploads.filter(item => item.status_task === 'Finalizado com Sucesso') : []
	const pendentes =  uploads?.uploads ? uploads?.uploads.filter(item => item.status_task === 'Em andamento'): []


	const handleLog = async (upload_id) => {
		setShow(true)
		console.log("################# logs ##################", upload_id)
		const res =await get_uploads_logs(upload_id)
		console.log(res)
		if(res.logs) {
			serArrLogs(res.logs)
		}
	}


	return (
		<div className="row row-sm">
			<div className="col-sm-12 col-lg-12 col-xl-12">
				{/* <!--Row--> */}
				<div className="row row-sm  mt-lg-4">
					<div className="col-sm-12  col-md-6 col-lg-6 col-xl-4">
						<div className="card custom-card">
							<div className="card-body">
								<div className="card-item">
									<div className="card-item-icon card-icon">
										<svg className="text-primary" xmlns="http://www.w3.org/2000/svg"
											enableBackground="new 0 0 24 24" height="24"
											viewBox="0 0 24 24" width="24">
											<g>
												<rect height="14" opacity=".3" width="14" x="5" y="5" />
												<g>
													<rect fill="none" height="24" width="24" />
													<g>
														<path
															d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
														<rect height="5" width="2" x="7" y="12" />
														<rect height="10" width="2" x="15" y="7" />
														<rect height="3" width="2" x="11" y="14" />
														<rect height="2" width="2" x="11" y="10" />
													</g>
												</g>
											</g>
										</svg>
									</div>
									<div className="card-item-title mb-2">
										<label className="main-content-label tx-13 font-weight-bold mb-1">Total
											arquivos</label>
										<span className="d-block tx-12 mb-0 text-muted">Todos os arqruivos realizados uploads</span>
									</div>
									<div className="card-item-body">
										<div className="card-item-stat">
											<h4 className="font-weight-bold">{uploads?.uploads ? uploads?.uploads.length : 0}</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
						<div className="card custom-card">
							<div className="card-body">
								<div className="card-item">
									<div className="card-item-icon card-icon">
										<svg xmlns="http://www.w3.org/2000/svg" height="24"
											viewBox="0 0 24 24" width="24">
											<path d="M0 0h24v24H0V0z" fill="none" />
											<path
												d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
												opacity=".3" />
											<path
												d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
										</svg>
									</div>
									<div className="card-item-title mb-2">
										<label className="main-content-label tx-13 font-weight-bold mb-1">Em andamento</label>
										<span className="d-block tx-12 mb-0 text-muted">Todas as extrações em andamento</span>
									</div>
									<div className="card-item-body">
										<div className="card-item-stat">
											<h4 className="font-weight-bold">{pendentes?.length}</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
						<div className="card custom-card">
							<div className="card-body">
								<div className="card-item">
									<div className="card-item-icon card-icon">
										<svg className="text-primary" xmlns="http://www.w3.org/2000/svg"
											height="24" viewBox="0 0 24 24" width="24">
											<path d="M0 0h24v24H0V0z" fill="none" />
											<path
												d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
												opacity=".3" />
											<path
												d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
										</svg>
									</div>
									<div className="card-item-title  mb-2">
										<label className="main-content-label tx-13 font-weight-bold mb-1">Finalizado com sucesso</label>
										<span className="d-block tx-12 mb-0 text-muted">Todas as extrações finalizadas</span>
									</div>
									<div className="card-item-body">
										<div className="card-item-stat">
											<h4 className="font-weight-bold">{finalizados?.length}</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--End row--> */}

				{/* <!--row--> */}
				<Row className="row-sm">
					<Col lg={12}>
						<Card className="custom-card mg-b-20">
							<Card.Body>
							<Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
								<div>
								<label className="main-content-label mb-2">Tasks</label>
								<span className="d-block tx-12 mb-3 text-muted">
									A task is accomplished by a set deadline, and must
									contribute toward work-related objectives.
								</span>
								</div>
								<Dropdown className="ms-auto">
									<DropdownToggle onClick={()=> get_uploads_user(cleanList)} variant="default" className="option-dots" >
										<i className="fe fe-rotate-cw"></i>
									</DropdownToggle>
								</Dropdown>
							</Card.Header>
							<div className=" tasks">

								
								<Table responsive hover
								className="card-table table-vcenter text-nowrap mb-0 border hover"  >
								<thead>
									<tr>
									<th className="wd-lg-10p">upload_id</th>
									<th className="wd-lg-20p">nome</th>
									<th className="wd-lg-20p">data</th>
									<th className="wd-lg-20p">task_id</th>
									<th className="wd-lg-20p">status_task</th>
									<th className="wd-lg-20p">Logs</th>
									</tr>
								</thead>
								<tbody>
									{uploads?.uploads && uploads?.uploads.map((items, index) => (
									<tr key={index} data-index={index}>
										<td className="font-weight-semibold">
										<div className="d-flex">
											<span className="mt-1">{items?.upload_id}</span>
										</div>
										</td>

										<td className="font-weight-semibold">
											<div className="d-flex">
												<span className="mt-1">{items?.nome}</span>
											</div>
										</td>

										<td className="font-weight-semibold">
											<div className="d-flex">
												<span className="mt-1">{items?.data}</span>
											</div>
										</td>

										<td className="font-weight-semibold">
											<div className="d-flex">
												<span className="mt-1">{items?.task_id}</span>
											</div>
										</td>

										<td className="font-weight-semibold">
											{items?.status_task === "Finalizado com Sucesso" ? <div> <Badge pill bg="success" className=" mt-1 mb-1">{items?.status_task}</Badge> </div> : <><Badge pill bg="warning" className=" mt-1 mb-1">{items?.status_task}</Badge></>}
										</td>

										<td className="font-weight-semibold">
											<div  onClick={()=> handleLog(items?.upload_id)} style={{cursor: 'pointer'}} className="d-flex">
											
												<i className="fe fe-eye"></i>
											</div>
										</td>
									</tr>
									))}
								</tbody>

								</Table>								

							</div>
							
							</Card.Body>
						</Card>
					</Col>
					{/* <!-- col end --> */}
				</Row>
				{/* <!-- Row end --> */}
			</div>
			{/* <!-- col end --> */}
			<Modal size={"xl"} show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Logs de Extração de informações</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                      <Row>
                        <Col lg={12} md={12}>
                          <Card className=" custom-card">
                            <Card.Body>
							<div className=" tasks">

										<Table responsive hover
										className="card-table table-vcenter text-nowrap mb-0 border hover"  >
										<thead>
											<tr>
											<th className="wd-lg-10p">Id</th>
											<th className="wd-lg-20p">data</th>
											<th className="wd-lg-20p">log</th>
											</tr>
										</thead>
										<tbody>
											{arrLogs?.map((items, index) => (
											<tr key={index} data-index={index}>
												<td className="font-weight-semibold">
												<div className="d-flex">
													<span className="mt-1">{items?.id}</span>
												</div>
												</td>

												<td className="font-weight-semibold">
													<div className="d-flex">
														<span className="mt-1">{items?.data}</span>
													</div>
												</td>

												<td className="font-weight-semibold">
													<div className="d-flex">
														<span className="mt-1">{items?.log}</span>
													</div>
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
                    </Modal.Body>
                  </Modal>
			{/* <!-- col end --> */}
		</div>
	)
}

export default Dashboardshare