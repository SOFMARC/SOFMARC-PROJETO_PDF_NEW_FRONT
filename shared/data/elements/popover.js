import React, { useState, useRef } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";
export function Popovertop() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Popover Top</Button>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3" variant="default">
            POPOVER TOP
          </Popover.Header>
          <Popover.Body>
            <strong>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </strong>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
export function Popoverbottom() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="secondary">
        Popover Bottom
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3" variant="default">
            POPOVER Bottom
          </Popover.Header>
          <Popover.Body>
            <strong>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </strong>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export function Popoverleft() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="warning">
        Popover left
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="left"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3" variant="default">
            POPOVER Left
          </Popover.Header>
          <Popover.Body>
            <strong>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </strong>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export function Popoverright() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="secondary">
        Popover Right
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="right"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3" variant="default">
            POPOVER Right
          </Popover.Header>
          <Popover.Body>
            <strong>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </strong>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}



export function Popoverheader1() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="primary" className="me-2">
        Color Header
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3" variant="primary" className="head-secondary">
            POPOVER TOP
          </Popover.Header>
          <Popover.Body>
            <strong>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </strong>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
export function Popoverheader2() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="secondary" className="me-2">
        Color Header
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3" className="bg-secondary">
            POPOVER TOP
          </Popover.Header>
          <Popover.Body className="info">
            <strong>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </strong>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
export function Popoverscreen1() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="secondary" className="me-2">
        Color Header
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained" className="bg-secondary popover-secondary ">

          <Popover.Body className="bg-secondary " >
            <strong>
              <p>POPOVER TOP</p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </strong>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
export function Popoverscreen2() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} variant="primary" className="me-2 popover-body">
        Color Header
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained" className="bg-primary popover-primary">
          <Popover.Body className="bg-primary">
            <p>POPOVER TOP</p>
            <strong>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </strong>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
