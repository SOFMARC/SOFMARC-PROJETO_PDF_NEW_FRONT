import React, { useState, Fragment } from "react";
import {  Modal,  Button,  Col,  Row,  Container,} from "react-bootstrap";
function MydModalWithGrid(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={6} md={6}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </Col>
              <Col xs={6} md={6}>
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure desires to obtain pain. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet.
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Save Changes</Button>
          <Button onClick={props.onHide} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export function Gridmodal() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <Fragment>
        <Button variant="warning" onClick={() => setModalShow(true)}>
          View Demo
        </Button>
        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      </Fragment>
    );
  }