import React, { useState } from "react";
import {  Toast, ToastContainer } from "react-bootstrap";
export function Toastcenter() {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
  
    return (
      <div
        // aria-live="polite"
        // aria-atomic="true"
        className=" position-relative"
        style={{ minHeight: "240px" }}
      >
        <ToastContainer position="middle-center" className="">
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <strong className="me-auto">Notification</strong>
              <small className="text-muted">11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    );
  }