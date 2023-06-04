import React from 'react'
import { Dropdown} from "react-bootstrap";
const Userlistdropdown = () => {
  return (
    <div>
        <Dropdown>
                    <Dropdown.Toggle
                      href="#!"
                      className="option-dots" variant="default"

                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fe fe-more-horizontal"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end" style={{ marginTop: "0px" }}>
                      <Dropdown.Item href="#!">
                        Today
                      </Dropdown.Item>
                      <Dropdown.Item href="#!">
                        Last Week
                      </Dropdown.Item>
                      <Dropdown.Item href="#!">
                        Last Month
                      </Dropdown.Item>
                      <Dropdown.Item href="#!">
                        Last Year
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
    </div>
  )
}

export default Userlistdropdown