import React from 'react'
import { Card, Col, Row } from "react-bootstrap";
import * as c3piecharts from './c3piechart'

import dynamic from 'next/dynamic';
const C3Chart = dynamic(()=>import('react-c3js'), { ssr: false })

const Piachatcom = () => {
  return (
    <div>
    
    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic area chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <C3Chart
              id="chart-pie2"
              unloadBeforeLoad={true}
              className="chartsh"
              data={c3piecharts.Piechart3.data}
              columns={c3piecharts.Piechart3.pie}
            />

          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart2</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic area chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <div className="" id="morrisArea2">
              <C3Chart
                id="chart-pie3"
                className="chartsh"
                unloadBeforeLoad={true}
                data={c3piecharts.Piechart2.data}
                columns={c3piecharts.Piechart2.pie}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart3</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic line chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <div className="" id="morrisLine1">
              <C3Chart
                id="chart-pie4"
                className="chartsh"
                unloadBeforeLoad={true}
                data={c3piecharts.Piechart3.data}
                columns={c3piecharts.Piechart3.pie}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart4</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic line chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <div className="" id="morrisLine2">
              <C3Chart
                id="chart-pie5"
                className="chartsh"
                unloadBeforeLoad={true}
                data={c3piecharts.Piechart.data}
                columns={c3piecharts.Piechart.pie}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    
    </div>
  )
}

export default Piachatcom