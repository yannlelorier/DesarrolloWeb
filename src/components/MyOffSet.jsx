import { Offcanvas } from "react-bootstrap";

export default function MyOffSet(props) {
  return (
    <Offcanvas show={props.show} onHide={props.onHide} placement={"bottom"}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
}
