import React, { useState } from "react";
import { Row, Col, Toast} from "react-bootstrap";
export function Toastbasic() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toast show={showA} onClose={toggleShowA} className="ms-2 mb-1">
          <Toast.Header>
            <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
            <small className="text-muted">11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}