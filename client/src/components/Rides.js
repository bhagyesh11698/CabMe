import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Axios from "axios";
import {Navigate} from "react-router-dom";

export default function Rides() {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const response = await Axios("http://localhost:5000/posts/rides");
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const handleDeleteIncome = (key) => {
    let data = { [key]: "" };
    // Axios({
    //   method: "delete",
    //   url: `http://localhost:5000/posts/rides/${key}`,
    //   data: data,
    // }).then(() => {
    //   data[key] = null;
    //   setPosts(...posts, data);
    // });

    Axios.delete(`http://localhost:5000/posts/rides/${key}`, {
      data: data,
    }).then(() => {
      data[key] = null;
      setPosts(...posts, data);
    });
    window.location.reload(true);
  };

  return (
    <Container style={{ padding: "20px" }}>
      <div className="d-flex justify-content-between flex-wrap">
        {posts.map((item) => (
          <Card key={item._id} style={{ width: "18rem", marginTop: "20px" }}>
            <Card.Body>
              {/* {item._id} */}
              <Card.Title>{item.firstName} {item.lastName}</Card.Title>

              <Card.Subtitle className="mb-2 text-muted">
                {item.origin} to {item.destination}
              </Card.Subtitle>
              <Card.Text>Seats: {item.seats}</Card.Text>

              <Card.Text>Price: {item.price}</Card.Text>

          <Button><a href = "mailto:item.email" style = {{color: "white"}}>Book Now</a></Button>

              <Button
                variant="danger"
                onClick={() => handleDeleteIncome(item._id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
