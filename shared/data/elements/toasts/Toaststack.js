import React, { useState } from "react";
import { Row, Col, Toast } from "react-bootstrap";
export function Toaststack() {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
  
    return (
      <Row>
        <Col md={6} className="mb-2">
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
              <small className="text-muted">11 mins ago</small>
            </Toast.Header>
            <Toast.Body>See? Just like this.</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }