import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import EditForm from "./EditForm";
import Mailto from "./Mailto";
export default function Rides(props) {
  const [posts, setPosts] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchPost = async () => {
    const response = await Axios("http://localhost:5001/posts/rides");
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const handleDeleteIncome = (key) => {
    let data = { [key]: "" };

    Axios.delete(`http://localhost:5001/posts/rides/${key}`, {
      data: data,
    }).then(() => {
      data[key] = null;
      setPosts(...posts, data);
    });
    window.location.reload(true);
  };

  let changedPost = [];
  let changedPost1 = [];

  if (props.SearchTermTo || props.SearchTermDest) {
    changedPost1 = posts.filter((item) =>
      item.origin.some((city) =>
        city.toLowerCase().includes(props.SearchTermTo.toLowerCase())
      )
    );
    changedPost = changedPost1.filter((item) =>
      item.destination.some((city) =>
        city.toLowerCase().includes(props.SearchTermDest.toLowerCase())
      )
    );
  } else if (props.SearchTermTo) {
    changedPost = posts.filter((item) =>
      item.origin.some((city) =>
        city.toLowerCase().includes(props.SearchTermTo.toLowerCase())
      )
    );
  } else if (props.SearchTermDest) {
    changedPost = posts.filter((item) =>
      item.destination.some((city) =>
        city.toLowerCase().includes(props.SearchTermDest.toLowerCase())
      )
    );
  } else {
    changedPost = posts;
  }

  return (
    <Container style={{ padding: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Rides</h2>
      <div className="d-flex justify-content-between flex-wrap">
        {changedPost.map((item) => (
          <Card key={item._id} style={{ width: "20rem", marginTop: "10px" }}>
            <Card.Body>
              {/* {item._id} */}
              <Card.Title>
                {item.origin} to {item.destination}
              </Card.Title>

              <Card.Subtitle className="mb-2 text-muted">
                Rider: {item.firstName} {item.lastName}
              </Card.Subtitle>
              <Card.Text>Seats: {item.seats}</Card.Text>

              <Card.Text>Price: {item.price}</Card.Text>

              <Card.Text>Email: {item.email}</Card.Text>

              {/* <Button><a href = "mailto:item.email" style = {{color: "white"}}>Book Now</a></Button> */}
              <Mailto
                email={item.email}
                subject="Ride Confirmation"
                body=""
                props={item}
              >
                Inquiry
              </Mailto>
              {localStorage.getItem("access") && <Button variant="outline-primary" onClick={handleShow}>
                Update
              </Button>}
              {localStorage.getItem("access") &&
              <Button
                variant="danger"
                onClick={() => handleDeleteIncome(item._id)}
              >
                Delete
              </Button>}
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Origin</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Destination</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Seat</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
