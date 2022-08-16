import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EditForm({ thePosts }) {
  const [origin, setOrigin] = useState(thePosts.origin);
  const [destination, setDestination] = useState(thePosts.destination);
  const [price, setPrice] = useState(thePosts.price);
  const [seats, setSeats] = useState(thePosts.seats);
  const [email, setEmail] = useState(thePosts.email);

  return (
    <Form>
      {console.log(thePosts)}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Origin</Form.Label>
        <Form.Control type="text" value={origin} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Destination</Form.Label>
        <Form.Control type="text" value={destination} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" value={price} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Seat</Form.Label>
        <Form.Control type="number" value={seats} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} />
      </Form.Group>

      <Button variant="primary">Save Changes</Button>
    </Form>
  );
}
