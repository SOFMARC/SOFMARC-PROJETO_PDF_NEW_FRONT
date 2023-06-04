import React from "react";
import Link  from "next/link";
import { Form } from "react-bootstrap";
function Rightside() {
  const openCloseSidebar = () => {
    document.querySelector(".header-settings").classList.remove("show");
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");

  };
  return (
    <div className="sidebar sidebar-right sidebar-animate"
    >
      <div className="sidebar-icon">
        <Link href="#!" className="text-end float-end text-dark fs-20" onClick={() => openCloseSidebar()} >
			<i className="fe fe-x"></i>
        </Link>
      </div>
      <div className="sidebar-body">
        <h5>Todo</h5>
        <div className="d-flex p-3">
          <div>
            <Form.Check defaultChecked type="checkbox" label="Hangout With friends" />
          </div>
          <span className="ms-auto">
            <i
              className="fe fe-edit-2 text-primary me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Edit"
            ></i>
            <i
              className="fe fe-trash-2 text-danger me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Delete"
            ></i>
          </span>
        </div>
        <div className="d-flex p-3 border-top">
          <div>
            <Form.Check type="checkbox" label="Prepare for presentation" />
          </div>
          <span className="ms-auto">
            <i
              className="fe fe-edit-2 text-primary me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Edit"
            ></i>
            <i
              className="fe fe-trash-2 text-danger me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Delete"
            ></i>
          </span>
        </div>
        <div className="d-flex p-3 border-top">
          <div>
            <Form.Check type="checkbox" label="Prepare for presentation" />
          </div>
          <span className="ms-auto">
            <i
              className="fe fe-edit-2 text-primary me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Edit"
            ></i>
            <i
              className="fe fe-trash-2 text-danger me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Delete"
            ></i>
          </span>
        </div>
        <div className="d-flex p-3 border-top">
          <div>
            <Form.Check defaultChecked type="checkbox" label="System Updated" />
          </div>
          <span className="ms-auto">
            <i
              className="fe fe-edit-2 text-primary me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Edit"
            ></i>
            <i
              className="fe fe-trash-2 text-danger me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Delete"
            ></i>
          </span>
        </div>
        <div className="d-flex p-3 border-top">
          <div>
            <Form.Check type="checkbox" label="            Do something more" />
          </div>
          <span className="ms-auto">
            <i
              className="fe fe-edit-2 text-primary me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Edit"
            ></i>
            <i
              className="fe fe-trash-2 text-danger me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Delete"
            ></i>
          </span>
        </div>
        <div className="d-flex p-3 border-top">
          <div>
            <Form.Check type="checkbox" label="            System Updated" />
          </div>
          <span className="ms-auto">
            <i
              className="fe fe-edit-2 text-primary me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Edit"
            ></i>
            <i
              className="fe fe-trash-2 text-danger me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Delete"
            ></i>
          </span>
        </div>
        <div className="d-flex p-3 border-top">
          <div>
            <Form.Check type="checkbox" label="            Find an Idea" />
          </div>
          <span className="ms-auto">
            <i
              className="fe fe-edit-2 text-primary me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Edit"
            ></i>
            <i
              className="fe fe-trash-2 text-danger me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Delete"
            ></i>
          </span>
        </div>
        <div className="d-flex p-3 border-top mb-0">
          <div>
            <Form.Check type="checkbox" label="            Project review" />
          </div>
          <span className="ms-auto">
            <i
              className="fe fe-edit-2 text-primary me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Edit"
            ></i>
            <i
              className="fe fe-trash-2 text-danger me-2"
              data-bs-toggle="tooltip"
              title=""
              data-bs-placement="top"
              data-bs-original-title="Delete"
            ></i>
          </span>
        </div>
        <h5>Overview</h5>
        <div className="p-4">
          <div className="main-traffic-detail-item">
            <div>
              <span>Founder &amp; CEO</span> <span>24</span>
            </div>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="20"
                className="progress-bar progress-bar-xs wd-20p"
                role="progressbar"
              ></div>
            </div>
            {/* <!-- progress --> */}
          </div>
          <div className="main-traffic-detail-item">
            <div>
              <span>UX Designer</span> <span>1</span>
            </div>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="15"
                className="progress-bar progress-bar-xs bg-secondary wd-15p"
                role="progressbar"
              ></div>
            </div>
          </div>
          <div className="main-traffic-detail-item">
            <div>
              <span>Recruitment</span> <span>87</span>
            </div>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="45"
                className="progress-bar progress-bar-xs bg-success wd-45p"
                role="progressbar"
              ></div>
            </div>
            {/* <!-- progress --> */}
          </div>
          <div className="main-traffic-detail-item">
            <div>
              <span>Software Engineer</span> <span>32</span>
            </div>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="25"
                className="progress-bar progress-bar-xs bg-info wd-25p"
                role="progressbar"
              ></div>
            </div>
            {/* <!-- progress --> */}
          </div>
          <div className="main-traffic-detail-item">
            <div>
              <span>Project Manager</span> <span>32</span>
            </div>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="25"
                className="progress-bar progress-bar-xs bg-danger wd-25p"
                role="progressbar"
              ></div>
            </div>
            {/* <!-- progress --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
Rightside.propTypes = {};

Rightside.defaultProps = {};

export default Rightside;
