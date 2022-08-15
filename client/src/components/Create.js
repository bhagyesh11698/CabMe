import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Axios from "axios";

export default function Create() {
  const [postData, setPostData] = useState({
    firstName: "Bhagyesh",
    lastName: "Patel",
    email: "bhagyesh@gmail.com",
    price: "30",
    seats: "2",
    origin: "Toronto",
    destination: "Waterloo",
    date: "2022-08-08",
  });

  const url = "http://localhost:5000/posts/create";
  const clear = () => {
    setPostData({
      firstName: "",
      lastName: "",
      email: "",
      price: "",
      seats: "",
      origin: "",
      destination: "",
      date: "",
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(postData);
    Axios.post(url, {
      firstName: postData.firstName,
      lastName: postData.lastName,
      email: postData.email,
      price: postData.price,
      seats: postData.seats,
      origin: postData.origin,
      destination: postData.destination,
      date: postData.date,
    })
      .then((res) => res.postData)
      .then(clear());
  };

  return (
    <Container style={{ padding: "20px" }}>
    <h1 style={{"textAlign":"center"}}> Post Ride</h1> <br></br>
      <div className="d-flex flex-column mb-3">
        <Form onSubmit={submit}>
          <Form.Group as={Row} md="4" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              // defaultValue="Mark"
              value={postData.firstName}
              onChange={(e) =>
                setPostData({ ...postData, firstName: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Row} md="4" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              value={postData.lastName}
              onChange={(e) =>
                setPostData({ ...postData, lastName: e.target.value })
              }
              // defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Row} md="4" controlId="email">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
                value={postData.email}
                onChange={(e) =>
                  setPostData({ ...postData, email: e.target.value })
                }
                // defaultValue="abc@gmail.com"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          {/* </Row> */}
          {/* <Row className="mb-3"> */}
          <Form.Group as={Row} md="4" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="price"
              min="0"
              value={postData.price}
              onChange={(e) =>
                setPostData({ ...postData, price: e.target.value })
              }
              defaultValue="20"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Row} md="4" controlId="seats">
            <Form.Label>Seats</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="seats"
              min="0"
              value={postData.seats}
              onChange={(e) =>
                setPostData({ ...postData, seats: e.target.value })
              }
              defaultValue="3"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Row} md="4" controlId="origin">
            <Form.Label>Origin</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="origin"
              value={postData.origin }
              onChange={(e) =>
                setPostData({ ...postData, origin: e.target.value.split(",") })
              }
              // defaultValue="City1"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Row} md="4" controlId="destination">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="destination"
              value={postData.destination}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  destination: e.target.value.split(","),
                })
              }
              // defaultValue="City1"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Row} md="4" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="date"
              value={postData.date}
              onChange={(e) =>
                setPostData({ ...postData, date: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" style={{ marginRight: "10px" }}>
            Submit form
          </Button>
          <Button style={{ backgroundColor: "red" }} onClick={clear}>
            Clear
          </Button>
        </Form>
      </div>
    </Container>
  );
}

// render(<Create />);

// export default Create
