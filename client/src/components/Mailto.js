import React from "react";
import Button from "react-bootstrap/Button";

export default function Mailto({ email, subject, body, ...props }) {
  return (
    <Button
      variant="primary"
      href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
    >
      {props.children}
    </Button>
  );
}
