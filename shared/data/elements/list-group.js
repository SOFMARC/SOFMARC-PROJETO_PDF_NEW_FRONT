
import { ListGroup } from "react-bootstrap"
import Link  from "next/link";

export function AlertClicked() {

  return (
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action onClick={AlertClicked} active>
        Cras justo odio
      </ListGroup.Item><ListGroup.Item action onClick={AlertClicked}>
        Dapibus ac facilisis in
      </ListGroup.Item><ListGroup.Item action onClick={AlertClicked}>
        Morbi leo risus
      </ListGroup.Item>
      <ListGroup.Item action onClick={AlertClicked}>
        Porta ac consectetur ac
      </ListGroup.Item>
      <ListGroup.Item action onClick={AlertClicked}>
        Vestibulum at eros
      </ListGroup.Item>
    </ListGroup>

  )
}
export function Customcontent() {

  return (
    <ListGroup defaultActiveKey="link1">
      <ListGroup.Item action onClick={Customcontent} active>
        <div className="list-group">
          <Link href="#!"
            className="list-group-item list-group-item-action active"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus.
              Maecenas sed diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </Link>
        </div>
      </ListGroup.Item>
    </ListGroup>
  )
}
export function Customcontent2() {
  return (
    <div className="list-group">
      <Link href="#!"
        className="list-group-item list-group-item-action"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </Link>
    </div>
  )

}
