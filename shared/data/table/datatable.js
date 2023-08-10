import React from 'react'
import { Button, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import { BasicDatatable, DataTables, ExportCSV, Hoverdatatable, } from "./data-tables";
const Datatable = () => {
  return (
    <div>
        <Row className="row-sm">
			<Col lg={12}>
				<Card className="custom-card overflow-hidden">
					<Card.Body>
						<div>
							<h5 className="main-content-label mb-1">RELÁTÓRIOS DAS EXTRAÇÕES</h5>
							<p className="text-muted card-sub-title">
								Gere relatórios completos das informações extraidas
							</p>
						</div>
						
						<div className="responsive">
							<ExportCSV />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
    </div>
  )
}

export default Datatable